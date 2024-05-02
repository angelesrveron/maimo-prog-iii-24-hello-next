import Navbar from "./components/Navbar/navbar.js";
import Card from "./components/Card/card.js";
import Footer from "./components/Footer/footer.js";
import Hero from "./components/Hero/hero.js";
import CardsGrid from "./components/Cardsgrid/cardsgrid.js";
/**/
export default function Home() {
  const data = [
    {
      title: "Hello Kitty",
      image: "/images/kitty-icon.png",
    },
    {
      title: "Kuromi",
      image: "/images/kuromi-icon.png",
    },
    {
      title: "Cinammoroll",
      image: "/images/cinamo-icon.png",
    },
    {
      title: "Pompompurin",
      image: "/images/pim-icon.png",
    },
    {
      title: "Pochacco",
      image: "/images/pocha-icon.png",
    },
    {
      title: "My Melody",
      image: "/images/melody-icon.png",
    },
  ];

  const menuItems = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "About",
      link: "/",
    },
    {
      item: "Contact",
      link: "/",
    },
  ];
  const footerItems = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "Services",
      link: "/",
    },
    {
      item: "Terms",
      link: "/",
    },
    {
      item: "Privacy Policy",
      link: "/",
    },
  ];

  return (
    <main>
      <Navbar title={"Maimo"} menu={menuItems} />

      <Hero titulo={"Welcome to The Hello Kitty World"} texto={"Join Us!"} />

      <CardsGrid cards={data} />

      <Footer compania={"Maimo"} footer={footerItems} />
    </main>
  );
}
