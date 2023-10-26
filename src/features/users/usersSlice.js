import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Faizan Abbasi'},
  { id: '1', name: 'Sameed Atif'},
  { id: '2', name: 'Asif Khan'},
]

const usersSlice = createSlice ({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer