import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Table,
} from "reactstrap";
import Navbard3 from "../parts/Navbard3";
import Sidebar from "../parts/Sidebar";
import { useEffect, useState } from "react";
import Users from "../../@types/Users";
import { getUsers } from "../../actions/Users/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { DesktopOutlined } from "@ant-design/icons";

const DashboardAdmin = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);
  return (
    <>
      <div className="fr-page">
        <Navbard3 />
        <div className="d-flex justify-content">
          <Sidebar />
          <Card
            style={{
              width: "100%",
              height: 179,
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
                  <p>Légendaire couleur</p>
                  <Button color="success" style={{ marginLeft: 10 }}>
                    Accepter
                  </Button>
                  <Button
                    color="warning"
                    style={{ marginRight: 10, marginLeft: 10 }}
                  >
                    En cours
                  </Button>
                  <Button color="danger">Réfuser</Button>
                </div>
                <div
                  className="d-flex justify-content"
                  style={{ position: "absolute", left: 500, top: 60 }}
                >
                  <FormGroup style={{ marginRight: 30, marginLeft: 100 }}>
                    <Label>Date</Label>
                    <Input type="date" style={{ width: 135 }} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Filter</Label>
                    <Input type="text" style={{ width: 120 }} />
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
            {Array.isArray(users) && users.length ? (
              users.map((user) => (
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
                    <Button color="warning"></Button>
                  </td>
                  <td>
                    <Button outline>
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
      </div>
    </>
  );
};

export default DashboardAdmin;
