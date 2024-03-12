import styles from "./Header.module.css";

const info = {
  name: "Port React",
};

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>{info.name}</h1>
        <nav>
          <ul className={styles.ul}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/watch">Watch</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
