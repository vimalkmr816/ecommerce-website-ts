import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
	val: number
	id: number
}
const initialState: InitialState[] = []

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		incrementCart: (state, action) => {
			const objectPayload: InitialState = { id: action.payload.id, val: action.payload.quantity }
			if (state.length === 0) state.push(objectPayload)
			else {
				const newVal = state.map(item => {
					if (item.id === objectPayload.id) return { ...item, val: item.val + objectPayload.val }
				})
				console.log(newVal)
			}
		},
		// decrementCart: (state, action) => {
		// 	state.val -= action.payload
		// },
	},
})

export const { incrementCart } = cartSlice.actions

export default cartSlice.reducer
