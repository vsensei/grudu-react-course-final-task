import styles from './SignIn.module.css';

function Login() {
  return (
    <>
      <div className={styles['content-container']}>
        <div className={styles.content}>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Log in</button>
        </div>
        <p>
          Already have an account?
          <a href='#' className={styles.link}>
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
