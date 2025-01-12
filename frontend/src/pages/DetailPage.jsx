import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { id } = useParams();
  const [disaster, setDisaster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisasterById = async () => {
        try {
          const token = localStorage.getItem('token'); // Ambil token dari localStorage atau Redux
          const response = await axios.get(`http://localhost:5000/disasters/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setDisaster(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
    fetchDisasterById();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!disaster) return <p>No disaster found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{disaster.title}</h1>
      <p className="text-gray-700 mt-2">{disaster.description}</p>
      {disaster.image && (
        <img src={disaster.image} alt={disaster.title} className="mt-4 w-full max-w-md rounded" />
      )}
    </div>
  );
};

export default DetailPage;
