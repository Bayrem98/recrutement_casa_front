import { useEffect, useState } from "react";
import Admin from "../../@types/Admin";
import Navbard3 from "../parts/Navbard3";
import Sidebar from "../parts/Sidebar";
import { ButtonGroup, Card, CardBody, CardHeader, Table } from "reactstrap";
import { getAdmin } from "../../actions/Admin/action";
import AdminEdit from "../AdminDashboard/admin/AdminEdit";

const Profil = () => {
  const [admins, setAdmins] = useState<Admin | null>(null);

  useEffect(() => {
    if (userIda) getAdmin(userIda, setAdmins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userIda = localStorage.getItem("user_id");

  return (
    <>
      <div className="fr-page" style={{ paddingBottom: 430 }}>
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
              <h5>Votre Profil</h5>
            </CardHeader>
            <CardBody>
              <div className="d-flex justify-content">
                <p>Tu peux juste changer ton mot passe dans cette espace.</p>
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
                <th>Nom d'utilisateur</th>
                <th>Mot de passe</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins && (
                <tr key={admins._id}>
                  <td>{admins.username}</td>
                  <td>{admins.password}</td>
                  <td style={{ textAlign: "center" }}>
                    <ButtonGroup>
                      <AdminEdit admin={admins} refresh={() => getAdmin} />
                    </ButtonGroup>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default Profil;
