import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentLatencyWeight: 0,
  currentSpeedWeight: 0,
  currentCostWeight: 0,
  minSpeed: 0,
  maxSpeed: 0,
  minCost: 0,
  maxCost: 0,
  minLatency: 0,
  maxLatency: 0,
  currentCategory: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    
    setDefault: (state, action) => {
    //   state.minSpeed = initialState.minSpeed;
    //   state.maxSpeed = initialState.maxSpeed;
    //   state.minCost = initialState.minCost;
    //   state.maxCost = initialState.maxCost;
      state.currentLatencyWeight = initialState.currentLatencyWeight;
      state.currentSpeedWeight = initialState.currentSpeedWeight;
      state.currentCostWeight = initialState.currentCostWeight;
      state.currentCategory = initialState.currentCategory;
    },
    setLatencyWeight: (state, action) => {
        // state.minLatency = action.payload.minLatency;
        // state.maxLatency = action.payload.maxLatency;
        state.currentLatencyWeight = action.payload.currentLatencyWeight;
    },
    
    setCostWeight: (state, action) => {
        state.currentCostWeight = action.payload.currentCostWeight;
        // state.minCost = action.payload.minCost;
        // state.maxCost = action.payload.maxCost;
    },
    setSpeedWeight: (state, action) => {
        state.currentSpeedWeight = action.payload.currentSpeedWeight;
        // state.minSpeed = action.payload.minSpeed;
        // state.maxSpeed = action.payload.maxSpeed;
    },
    setCategory: (state, action) => {
        state.currentCategory = action.payload.currentCategory;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDefault, setLatencyWeight, setSpeedWeight, setCostWeight, setCategory } = filterSlice.actions

export default filterSlice.reducer