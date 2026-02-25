import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className={`container ${styles.inner}`}>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};