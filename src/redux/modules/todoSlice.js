import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  todos:[],
  isLoading: false,
  isError: false,
  error:null,
}

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (paload, thunkAPI)=>{
    try{
      const response = await axios.get('http://localhost:4000/todos');
      console.log('respose', response.data)
      //toolkit에서 제공하는 API
      //Promise -> resolve(=네트워크 요청이 성공한 경우) -> dispatch해주는 기능을 가진 API
      return thunkAPI.fulfillWithValue(response.data);
  } catch(error){
    console.log('error', error)
    thunkAPI.rejectWithValue(error);
  }

  return thunkAPI.rejectWithValue(ErrorEvent)

    

  }
);

export const todoSlice = createSlice({
  name:"todos",
  initialState,
  reducers:{},
  extraReducers:{
    [__getTodos.pending]:(state, action)=>{
      state.isLoading= true
      state.isError = false;
    },
    [__getTodos.fulfilled]:(state, action)=>{
      state.isLoading= false
      state.isError = false
      state.todos = action.paload
    },
    [__getTodos.rejected]: (state, action)=>{
      state.isLoading= false
      state.isError = true
      state.error = action.paload
    
  }
}
})

export const {} = todoSlice.actions
export default todoSlice.reducer