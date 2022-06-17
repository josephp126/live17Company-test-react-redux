import orderSlice, { orderSort } from './orders-slice';

const previousState = {
    orderDatas: []
}

describe('Redux test', () => {

    test('should add users', async () => {
        const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
        const users = await response.json();
        expect(
            orderSlice.reducer(
                previousState,
                orderSlice.actions.setOrders({ orderDatas: users })
            )
        ).toEqual({
            orderDatas: orderSort(users)
        });
    });
});