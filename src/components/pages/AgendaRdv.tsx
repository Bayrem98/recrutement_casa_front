import React, { useState } from "react";
import { Alert, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Navbard3 from "../parts/Navbard3";
import Sidebar from "../parts/Sidebar";
import dayjs from "dayjs";

const AgendaRdv = () => {
  const [value, setValue] = useState(() => dayjs("2024-01-1"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2024-01-1"));

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="fr-page" style={{ paddingBottom: 172 }}>
        <Navbard3 />
        <div className="d-flex justify-content">
          <Sidebar />
          <div style={{ marginTop: 65 }}>
            <h3 style={{ color: "white", marginLeft: 10, textAlign: "center" }}>
              RDV fixé pour les candidats
            </h3>
            <Alert
              style={{ width: "98%", marginLeft: 10 }}
              message={`Vous avez sélectionné: Sayeh Bayrem ${selectedValue?.format(
                "YYYY-MM-DD"
              )}`}
            />
            <Calendar
              style={{ width: "98%", marginLeft: 10 }}
              value={value}
              onSelect={onSelect}
              onPanelChange={onPanelChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendaRdv;
