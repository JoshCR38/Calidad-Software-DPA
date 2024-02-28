import React, { useState, useEffect } from 'react';
import './App.css'; // Archivo CSS para los estilos

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  useEffect(() => {
    // Validar si los correos electrónicos son diferentes
    if (email !== confirmarEmail && confirmarEmail !== '') {
      setMensajeError('Verifique el correo electrónico');
    } else {
      setMensajeError('');
    }
  }, [email, confirmarEmail]);

  const manejarEnvio = () => {
    // Simular el envío de la informacion formulario
    console.log('Correo electrónico:', email);
  };

  return (
    <div className="app">
      <img src="/46763872_transparent.png" alt="Imagen de muestra" />
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmarEmail">Confirmar Correo Electrónico:</label>
          <input
            type="email"
            id="confirmarEmail"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
          />
        </div>
        {mensajeError && <p className="error">{mensajeError}</p>}
        <button type="button" onClick={manejarEnvio}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;