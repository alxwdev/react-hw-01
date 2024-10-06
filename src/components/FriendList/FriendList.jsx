import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends, listStyle }) {
  return (
    <>
      <ul className={css.list} style={listStyle}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
}
