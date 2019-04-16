import React from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";
import classes from "./NewConversation.module.css";

const NewConversation = ({ onCancel }) => {
  return (
    <div className={cx(classes.newConversation, "p-2")}>
      <p>New</p>
      <div className="d-flex justify-content-between">
        <Button variant="danger" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="primary">Create</Button>
      </div>
    </div>
  );
};

export default NewConversation;