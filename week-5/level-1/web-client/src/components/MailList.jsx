import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const MailList = () => {
  const { mailList } = useContext(UserContext);

  const showAllMail = () => {
    const template = mailList.map((mail, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <p>{mail?.mail}</p>
          </td>
          <td>
            <p>{mail?.title}</p>
          </td>
          <td>
            <p>{mail?.message}</p>
          </td>
        </tr>
      );
    });

    return template;
  };

  return (
    <div className="col-lg-6">
      <h2 className="text-center">Mail List</h2>
      <hr />
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">To</th>
            <th scope="col">Title</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>{showAllMail()}</tbody>
      </table>
    </div>
  );
};

export default MailList;
