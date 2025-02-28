import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useEffect, useRef } from "react";

import styles from "./DeleteContactPopup.module.css";

const DeleteContactPopup = ({ open, payload, onClose, onDelete }) => {
  const btnRef = useRef();

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, [btnRef]);

  return (
    <Dialog fullWidth open={open} onClose={() => onClose()}>
      <DialogTitle textAlign="center">Delete Confirmation</DialogTitle>
      <DialogContent
        sx={{
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Alert
          severity="error"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Are you sure you want to delete the contact "{payload.name}"
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button className={styles.btnModal} onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          className={styles.btnModal}
          ref={btnRef}
          onClick={() => onDelete(payload)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactPopup;
