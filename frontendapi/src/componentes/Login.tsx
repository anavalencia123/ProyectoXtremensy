import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.username === username && storedUser.password === password) {
      alert('Inicio de sesión exitoso');
      navigate('/products');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
        <p>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;