import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, Slide } from '@mui/material';

const OrderToasts = ({ orders }) => {
  const [currentOrder, setCurrentOrder] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentOrder((prevOrder) => (prevOrder + 1) % orders.length);
        setShow(true);
      }, 500);
    }, 3000); // Change toast every 3 seconds

    return () => clearInterval(interval);
  }, [orders.length]);

  return (
    <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '' }}>
      <Typography variant="h5" component="div" sx={{ mb: 0 }}>
        Recent Payments
      </Typography>
      <Box sx={{ height: "118px", display: 'flex', alignItems: 'center' }}>
        <Slide direction="up" in={show} mountOnEnter unmountOnExit>
          <Typography component="div" sx={{ bgcolor: '#e0f7fa', p: 1, borderRadius: 1 }}>
            {orders[currentOrder]}
          </Typography>
        </Slide>
      </Box>
    </Card>
  );
};

export default OrderToasts