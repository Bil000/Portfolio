// pages/registro.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function RegistroPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [nomeEvento, setNomeEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [localEvento, setLocalEvento] = useState('');

  // Verifica se há ?sucesso ou ?error na URL e exibe alerta
  useEffect(() => {
    if (router.query.sucesso) {
      alert('Inscrição enviada com sucesso!');
    }
    if (router.query.error) {
      alert(router.query.error);
    }
  }, [router.query]);

  // Ao montar, tenta ler usuário logado do localStorage
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
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nomeEvento || !dataEvento || !localEvento) {
      alert('Preencha todos os campos do formulário.');
      return;
    }

    // Aqui você chamaria um fetch POST real:
    /*
    fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomeEvento,
        dataEvento,
        localEvento,
      }),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.success) {
          router.replace('/registro?sucesso=1');
        } else {
          alert('Erro ao registrar: ' + response.error);
        }
      })
      .catch((err) => {
        alert('Erro de rede.');
        console.error(err);
      });
    */

    // Simulação sem back-end:
    console.log('NOVO REGISTRO (simulado):', {
      nomeUsuario: userData.nome,
      posto: userData.postoGraduacao,
      nomeEvento,
      dataEvento,
      localEvento,
      timestamp: Date.now(),
    });
    // Redireciona para disparar ?sucesso=1
    router.replace('/registro?sucesso=1');
  };

  const handleLogout = () => {
    localStorage.removeItem('esao_user');
    router.push('/');
  };

  // Enquanto não tiver userData, não renderiza o formulário
  if (!userData) {
    return null;
  }

  return (
    <div className="container">
      <h1>Registrar Evento Militar</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <label htmlFor="nomeUsuario">Nome</label>
        <input
          type="text"
          id="nomeUsuario"
          name="nomeUsuario"
          readOnly
          value={userData.nome}
        />

        <label htmlFor="postoGraduacao">Posto/Graduação</label>
        <input
          type="text"
          id="postoGraduacao"
          name="postoGraduacao"
          readOnly
          value={userData.postoGraduacao}
        />

        <label htmlFor="nomeEvento">Nome do Evento</label>
        <input
          type="text"
          id="nomeEvento"
          name="nomeEvento"
          required
          placeholder="Ex.: Curso de Táticas"
          value={nomeEvento}
          onChange={(e) => setNomeEvento(e.target.value)}
        />

        <label htmlFor="dataEvento">Data do Evento</label>
        <input
          type="date"
          id="dataEvento"
          name="dataEvento"
          required
          value={dataEvento}
          onChange={(e) => setDataEvento(e.target.value)}
        />

        <label htmlFor="localEvento">Local do Evento</label>
        <input
          type="text"
          id="localEvento"
          name="localEvento"
          required
          placeholder="Ex.: Quartel General da ESAO"
          value={localEvento}
          onChange={(e) => setLocalEvento(e.target.value)}
        />

        <button type="submit">Inscrever-se</button>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </form>
    </div>
  );
}
