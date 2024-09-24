import Avatar from './Avatar';
import styles from './Header.module.css';

const userName = 'firstName lastName';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-block']}>
        <div>Logo</div>
        <div>Project Name</div>
      </div>
      <div className={styles['header-block']}>
        <div>{userName}</div>
        <Avatar userName={userName} />
      </div>
    </header>
  );
}

export default Header;
