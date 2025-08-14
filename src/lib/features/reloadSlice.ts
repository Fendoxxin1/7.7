import { createSlice } from "@reduxjs/toolkit";

export interface IReload {
    reload: boolean
}

const initialState: IReload = {
    reload: false,
  };
  
  export const reloadSlice = createSlice({
    name: "reload",
    initialState,
    reducers: {
      useReload: (state: IReload) => {
        state.reload = !state.reload;
      },
    },
  });
  
  export const { useReload } = reloadSlice.actions;
  export default reloadSlice.reducer;