import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreApp } from "../redux";
import { setCloseModal } from "../redux/slices/modal/modal_slice";

export const Modal = () => {
  const { openModal, childrenModal, backdropClick, sizeModal } = useSelector(
    (state: StoreApp) => state.modal
  );
  const dispatch = useDispatch();

  const onClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    if (backdropClick) {
      if (reason && reason == "backdropClick") return;
    }
    dispatch(setCloseModal());
  };
  return (
    <Dialog
      open={openModal}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={sizeModal}
      fullWidth
      role="note"
      // TransitionComponent={Transition}
      keepMounted
      sx={{
        backdropFilter: "blur(10px)",
      }}
    >
      <DialogContent className={`p-0 m-0`}>{childrenModal}</DialogContent>
    </Dialog>
  );
};
