import { useRouteLoaderData, useSubmit } from 'react-router-dom';
import { User } from '../types/user';
import Avatar from './Avatar';

import styles from './Header.module.css';

function Header() {
  const user = useRouteLoaderData('root') as User;
  const submit = useSubmit();

  const handleLogout = () => {
    submit(null, { action: '/logout', method: 'POST' });
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-block']}>
        <div>Logo</div>
        <div>Project Name</div>
      </div>
      {user && (
        <div className={styles['header-block']} onClick={handleLogout}>
          <div>{user?.name}</div>
          <Avatar userName={user?.name} />
        </div>
      )}
    </header>
  );
}

export default Header;
