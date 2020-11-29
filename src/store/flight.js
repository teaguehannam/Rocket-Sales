import { createSlice } from '@reduxjs/toolkit';

export const flightSlice = createSlice({
	name: 'type',
	initialState: {
		flight: "N/A",
	},
	reducers: {
		chooseFlight: (state,action) => {
			state.flight = action.payload;
		},
	},
});

// Rocket actions
export const { chooseFlight } = flightSlice.actions;
// Get rocket model
export const selectFlight = state => state.type.flight;

export default flightSlice.reducer
