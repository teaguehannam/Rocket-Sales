const initialState = {isLoading: false,	rocketID: null};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CHOOSE_ROCKET':
			return Object.assign({}, state, {
				isLoading: action.payload.isLoading
			})
		case 'CHOOSE_ROCKET_SUCCESS':
			return Object.assign({}, state, {
				rocketID: state.items.concat(action.items),
				isLoading: action.isLoading
			})
		default:
			return state;
	}
}

export default reducer;