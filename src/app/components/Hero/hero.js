const Hero = (props) => {
    const { titulo, texto } = props;
    return (
        <section >
        <div>
          <h1>{titulo}</h1>
          <p>{texto}</p>
          
        </div>
      </section>
    );
  };
  
  export default Hero;