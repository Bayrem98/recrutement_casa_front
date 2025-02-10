import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
} from "reactstrap";
import Navbard3 from "../parts/Navbard3";
import Sidebar from "../parts/Sidebar";
import { useEffect, useState } from "react";
import Users from "../../@types/Users";
import { getUser, getUsers } from "../../actions/Users/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { DesktopOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { Steps } from "antd";
import UserDelete from "../AdminDashboard/users/UsersDelete";
import axios from "axios";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Admin from "../../@types/Admin";
import { getAdmin } from "../../actions/Admin/action";

const fields = [
  {
    key: "Accepter",
    name: "Accepter",
  },
  {
    key: "En cours",
    name: "En cours",
  },
  {
    key: "Réfuser",
    name: "Réfuser",
  },
  {
    key: "RDV",
    name: "RDV",
  },
];

const DashboardAdmin = () => {
  let { userId } = useParams();
  const [users, setUsers] = useState<Users[]>([]);
  const [oneUser, setOneUser] = useState<Users | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [dateRDV, setDateRDV] = useState("");
  const [userStatus, setUserStatus] = useState<{
    [userId: string]: { status: string; color: string };
  }>({});
  const [filter, setFilter] = useState<string>("");
  const [filter2, setFilter2] = useState<string>("");
  const [formateur, setFormateur] = useState<Admin | null>(null);
  const [userRDV, setUserRDV] = useState<{
    [userId: string]: { dateRDV: string };
  }>({});

  const handleDateChange = (event: any) => {
    const newDate = event.target.value;
    setDateRDV(newDate);
  };

  const userIda = localStorage.getItem("user_id");

  useEffect(() => {
    if (userIda) {
      getAdmin(userIda, setFormateur);
    }
  }, [userIda]);

  useEffect(() => {
    getUsers(null, setUsers);
  }, []);

  useEffect(() => {
    if (userId) {
      getUser(userId, setOneUser);
    }
  }, [userId]);

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

  const handleChangeStatus = (
    userId: string,
    newStatus: string,
    newColor: string
  ) => {
    // Mettre à jour l'état local
    setUserStatus((prevState) => ({
      ...prevState,
      [userId]: { status: newStatus, color: newColor },
    }));
    window.location.reload();

    // Stocker les données dans le stockage local du navigateur
    localStorage.setItem(
      `userStatus_${userId}`,
      JSON.stringify({ status: newStatus, color: newColor })
    );

    // Envoyer la requête au serveur
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/changestatus/${userId}`, {
        status: { status: newStatus, color: newColor }, // Envoyer un objet contenant à la fois l'état et la couleur
      })
      .then((response) => {
        console.log("Le statut de l'utilisateur a été changé", response.data);
        setIsOpened(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors du changement du statut de l'utilisateur",
          error
        );
      });
  };

  const docs = oneUser?.cover_cv ? [{ uri: oneUser.cover_cv }] : [];

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case "accepter":
        return "green";
      case "réfuser":
        return "red";
      case "en cours":
        return "yellow";
      case "RDV":
        return "blue";
      default:
        return "";
    }
  };

  const renderDisabledComponent = (user: Users | null): boolean => {
    return (
      !!user &&
      !!user.status &&
      user.status.status === "injoignable" &&
      user.status.color === "black"
    );
  };

  useEffect(() => {
    // Récupérer tous les utilisateurs
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });

    // Récupérer l'utilisateur spécifique en fonction de userId de l'URL
    if (userId) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
        .then((response) => {
          setOneUser(response.data);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération de l'utilisateur :",
            error
          );
        });
    }
  }, [userId]);

  const handleSubmitRDV = (userId: string, dateRDVfixe: string) => {
    if (!userId || !dateRDVfixe) {
      alert("Veuillez sélectionner un utilisateur et une date de RDV.");
      return;
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/users/appointments/${userId}`, {
        dateRDV: dateRDVfixe,
      })
      .then((response) => {
        alert("RDV fixé avec succès !");
        console.log("RDV fixé :", response.data);
        setIsOpened(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la fixation du RDV :", error);
      });
  };

  return (
    <>
      <div className="fr-page" style={{ paddingBottom: 400 }}>
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
            }}
          >
            <CardHeader>
              <h5>Tableaux des candidats</h5>
            </CardHeader>
            <CardBody>
              <div className="d-felx justify-content">
                <div className="d-flex justify-content">
                  <p>Légendaire Couleur :</p>
                  <Card
                    color="white"
                    style={{
                      marginLeft: 10,
                      color: "black",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                    }}
                  >
                    Pas encore
                  </Card>
                  <Card
                    color="success"
                    style={{
                      marginLeft: 10,
                      color: "white",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                    }}
                  >
                    Accepter
                  </Card>
                  <Card
                    color="warning"
                    style={{
                      marginRight: 10,
                      marginLeft: 10,
                      color: "white",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                    }}
                  >
                    En cours
                  </Card>
                  <Card
                    color="danger"
                    style={{
                      color: "white",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                    }}
                  >
                    Réfuser
                  </Card>
                </div>
                <div
                  className="d-flex justify-content"
                  style={{ position: "absolute", left: 600, top: 60 }}
                >
                  <FormGroup style={{ marginRight: 30, marginLeft: 100 }}>
                    <Input type="date" style={{ width: 150 }} />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      placeholder="Filtre par nom"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      type="text"
                      style={{ width: 150 }}
                    />
                    <Label style={{ color: "white", paddingTop: 10 }}>
                      Filtre par status
                    </Label>
                    <Input
                      value={filter2}
                      onChange={(e) => setFilter2(e.target.value)}
                      type="select"
                      style={{ width: 150, cursor: "pointer" }}
                    >
                      <option value="">Tous status...</option>
                      {fields.map((f) => (
                        <option key={f.key} value={f.key}>
                          {f.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
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
                .filter(
                  (user) =>
                    (user.nom || "")
                      .toLowerCase()
                      .includes((filter || "").toLowerCase()) &&
                    (user.status.status || "")
                      .toLowerCase()
                      .includes((filter2 || "").toLowerCase())
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
                        style={{
                          height: 35,
                          width: 100,
                          backgroundColor: getStatusColor(
                            user?.status?.status || ""
                          ),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: getStatusColor(
                              user?.status?.status || ""
                            ),
                          }}
                        >
                          {user?.status?.status}
                        </span>
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
                        3-Avez-vous une idée plus précise sur la nature de notre
                        activité ?
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
                      <a href={oneUser?.cover_cv}>Télécharger et voir</a>
                      <DocViewer
                        documents={docs}
                        pluginRenderers={DocViewerRenderers}
                      />
                    </div>
                  ),
                },
                {
                  title: <h4>Auteur :</h4>,
                  description: (
                    <div key={formateur?._id}>
                      <p style={{ color: "black" }}>{formateur?.username}</p>
                    </div>
                  ),
                },
                {
                  title: <h4>Décision de auteur:</h4>,
                  description: (
                    <>
                      <div className="">
                        <FormGroup>
                          <Label
                            style={{
                              fontSize: 18,
                              color: "black",
                              marginRight: 8,
                            }}
                          >
                            Ne répond pas
                          </Label>
                          <Input
                            disabled={renderDisabledComponent(oneUser)}
                            type="radio"
                            style={{ fontSize: 22, cursor: "pointer" }}
                            onClick={() => {
                              oneUser &&
                                oneUser._id &&
                                handleChangeStatus(
                                  oneUser._id,
                                  "En cours",
                                  "yellow"
                                );
                              setIsOpened(false);
                            }}
                          ></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label
                            style={{
                              fontSize: 18,
                              color: "black",
                              marginRight: 8,
                            }}
                          >
                            Fix RDV
                          </Label>
                          <div className="d-flex justify-content">
                            <Input
                              type="date"
                              style={{ width: 200 }}
                              onChange={handleDateChange}
                            />
                            <br />

                            <Button
                              color="info"
                              style={{ color: "white" }}
                              onClick={() => {
                                oneUser &&
                                  oneUser._id &&
                                  handleChangeStatus(
                                    oneUser._id,
                                    "RDV",
                                    "blue"
                                  );
                              }}
                            >
                              Valider le RDV
                            </Button>
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label
                            style={{
                              fontSize: 18,
                              color: "black",
                              marginRight: 8,
                            }}
                          >
                            Fix RDV
                          </Label>
                          <div className="d-flex align-items-center">
                            <Input
                              type="date"
                              style={{ width: 200, marginRight: 10 }}
                              onChange={handleDateChange}
                            />
                            <Button
                              color="info"
                              style={{ color: "white" }}
                              onClick={() => {
                                if (oneUser && oneUser._id) {
                                  handleSubmitRDV(oneUser._id, dateRDV);
                                }
                              }}
                            >
                              Valider le RDV
                            </Button>
                            {dateRDV && <p>RDV fixé le {dateRDV}</p>}
                          </div>
                        </FormGroup>
                      </div>
                      <div></div>
                    </>
                  ),
                },
                {
                  title: <h4>Responsable Reponse :</h4>,
                  description: (
                    <div>
                      <br />
                      <Button
                        block
                        outline
                        color="success"
                        onClick={() => {
                          oneUser &&
                            oneUser._id &&
                            handleChangeStatus(
                              oneUser._id,
                              "Accepter",
                              "green"
                            );
                          setIsOpened(false);
                        }}
                      >
                        Accepter
                      </Button>
                      <br />
                      <Button
                        block
                        outline
                        color="warning"
                        onClick={() => {
                          oneUser &&
                            oneUser._id &&
                            handleChangeStatus(
                              oneUser._id,
                              "En cours",
                              "yellow"
                            );
                          setIsOpened(false);
                        }}
                      >
                        En cours
                      </Button>
                      <br />
                      <Button
                        block
                        outline
                        color="danger"
                        onClick={() => {
                          oneUser &&
                            oneUser._id &&
                            handleChangeStatus(oneUser._id, "Réfuser", "red");
                          setIsOpened(false);
                        }}
                      >
                        Réfuser
                      </Button>
                    </div>
                  ),
                },
              ]}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default DashboardAdmin;
