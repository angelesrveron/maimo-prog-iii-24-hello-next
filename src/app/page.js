import styles from "./page.module.css";
import Navbar from "./components/Navbar/navbar.js";
import Card from "./components/Card/card.js";
import Footer from "./components/Footer/footer.js";
import Hero from "./components/Hero/hero.js";
/**/
export default function Home() {
const cardsGrid = [
  {
    title: "Card 1",
    description: "Description Card 1",
    image: "/vercel.svg",
  },
  {
    title: "Card 2",
    description: "Description Card 2",
    image: "/vercel.svg",
  },
  {
    title: "Card 3",
    description: "Description Card 3",
    image: "/vercel.svg",
  },
];

const menuItems = [
  {
    item: 'Home',
    link: '/',
   
  },
  {
    item: 'About',
    link: '/',
   
  },
  {
    item: 'Contact',
    link: '/',
   
  },
  
];
const footerItems = [
  {
    item: 'Home',
    link: '/',
   
  },
  {
    item: 'Services',
    link: '/',
   
  },
  {
    item: 'Terms',
    link: '/',
   
  },
  {
    item: 'Privacy Policy',
    link: '/',
   
  },

  
];

  return (
    <main className={styles.main}>
      <Navbar title={'Maimo'} menu={menuItems}/>
      <div>
      <Hero titulo={'Hola soy el texto'} texto={'holaaaa'}/>
      </div>
      <div>
        {cardsGrid.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
      <div>
      {cardsGrid.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
      <Footer compania={'Maimo'} footer={footerItems}/>

    </main>
  );
}
