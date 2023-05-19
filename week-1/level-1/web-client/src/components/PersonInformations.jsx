import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const PersonInformations = () => {
  const { personList, getFilteredPersonList, filteredUserList } = useContext(UserContext);
  const [gender, setGender] = useState("");
  const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);

  const handleFilter = () => {
    if (gender === "all" || gender === "") {
      setIsFilterButtonClicked(false);
    } else if (gender === "single" || gender === "married") {
      setIsFilterButtonClicked(true);
    }
    console.log(isFilterButtonClicked);
    getFilteredPersonList(gender);
  };

  const showPerson = () => {
    const showedPersonList = !isFilterButtonClicked ? personList : filteredUserList;
    console.log(isFilterButtonClicked);
    const template = showedPersonList.map((person, index) => (
      <div className="card bg-secondary text-white p-0 mt-5 ms-4 col-lg-2" key={index}>
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
    <div className="col-lg-12">
      <h2>Person Information</h2>
      <hr className="mb-0" />
      <select className="form-select mt-3 d-inline-block" onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
        <option selected value="all">
          All
        </option>
        <option value="single">Single</option>
        <option value="married">Married</option>
      </select>
      <button onClick={handleFilter} className="btn btn-primary ms-3">
        Show
      </button>
      <div className="row d-flex">{showPerson()}</div>
    </div>
  );
};

export default PersonInformations;
