import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
  containerStyle,
}) {
  const { followers, views, likes } = stats;
  return (
    <div className={css.container} style={containerStyle}>
      <div className={css.thumb}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
