import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <>
      <div className="" style={{ textAlign: "center", marginTop: 70 }}>
        <h1 style={{ color: "white", fontSize: 50 }}>CASANOVA</h1>
        <p
          style={{
            color: "white",
            width: 600,
            marginLeft: 480,
            fontSize: 26,
            textAlign: "center",
          }}
        >
          Centre d’appel spécialisé dans la psychologie et les relations
          humaines. Vous êtes dynamique avec l’envie de relever des défis, Vous
          voulez postuler pour un poste de télécoseiller en langue
        </p>
      </div>
      <div className="" style={{ marginTop: 250, marginLeft: 50 }}>
        <Link to={""}></Link>
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
        <Link to={""}></Link>
        <Button outline color="success" style={{ width: 200 }}>
          ANGLAISE
        </Button>
      </div>
    </>
  );
};

export default Home;
