import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./desktop.scss";
import NoteItem from "./NoteItem/NoteItem";
const adres = "https://raect-life-http.herokuapp.com";
// const adres = "http://localhost";

const port = "";
const url = `${adres}:${port}/notes`;

const initForm = {
  textarea: "",
};

function Crude() {
  const [form, setForm] = useState(initForm);
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veli   consequuntur expedita fugiat, quae sequi nihil? Ipsum laudantium  inventore velit sint!",
    },
  ]);
  ////
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  ////
  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: uuidv4(),
        content: form.textarea,
      }),
    })
      .then(() => {
        UpdateNotes();
      })
      .catch((error) => {
        console.error(error);
      });
    setForm(initForm);
  };
  //
  const UpdateNotes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((notes) => {
        setNotes(notes);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //
  const handleDell = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        UpdateNotes();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    UpdateNotes();
  }, []);

  return (
    <div className="Crude">
      <div className="Crude__top">
        <h2 className="top-title">Notes</h2>
        <i onClick={() => UpdateNotes()} className="material-icons sync">
          sync
        </i>
      </div>
      <div className="Crude__row">
        {notes ? (
          notes.map((item) => {
            return (
              <NoteItem
                key={item.id}
                id={item.id}
                content={item.content}
                handleDell={handleDell}
              />
            );
          })
        ) : (
          <div> Загрузка </div>
        )}
      </div>
      <form className="Crude__form" onSubmit={handleSubmit}>
        <label className="Crude_lable" htmlFor="new">
          New Note
        </label>
        <textarea
          id="new"
          name="textarea"
          className={"input-new  Crude-input"}
          value={form.textarea}
          onChange={handleChange}
        />
        <input type="submit" className="material-icons send" value="send" />
      </form>
    </div>
  );
}

export default Crude;
