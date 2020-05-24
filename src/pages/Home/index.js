import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import FadeIn from 'react-fade-in';

import './styles.css';
import Navbar from '../../components/Navbar';


export default function Home() {
    useEffect(() => {
        var typedOptions = {
            strings: [
                "Meu nome é Breno",
                "Web Developer ^2000",
                "Meu nome é Breno"
            ],
            typeSpeed: 90,
            showCursor: false
        }
        new Typed(".typed", typedOptions);
    })
    return (
        <div>
            <Navbar />
            <FadeIn transitionDuration="600" className="fade-in">
                <div className="container">
                    <h1 className="typed"> </h1>
                    <h4 className="text-center">Sobre Mim</h4>
                    <div className="card-apresentacao row">
                        <div className="align-right col-6">
                            <picture>
                                <img
                                    src="https://tontasid.sirv.com/Images/perfil.png"
                                    alt="Foto de Perfil"
                                    className="minha-foto"
                                />
                            </picture>
                        </div>
                        <div className="col-6">
                            <p>
                                Durante meus estudos de Tecnologia da Informação, comecei um
                                estágio em uma empresa como Suporte a Usuário, e uns meses
                                depois, devido a demanda da empresa, comecei a fazer projetos
                                web, onde adquiri muito gosto pela área de desenvolvimento web,
                                e pretendo me especializar nisso. Nesse tempo como
                                desenvolvedor, me apaixonei pelas linguagens front-end, mas
                                também tenho experiência com o "por baixo dos panos" de um site,
                                com PHP e Banco de Dados.
                            <br />
                            Atualmente eu utilizo <b>React</b> e <b>React Native</b> no front-end das minhas aplicações e <b>Node</b> para o back-end.
                            Também já me aventurei com
                            desenvolvimento de jogos com o Unity.<br />
                                <br />
                            Meus hobbies preferidos são: música, ler, estar com meus amigos
                            e família, e praticar esportes. Gosto também de conhecer coisas
                            novas, principalmente na área da tecnologia.
                        </p>
                            <div className="socials">
                                <p style={{ fontWeight: "bold" }}>
                                    Me acompanhe nas redes sociais:
                </p>
                                <a
                                    href="https://www.linkedin.com/in/breno-fiorese/"
                                    target="_blank"
                                ><FaLinkedinIn /></a>
                                <a href="https://github.com/brenowss" target="_blank"
                                ><FaGithub /></a>
                                <a href="https://www.facebook.com/brenowss" target="_blank"
                                ><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center">Meu Conhecimento</h4>
                    <div className="conhecimento container">
                        <div className="row justify-content-center tecnologias">
                            <div className="tecnologia">
                                <img src="https://tontasid.sirv.com/Images/html-logo.png" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div className="tecnologia">
                                <img src="https://tontasid.sirv.com/Images/css-logo.png" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div className="tecnologia">
                                <img src="https://tontasid.sirv.com/Images/js-logo.png" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                        </div>
                        <div className="row justify-content-center tecnologias">
                            <div className="tecnologia php">
                                <img src="https://tontasid.sirv.com/Images/php-logo.png" alt="PHP" />
                                <span>PHP</span>
                            </div>
                            <div className="tecnologia">
                                <img src="https://tontasid.sirv.com/Images/database-logo.png" alt="Banco de Dados" />
                                <span>Banco de Dados</span>
                            </div>
                            <div className="tecnologia">
                                <img src="https://tontasid.sirv.com/Images/react-logo.png" alt="React" />
                                <span>React</span>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center">Meus Projetos</h4>
                    <div className="projetos container">
                        <div className="row justify-content-center">
                            <div className="projeto">
                                <img src="https://tontasid.sirv.com/Images/projeto_1.png" alt="Enterprise landing page" />
                            </div>
                            <div className="projeto">
                                <img
                                    src="https://tontasid.sirv.com/Images/desktop_4.gif"
                                    alt="Login Screen"

                                />
                            </div>
                            <div className="projeto">
                                <img
                                    src="https://tontasid.sirv.com/Images/projeto_3.png"
                                    alt="Portal do Produtor"

                                />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <Link to="/projects" className="ver-mais">Ver mais</Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )

}