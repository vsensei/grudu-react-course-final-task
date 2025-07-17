import { Form, Link, useActionData } from 'react-router-dom';

import styles from './Form.module.css';

type FormArgs = {
  descriptionText: string;
  linkHref: string;
  linkText: string;
};

const FormC: React.FC<FormArgs> = ({
  children,
  descriptionText,
  linkHref,
  linkText,
}) => {
  const data = useActionData() as { errors: Error[] };

  return (
    <>
      <Form method='post'>
        <div className={styles['content-container']}>
          <div className={styles.content}>{children}</div>
          <p>
            <span>{descriptionText}</span>
            <Link to={linkHref} className={styles.link}>
              {linkText}
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default FormC;
