import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');  // redirect to home, modal will handle login
  }, []);

  return null;
};

export default LoginPage;