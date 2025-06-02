// pages/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [registros, setRegistros] = useState([]);

  // Ao montar, valida “usuário logado” e carrega listas iniciais (simulação)
  useEffect(() => {
    const raw = localStorage.getItem('esao_user');
    if (!raw) {
      router.replace('/?error=Faça login primeiro');
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setUserData(parsed);
    } catch {
      router.replace('/?error=Faça login primeiro');
    }

    // Simulação de registros iniciais:
    const registrosSimulados = [
      {
        timestamp: Date.now() - 1000 * 60 * 30,
        nomeUsuario: 'Capitão Silva',
        posto: 'Capitão',
        nomeEvento: 'Curso de Táticas Avançadas',
        dataEvento: '2025-06-15',
        localEvento: 'Quartel General',
      },
      {
        timestamp: Date.now() - 1000 * 60 * 10,
        nomeUsuario: 'Major Souza',
        posto: 'Major',
        nomeEvento: 'Treinamento de Infantaria',
        dataEvento: '2025-06-20',
        localEvento: 'Campo de Provas',
      },
    ];
    setRegistros(registrosSimulados);

    // Exemplo de integração com Socket.io (comentado, pois não há back-end ativo):
    /*
    import io from 'socket.io-client';
    const socket = io(); 
    socket.on('novo_registro', (dados) => {
      setRegistros((prev) => [dados, ...prev]);
    });
    */

  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('esao_user');
    router.push('/');
  };

  // Se não tiver userData, renderiza nada (ou spinner, se preferir)
  if (!userData) {
    return null;
  }

  return (
    <div className="container">
      <h1>Painel de Inscrições (Tempo Real)</h1>
      <button onClick={handleLogout}>Sair</button>

      <table id="tableRegistrations">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Nome</th>
            <th>Posto/Grad.</th>
            <th>Evento</th>
            <th>Data Evento</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r, idx) => (
            <tr key={idx}>
              <td>{new Date(r.timestamp).toLocaleString('pt-BR')}</td>
              <td>{r.nomeUsuario}</td>
              <td>{r.posto}</td>
              <td>{r.nomeEvento}</td>
              <td>{new Date(r.dataEvento).toLocaleDateString('pt-BR')}</td>
              <td>{r.localEvento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
