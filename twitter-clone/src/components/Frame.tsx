import styles from './Frame.module.css';

const Frame: React.FC = ({ children }) => {
  return <div className={styles.frame}>{children}</div>;
};

export default Frame;
