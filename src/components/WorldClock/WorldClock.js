import React, { useState } from "react";
import FormClock from "./FormClock/FormClock";
import "./desktop.scss";
import ClockItem from "./ClockItem/ClockItem";

const initForm = {
  timeShift: 0,
  name: "",
};

function WorldClock() {
  const [form, setForm] = useState(initForm);
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="WordClock">
      <div className="WordClock-row">
        <FormClock
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <ClockItem />
      </div>
    </div>
  );
}

export default WorldClock;
