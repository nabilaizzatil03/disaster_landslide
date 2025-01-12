import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDisasters, addDisaster, deleteDisaster } from '../redux/disasterSlice';

const ManageDisaster = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.disasters);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchDisasters(token));
    }
  }, [dispatch, token]);

  const handleAddDisaster = (e) => {
    e.preventDefault();
    const newDisaster = { title, description, image };
    dispatch(addDisaster({ token, disaster: newDisaster })).then(() => {
      setTitle('');
      setDescription('');
      setImage('');
    });
  };

  const handleDeleteDisaster = (id) => {
    dispatch(deleteDisaster({ token, id }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Disasters</h1>
      <form onSubmit={handleAddDisaster} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
          Add Disaster
        </button>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-4">Existing Disasters</h2>
        {data.map((disaster) => (
          <div key={disaster.id} className="border p-4 mb-2 rounded shadow flex justify-between">
            <div>
              <h3 className="font-bold">{disaster.title}</h3>
              <p>{disaster.description}</p>
            </div>
            <button
              onClick={() => handleDeleteDisaster(disaster.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDisaster;
