import axios from "axios";
import { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Checkbox, Input } from "antd";
import { Button, Form, FormGroup, Col, Container, Row } from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const generateRandomTokenValue = () => {
    const token = uuidv4();
    return token;
  };

  const token = generateRandomTokenValue();

  const login = (event: any) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.user.username);
        localStorage.setItem("user_id", data.user._id);
        Cookies.set(
          "access_token",
          token,
          { expires: 5 / 24 } // 1 heure (1/24 de la journée)
        );
        window.location.reload();
        navigateto();
        console.log(data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
        }
      });
  };

  const navigateto = () => {
    window.location.replace("/dashboard");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="screen bg-dark " />
          <Col
            xs={12}
            md={6}
            className="login text-center p-5 d-flex flex-column justify-content-center"
          >
            <p
              className="login-title-form"
              style={{
                color: "black",
              }}
            >
              ADMIN
              <br />
              <span
                className="login-span-form"
                style={{
                  color: "black",
                }}
              >
                ASTRAGALE & ULYSSE
              </span>
            </p>

            <Form onSubmit={(event) => login(event)}>
              {errorMessage && (
                <Alert
                  message=""
                  description={errorMessage}
                  type="error"
                  showIcon
                />
              )}
              <br />
              <FormGroup className="d-flex justify-content">
                <UserOutlined style={{ fontSize: 20, marginRight: 10 }} />
                <Input
                  placeholder="Nom D'utilisateur"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </FormGroup>

              <FormGroup className="d-flex justify-content">
                <LockOutlined style={{ fontSize: 20, marginRight: 10 }} />
                <Input.Password
                  placeholder="Mot de Passe"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FormGroup>

              <Row>
                <Col className="d-flex">
                  <FormGroup>
                    <Checkbox> Se souvenir de moi</Checkbox>
                  </FormGroup>
                </Col>
                <Col>
                  <span></span>
                </Col>
              </Row>

              <FormGroup>
                <Button color="primary" type="submit" block>
                  Connexion
                </Button>
              </FormGroup>
            </Form>
            <footer className="text-center"></footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
