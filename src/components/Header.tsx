import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

    return (
        <header className={styles.siteHeader}>
            <div className={`container ${styles.nav}`}>
                <div className={styles.brand}>My Website</div>
                <nav aria-label="Primary">
                    <ul className={styles.list}>
                        <li>
                            <NavLink to="/" className={getLinkClass} end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={getLinkClass}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={getLinkClass}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={getLinkClass}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};