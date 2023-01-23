import React from 'react';

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Ukraine, Zaporozhye</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>+380 969 593 836</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>dsa3142@gmail.com</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
