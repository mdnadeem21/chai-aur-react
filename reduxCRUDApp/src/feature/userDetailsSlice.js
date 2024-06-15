import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    loading:false,
    error: null,
    searchData: [],
}

// AddUser Action
export const addUser = createAsyncThunk(
    "addUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      "https://66674db8a2f8516ff7a713db.mockapi.io/api/v1/reduxCrud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

//getUser Action
export const getUser = createAsyncThunk(
    "getUser",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://66674db8a2f8516ff7a713db.mockapi.io/api/v1/reduxCrud"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

// deleteUser Action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, {rejectWithValue}) => {
    const response = await fetch(
      `https://66674db8a2f8516ff7a713db.mockapi.io/api/v1/reduxCrud/${id}`,
      {method : "DELETE"}
    )
    try {
      const result = await response.json();
      console.log(`Deleted Data :  ${result}`)
      return result   
    
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

// updateUSer Action
export const updateUser = createAsyncThunk(
  "updateUser",
  async(data,{rejectWithValue}) => {
    console.log("updated data", data);
    const response = await fetch(
      `https://66674db8a2f8516ff7a713db.mockapi.io/api/v1/reduxCrud/${data.id}`,
      {
        method : "PUT",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    try {
      const result = await response.json();
      return result;
      
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const userDetailSlice = createSlice({
    name : "userDetails",
    initialState,
    reducers : {

      searchUser : (state,action) => {
        console.log(`Searched User : ${action.payload}`)
        state.searchData = action.payload
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(addUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
          })
          .addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(getUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(deleteUser.pending, (state,action) => {
              state.loading = true
          })
          .addCase(deleteUser.fulfilled, (state,action) => {
              state.loading = false
              const { id } = action.payload
              if(id){
                state.users = state.users.filter((user) => user.id !== id)
              }
          })
          .addCase(deleteUser.rejected, (state,action) => {
              state.loading = false
              state.error = action.payload;
          })
          .addCase(updateUser.pending, (state,action) => {
              state.loading = true
          })
          .addCase(updateUser.fulfilled, (state,action) => {
              state.loading = false
              state.users = state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user
              );
              
          })
          .addCase(updateUser.rejected, (state,action) => {
              state.loading = false
              state.error = action.payload.message;
          })
      },
})

export const {searchUser} = userDetailSlice.actions
export default userDetailSlice.reducer