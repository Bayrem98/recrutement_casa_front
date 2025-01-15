import { Link } from "react-router-dom";
import { Button, NavbarBrand } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="div-nav">
          <NavbarBrand
            className="nav-title-home"
            href="/"
            style={{ color: "white" }}
          >
            RECRUTEMENT{" "}
            <span className="nav-title-home-span">ASTRAGALE & ULYSSE</span>
          </NavbarBrand>
        </div>
        <div>
          <h1
            className="home-para-title"
            style={{
              color: "white",
            }}
          >
            NOUS SOMMES
          </h1>
          <p
            className="home-para"
            style={{
              color: "white",
            }}
          >
            Centre d’appel spécialisé dans la psychologie et les relations
            humaines. Vous êtes dynamique avec l’envie de relever des défis,
            Vous voulez postuler pour un poste de télécoseiller en langue
          </p>
        </div>
        <div className="home-div-button">
          <Link to={"/fr"}>
            <Button className="home-button-fr" color="warning" outline>
              FRANÇAISE
            </Button>
          </Link>
          <Link to={"/en"}>
            <Button className="home-button-en" color="info" outline>
              ANGLAISE
            </Button>
          </Link>
        </div>
        <footer
          className="home-footer"
          style={{
            color: "white",
          }}
        >
          <p>Copyright © recrutement.astragale-tunisie.com 2024</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
