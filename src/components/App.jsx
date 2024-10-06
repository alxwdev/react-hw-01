import "./App.css";
import Profile from "./Profile/Profile.jsx";
import userData from "../data/userData.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        containerStyle={{ margin: "0 auto" }}
      />
    </>
  );
}

export default App;
