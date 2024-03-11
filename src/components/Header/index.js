import styles from './Header.module.css'

function Header(){
    return(
        <>
        <header className={styles.header}>
            <h1>Port React</h1>
            <nav>
                <ul className={styles.ul}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Watch</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;