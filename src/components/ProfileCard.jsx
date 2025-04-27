import React from "react";

function ProfileCard({ name, age, bio, image }) {
  const sayHi = () => {
    console.log(`Hi from ${name}!`);
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "15px",
    padding: "20px",
    margin: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
      <button style={buttonStyle} onClick={sayHi}>Say Hi</button>
    </div>
  );
}

export default ProfileCard;
