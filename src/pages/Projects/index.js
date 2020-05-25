import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import FadeIn from 'react-fade-in';

import './styles.css';
import GotaMockup from '../../components/SVG/gota_mockup'

export default function Projects() {
    return (
        <div>
            <Navbar />
            <FadeIn transitionDuration="600" className="fade-in">
                <div className="content">
                    <h1 className="text-center">Meus Projetos</h1>
                    <div className="projects-presentation">
                        <div className="page-1 row">
                            <p className="projects-text col-6">
                                Estes são alguns dos meus projetos que mais <br />
            me orgulho de ter desenvolvido.
          </p>
                            <div className="illustration col-6">
                                <img src="https://tontasid.sirv.com/Images/mulher.svg" alt="projeto" className="illustration-mulher" />
                                <img src="https://tontasid.sirv.com/Images/projects.svg" alt="projeto" className="illustration-telas" />
                            </div>
                        </div>
                        <div className="page-2 row">
                            <div className="balls col-6">
                                <img src="https://tontasid.sirv.com/Images/guy.svg" alt="projeto" className="illustration-homem" />
                                <img src="https://tontasid.sirv.com/Images/ball_1.svg" alt="projeto" id="ball_1" />
                                <img src="https://tontasid.sirv.com/Images/ball_2.svg" alt="projeto" id="ball_2" />
                                <img src="https://tontasid.sirv.com/Images/ball_3.svg" alt="projeto" id="ball_3" />
                            </div>
                            <p className="projects-text col-6">
                                Alguns códigos podem ser encontrados no meu <a href="https://github.com/brenowss">GitHub</a>.
          </p>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="container">

                            <div id="project-1" className="row">
                                <div className="row block-parent">
                                    <div className="col-6 block-1">
                                        <img src="https://tontasid.sirv.com/Images/mockups/mobile_1.svg" alt="projeto" className="image-1" />
                                    </div>
                                    <div className="col-6 block-2">
                                        <h2 className="align-right">Portal de Fornecedores</h2>
                                        <p className="text-justify">
                                            Esse portal foi desenvolvido para suprir a necessidade dos
                                            fornecedores de uma cooperativa agroindustrial de saber suas
                                        estatísticas e relatórios passados. <br />
                                        Foi feito completamente sob medida para ser utilizado em
                                        conexões de baixa potência e alcance, para não apresentar
                                        problemas em locais mais afastados.
                                    </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Responsividade e Área Administrativa</h2>
                                        <p className="text-justify">
                                            O site é completamente responsivo e conta com uma área
                                            administrativa para manutenção e gerenciamento de usuários e
                                            dados das tabelas e relatórios desenvolvida em PHP.
                                    </p>
                                    </div>
                                    <div className="col-6">
                                        <img src="https://tontasid.sirv.com/Images/mockups/desktop_1.svg" alt="projeto" className="image-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container" id="project-2">
                            <div className="row block-parent">
                                <div className="col-6 block-1">
                                    <img src="https://tontasid.sirv.com/Images/projeto_2.png" alt="projeto" className="image-1" />
                                </div>
                                <div className="col-6 block-2">
                                    <h2 className="align-right">Site Empresarial</h2>
                                    <p className="text-justify md-ml-5">
                                        Essa é a página de publicidade do site de uma empresa onde
                                        trabalhei. Conta com áreas para exposição dos serviços e
                                        produtos oferecidos pela empresa, e também uma área que expõe os
                                        propósitos e missões da empresa.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Localização dinâmica</h2>
                                    <p className="text-justify">
                                        O site também conta com uma área dinâmica para encontrar a
                                        filial mais próxima de você, além dos meios de contato.
                                </p>
                                </div>
                                <div className="col-6 text-center">
                                    <img src="https://tontasid.sirv.com/Images/mockups/mobile_4.svg" alt="" className="image-2" />
                                </div>
                            </div>
                        </div>

                        <div className="container" id="project-3">
                            <div className="row block-parent">
                                <div className="col-6 block-1 text-center">
                                    <img src="https://tontasid.sirv.com/Images/mockups/mobile_2.svg" alt="projeto" className="image-1" />
                                </div>
                                <div className="col-6 block-2">
                                    <h2 className="align-right">Portal de Alunos</h2>
                                    <p className="text-justify md-ml-5">
                                        Esse foi um projeto em colaboração com uma faculdade para os
                                        alunos e participantes dos vestibulares conseguirem acompanhar
                                        suas notas.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h2>Formulário de Inscrição</h2>
                                    <p className="text-justify">
                                        O portal conta com um formulário para inscrição dos alunos
                                        completamente online, onde os dados são guardados criptografados
                                        no banco de dados da faculdade e apresentados de forma
                                        organizada para os responsáveis.
                                </p>
                                </div>
                                <div className="col-6 text-center">
                                    <img src="https://tontasid.sirv.com/Images/mockups/mobile_3.svg" alt="projeto" className="image-2" />
                                </div>
                            </div>
                        </div>

                        <div className="container" id="project-4">
                            <div className="row block-parent">
                                <div className="col-6 mockup-stack-2 block-1">
                                    <GotaMockup />
                                    <img src="https://tontasid.sirv.com/Images/mockups/desktop_4.gif" alt="projeto" className="image-1 gif" />
                                </div>
                                <div className="col-6 block-2">
                                    <h2 className="align-right">Página de Login</h2>
                                    <p className="text-justify">
                                        Essa é uma página de login feita para um web app de gerenciamento monetário para empresas.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="project-5">
                            <div className="row">
                                <div className="col-6">
                                    <h2>Be The Hero</h2>
                                    <p className="text-justify">
                                        Esse é um projeto que foi desenvolvido durante o bootcamp Omnistack 11 da Rocketseat <span role="img" aria-label="rocket emoji">🚀</span>.
                                        Foi o maior degrau que subi no meu conhecimento de React, React Native e Node!
                                </p>
                                </div>
                                <div className="col-6 justify-content-center">
                                    <img src="https://tontasid.sirv.com/Images/project_5.gif" alt="projeto" className="image-1" />
                                </div>
                            </div>

                            <div className="row block-parent">
                                <div className="col-6 justify-content-center block-1">
                                    <img src="https://tontasid.sirv.com/Images/project_5-2.gif" alt="projeto" className="image-2" />
                                </div>
                                <div className="col-6 block-2">
                                    <h2 className="align-right">Be The Hero</h2>
                                    <p className="text-justify">
                                        Esse é o app desenvolvido com React Native! A função dele é listar todos os casos disponíveis para doar, que utiliza da mesma API desenvolvida com Node.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="project-6">
                            <div className="row block-parent">
                                <div className="col-6">
                                    <h2>Aplicativo de metas</h2>
                                    <p className="text-justify">
                                        Desenvolvi essa interface inspirada em um app que encontrei na app store e acabei gostando bastante do resultado. Desenvolvido com React Native, utilizando hooks e tudo mais que há direito.
                                </p>
                                </div>
                                <div className="col-6 justify-content-center">
                                    <img src="https://tontasid.sirv.com/Images/project_6.png" alt="projeto" className="image-1" />
                                </div>
                            </div>
                        </div>
                        <div className="container" id="project-7">
                            <div className="row block-parent">
                                <div className="col-6 justify-content-center block-1">
                                    <img src="https://tontasid.sirv.com/Images/project_7.png" alt="projeto" className="image-1" />
                                </div>
                                <div className="col-6 block-2">
                                    <h2 className="align-right">Clone Spotify</h2>
                                    <p className="text-justify">
                                        Esse projeto foi desenvolvido em um bootcamp, utilizando React no front-end e Ruby on Rails no back-end.
                                        Conta com um sistema de login e criação de usuários completo e você pode instalá-lo em seu celular como um PWA.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <p>Gostou dos meus trabalhos?</p>
                        </div>
                        <div className="row justify-content-center">
                            <Link to="/contact" className="contate">Entre em contato</Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )

}