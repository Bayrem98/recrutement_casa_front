import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const FrancaisPage = () => {
  const [inputFields, setInputFields] = useState({
    nom: "",
    prenom: "",
    num_cin: 0,
    date_birth: "",
    num_tel1: 0,
    num_tel2: 0,
    adresse: "",
    city: "",
    code_p: "",
    email: "",
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
        <div className="" style={{ marginLeft: 50, marginRight: 50 }}>
          <Card style={{ border: 0 }}>
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
                      <Label for="nom">Nom</Label>
                      <Input
                        name="nom"
                        type="text"
                        value={inputFields.nom}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="prenom">Prénom</Label>
                      <Input
                        name="prenom"
                        type="text"
                        value={inputFields.prenom}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Numéro CIN</Label>
                      <Input
                        name="num_cin"
                        type="number"
                        value={inputFields.num_cin}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="date_birth">Date de Naissance</Label>
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
                      <Label for="num_tel1">Numéro Portable-1</Label>
                      <Input
                        name="num_tel1"
                        type="text"
                        value={inputFields.num_tel1}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="num_tel2">Numéro Portable-2</Label>
                      <Input
                        name="num_tel2"
                        type="text"
                        value={inputFields.num_tel2}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="adresse">Adresse</Label>
                      <Input
                        name="adresse"
                        type="text"
                        value={inputFields.adresse}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="city">Ville</Label>
                      <Input
                        name="city"
                        type="text"
                        value={inputFields.city}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="code_p">Code postale</Label>
                      <Input
                        name="code_p"
                        type="text"
                        value={inputFields.code_p}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={inputFields.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="examplePassword">Situation Familiale</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        type="select"
                      />
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
