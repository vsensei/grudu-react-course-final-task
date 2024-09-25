import { Link } from 'react-router-dom';
import styles from './Form.module.css';

type FormArgs = {
  descriptionText: string;
  linkHref: string;
  linkText: string;
};

const Form: React.FC<FormArgs> = ({ children, descriptionText, linkHref, linkText }) => {
  return (
    <>
      <div className={styles['content-container']}>
        <div className={styles.content}>{children}</div>
        <p>
          <span>{descriptionText}</span>
          <Link to={linkHref} className={styles.link}>
            {linkText}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Form;
