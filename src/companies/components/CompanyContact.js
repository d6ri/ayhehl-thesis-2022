import React from "react";
const CompanyContact = ({ contact }) => {
  return (
    <>
      <h2>Lépj velünk kapcsolatba!</h2>
      {contact.hasOwnProperty("name") && contact["name"] !== "" && (
        <div>Kapcsolattartó munkatárs: {contact["name"]}</div>
      )}
      {contact.hasOwnProperty("email") && contact["email"] !== "" && (
        <div>Email: {contact["email"]}</div>
      )}
      {contact.hasOwnProperty("phone") && contact["phone"] !== "" && (
        <div>Telefon: {contact["phone"]}</div>
      )}
    </>
  );
};

export default CompanyContact;
