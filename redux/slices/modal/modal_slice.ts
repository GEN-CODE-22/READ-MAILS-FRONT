import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  openModal: boolean;
  childrenModal: React.ReactElement | null;
  backdropClick: boolean;
  openSideBar: boolean;
}

const initialState: ModalState = {
  openModal: false,
  childrenModal: null,
  backdropClick: false,
  openSideBar: false,
};

interface OpenModalAction {
  openModal: boolean;
  childrenModal: React.ReactElement | null;
  backdropClick: boolean;
}

export const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<OpenModalAction>) => {
      state.openModal = action.payload.openModal;
      state.childrenModal = action.payload.childrenModal;
      state.backdropClick = action.payload.backdropClick;
    },
    setCloseModal: (state) => {
      state.openModal = false;
      state.childrenModal = null;
      state.backdropClick = false;
    },
  },
});

export const { setCloseModal, setOpenModal } = ModalSlice.actions;
