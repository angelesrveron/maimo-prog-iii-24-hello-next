import styles from "./navbar.module.css";
import Image from "next/image";


const Navbar = ({ menu }) => {
  return (
    <header className={styles["container"]}>
       <Image
        src='images/sanrio-logo.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
      <nav >
     
        <ul className={styles["menu"]}>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link}>{menuItem.item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
