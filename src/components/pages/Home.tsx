import { Link } from "react-router-dom";
import { Button, NavbarBrand } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <NavbarBrand href="/" style={{ color: "white", marginLeft: 20, }}>
          RECRUTEMENT{" "}
          <span style={{ fontSize: 25, fontWeight: "bold" }}>
            ASTRAGALE & ULYSSE
          </span>
        </NavbarBrand>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: 50,
              paddingTop: 80,
              paddingLeft: 740,
            }}
          >
            NOUS SOMMES
          </h1>
          <p
            style={{
              color: "white",
              width: 600,
              marginLeft: 580,
              fontSize: 26,
              textAlign: "center",
            }}
          >
            Centre d’appel spécialisé dans la psychologie et les relations
            humaines. Vous êtes dynamique avec l’envie de relever des défis,
            Vous voulez postuler pour un poste de télécoseiller en langue
          </p>
        </div>
        <div className="" style={{ marginTop: 250, marginLeft: 50 }}>
          <Link to={"/fr"}>
            <Button
              color="warning"
              outline
              style={{
                width: 180,
                marginRight: 50,
                height: 80,
              }}
            >
              FRANÇAISE
            </Button>
          </Link>
          <Link to={"/en"}>
            <Button color="info" outline style={{ width: 180, height: 80 }}>
              ANGLAISE
            </Button>
          </Link>
        </div>
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            color: "white",
            left: 10,
            fontSize: 20,
            fontWeight: "lighter",
          }}
        >
          <p>Copyright © recrutement.astragale-tunisie.com 2024</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
