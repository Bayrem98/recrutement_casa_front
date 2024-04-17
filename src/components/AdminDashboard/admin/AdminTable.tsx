import { useEffect, useState } from "react";
import { ButtonGroup, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Admin from "../../../@types/Admin";
import { getAdmins } from "../../../actions/Admin/action";
import AdminAdd from "./AdminAdd";
import AdminDelete from "./AdminDelete";

interface Props {}

const AdminsTable = (props: Props) => {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    getAdmins(setAdmins);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="users-table-container"
        style={{ paddingTop: 80, paddingLeft: 25, paddingRight: 25 }}
      >
        <div className="d-flex justify-content-between">
          <h3>Tableau des Admins</h3>
          <AdminAdd refresh={() => getAdmins(setAdmins)} />
        </div>
        <br />
        <div style={{ marginLeft: 50, marginRight: 50 }}>
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.length ? (
                admins.map((admin) => (
                  <tr key={admin._id}>
                    <td>{admin.username}</td>
                    <td>{admin.password}</td>
                    <td style={{ textAlign: "center" }}>
                      <ButtonGroup>
                        <AdminDelete
                          admin={admin}
                          refresh={() => getAdmins(setAdmins)}
                        />
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">
                    <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                    <br />
                    Pas des données...
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminsTable;
