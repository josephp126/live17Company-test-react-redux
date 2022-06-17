import React, { useEffect } from 'react';
import { fetchOrders } from './store/orders-slice'
import { useAppDispatch } from './hooks';
import Home from './pages/LandingPage';
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch]);
  return (
    <Home/>
  );
}

export default App;
