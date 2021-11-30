import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./desktop.scss";
import NoteItem from "./NoteItem/NoteItem";

function Crude() {
  return (
    <div className="Crude">
      <div className="Crude__top">
        <h2 className="top-title">Notes</h2>
        <i className="material-icons sync">sync</i>
      </div>
      <div className="Crude__row">
        <NoteItem />
      </div>
      <form className="Crude__form">
        <label className="Crude_lable" htmlFor="new">
          New Note
        </label>
        <textarea
          id="new"
          name="new"
          className={"input-new  Crude-input"}
          //   value={form.name}
          //   onChange={onChange}
        />
        <input type="submit" className="material-icons send" value="send" />
      </form>
    </div>
  );
}

export default Crude;
