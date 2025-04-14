import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useNavigate, useParams } from 'react-router-dom';
import FullPageLoader from '../../components/FullPageLoader';
import api from '../../utils/api';
import { clearBookingId, clearCartData } from '../../utils/localStorage';
import routePath from '../../routePath';

const BookingStatus = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    clearBookingId();
    clearCartData();

    if (id) {
      api.get(`/booking/${id}`)
        .then((res) => {
          if (res && res.data && res.data.success) {
            localStorage.setItem('booking_id', id);
            navigate(routePath.homePath);
          } else {
            navigate(routePath.errorPath);
          }
          setLoading(false);
        })
        .catch(() => {
          navigate(routePath.errorPath);
          setLoading(false);
        });
    }
  }, [id, navigate]);

  return (
    <div className="BookingStatusPage">
      {loading && <FullPageLoader />}
    </div>
  );
};

export default BookingStatus;
