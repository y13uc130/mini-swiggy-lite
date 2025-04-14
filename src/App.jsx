// App.tsx
import React from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AsyncHome } from './pages';
import Cart from './pages/Cart';
import BookingStatus from './pages/BookingStatus/BookingStatus';
import { NotFound } from './pages/NotFound';
import routePath from './routePath';
import NetworkDetector from './Hoc/NetworkDetector';

function App() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <Routes>
      <Route path={routePath.bookingStatusPath} element={<BookingStatus />} />
      <Route path={routePath.cartPath} element={<Cart history={{ push: navigate }} match={{ params }} />} />
      <Route path={routePath.homePath} element={<AsyncHome history={{ push: navigate }} match={{ params }} />} />
      <Route path={routePath.errorPath} element={<NotFound history={{ push: navigate }} match={{ params }} />} />
      <Route path="*" element={<Navigate to={routePath.homePath} replace history={{ push: navigate }} match={{ params }} />} />
    </Routes>
  );
}

export default NetworkDetector(App);
