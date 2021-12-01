import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

const NoteItem = ({ content, id, handleDell }) => {
  return (
    <div className="NoteItem">
      <span
        onClick={() => handleDell(id)}
        className="material-icons NoteItem-close"
      >
        close
      </span>
      <div className="NoteItem-row">{content}</div>
    </div>
  );
};

NoteItem.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  handleDell: PropTypes.func,
};

export default NoteItem;
