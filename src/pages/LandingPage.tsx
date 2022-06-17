import React from 'react';
import Order from '../components/Order';
import styled from 'styled-components';

const HomeLayout = styled.div`
    display: flex;
    justify-content: center;
`

function Home () {
    return (
        <HomeLayout>
            <Order/>
        </HomeLayout>
    )
}
export default Home;