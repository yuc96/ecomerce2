import { createSlice} from "@reduxjs/toolkit";

export const searchSlice=createSlice({
        name: 'searchProduct',
        initialState: "",
        reducers:{
            setLoading: (state,action)=>{
                    return action.payload
            }
        }
            
})



export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
