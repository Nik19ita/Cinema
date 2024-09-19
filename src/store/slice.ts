import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeModal = "login" | "register" | "succes";
type likeView = "like" | "aslike";

type TodosState = {
  modal: {
    open: boolean;
    typeModal: typeModal;
  };
  likeView: likeView;
};

const initialState: TodosState = {
  modal: {
    open: false,
    typeModal: "login",
  },
  likeView: "aslike",
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
    changeLikeView(state, action: PayloadAction<likeView>) {
      state.likeView = action.payload;
    },
  },
});

export const { isOpenModal, changeModal, changeLikeView } =
  projectSlice.actions;

export default projectSlice.reducer;
