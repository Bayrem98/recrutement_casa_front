import { ChangeEvent, useState } from "react";
import Admin from "../../../@types/Admin";
import { editAdmin } from "../../../actions/Admin/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { faPen } from "@fortawesome/free-solid-svg-icons";

interface AdminEditPropsType {
  admin: Admin;
  refresh: () => void;
}

const AdminEdit = ({ admin, refresh }: AdminEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [username, setUsername] = useState<string>(admin.username);
  const [password, setPassword] = useState<string>(admin.password);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    const newAdmin = {
      _id: admin._id,
      username,
      password,
    };
    editAdmin(newAdmin, () => {
      refresh();
      setIsOpened(false);
      window.location.reload();
      reset(newAdmin);
    });
  };

  const reset = (admin: Admin) => {
    setUsername(admin.username);
    setPassword(admin.password);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  };

  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <span onClick={() => setIsOpened(true)} style={{ cursor: "pointer" }}>
        <Button
          style={{
            backgroundColor: "#ffcc00",
            color: "black",
            border: 0,
            width: 50,
            marginRight: 3,
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </span>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader style={{ backgroundColor: "black", color: "white" }}>
          <span style={{ fontSize: 18, color: "white" }}>
            Modifier votre mot de passe
          </span>

          <span
            onClick={() => setIsOpened(false)}
            style={{
              position: "absolute",
              right: 10,
              top: 12,
              cursor: "pointer",
              color: "white",
            }}
          >
            X
          </span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Nom d'utilisateur</Label>
              <Input
                value={username}
                id="username"
                name="username"
                type="text"
                onChange={handleUsernameChange}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Mot de passe</Label>
              <div className="d-flex justify-content-between">
                <Input
                  value={password}
                  id="password"
                  name="password"
                  onChange={handlePasswordChange}
                  type={passwordShown ? "text" : "password"}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  style={{
                    color: "white",
                    cursor: "pointer",
                    backgroundColor: "black",
                    border: 0,
                    marginLeft: 3,
                  }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </Button>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter style={{ backgroundColor: "black" }}>
          <Button color="success" onClick={submit} disabled={!password}>
            Valider
          </Button>{" "}
          <Button color="danger" onClick={() => setIsOpened(false)}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AdminEdit;
