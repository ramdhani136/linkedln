import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    hargaSatuan: 16000,
    jumlah: 0,
    totalBayar: 0,
    lainnya: null,
  },
  reducers: {
    tambah: (state) => {
      state.jumlah = state.jumlah + 1;
      state.totalBayar = state.jumlah * state.hargaSatuan;
    },
    kurang: (state) => {
      if (state.jumlah > 0) {
        state.jumlah = state.jumlah - 1;
        state.totalBayar = state.totalBayar - state.hargaSatuan;
      }
    },
    masukdata: (state, action) => {
      state.lainnya = action.payload;
    },
  },
});

export const { tambah, kurang, masukdata } = appSlice.actions;

export const selectData = (state) => state.app;

export default appSlice.reducer;
