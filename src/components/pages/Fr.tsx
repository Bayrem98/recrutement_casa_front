import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const fields = [
  { key: "clib", name: "Célibataire" },
  { key: "mari", name: "Marié(e)" },
  { key: "divo", name: "Divorcé(e)" },
  { key: "veu", name: "Veuf(ve)" },
];

const FrancaisPage = () => {
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
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues: any) => {
    let errors = {};
    if (inputValues.email.length < 15) {
      errors = "Email is too short";
    }
    if (inputValues.nom.length < 5) {
      errors = "Name is too short";
    }
    if (inputValues.prenom.length < 5) {
      errors = "Last name is too short";
    }
    if (!inputValues.num_cin || inputValues.num_cin < 18) {
      errors = "Minimum age is 18";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors = "Minimum age is 18";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors = "Minimum age is 18";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors = "Minimum age is 18";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors = "Minimum age is 18";
    }
    return errors;
  };

  const handleChange = (e: any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

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
            <CardBody>
              <Form onSubmit={handleSubmit}>
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
                <Button type="submit" style={{ float: "right", marginTop: 20 }}>
                  SUIVANT
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FrancaisPage;
