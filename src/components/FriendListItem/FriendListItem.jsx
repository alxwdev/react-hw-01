import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  name,
  isOnline,
}) {
  const statusStyle = clsx(css.status, isOnline ? css.online : css.offline);
  return (
    <>
      <div className={css.card}>
        <img className={css.image} src={avatar} alt="Avatar" width="48" />
        <p className={css.title}>{name}</p>
        <p className={statusStyle}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
}
