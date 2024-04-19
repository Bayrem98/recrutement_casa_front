import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { addUser } from "../../../actions/Users/action";
import { Checkbox } from "antd";

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

const UserAdd = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  // form states
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
      status,
    };
    addUser(newUser, () => {
      setIsOpened(false);
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
  };

  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ fontSize: 14 }}>
        Ajouter Candidat
      </span>
      <Modal
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
        style={{ maxWidth: 993 }}
      >
        <Form onSubmit={(e) => submit()}>
          <ModalHeader style={{ backgroundColor: "black", height: 40 }}>
            <p style={{ fontSize: 18, marginTop: 15, color: "white" }}>
              Ajouter un nouveau candidat
            </p>
            <span
              onClick={() => setIsOpened(false)}
              style={{
                position: "absolute",
                right: 10,
                top: 0,
                cursor: "pointer",
                color: "white",
              }}
            >
              X
            </span>
          </ModalHeader>
          <ModalBody>
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
              <Col md={6}>
                <FormGroup>
                  <Label for="situation">Situation Familiale :</Label>
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
              <Col md={6}>
                <FormGroup>
                  <Label for="niveau">Niveau d'etude :</Label>
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
              <Col md={6}>
                <FormGroup>
                  <Label for="experi">Expérience Professionnelles :</Label>
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
              <Col md={6}>
                <FormGroup>
                  <Label for="specia">Domaine :</Label>
                  <Input
                    name="specia"
                    type="text"
                    placeholder="Spécialite..."
                    value={specia}
                    onChange={(e) => setSpecia(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="question1">
                    1-Avez-vous déjà entendu parler de nous ?
                  </Label>
                  <div>
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
              <Col md={6}>
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
              <Col md={6}>
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
              <Col md={6}>
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
          </ModalBody>
          <ModalFooter style={{ backgroundColor: "black" }}>
            <Button color="success" type="submit" disabled={!nom || !prenom}>
              Confirmer
            </Button>
            <Button color="danger" onClick={() => setIsOpened(false)}>
              Annuler
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default UserAdd;
