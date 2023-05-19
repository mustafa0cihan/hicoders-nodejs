import MailForm from "./components/MailForm";
import MailList from "./components/MailList";

const App = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <MailForm />
        <div className="col-lg-1"></div>
        <MailList />
      </div>
    </div>
  );
};

export default App;
