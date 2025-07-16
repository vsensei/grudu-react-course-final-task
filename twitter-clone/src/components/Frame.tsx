import styles from './Frame.module.css';

const Frame: React.FC<{ addClass?: string }> = ({ children, addClass }) => {
  return (
    <div className={`${styles.frame}${addClass ? ` ${addClass}` : ''}`}>
      {children}
    </div>
  );
};

export default Frame;
