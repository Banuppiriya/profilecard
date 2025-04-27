import React from "react";
import ProfileCard from "./components/ProfileCard"; 
function App() {
  const profiles = [
    {
      name: "Anita",
      age: 25,
      bio: "A passionate traveler.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Raja",
      age: 30,
      bio: "Software Engineer.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sundari",
      age: 27,
      bio: "Poet and avid reader.",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "Arun",
      age: 32,
      bio: "Sports enthusiast.",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      name: "Deepa",
      age: 22,
      bio: "Loves dancing and painting.",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
