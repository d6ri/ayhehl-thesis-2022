import React from 'react';

const CompanyContact = ({ contact }) => {
  return (
    <div className='main'>
      <h4 className='tab-subtitle'>Lépj velünk kapcsolatba!</h4>
      {contact.hasOwnProperty('name') && contact['name'] !== '' && (
        <div style={{ marginBottom: '1em' }}>Kapcsolattartó munkatárs: {contact['name']}</div>
      )}
      {contact.hasOwnProperty('email') && contact['email'] !== '' && (
        <div style={{ marginBottom: '1em' }}>
          <span style={{ fontWeight: 'bold' }}>Email: </span>
          {contact['email']}
        </div>
      )}
      {contact.hasOwnProperty('phone') && contact['phone'] !== '' && (
        <div style={{ marginBottom: '1em' }}>
          <span style={{ fontWeight: 'bold' }}>Telefon: </span> {contact['phone']}
        </div>
      )}
    </div>
  );
};

export default CompanyContact;
