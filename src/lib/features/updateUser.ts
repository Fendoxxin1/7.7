import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IStudent } from "../../types";

export interface IEditing {
  editing: IStudent | null;
}

const initialState: IEditing = {
  editing: null,
};

export const reloadSlice = createSlice({
  name: "reload",
  initialState,
  reducers: {
    setEditing: (state, actions: PayloadAction<IStudent | null>) => {
      state.editing = actions.payload;
    },
  },
});

export const { setEditing } = reloadSlice.actions;
export default reloadSlice.reducer;