import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  openModal: boolean;
  childrenModal: React.ReactElement | null;
  backdropClick: boolean;
  openSideBar: boolean;
  sizeModal: "xs" | "sm" | "md" | "lg" | "xl";
}

const initialState: ModalState = {
  openModal: false,
  childrenModal: null,
  backdropClick: false,
  openSideBar: false,
  sizeModal: "md",
};

interface OpenModalAction {
  openModal: boolean;
  childrenModal: React.ReactElement | null;
  backdropClick: boolean;
  sizeModal: "xs" | "sm" | "md" | "lg" | "xl";
}

export const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<OpenModalAction>) => {
      state.openModal = action.payload.openModal;
      state.childrenModal = action.payload.childrenModal;
      state.backdropClick = action.payload.backdropClick;
      state.sizeModal = action.payload.sizeModal;
    },
    setCloseModal: (state) => {
      state.openModal = false;
      state.childrenModal = null;
      state.backdropClick = false;
      state.sizeModal = "md";
    },
  },
});

export const { setCloseModal, setOpenModal } = ModalSlice.actions;
