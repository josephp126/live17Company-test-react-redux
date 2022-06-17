import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setRandomScore } from '../store/orders-slice'
import OrderData from '../models/order_data';
import styled from 'styled-components';
import RowCustomer from './RowCustomer';

const LayoutStyle = styled.div`
    position: relative;
    width: 326px;
`;

function Order() {
    const orderState = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 10);
            const randomScore = Math.floor(Math.random() * 10000);
            dispatch(setRandomScore(randomIndex, randomScore));
        }, 300)
        return () => {
            clearInterval(interval);
        }
    })
    
    return (
        <LayoutStyle>
            {
                orderState.orderDatas.length ?
                orderState.orderDatas.map(
                    (order:OrderData, index:number) => <RowCustomer order={order} key={index} />
                ) :
                <div>There are no users.</div>
            }
        </LayoutStyle>
    )
}

export default Order;