import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () =>{
        localStorage.removeItem('token');

        dispatch(logout());

        navigate('/login')
    }
  return (
    <nav className="bg-blue-500 text-white p-4">
        <ul className="flex space-x-4">
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/manage-disaster">Manage Disasters</Link>
            </li>
            <li>
                <button onClick={handleLogout} className="hover:underline">
                    Logout
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
