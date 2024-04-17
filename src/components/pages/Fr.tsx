/* eslint-disable jsx-a11y/iframe-has-title */
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faInbox,
  faMapLocationDot,
  faPersonCircleQuestion,
  faPhoneVolume,
  faUpload,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Steps } from "antd";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Navbard from "../parts/Navbard";
import { addUser } from "../../actions/Users/action";

const fields = [
  { key: "Célibataire", name: "Célibataire" },
  { key: "Marié(e)", name: "Marié(e)" },
  { key: "Divorcé(e)", name: "Divorcé(e)" },
  { key: "Veuf(ve)", name: "Veuf(ve)" },
];

const fields2 = [
  { key: "Primaire", name: "Primaire" },
  { key: "Secondaire", name: "Secondaire" },
  { key: "Niveau Bac", name: "Niveau Bac" },
  { key: "Bachelier", name: "Bachelier" },
  { key: "Bac+2", name: "Bac+2" },
  { key: "Licence", name: "Licence" },
  { key: "Maîtrise", name: "Maîtrise" },
  { key: "Master", name: "Master" },
];

const fields3 = [
  { key: "Pas d'experiences", name: "Pas d'experiences" },
  {
    key: "J'ai déja travaillé dans un centre d'appel",
    name: "J'ai déja travaillé dans un centre d'appel",
  },
  {
    key: "J'ai déja fait une expérience similaire dans la voyance",
    name: "J'ai déja fait une expérience similaire dans la voyance",
  },
  {
    key: "J'ai travaillé dans un autre domaine",
    name: "J'ai travaillé dans un autre domaine",
  },
];

const steps = [
  {
    title: (
      <FontAwesomeIcon
        icon={faAddressCard}
        size="2xl"
        style={{ color: "rgb(25, 118, 210)" }}
      />
    ),
    content: "First-content",
  },
  {
    title: (
      <FontAwesomeIcon
        icon={faUserGraduate}
        size="2xl"
        style={{ color: "rgb(25, 118, 210)" }}
      />
    ),
    content: "Second-content",
  },
  {
    title: (
      <FontAwesomeIcon
        icon={faPersonCircleQuestion}
        size="2xl"
        style={{ color: "rgb(25, 118, 210)" }}
      />
    ),
    content: "Third-content",
  },
  {
    title: (
      <FontAwesomeIcon
        icon={faUpload}
        size="2xl"
        style={{ color: "rgb(25, 118, 210)" }}
      />
    ),
    content: "Last-content",
  },
];

const FrancaisPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const [nom, setNom] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [num_cin, setNum_cin] = useState<string>("");
  const [date_naiss, setDateNaiss] = useState<string>("");
  const [num_tel1, setNum_tel1] = useState<string>("");
  const [num_tel2, setNum_tel2] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [ville, setVille] = useState<string>("");
  const [code_p, setCode_p] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [situation, setSituation] = useState<string>(fields[0].key);
  const [niveau, setNiveau] = useState<string>(fields2[0].key);
  const [specia, setSpecia] = useState<string>("");
  const [experi, setExperi] = useState<string>(fields3[0].key);
  const [question1, setQuestion1] = useState<string>("");
  const [question2, setQuestion2] = useState<string>("");
  const [question3, setQuestion3] = useState<string>("");
  const [cover_cv, setCover_cv] = useState<any>();

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch(`http://localhost:3001/cover`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCover_cv(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCover_cv(undefined);
      });
  };

  const handleQuestion1Change = (value: string) => {
    setQuestion1(value);
  };

  const submit = () => {
    const newUser = {
      nom,
      prenom,
      num_cin,
      date_naiss,
      num_tel1,
      num_tel2,
      adresse,
      ville,
      code_p,
      email,
      situation,
      niveau,
      specia,
      experi,
      question1,
      question2,
      question3,
      cover_cv,
    };
    addUser(newUser, () => {
      window.location.reload();
      reset();
    });
  };

  const reset = () => {
    setNom("");
    setPrenom("");
    setNum_cin("");
    setDateNaiss("");
    setNum_tel1("");
    setNum_tel2("");
    setAdresse("");
    setVille("");
    setCode_p("");
    setEmail("");
    setSituation(fields[0].key);
    setNiveau(fields2[0].key);
    setSpecia("");
    setExperi(fields3[0].key);
    setQuestion1("");
    setQuestion2("");
    setQuestion3("");
    setCover_cv("");
  };

  const FirstContent = (
    <>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="prenom"
                  type="text"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="num_cin"
                  type="text"
                  placeholder="Numéro CIN"
                  value={num_cin}
                  onChange={(e) => setNum_cin(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="date_birth"
                  type="date"
                  value={date_naiss}
                  onChange={(e) => setDateNaiss(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="num_tel1"
                  type="text"
                  placeholder="Numéro Téléphone-1"
                  value={num_tel1}
                  onChange={(e) => setNum_tel1(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="num_tel2"
                  type="text"
                  placeholder="Numéro Téléphone-2"
                  value={num_tel2}
                  onChange={(e) => setNum_tel2(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="adresse"
                  type="text"
                  placeholder="Adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="city"
                  type="text"
                  placeholder="Ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="code_p"
                  type="text"
                  placeholder="Code Postale"
                  value={code_p}
                  onChange={(e) => setCode_p(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="situation">*Situation Familiale :</Label>
                <Input
                  value={situation}
                  id="situation"
                  name="situation"
                  type="select"
                  onChange={(e) => setSituation(e.target.value)}
                >
                  {fields.map((f) => (
                    <option key={f.key} value={f.key}>
                      {f.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );

  const SecondContent = (
    <>
      <CardBody>
        <Form>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="niveau">Niveau d'etude</Label>
                <Input
                  name="niveau"
                  type="select"
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                >
                  {" "}
                  {fields2.map((f) => (
                    <option key={f.key} value={f.key}>
                      {f.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Input
                  name="specia"
                  type="text"
                  placeholder="Spécialite..."
                  value={specia}
                  onChange={(e) => setSpecia(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="experi">Expérience Professionnelles</Label>
                <Input
                  name="experi"
                  type="select"
                  placeholder="Expérience"
                  value={experi}
                  onChange={(e) => setExperi(e.target.value)}
                >
                  {" "}
                  {fields3.map((f) => (
                    <option key={f.key} value={f.key}>
                      {f.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );

  const ThirdContent = (
    <>
      <CardBody>
        <Form>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="question1">
                  1-Avez-vous déjà entendu parler de nous ?
                </Label>
                <div style={{ marginLeft: 30 }}>
                  <Checkbox
                    value={question1}
                    onChange={() => handleQuestion1Change}
                  >
                    Oui
                  </Checkbox>
                  <br />
                  <Checkbox
                    value={question1}
                    onChange={() => handleQuestion1Change}
                  >
                    Non
                  </Checkbox>
                </div>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="question2">
                  2- Quelles sont vos motivations pour ce poste ?
                </Label>
                <Input
                  name="question2"
                  type="textarea"
                  placeholder="Votre réponse en deux lignes..."
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="question3">
                  3- Avez-vous une idée plus précise sur la nature de notre
                  activité ?
                </Label>
                <Input
                  name="question3"
                  type="textarea"
                  placeholder="Votre réponse..."
                  value={question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );

  const LastContent = (
    <>
      <CardBody>
        <Form>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="cover">
                  Choisissez votre CV (Format World, Excel ou PDF)
                </Label>
                <br />
                <br />
                <Input
                  name="cover"
                  type="file"
                  onChange={changeCoverHandler}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );

  const renderContent = () => {
    switch (current) {
      case 0:
        return <>{FirstContent}</>;
      case 1:
        return <>{SecondContent}</>;
      case 2:
        return <>{ThirdContent}</>;
      case 3:
        return <>{LastContent}</>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fr-page">
        <Navbard />
        <div style={{ paddingTop: 272, paddingBottom: 272 }}>
          <h1
            style={{
              color: "white",
              fontSize: 52,
              marginLeft: "40%",
            }}
          >
            ASTRAGALE
          </h1>
          <p
            style={{
              color: "white",
              width: 600,
              marginLeft: "27%",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Centre d’appel spécialisé dans la psychologie et les relations
            humaines. Vous êtes dynamique avec l’envie de relever des défis,
            Vous voulez postuler pour un poste de télécoseiller en langue
          </p>
        </div>
        <div style={{ marginLeft: 50, marginRight: 50 }}>
          <div id="formulaire">
            <Card style={{ border: 0, marginBottom: 190 }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "bold",
                  paddingTop: 65,
                }}
              >
                DÉPOSER VOTRE CANDIDATURE
              </p>
              <br />
              <Steps
                current={current}
                items={items}
                style={{ paddingLeft: 20, paddingRight: 20 }}
              />
              <CardBody>{renderContent()}</CardBody>
              <CardFooter>
                <div style={{ marginTop: 25, float: "right" }}>
                  {current < steps.length - 1 && (
                    <Button color="primary" onClick={() => next()}>
                      Suivant
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button color="success" onClick={submit}>
                      Valider
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{
                        margin: "0 8px",
                      }}
                      onClick={() => prev()}
                    >
                      Précédent
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div id="annonces" style={{ marginLeft: 200, marginRight: 200 }}>
          <Card style={{ borderRadius: 180, marginBottom: 420 }}>
            <h2
              style={{
                textAlign: "center",
                paddingTop: 80,
                color: "rgb(25, 118, 210)",
              }}
            >
              CONSEILLERS EN RELATIONS HUMAINES{" "}
            </h2>
            <br />
            <span
              style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}
            >
              PROFIL :
            </span>
            <br />
            <br />
            <div style={{ textAlign: "center", paddingBottom: 40 }}>
              <p style={{ fontSize: 18 }}>
                *Maitrise parfaite de langue française à l’oral (bonne
                élocution) comme à l’écrit.
              </p>
              <p style={{ fontSize: 18 }}>
                *Le sens de l’écoute et du conseil.
              </p>
              <p style={{ fontSize: 18 }}>*Très bonne culture générale.</p>
              <p style={{ fontSize: 18 }}>
                *Une vitesse de frappe sur le clavier serait un atout.
              </p>
              <p style={{ fontSize: 18 }}>*Disponibilité (jour et/ou nuit).</p>
            </div>
          </Card>
        </div>
        <div style={{ marginLeft: 100, marginRight: 100, paddingBottom: 30 }}>
          <Card id="contact" style={{ marginTop: 100 }}>
            <h2
              style={{
                textAlign: "center",
                paddingTop: 10,
                color: "rgb(25, 118, 210)",
              }}
            >
              NOUS CONTACT
            </h2>
            <div style={{ paddingLeft: 150 }}>
              <p>
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  style={{
                    fontSize: 50,
                    color: "rgb(25, 118, 210)",
                    marginRight: 20,
                  }}
                />
                <span style={{ fontSize: 22, fontWeight: "bold" }}>
                  Adresse: Rue Rabat complexe Zaoui 4000 Sousse
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  style={{
                    fontSize: 50,
                    color: "rgb(25, 118, 210)",
                    marginRight: 25,
                  }}
                />
                <span style={{ fontSize: 22, fontWeight: "bold" }}>
                  Téléphone: 73 202 303
                </span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faInbox}
                  style={{
                    fontSize: 50,
                    color: "rgb(25, 118, 210)",
                    marginRight: 25,
                  }}
                />
                <span style={{ fontSize: 22, fontWeight: "bold" }}>
                  Email: recrutement@astragale-tunisie.com
                </span>
              </p>
            </div>
          </Card>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.2092886192863!2d10.629663082749477!3d35.83441499867604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275dc196c8893%3A0x307441513a219032!2sUlysse%20Call%20Center!5e0!3m2!1sfr!2stn!4v1713357874110!5m2!1sfr!2stn"
          style={{
            border: 0,
            height: 300,
            width: "95%",
            marginLeft: 30,
            marginBottom: 50,
            borderRadius: 20,
          }}
          loading="lazy"
        ></iframe>
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            color: "white",
            left: "32%",
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

export default FrancaisPage;
