// components/LoginForm.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if (router.query.error) {
      alert(router.query.error);
    }
  }, [router.query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = [
      {
        email: 'cap.silva@esao.eb.mil.br', senha: 'senha123', nome: 'Capitão Silva', posto: 'Capitão'
      },
      {
        email: 'major.souza@esao.eb.mil.br', senha: 'senha456', nome: 'Major Souza', posto: 'Major'
      },
    ];

    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem('esao_user', JSON.stringify(user));
      router.push('/registro');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">ESAO – Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="mt-3 font-semibold">Military Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemplo@esao.eb.mil.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mt-1 border border-gray-300 rounded"
        />

        <label htmlFor="senha" className="mt-3 font-semibold">Password</label>
        <input
          type="password"
          id="senha"
          name="senha"
          required
          placeholder="Your password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-2 mt-1 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="mt-6 p-3 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Sign In
        </button>
        <p className="mt-4 text-sm text-gray-600">
          If you have forgotten your password, please contact the system administrator.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Are you not registered? <a href="/register" className="text-blue-700 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
}


