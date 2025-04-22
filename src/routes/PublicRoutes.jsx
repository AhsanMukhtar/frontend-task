import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2 className='not-found'>Page Not Found <br /> <Link to="/">Back</Link></h2>} />
        </Routes>
    </BrowserRouter>
  )
}

export default PublicRoutes