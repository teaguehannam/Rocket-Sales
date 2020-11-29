import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
	name: 'rocket',
	initialState: {
		model: [],
	},
	reducers: {
		chooseRocket: (state,action) => {
			state.model = action.payload;
		},
	},
});

// Rocket actions
export const { chooseRocket } = rocketSlice.actions;
// Get rocket model
export const selectModel = state => state.rocket.model

export default rocketSlice.reducer
