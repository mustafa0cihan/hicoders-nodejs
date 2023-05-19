import { render, screen } from "@testing-library/react";
import App from "./App";
import PersonForm from "./components/PersonForm";
import PersonInformations from "./components/PersonInformations";

const personList = [
  {
    name: "Georgie",
    surname: "Greenwood",
    age: 51,
    maritalStatus: "married",
  },
];

const deletePerson = async (pPersonId) => {
  await fetch("http://localhost:3001/person/" + pPersonId, {
    method: "DELETE",
  });
};

test("Add button rendered", () => {
  render(<PersonForm />);
  const addButton = screen.getByTestId("add-button");
  expect(addButton).toBeInTheDocument();
});

test("Delete button rendered", () => {
  render(<PersonInformations personList={personList} deletePerson={deletePerson} />);
  const deleteButton = screen.getByTestId("delete-button");
  expect(deleteButton).toBeInTheDocument();
});

test("personList is rendered", () => {
  render(<PersonInformations personList={personList} deletePerson={deletePerson}/>);
  expect(screen.getByText("Name: Georgie")).toBeInTheDocument();
  expect(screen.getByText("Surname: Greenwood")).toBeInTheDocument();
  expect(screen.getByText("Age: 51")).toBeInTheDocument();
  expect(screen.getByText("Status: married")).toBeInTheDocument();
});
