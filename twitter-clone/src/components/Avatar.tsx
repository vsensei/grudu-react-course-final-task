import styles from './Avatar.module.css';

type AvatarArgs = {
  userName: string;
};

function Avatar({ userName }: AvatarArgs) {
  let avatarText;
  const splittedUserName = userName?.split(' ');

  if (splittedUserName && splittedUserName.length > 1) {
    const [firstName, lastName] = splittedUserName;

    if (firstName[0] && lastName[0]) {
      avatarText = `${firstName[0]}${lastName[0]}`;
    }
  }

  return <div className={styles.avatar}>{avatarText || null}</div>;
}

export default Avatar;
