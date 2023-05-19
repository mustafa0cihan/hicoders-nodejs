import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const MailForm = () => {
  const { addMail } = useContext(UserContext);
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMail = {
      id: uuidv4(),
      mail: mail,
      title: title,
      message: message,
    };
    if (mail !== "" && title !== "" && message !== "") {
      addMail(newMail);
      setMail("");
      setTitle("");
      setMessage("");
    } else {
      swal("Please enter all of information!");
    }
  };

  return (
    <div className="col-lg-5">
      <h2 className="text-center">Send email</h2>
      <hr />
      <form onSubmit={handleSubmit} className="border border-1 p-3 bg-secondary rounded mt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            To
          </label>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the recipient's email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Message"
          />
        </div>

        <button data-testid="add-button" type="submit" className="btn btn-primary">
          Send mail
        </button>
      </form>
    </div>
  );
};

export default MailForm;
