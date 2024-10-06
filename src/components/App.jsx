// Styles
import "./App.css";

// Data
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

// Components
import Profile from "./Profile/Profile.jsx";
import FriendList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

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
      <br />
      <FriendList friends={friends} listStyle={{ margin: "0 auto" }} />
      <br />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
