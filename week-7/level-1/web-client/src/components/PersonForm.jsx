import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const PersonForm = () => {
  const { addPerson } = useContext(UserContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: uuidv4(),
      name: name,
      surname: surname,
      mail: mail,
      maritalStatus: status,
    };
    if (name !== "" && surname !== "" && mail !== "" && status !== "") {
      addPerson(newPerson);
      setName("");
      setSurname("");
      setMail("");
      setStatus("");
    } else {
      swal("Please enter all of information!");
    }
  };

  return (
    <div className="col-lg-3">
      <h2>Add Person</h2>
      <hr />
      <form onSubmit={handleSubmit} className="border border-1 p-3 bg-secondary rounded mt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Surname
          </label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter surname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Mail
          </label>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
            Marital status
          </label>
          <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
            <option>Select a marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <button data-testid="add-button" type="submit" className="btn btn-primary">
          Add person
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
