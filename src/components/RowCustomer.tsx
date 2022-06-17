import React, { useState } from 'react';
import styled from 'styled-components';
import OrderData from '../models/order_data';
import CountUp from 'react-countup';

const Row = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    padding-bottom: 3px;
    padding-top: 3px;
    transition: all 0.3s ease 0s;
`;

const UserNo = styled.div`
    width: 30px;
    text-align: center;
`;
const UserAvatar = styled.div`
    padding-right: 10px;
`;
const UserAvatarImg = styled.img`
    border-radius: 18px;
    width: 36px;
    height: 36px;
    object-fit: cover;
`;
const UserName = styled.div`
    width: 150px;
`;
const UserScore = styled.div`
    width: 100px;
    text-align: right;
`;

const UserRow = ({ order }: { order: OrderData }) => {
    const [score, setScore] = useState<number>(0);
    const onAnimationEnd = () => {
        setScore(order.score);
    }
    const top = order.rank ? (order.rank - 1) * 46 : 0;

    return (
        <Row key={order.userID} style={{top: `${top}px`}}>
            <UserNo>{order.rank}</UserNo>
            <UserAvatar>
                <UserAvatarImg src={order.picture} alt={order.displayName} />
            </UserAvatar>
            <UserName>{order.displayName}</UserName>
            <UserScore>
                <CountUp start={score} end={order.score} duration={0.3} suffix='pt' useEasing={false} onEnd={onAnimationEnd} />
            </UserScore>
        </Row>
    )
}

export default UserRow;