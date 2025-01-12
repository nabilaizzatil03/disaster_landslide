import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDisasters } from '../redux/disasterSlice';
import DisasterCard from '../components/DisasterCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.disasters);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchDisasters(token));
    }
  }, [dispatch, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Disaster Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((disaster) => (
          <DisasterCard key={disaster.id} disaster={disaster} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
