import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';

function Root() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
