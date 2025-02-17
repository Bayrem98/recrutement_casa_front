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
import { addUser } from "../../actions/Users/action";
import Navbard2 from "../parts/Navbard2";
import axios from "axios";

const fields = [
  { key: "Célibataire", name: "Single" },
  { key: "Marié(e)", name: "Married" },
  { key: "Divorcé(e)", name: "Divorced" },
  { key: "Veuf(ve)", name: "Windower" },
];

const fields2 = [
  { key: "Primaire", name: "Primary" },
  { key: "Secondaire", name: "Secondary" },
  { key: "Niveau Bac", name: "Bachelor level" },
  { key: "Bachelier", name: "Bachelor" },
  { key: "Bac+2", name: "Bac+2" },
  { key: "Licence", name: "Licence" },
  { key: "Maîtrise", name: "Mastery" },
  { key: "Master", name: "Master" },
];

const fields3 = [
  { key: "Pas d'experiences", name: "No experiments" },
  {
    key: "J'ai déja travaillé dans un centre d'appel",
    name: "I worked in a call centre",
  },
  {
    key: "J'ai déja fait une expérience similaire dans la voyance",
    name: "I already did a similar experiment in clairvoyance",
  },
  {
    key: "J'ai travaillé dans un autre domaine",
    name: "I worked in a different field",
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

const AnglaisPage = () => {
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
  const [status, setStatus] = useState<string>("");
  const [dateRDV, setDateRDV] = useState<string>("");

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch(`${process.env.REACT_APP_API_URL}/cover`, {
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
      status: { status: status, color: "someColor" },
      dateRDV,
    };
    addUser(newUser, () => {
      handleSubmit();
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
    setStatus("");
    setDateRDV("");
  };

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`)
      .then(() => {
        window.location.reload();
        alert("Votre Candidature a été reçue, Voir ta boite mail. Merci");
        console.log("Email envoyé avec succés");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error.message);
      });
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
                  placeholder="Last name"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="prenom"
                  name="prenom"
                  type="text"
                  placeholder="First name"
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
                  id="num_cin"
                  name="num_cin"
                  type="text"
                  placeholder="CIN number"
                  value={num_cin}
                  onChange={(e) => setNum_cin(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="date_naiss"
                  name="date_naiss"
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
                  id="num_tel1"
                  name="num_tel1"
                  type="text"
                  placeholder="Mobile number 1"
                  value={num_tel1}
                  onChange={(e) => setNum_tel1(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="num_tel2"
                  name="num_tel2"
                  type="text"
                  placeholder="Mobile number 2"
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
                  id="adresse"
                  name="adresse"
                  type="text"
                  placeholder="Address"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="ville"
                  name="ville"
                  type="text"
                  placeholder="City"
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
                  id="code_p"
                  name="code_p"
                  type="text"
                  placeholder="Zip code"
                  value={code_p}
                  onChange={(e) => setCode_p(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="situation">*Family situation:</Label>
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
                <Label for="niveau">Level of study</Label>
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
                  placeholder="specialty..."
                  value={specia}
                  onChange={(e) => setSpecia(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="experi">Professional experiences</Label>
                <Input
                  name="experi"
                  type="select"
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
                <Label for="question1">1-Have you ever heard of us ?</Label>
                <div style={{ marginLeft: 30 }}>
                  <Checkbox
                    value={question1}
                    onChange={() => handleQuestion1Change}
                  >
                    Yes
                  </Checkbox>
                  <br />
                  <Checkbox
                    value={question1}
                    onChange={() => handleQuestion1Change}
                  >
                    No
                  </Checkbox>
                </div>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="question2">
                  2-What is your motivation for this job ?
                </Label>
                <Input
                  name="question2"
                  type="textarea"
                  placeholder="Your answer in two lines..."
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
                  3-Do you have a better idea about the nature of our activity ?
                </Label>
                <Input
                  name="question3"
                  type="textarea"
                  placeholder="Your answer..."
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
                <Label for="cover_cv">
                  Upload your CV (Format World, Excel ou PDF)
                </Label>
                <br />
                <br />
                <Input
                  name="cover_cv"
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
        <Navbard2 />
        <div className="section-astra-para">
          <h1
            className="astra-title-para2"
            style={{
              color: "white",
            }}
          >
            ULYSSE
          </h1>
          <p
            className="astra-para"
            style={{
              color: "white",
            }}
          >
            We are a subsidiary of an international French company, a leader in
            its sector, and we are hiring HUMAN RELATIONS ADVISORS for the
            English department.
          </p>
        </div>
        <div className="astra-section-card">
          <div id="formulaire">
            <Card className="astra-card">
              <p className="astra-card-title">SUBMIT YOUR APPLICATION</p>
              <br />
              <Steps
                className="astra-card-steps"
                current={current}
                items={items}
              />
              <CardBody>{renderContent()}</CardBody>
              <CardFooter>
                <div className="astra-card-footer">
                  {current < steps.length - 1 && (
                    <Button color="primary" onClick={() => next()}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button color="success" onClick={submit}>
                      Submit
                    </Button>
                  )}
                  {current > 0 && (
                    <Button
                      style={{
                        margin: "0 8px",
                      }}
                      onClick={() => prev()}
                    >
                      Previous
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div id="annonces" className="astra-section-annonce">
          <Card style={{ borderRadius: 200 }} className="astra-card-annonce">
            <h2 className="astra-card-annonce-title">
              HUMAN RELATIONS CONSULTANTS
            </h2>
            <br />
            <span className="astra-card-annonce-soustitle">PROFILE :</span>
            <br />
            <br />
            <div className="astra-card-annonce-para">
              <p>
                *Excellent command of the English language, both written and
                spoken.
              </p>
              <p>
                *Intuitive and compassionate approach, with a genuine ability to
                listen and provide support.
              </p>
              <p>*Initiative and strong commitment to customer satisfaction.</p>
              <p>*Warm, dynamic personality with a strong team spirit.</p>
              <p>*Availability (day and / or night).</p>
            </div>
          </Card>
        </div>
        <div className="astra-section-contact">
          <Card className="astra-card-contact" id="contact">
            <h2
              className="astra-card-contact-title"
              style={{
                color: "rgb(25, 118, 210)",
              }}
            >
              CONTACT US
            </h2>
            <div className="astra-card-contact-div">
              <p>
                <FontAwesomeIcon
                  className="astra-card-contact-icon1"
                  icon={faMapLocationDot}
                  style={{
                    color: "rgb(25, 118, 210)",
                  }}
                />
                <span className="astra-card-contact-text">
                  Address: Rue Rabat complexe Zaoui 4000 Sousse
                </span>
              </p>
              <p>
              <FontAwesomeIcon
                  className="astra-card-contact-icon2_3"
                  icon={faPhoneVolume}
                  style={{
                    color: "rgb(25, 118, 210)",
                  }}
                />
                <span className="astra-card-contact-text">
                  Phone: 73 213 831
                </span>
              </p>
              <p>
              <FontAwesomeIcon
                  className="astra-card-contact-icon2_3"
                  icon={faInbox}
                  style={{
                    color: "rgb(25, 118, 210)",
                  }}
                />
                <span className="astra-card-contact-text">
                  E-mail: recrutement@astragale-tunisie.com
                </span>
              </p>
            </div>
          </Card>
        </div>
        <iframe
          className="astra-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.2092886192863!2d10.629663082749477!3d35.83441499867604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275dc196c8893%3A0x307441513a219032!2sUlysse%20Call%20Center!5e0!3m2!1sfr!2stn!4v1713357874110!5m2!1sfr!2stn"
          loading="lazy"
        ></iframe>
        <footer className="home-footer">
          <p>Copyright © recrutement.astragale-tunisie.com 2024</p>
        </footer>
      </div>
    </>
  );
};

export default AnglaisPage;
