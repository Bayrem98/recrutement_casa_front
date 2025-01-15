import React, { useState } from "react";
import { Button, Card, FormGroup, Input, Label } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const AgendaPage = () => {
  // Configuration du localisateur de date avec moment
  const localizer = momentLocalizer(moment);

  // États pour gérer la date, l'utilisateur sélectionné et les événements
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<{ nom: string; prenom: string } | null>(null);
  const [events, setEvents] = useState<{ title: string; start: Date; end: Date }[]>([]);

  // Gérer la sélection de date
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedDate(e.target.value);

  // Gérer la saisie des informations utilisateur
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>, field: "nom" | "prenom") => {
    setSelectedUser((prevUser: any) => ({
      ...prevUser,
      [field]: e.target.value,
    }));
  };

  // Ajouter un rendez-vous
  const handleValidateRdv = () => {
    if (selectedDate && selectedUser?.nom && selectedUser?.prenom) {
      setEvents([
        ...events,
        {
          title: `${selectedUser.nom} ${selectedUser.prenom}`,
          start: new Date(selectedDate),
          end: new Date(selectedDate), // Si besoin, vous pouvez ajuster l'heure
        },
      ]);
      setSelectedDate("");
      setSelectedUser(null);
    } else {
      alert("Veuillez remplir tous les champs avant de valider le rendez-vous.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card body>
        <h3>Planifier un Rendez-vous</h3>
        <FormGroup>
          <Label for="date">Date :</Label>
          <Input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nom">Nom :</Label>
          <Input
            type="text"
            id="nom"
            placeholder="Nom"
            value={selectedUser?.nom || ""}
            onChange={(e) => handleUserChange(e, "nom")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="prenom">Prénom :</Label>
          <Input
            type="text"
            id="prenom"
            placeholder="Prénom"
            value={selectedUser?.prenom || ""}
            onChange={(e) => handleUserChange(e, "prenom")}
          />
        </FormGroup>
        <Button color="primary" onClick={handleValidateRdv}>
          Valider RDV
        </Button>
      </Card>

      <div style={{ marginTop: "20px" }}>
        <h3>Agenda</h3>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default AgendaPage;
