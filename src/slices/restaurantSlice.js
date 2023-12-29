import { createSlice } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';

const initialState = {
    restaurant: null,
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, { payload }) => {
            state.restaurant = payload;
        },
    },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;
