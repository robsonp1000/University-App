import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='wallpaper'>
                <div className='wallpaper-body'>
                    <h1>Uni<span className='text-color'>UFERSA</span></h1>
                    <p className='mt-5'>Seja bem vindo a sua mais nova plataforma universitária, aqui você poderá discutir, tirar dúvidas, mostrar seu portóflio e muito mais.</p>
                    <div className="mt-5 row justify-content-around">
                        <div className='mt-3'>
                            <Link to='/logar' className='btn-login mt'>Já tenho uma conta</Link> 
                        </div>
                        <div className='mt-3'>
                            <Link to='/registrar' className='btn-register'>Quero me cadastrar</Link>
                        </div>
                    </div>
                    <div className='know-more'>Saiba Mais <p><i class="fas fa-chevron-down"></i></p> </div>
                </div>     
            </div>
            
            <div className='second-body'>
                <div className='container'>
                    <h3 className='text-center py-5'>Funcionalidades para facilitar sua vida universitária</h3>
                    <div className='row justify-content-around'>
                        <div className='card col-md-5'>
                            <div className='card-head my-4'>
                                <i class="far fa-comment mr-3 fa-lg"></i><span>Discussões</span>
                            </div>
                            <p className='mb-5 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur quo minima earum quod quos illum adipisci odit expedita in ipsum perspiciatis a iste blanditiis, ad necessitatibus distinctio at dicta.</p>
                        </div>

                        <div className='card col-md-5'>
                            <div className='card-head my-4'>
                            <i class="fas fa-users mr-3 fa-lg"></i><span>Comunidade</span>
                            </div>
                            <p className='mb-5 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur quo minima earum quod quos illum adipisci odit expedita in ipsum perspiciatis a iste blanditiis, ad necessitatibus distinctio at dicta.</p>
                        </div>

                        <div className='card col-md-5'>
                            <div className='card-head my-4'>
                            <i class="far fa-question-circle mr-3 fa-lg"></i><span>Perguntas</span>
                            </div>
                            <p className='mb-5 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur quo minima earum quod quos illum adipisci odit expedita in ipsum perspiciatis a iste blanditiis, ad necessitatibus distinctio at dicta.</p>
                        </div>

                        <div className='card col-md-5'>
                            <div className='card-head my-4'>
                            <i class="far fa-file-alt mr-3 fa-lg"></i><span>Informações</span>
                            </div>
                            <p className='mb-5 text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur quo minima earum quod quos illum adipisci odit expedita in ipsum perspiciatis a iste blanditiis, ad necessitatibus distinctio at dicta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='third-body'>
                <div className='row justify-content-center'>
                    <div className='col-mg-3 mx-5 info'>
                        <h1>400</h1>
                        <p>Alunos Cadastrados</p>
                    </div>
                    <div className='col-mg-3 mx-5 info'>
                        <h1>700</h1>
                        <p>Discussões Abertas</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default HomePage;