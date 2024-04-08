import { useState } from "react";
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
    email: "",
    password: "",
    age: null,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues: any) => {
    let errors = {};
    if (inputValues.email.length < 15) {
      errors = "Email is too short";
    }
    if (inputValues.password.length < 5) {
      errors = "Password is too short";
    }
    if (!inputValues.age || inputValues.age < 18) {
      errors = "Minimum age is 18";
    }
    return errors;
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
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Nom</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Prénom</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Numéro CIN</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Date de Naissance</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="JJ/MM/AA"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Numéro Tel 1</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Numéro Tel 2</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Adresse</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Ville</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Code postale</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
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
                <Button style={{ float: "right", marginTop: 20 }}>
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
