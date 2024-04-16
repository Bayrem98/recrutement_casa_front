import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Users from "../../../@types/Users";
import { getUsers } from "../../../actions/Users/action";

interface Props {}

const UsersTable = (props: Props) => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <>
      <div className="users-space">
        <div className="d-flex justify-content-between">
          <p className="users-space-title">Tableau des utilisateurs</p>
        </div>
        <br />
        <Table bordered hover>
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
              <th>Niveau d'education</th>
              <th>Specialite</th>
              <th>experience professionnelle</th>
              <th>question1</th>
              <th>question2</th>
              <th>question3</th>
              <th>CV</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length ? (
              users.map((user) => (
                <tr className="userstable-tbody" key={user._id}>
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
                  <td>{user.niveau}</td>
                  <td>{user.specia}</td>
                  <td>{user.experi}</td>
                  <td>{user.question1}</td>
                  <td>{user.question2}</td>
                  <td>{user.question3}</td>
                  <td>{user.cover_cv}</td>
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

export default UsersTable;
