import { useState } from "react";

type NewStudent = {
  _id: string;
  fullName: string;
  image: string;
  phone: string;
  email: string;
  program: string;
  graduated: boolean;
};

type AddStudentFormProps = {
  onAddStudent: (student: NewStudent) => void;
};

function AddStudentForm({ onAddStudent }: AddStudentFormProps) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: NewStudent = {
      _id: crypto.randomUUID(),
      fullName,
      image,
      phone,
      email,
      program,
      graduated,
    };

    onAddStudent(newStudent);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduated(false);
  };

  return (
    <div>
      <h2>Add New Student</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="url"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Program:</label>
          <select
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option value="">-- Choose program --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data">Data</option>
          </select>
        </div>

        <div>
          <label>
            Graduated
            <input
              type="checkbox"
              checked={graduated}
              onChange={(e) => setGraduated(e.target.checked)}
            />
          </label>
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;