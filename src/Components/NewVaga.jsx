import React, { useState } from "react";
import "./vaga.scss";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { dbBanco } from "../Services/Service";

function AdicionarVaga() {
  const [tituloVaga, setTituloVaga] = useState("");
  const [quantidadeDeVagas, setQuantidadeDeVaga] = useState("");
  const [missaoVaga, setMissaoVaga] = useState("");
  const [oQueVoceVaiFazer, setOQueVoceVaiFazer] = useState([""]);
  const [requisitosVaga, setRequisitosVaga] = useState([""]);
  const [oQueEsperamosDeVoce, setOQueEsperamosDeVoce] = useState([""]);
  const [beneficiosVaga, setBeneficiosVaga] = useState([""]);
  const [tipoDeVaga, setTipoDeVaga] = useState("");
  const [nivel, setNivel] = useState("");

  const [setor, setSetor] = useState(""); // Adicionando estado para o setor

  const adicionarItem = (estado, setEstado) => {
    setEstado([...estado, ""]);
  };

  const removerItem = (index, estado, setEstado) => {
    const novoEstado = [...estado];
    novoEstado.splice(index, 1);
    setEstado(novoEstado);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const novaVaga = {
      titulo: tituloVaga,
      quantidadeDeVagas: quantidadeDeVagas,
      missao: missaoVaga,
      oQueVoceVaiFazer: oQueVoceVaiFazer,
      requisitos: requisitosVaga,
      oQueEsperamosDeVoce: oQueEsperamosDeVoce,
      beneficios: beneficiosVaga,
      setor: setor, // Adicionando o setor à nova vaga
    };

    try {
      const newCityRef = await addDoc(collection(dbBanco, "VAGAS"), novaVaga);
      alert("Vaga adicionada com sucesso! ID: " + newCityRef.id);
      // Você pode salvar o ID da vaga em uma variável, se necessário
      const vagaID = newCityRef.id;
      // Limpar os campos do formulário
      setTituloVaga("");
      setQuantidadeDeVaga("");
      setMissaoVaga("");
      setOQueVoceVaiFazer([""]);
      setRequisitosVaga([""]);
      setOQueEsperamosDeVoce([""]);
      setBeneficiosVaga([""]);
    } catch (error) {
      console.error("Erro ao adicionar vaga: ", error);
      alert("Erro ao adicionar vaga!");
    }
  }

  return (
    <div className="adicionar-vaga-container">
      <h2>Adicionar Vaga de Emprego</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Setor:
          <select
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione o setor
            </option>
            <option value="suporte">Suporte</option>
            <option value="implantacao">Implantação</option>
            <option value="desenvolvimento">Desenvolvimento</option>
            <option value="comercial">Comercial</option>
            <option value="qualidade">Qualidade</option>
            <option value="qa">QA</option>
            <option value="administrativo">Administrativo</option>
          </select>
        </label>
        <br />
        <label>
          Título:
          <input
            type="text"
            value={tituloVaga}
            onChange={(e) => setTituloVaga(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Nivel:
          <input
            type="text"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Tipo de Vaga:
          <select
            value={tipoDeVaga}
            onChange={(e) => setTipoDeVaga(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione o setor
            </option>
            <option value="presencial">Presencial</option>
            <option value="home">Home Ofiice</option>
            <option value="hibrido">Hibrido</option>
          </select>
        </label>
        <br />
        <label>
          Quantidade de Vagas:
          <input
            required
            type="number"
            value={quantidadeDeVagas}
            onChange={(e) => setQuantidadeDeVaga(e.target.value)}
          />
        </label>
        <br />
        <label>
          Missão:
          <textarea
            value={missaoVaga}
            onChange={(e) => setMissaoVaga(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          O que você vai fazer:
          {oQueVoceVaiFazer.map((item, index) => (
            <div key={index}>
              <textarea
                required
                value={item}
                onChange={(e) => {
                  const novoOQueVoceVaiFazer = [...oQueVoceVaiFazer];
                  novoOQueVoceVaiFazer[index] = e.target.value;
                  setOQueVoceVaiFazer(novoOQueVoceVaiFazer);
                }}
              />
              <button
                type="button"
                onClick={() =>
                  removerItem(index, oQueVoceVaiFazer, setOQueVoceVaiFazer)
                }
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => adicionarItem(oQueVoceVaiFazer, setOQueVoceVaiFazer)}
          >
            Adicionar Item
          </button>
        </label>
        <br />
        <label>
          Requisitos:
          {requisitosVaga.map((item, index) => (
            <div key={index}>
              <textarea
                required
                value={item}
                onChange={(e) => {
                  const novosRequisitos = [...requisitosVaga];
                  novosRequisitos[index] = e.target.value;
                  setRequisitosVaga(novosRequisitos);
                }}
              />
              <button
                type="button"
                onClick={() =>
                  removerItem(index, requisitosVaga, setRequisitosVaga)
                }
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => adicionarItem(requisitosVaga, setRequisitosVaga)}
          >
            Adicionar Item
          </button>
        </label>
        <br />
        <label>
          O que esperamos de você:
          {oQueEsperamosDeVoce.map((item, index) => (
            <div key={index}>
              <textarea
                required
                value={item}
                onChange={(e) => {
                  const novoOQueEsperamosDeVoce = [...oQueEsperamosDeVoce];
                  novoOQueEsperamosDeVoce[index] = e.target.value;
                  setOQueEsperamosDeVoce(novoOQueEsperamosDeVoce);
                }}
              />
              <button
                type="button"
                onClick={() =>
                  removerItem(
                    index,
                    oQueEsperamosDeVoce,
                    setOQueEsperamosDeVoce
                  )
                }
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              adicionarItem(oQueEsperamosDeVoce, setOQueEsperamosDeVoce)
            }
          >
            Adicionar Item
          </button>
        </label>
        <br />
        <label>
          Benefícios:
          {beneficiosVaga.map((item, index) => (
            <div key={index}>
              <textarea
                required
                value={item}
                onChange={(e) => {
                  const novosBeneficios = [...beneficiosVaga];
                  novosBeneficios[index] = e.target.value;
                  setBeneficiosVaga(novosBeneficios);
                }}
              />
              <button
                type="button"
                onClick={() =>
                  removerItem(index, beneficiosVaga, setBeneficiosVaga)
                }
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => adicionarItem(beneficiosVaga, setBeneficiosVaga)}
          >
            Adicionar Item
          </button>
        </label>
        <br />
        <button type="submit">Adicionar Vaga</button>
      </form>
    </div>
  );
}

export default AdicionarVaga;
