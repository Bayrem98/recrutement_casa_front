import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";
import Navbard3 from "../parts/Navbard3";
import Sidebar from "../parts/Sidebar";
import { useEffect, useState } from "react";
import Users from "../../@types/Users";
import { getUsers } from "../../actions/Users/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { DesktopOutlined } from "@ant-design/icons";
import UserDelete from "../AdminDashboard/users/UsersDelete";
import { Steps } from "antd";

const CandidatAccepte = () => {
  let { userId } = useParams();
  let { stat } = useParams();
  const [filter, setFilter] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);
  const [oneUser, setOneUser] = useState<Users | undefined>();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<{
    [userId: string]: { status: string; color: string };
  }>({});

  useEffect(() => {
    getUsers({ status: { status: "Accepter", color: "green" } }, setUsers);
    if (users) {
      setOneUser(users[0]);
    }
  }, [stat, userId, users]);

  const openUserModal = (user: Users) => {
    const storedStatus = localStorage.getItem(`userStatus_${user._id || ""}`);
    const status = storedStatus
      ? JSON.parse(storedStatus)
      : { status: "", color: "" };

    setOneUser({
      ...user,
      status: status,
    });
    setIsOpened(true);
  };

  return (
    <>
      <div className="fr-page" style={{ paddingBottom: 420 }}>
        <Navbard3 />
        <div className="d-flex justify-content">
          <Sidebar />
          <Card
            style={{
              height: 130,
              marginTop: 108,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 5,
              width: "90%",
            }}
          >
            <CardHeader>
              <h5>Tableaux des Candidats Accepter</h5>
            </CardHeader>
            <CardBody>
              <div className="d-flex justify-content">
                <FormGroup style={{ marginRight: 30, marginLeft: 100 }}>
                  <Input type="date" style={{ width: 150 }} />
                </FormGroup>
                <FormGroup>
                  <Input
                    placeholder="Chercher içi..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    style={{ width: 150 }}
                  />
                </FormGroup>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="">
          <Table
            bordered
            hover
            responsive
            style={{ width: "83%", marginLeft: 200 }}
          >
            <thead style={{ fontSize: 10 }}>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Num CIN</th>
                <th>Date de Naissance</th>
                <th>Num tel1</th>
                <th>Num tel2</th>
                <th>Adresse</th>
                <th>Ville</th>
                <th>Code Postal</th>
                <th>Email</th>
                <th>Situation familliale</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users
                  .filter((user) =>
                    user.nom.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((user) => (
                    <tr key={user._id} style={{ fontSize: 12 }}>
                      <td>{user.nom}</td>
                      <td>{user.prenom}</td>
                      <td>{user.num_cin}</td>
                      <td>{user.date_naiss}</td>
                      <td>{user.num_tel1}</td>
                      <td>{user.num_tel2}</td>
                      <td>{user.adresse}</td>
                      <td>{user.ville}</td>
                      <td>{user.code_p}</td>
                      <td>{user.email}</td>
                      <td>{user.situation}</td>
                      <td>
                        <Card
                          color="success"
                          style={{
                            height: 35,
                            width: 100,
                            backgroundColor:
                              user && user._id && userStatus[user._id]
                                ? userStatus[user._id].color
                                : "",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {user && user._id && userStatus[user._id]
                            ? userStatus[user._id].status
                            : user.status?.status}
                        </Card>
                      </td>
                      <td>
                        <Button outline onClick={() => openUserModal(user)}>
                          <DesktopOutlined />
                        </Button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td
                    colSpan={18}
                    className="text-center p-5"
                    style={{ color: "#0e0e0ee7" }}
                  >
                    <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                    <br />
                    Pas des données...
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Modal
            centered
            scrollable
            isOpen={isOpened}
            toggle={() => setIsOpened(!isOpened)}
            style={{ minWidth: 1000 }}
          >
            <ModalHeader style={{ backgroundColor: "gray" }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontSize: 14 }}>Nom et Prénom:</p>
                <h5 style={{ color: "white", marginLeft: 30 }}>
                  {oneUser && oneUser.nom} {oneUser && oneUser.prenom}
                </h5>
                <span
                  onClick={() => setIsOpened(false)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: 10,
                    color: "white",
                  }}
                >
                  X
                </span>
              </div>
            </ModalHeader>
            <ModalBody>
              <div style={{ position: "absolute", right: 10 }}>
                {oneUser && (
                  <UserDelete
                    user={oneUser}
                    refresh={() => getUsers(null, setUsers)}
                  />
                )}
              </div>
              <br />
              <Steps
                progressDot
                current={6}
                direction="vertical"
                items={[
                  {
                    title: <h4>Coordonnées Personnelle :</h4>,
                    description: (
                      <div>
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Numéro CIN:
                          </h6>
                          {oneUser && oneUser.num_cin}
                          <h6 style={{ marginLeft: 348, marginRight: 8 }}>
                            Date de naissance:
                          </h6>
                          {oneUser && oneUser.date_naiss}
                        </div>
                        <br />
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Numéro de téléphone:
                          </h6>
                          {oneUser && oneUser.num_tel1}/
                          {oneUser && oneUser.num_tel2}
                          <h6 style={{ marginLeft: 275, marginRight: 8 }}>
                            Adresse:
                          </h6>
                          {oneUser && oneUser.adresse}
                        </div>
                        <br />
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Ville:
                          </h6>
                          {oneUser && oneUser.ville}
                          <h6 style={{ marginLeft: 425, marginRight: 8 }}>
                            Code postal:
                          </h6>
                          {oneUser && oneUser.code_p}
                        </div>
                        <br />
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Email:
                          </h6>
                          {oneUser && oneUser.email}
                          <h6 style={{ marginLeft: 286, marginRight: 8 }}>
                            Situation familiale:
                          </h6>
                          {oneUser && oneUser.situation}
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: <h4>Etudes et Expériences:</h4>,
                    description: (
                      <div>
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Niveau d'etude:
                          </h6>
                          {oneUser && oneUser.niveau}
                          <h6 style={{ marginLeft: 320, marginRight: 8 }}>
                            Spécialite:
                          </h6>
                          {oneUser && oneUser.specia}
                        </div>
                        <br />
                        <div className="d-flex justify-content">
                          <h6 style={{ marginRight: 8, marginLeft: 20 }}>
                            Experience professionnelle:
                          </h6>
                          {oneUser && oneUser.experi}
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: <h4>Divers :</h4>,
                    description: (
                      <div>
                        <h6> 1-Avez-vous déjà entendu parler de nous ?</h6>
                        <p>Réponse :</p>
                        {oneUser && oneUser.question1}
                        <br />
                        <br />
                        <h6>2-Quelles sont vos motivations pour ce poste ?</h6>
                        <p>Réponse :</p>
                        {oneUser && oneUser.question2}
                        <br />
                        <br />
                        <h6>
                          3-Avez-vous une idée plus précise sur la nature de
                          notre activité ?
                        </h6>
                        <p>Réponse :</p>
                        {oneUser && oneUser.question3}
                      </div>
                    ),
                  },
                  {
                    title: <h4>Curriculum Vitae :</h4>,
                    description: (
                      <div>
                        <Card style={{ width: 500, height: 300 }}>
                          <img src={oneUser?.cover_cv} alt="." width={200} />
                        </Card>
                      </div>
                    ),
                  },
                  {
                    title: <h4>Auteur :</h4>,
                    description: (
                      <div>
                        <p>Le nom de responsable traite la demande</p>
                      </div>
                    ),
                  },
                  {
                    title: <h4>Entretien passer :</h4>,
                    description: <div>Le 22/06/2024</div>,
                  },
                ]}
              />
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default CandidatAccepte;
