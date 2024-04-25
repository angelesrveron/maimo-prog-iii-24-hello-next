const Navbar = (props) => {
  const { title, menu } = props;
  return (
    <header>
      <nav>
        <h1>{title}</h1>
        <ul>
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
