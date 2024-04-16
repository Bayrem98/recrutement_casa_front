import { Link } from "react-router-dom";
import { Button, NavbarBrand } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <NavbarBrand href="/" style={{ color: "white", marginLeft: 20 }}>
          RECRUTEMENT
          <span style={{ fontSize: 25, fontWeight: "bold" }}> CASANOVA</span>
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
            CASANOVA
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
        <div className="" style={{ marginTop: 300, marginLeft: 50 }}>
          <Link to={"/fr"}>
            <Button
              outline
              color="success"
              style={{
                width: 200,
                marginRight: 50,
              }}
            >
              FRANÇAISE
            </Button>
          </Link>
          <Link to={"/en"}>
            <Button outline color="success" style={{ width: 200 }}>
              ANGLAISE
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
