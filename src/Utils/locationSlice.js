import { createSlice } from "@reduxjs/toolkit"


const locationSlice = createSlice({
    name: "location",
    initialState: {
        locationDetails: [{
            "pincode": 201009,
            "area": "Crossing Republic",
            "lat": 28.667856,
            "lng": 77.449791,
            "district": "Ghaziabad",
            "state": "Uttar Pradesh"
        }]
    },
    reducers: {
        updateLocation: (state, action) => {
            state.locationDetails = action.payload;
        }
    }
})

export const {updateLocation} = locationSlice.actions;
export default locationSlice.reducer;