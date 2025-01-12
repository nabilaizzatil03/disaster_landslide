import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice'; // Aksi logout dari Redux (jika digunakan)

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');

    // Jika menggunakan Redux, panggil aksi logout
    dispatch(logout());

    // Arahkan pengguna ke halaman login
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/manage-disaster" className="hover:underline">Manage Disasters</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="hover:underline">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
