import PersonInformations from "./components/PersonInformations";
import PersonForm from "./components/PersonForm";

const App = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <PersonForm />
        <div className="col-lg-1"></div>
        <PersonInformations />
      </div>
    </div>
  );
};

export default App;
