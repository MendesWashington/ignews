import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.cardForm}>
      <form action="" method="post">
        <div>
          <label htmlFor="login">E-mail:</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        <div className={styles.submit}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
