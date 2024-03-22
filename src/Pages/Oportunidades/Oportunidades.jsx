import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbBanco } from "../../Services/Service";

function Oportunidades() {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVagasFromFirestore() {
    const vagasCollection = collection(dbBanco, "VAGAS");
    const snapshot = await getDocs(vagasCollection);
    const vagasData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVagas(vagasData);
    setLoading(false);
  }

  useEffect(() => {
    getVagasFromFirestore();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {vagas.length ? (
        vagas.map((vaga) => (
          <div key={vaga.id}>
            <h1>{vaga.titulo}</h1>
            {vaga.banner && <img src={vaga.banner} alt={vaga.titulo} />}
            <p>Missão: {vaga.missao}</p>
            <h2>O que você vai fazer</h2>
            <ul>
              {vaga.oQueVoceVaiFazer &&
                vaga.oQueVoceVaiFazer.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h2>Requisitos</h2>
            <ul>
              {vaga.requisitos &&
                vaga.requisitos.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h2>O que esperamos de você</h2>
            <ul style={{ listStyleType: "disc" }}>
              {vaga.oQueEsperamosDeVoce &&
                vaga.oQueEsperamosDeVoce.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
            <h2>Benefícios</h2>
            <ul>
              {vaga.beneficios &&
                vaga.beneficios.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))
      ) : (
        <div>
          <h1>Puts ... Nenhuma vaga</h1>
        </div>
      )}
    </div>
  );
}

export default Oportunidades;
