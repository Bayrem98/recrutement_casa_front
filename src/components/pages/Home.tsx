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
          <p
            className="home-para"
            style={{
              color: "white",
            }}
          >
            Rejoignez un centre d'appel unique, spécialisé en psychologie et
            relations humaines. Si vous êtes dynamique, prêt à relever des défis
            stimulants, et motivé par une carrière enrichissante, c'est le
            moment parfait, nous recrutons activement ! Déposez votre
            candidature et faites partie d'une équipe passionnée.
          </p>
        </div>
        <div className="home-div-button">
          <Link to={"/fr"} style={{ textDecoration: "none", color: "white" }}>
            <Button className="home-button-fr" color="warning" outline>
              FRANÇAIS
            </Button>
          </Link>

          <Link to={"/en"}>
            <Button className="home-button-en" color="info" outline>
              ANGLAIS
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
