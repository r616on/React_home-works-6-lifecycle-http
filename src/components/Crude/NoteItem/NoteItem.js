import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const NoteItem = (props) => {
  return (
    <div className="NoteItem">
      <span className="material-icons NoteItem-close">close</span>
      <div className="NoteItem-row">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore
        et doloremque qui dignissimos provident. Distinctio, esse rerum, fuga
        quisquam numquam perferendis beatae temporibus eum consequuntur, dolores
        laboriosam quam et.
      </div>
    </div>
  );
};

NoteItem.propTypes = {};

export default NoteItem;
