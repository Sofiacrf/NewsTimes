import React from "react";
import Card from "react-bootstrap/Card";
import hero from "../../images/hero.jpg";


const Header = () => {
  return (
    <main>
      <section className="col-lg-8 mx-auto p-3 py-md-5">
        <Card className="bg-white text-black" style={{ borderRadius: 0 }}>
          <Card.Img src={hero} alt="Card image" />
          <Card.ImgOverlay className="card-first">
            <h1 className="title">
              México News Times
            </h1>
            <Card.Text>¡Bienvenido a nuestro portal!</Card.Text>
            <h6>Somos una empresa especializada en brindar las principales noticias del país de una forma rápida y sencilla.</h6>
            <h6>Encuentra la noticia que sea de tu interés y agrégala a favoritos.</h6>
          </Card.ImgOverlay>
        </Card>
      </section>
    </main>
  );
};
// Export the footer
export default Header;
