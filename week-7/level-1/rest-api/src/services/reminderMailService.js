import mailService from "./mailService.js";
import personRepository from "../data/personRepository.js";
import mailRepository from "../data/mailRepository.js";
import reminderTemplate from "./email-templates/reminder.js";

const getMails = async () => {
  return await mailRepository.findAllOfMail();
};

const addMail = async (pMail) => {
  return await mailRepository.createMail(pMail);
};

const sendReminderEmail = async (pStatus) => {
  let people = "";
  if (pStatus.maritalStatus === "all") {
    people = await personRepository.findPeople();
  } else {
    people = await personRepository.findPeopleWithMaritalStatus(pStatus.maritalStatus);
  }

  // send email by mailservice
  people.forEach((person) => {
    const title = "Reminder";
    const message = reminderTemplate(person.name, person.surname);
    mailService.sendToPersonEmail(person.mail, title, message );
  });
};

export default { sendReminderEmail, getMails, addMail };
