import {useState} from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
      />

      {error && <h2 style={{color: 'red'}}>{error}</h2>}
    </div>
  );
}
