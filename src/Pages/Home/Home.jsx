import React, { useEffect, useState } from "react";

import "./Home.scss";
import BannerIzzyWay from "../../assets/Banner IzzyWay.webp";
import Teste from "../../assets/Teste.jpg";
import SUPORTE from "../../assets/SUPORTE.webp";
import DESENVOLVIMENTO from "../../assets/DESENVOLVIMENTO.webp";
import IMPLANTACAO from "../../assets/IMPLANTACAO.webp";
import QUALIDADE from "../../assets/QUALIDADE.webp";
import COMERCIAL from "../../assets/COMERCIAL.webp";
import ADM from "../../assets/ADM.webp";

function Home() {
  const featCultural = [
    {
      Title: "Imersão izzyway",
      Text: "Promovemos imersão interativa ministrados por nossos colaboradores especialistas, onde cada um pode contribuir como professor, compartilhando seus conhecimentos e experiências com toda a equipe.",
      Img: Teste,
    },
    {
      Title: "Incentivo à Cultura e Lazer",
      Text: "Entendemos a importância de momentos de relaxamento e diversão. Por isso, disponibilizamos vouchers para cinema com acompanhante e realizamos sorteios de ingressos para jogos de futebol na cidade, garantindo que nossos colaboradores desfrutem de momentos de lazer",
      Img: Teste,
    },
    {
      Title: "Desenvolvimento Profissional",
      Text: "Nossos colaboradores têm acesso a uma variedade de cursos técnicos de programação, automação e gestão disponibilizados através da plataforma UDEMY, visando potencializar seu desenvolvimento profissional.",
      Img: Teste,
    },
    {
      Title: "Incentivo ao Esporte",
      Text: "somos literalmente um time. A empresa financia pelo menos duas vezes ao mês partidas de futebol, oferecendo a oportunidade não só para os colaboradores, mas também para seus amigos e familiares se envolverem.",
      Img: Teste,
    },
  ];

  const Vagas = [
    {
      Img: SUPORTE,
      Title: "Suporte técnico",
      Tag: "Suporte",
    },
    {
      Img: DESENVOLVIMENTO,
      Title: "Desenvolvimento",
      Tag: "Desenvolvimento",
    },
    {
      Img: IMPLANTACAO,
      Title: " Implantação de sistema",
      Tag: "Implantacao",
    },
    {
      Img: QUALIDADE,
      Title: "Qualidade",
      Tag: "QA",
    },
    {
      Img: COMERCIAL,
      Title: "ComerciaL",
      Tag: "ComerciaL",
    },
    {
      Img: ADM,
      Title: "Administrativo",
      Tag: "Administrativo",
    },
  ];

  function HandleVagas(Vagas) {
    const vagasString = JSON.stringify(Vagas);
    localStorage.setItem("VagasValue", vagasString);
  }

  useEffect(() => {
    return () => {
      localStorage.removeItem("VagasValue");
    };
  }, []);

  return (
    <>
      <div className="container-full-home">
        <div className="section-presentation">
          <div className="section-presentation-img">
            <img src={BannerIzzyWay} alt="BannerIzzyWay" />
          </div>
          <div className="section-presentation-information">
            <h1>A Izzyway está crescendo!</h1>
            <p>
              Aqui, somos uma equipe apaixonada pelo que fazemos, prontos para
              impulsionar o sucesso do seu negócio. Queremos unir forças e
              moldar os próximos profissionais de tecnologia com um toque de
              entusiasmo e camaradagem.
            </p>
            <br />
            <p>
              Estamos animados para fazer parte da sua jornada rumo ao sucesso!
            </p>
          </div>
        </div>

        <div className="section-cultural">
          {featCultural.map((item, index) => {
            const className = index % 2 === 0 ? "" : "direita";
            return (
              <div key={index} className={`section-cultural-card ${className}`}>
                <div className="section-cultural-card-img">
                  <img src={item.Img} alt="" />
                </div>
                <div className="section-cultural-card-information">
                  <h2>{item.Title}</h2>
                  <p>{item.Text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section-vacancies">
          <h1>Encontre a vaga certa pra você!</h1>
          <div className="section-vacancies-cards">
            {Vagas.map((item, index) => {
              return (
                <div key={index} className="section-vacancies-card">
                  <div className="section-vacancies-card-img">
                    <img src={item.Img} alt="" />
                  </div>
                  <div className="section-vacancies-card-information">
                    <h3>{item.Title}</h3>
                    <a
                      href="/vagas"
                      onClick={() => {
                        HandleVagas(item);
                      }}
                    >
                      Ver oportunidades
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
