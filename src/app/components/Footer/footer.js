const Footer = (props) => {
    const { footer, compania } = props;
    return (
      <footer>
        <nav>
          <ul>
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