// pages/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Se houver ?error=xxx na URL, exibe alerta
  useEffect(() => {
    if (router.query.error) {
      alert(router.query.error);
    }
  }, [router.query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de credenciais (igual ao front-end puro):
    if (email === 'cap.silva@esao.eb.mil.br' && senha === 'senha123') {
      const user = {
        nome: 'Capitão Silva',
        email,
        postoGraduacao: 'Capitão',
      };
      localStorage.setItem('esao_user', JSON.stringify(user));
      router.push('/registro');
    } else if (email === 'major.souza@esao.eb.mil.br' && senha === 'senha456') {
      const user = {
        nome: 'Major Souza',
        email,
        postoGraduacao: 'Major',
      };
      localStorage.setItem('esao_user', JSON.stringify(user));
      router.push('/registro');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>ESAO – Login</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <label htmlFor="email">Military Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemplo@esao.eb.mil.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Password</label>
        <input
          type="password"
          id="senha"
          name="senha"
          required
          placeholder="Your password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Sign In</button>
          If you have forgotten your password, please contact the system administrator.
          <p>Are you not registered? <a href="/register">Sign Up</a></p>

      </form>
    </div>
  );
}
