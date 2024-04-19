import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Users from "../../../@types/Users";
import { deleteUser } from "../../../actions/Users/action";

interface UserDeletePropsType {
  user: Users;
  refresh: () => void;
}

const UserDelete = ({ user, refresh }: UserDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteUser(user, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button onClick={() => setIsOpened(true)} color="danger">
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          Supprimer Candidat
        </ModalHeader>
        <ModalBody>
          Vous voulez supprimer le candidat {user.nom} {user.prenom} ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
            Valider
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserDelete;
