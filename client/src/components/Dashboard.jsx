import React, { useState, useEffect } from "react";

function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/messages/get")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <>
      <div className="dashboard-page-design-content-area">
        <div className="dashbord-page-design-main-page">
          <h1>Dashboard</h1>
          <p>Welcome to your dashboard</p>
          <div className="messages-content-diaplay-area">
            <h2>Messages: </h2>
            {messages.map((message) => (
              <div key={message._id} className="messages-display">
                <h1>{message.name}</h1>
                <span>{message.email}</span>
                <p>{message.message}</p>
                <span>{message.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
