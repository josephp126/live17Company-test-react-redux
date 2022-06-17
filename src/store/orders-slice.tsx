import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import OrderData from '../models/order_data';
type ordersState = {
    orderDatas: OrderData[];
}
const initialState: ordersState = {
    orderDatas: []
}
export const orderSort = (orders: OrderData[]) => {
    let sorted = orders.slice().sort((a:OrderData, b:OrderData) => {
        return b['score'] - a['score'];
    });
    return orders.map((cam: OrderData) => {
        return {
            ...cam,
            rank: sorted.indexOf(cam) + 1
        }
    });
}
const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers: {
        setOrders(state: ordersState, action: PayloadAction<{ orderDatas: OrderData[] }>) {
            state.orderDatas = orderSort(action.payload.orderDatas);
        },
        setRandomScores(state: ordersState, action: PayloadAction<{ randomIndex: number, randomScore: number }>) {
            state.orderDatas = orderSort(state.orderDatas.map((order: OrderData, index: number) => {
                    if (index === action.payload.randomIndex) {
                        order.score += action.payload.randomScore
                    }
                    return order
                })
            );
        }
    }
});

const ordersActions = ordersSlice.actions;

export const fetchOrders = () => {
    return async (dispatch: Dispatch) => {
        try {
            const API_URL = 'https://webcdn.17app.co/campaign/pretest/data.json'
            const response = await fetch(API_URL);
            const responseData = await response.json();
            dispatch(ordersActions.setOrders({ orderDatas: responseData }));
        } catch (error) {
            console.log(error);
        }
    }
}

export const setRandomScore = (randomIndex:number, randomScore:number) => {
    return (dispatch: Dispatch) => {
        dispatch(ordersActions.setRandomScores({ randomIndex, randomScore }))
    }
}

export default ordersSlice;