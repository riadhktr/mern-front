import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const accountSlice = createSlice({
    name:'account',
    initialState:
        {
            id:uuidv4(),
            username:"hey me ",
            email:"hey me @gmail.com"
        }
    ,
    reducers:{

  
setAccount:(state,action)=>{
    return action.payload;
}

    }
})

export const {setAccount} = accountSlice.actions

export default accountSlice.reducer