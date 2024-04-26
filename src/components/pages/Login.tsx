import axios from "axios";
import { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Checkbox, Input } from "antd";
import { Button, Card, CardHeader, Form, FormGroup } from "reactstrap";

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
      .post(`http://localhost:3001/auth/login`, {
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
      <div className="login-page">
        <p
          style={{
            color: "white",
            fontSize: 45,
            paddingTop: 80,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ADMIN
          <br />
          <span
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "lighter",
            }}
          >
            ASTRAGALE & ULYSSE
          </span>
        </p>
        <Card
          style={{ width: 400, position: "absolute", top: 260, left: "34%" }}
        >
          <CardHeader style={{ textAlign: "center" }}>
            <p style={{ fontSize: 20 }}>CONNECTER VOUS</p>
            {errorMessage && (
              <Alert
                message=""
                description={errorMessage}
                type="error"
                showIcon
              />
            )}
          </CardHeader>
          <br />
          <Form
            onSubmit={(event) => login(event)}
            style={{ minWidth: 400, paddingRight: 20, paddingLeft: 10 }}
          >
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

            <FormGroup>
              <Checkbox> Se souvenir de moi</Checkbox>
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="submit" block>
                Connexion
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
