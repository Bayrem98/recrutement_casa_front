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
import { Checkbox, Steps, message } from "antd";
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

const fields = [
  { key: "clib", name: "Célibataire" },
  { key: "mari", name: "Marié(e)" },
  { key: "divo", name: "Divorcé(e)" },
  { key: "veu", name: "Veuf(ve)" },
];

const fields2 = [
  { key: "pri", name: "Primaire" },
  { key: "seco", name: "Secondaire" },
  { key: "nivb", name: "Niveau Bac" },
  { key: "bach", name: "Bachelier" },
  { key: "ba+", name: "Bac+2" },
  { key: "lic", name: "Licence" },
  { key: "maî", name: "Maîtrise" },
  { key: "mas", name: "Master" },
];

const fields3 = [
  { key: "pas", name: "Pas d'experiences" },
  { key: "centr", name: "J'ai déja travaillé dans un centre d'appel" },
  {
    key: "voyan",
    name: "J'ai déja fait une expérience similaire dans la voyance",
  },
  { key: "autr", name: "J'ai travaillé dans un autre domaine" },
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

  const [inputFields, setInputFields] = useState({
    nom: "",
    prenom: "",
    num_cin: "",
    date_birth: "",
    num_tel1: "",
    num_tel2: "",
    adresse: "",
    city: "",
    code_p: "",
    email: "",
    situation: "",
    niveau: "",
    specia: "",
    experi: "",
    question1: "",
    question2: "",
    question3: "",
    cover_cv: "",
  });

  const handleChange = (e: any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const FirstContent = () => (
    <>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="nom"
                  type="text"
                  placeholder="Name"
                  value={inputFields.nom}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="prenom"
                  type="text"
                  placeholder="Prénom"
                  value={inputFields.prenom}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="num_cin"
                  type="number"
                  placeholder="Numéro CIN"
                  value={inputFields.num_cin}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="date_birth"
                  type="date"
                  value={inputFields.date_birth}
                  onChange={handleChange}
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
                  value={inputFields.num_tel1}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="num_tel2"
                  type="text"
                  placeholder="Numéro Téléphone-2"
                  value={inputFields.num_tel2}
                  onChange={handleChange}
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
                  value={inputFields.adresse}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  name="city"
                  type="text"
                  placeholder="Ville"
                  value={inputFields.city}
                  onChange={handleChange}
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
                  value={inputFields.code_p}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputFields.email}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="situation">*Situation Familiale :</Label>
                <Input
                  name="situation"
                  type="select"
                  placeholder="Situation Familiale"
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

  const SecondContent = () => (
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
                  value={inputFields.niveau}
                  onChange={handleChange}
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
                  value={inputFields.specia}
                  onChange={handleChange}
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
                  value={inputFields.experi}
                  onChange={handleChange}
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

  const ThirdContent = () => (
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
                  <Checkbox>Oui</Checkbox>
                  <br />
                  <Checkbox>Non</Checkbox>
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
                  value={inputFields.question2}
                  onChange={handleChange}
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
                  value={inputFields.question3}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </>
  );

  const LastContent = () => (
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
                  value={inputFields.cover_cv}
                  onChange={handleChange}
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
        return <FirstContent />;
      case 1:
        return <SecondContent />;
      case 2:
        return <ThirdContent />;
      case 3:
        return <LastContent />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fr-page">
        <div className="" style={{ textAlign: "center", marginTop: -70 }}>
          <h1 style={{ color: "white", fontSize: 52, paddingTop: 130 }}>
            CASANOVA
          </h1>
          <p
            style={{
              color: "white",
              width: 600,
              marginLeft: 350,
              fontSize: 28,
              textAlign: "center",
            }}
          >
            Centre d’appel spécialisé dans la psychologie et les relations
            humaines. Vous êtes dynamique avec l’envie de relever des défis,
            Vous voulez postuler pour un poste de télécoseiller en langue
          </p>
        </div>
        <div
          className=""
          style={{ marginLeft: 50, marginRight: 50, paddingBottom: 50 }}
        >
          <div>
            <Card style={{ border: 0, paddingBottom: 20 }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 10,
                }}
              >
                DÉPOSER VOTRE CANDIDATURE
              </p>
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
                    <Button
                      color="success"
                      onClick={() =>
                        message.success("Vous avez terminer votre inscription")
                      }
                    >
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
        <div
          className=""
          style={{ marginLeft: 200, marginRight: 200, paddingBottom: 100 }}
        >
          <Card style={{ borderRadius: 180 }}>
            <h2
              style={{
                textAlign: "center",
                paddingTop: 10,
                color: "rgb(25, 118, 210)",
              }}
            >
              CONSEILLERS EN RELATIONS HUMAINES{" "}
            </h2>
            <span
              style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}
            >
              PROFIL :
            </span>
            <br />
            <div style={{ textAlign: "center" }}>
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
        <div
          className=""
          style={{ marginLeft: 100, marginRight: 100, paddingBottom: 100 }}
        >
          <Card>
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
      </div>
    </>
  );
};

export default FrancaisPage;
