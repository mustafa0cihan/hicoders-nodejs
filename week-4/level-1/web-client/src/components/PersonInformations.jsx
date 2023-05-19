import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const PersonInformations = () => {
  const { personList, getPersonList } = useContext(UserContext);
  const [status, setStatus] = useState("all");

  const handleFilter = () => {
    getPersonList(status);
  };

  const showPerson = () => {
    const template = personList.map((person, index) => (
      <div className="card bg-secondary text-white p-0 mt-5 ms-5 col-lg-3" key={index}>
        <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Name: {person.name}</p>
          <p className="card-text">Surname: {person.surname}</p>
          <p className="card-text">Age: {person.age}</p>
          <p className="card-text">Status: {person.maritalStatus}</p>
        </div>
      </div>
    ));
    return template;
  };

  return (
    <div className="col-lg-8">
      <h2>Person Information</h2>
      <hr className="mb-0" />
      <select
        className="form-select mt-3 d-inline-block"
        id="select-status"
        defaultValue={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Default select example"
      >
        <option value="all">All</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
      </select>
      <button onClick={handleFilter} className="btn btn-primary mb-1 ms-3">
        Show
      </button>

      <div className="row d-flex">{showPerson()}</div>
    </div>
  );
};

export default PersonInformations;
