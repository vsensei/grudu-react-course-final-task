import { FormEvent } from 'react';
import Avatar from './Avatar';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const userName = 'firstName lastName';

function Header() {
  const navigate = useNavigate();

  const handleLogout = (e: FormEvent) => {
    e.preventDefault();
    console.log('[MOCK] Logged out');
    navigate('/signin');
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-block']}>
        <div>Logo</div>
        <div>Project Name</div>
      </div>
      <div className={styles['header-block']} onClick={(e) => handleLogout(e)}>
        <div>{userName}</div>
        <Avatar userName={userName} />
      </div>
    </header>
  );
}

export default Header;
