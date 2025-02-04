import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardar usuario simulado en localStorage
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/login');
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h2>Registro de Usuario</h2>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
