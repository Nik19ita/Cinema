import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeModal = "login" | "register" | "succes";
type typeLikeView = "like" | "aslike";
type typeAlertMessege = boolean;

type TodosState = {
  modal: {
    open: boolean;
    typeModal: typeModal;
  };
  likeView: typeLikeView;
  alertMessege: typeAlertMessege;
};

const initialState: TodosState = {
  modal: {
    open: false,
    typeModal: "login",
  },
  likeView: "aslike",
  alertMessege: false,
};

const projectSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    isOpenModal(state, action: PayloadAction<boolean>) {
      state.modal.open = action.payload;
    },
    changeModal(state, action: PayloadAction<typeModal>) {
      state.modal.typeModal = action.payload;
    },
    changeLikeView(state, action: PayloadAction<typeLikeView>) {
      state.likeView = action.payload;
    },
    changeAlertMessage(state, action: PayloadAction<typeAlertMessege>) {
      state.alertMessege = action.payload;
    },
  },
});

export const { isOpenModal, changeModal, changeLikeView, changeAlertMessage } =
  projectSlice.actions;

export default projectSlice.reducer;
