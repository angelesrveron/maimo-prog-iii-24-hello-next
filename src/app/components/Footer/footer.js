import styles from "@/app/components/Footer/footer.module.css"
import Image from "next/image";

const Footer = ({ footer}) => {

    return (
      <footer className={styles.container}>
         <Image
        src='/images/kitty.png'
        alt='Next.js Logo'
        width={190}
        height={150}
        priority
      />
        <nav >
          <ul className={styles.container_nav}>
            {footer.map((footerItems, index) => (
              <li key={index}>
                <a href={footerItems.link}>{footerItems.item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    );
  };
  
  export default Footer;