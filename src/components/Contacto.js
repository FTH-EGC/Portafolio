
import React from 'react';
import styled from '@emotion/styled';

const DivContenedorCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr ));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
    a{
        text-decoration: none;
    }

`;

const DivCardCon = styled.div`

    border-radius: 20px;
    border: 3px solid #4B24B5;
    background-color: #f5f5f5;
    color: #4B24B5;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2rem;
    align-items: center;
    transition: all .5s ease-in-out;
    &:hover{
        transform: scale(1.1, 1.1);
    }

`;

const DivDescCon = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 1.2rem;
    font-weight: 700;
    p{
        font-size: 1.6rem;
        margin: .5rem 0;
    }
    span{
        font-size: 1rem;
        
    }
`;

const DivIconosCon = styled.div`
    text-align: center;
    i{
        font-size: 3.5rem;
        color: #4B24B5;
    }

`;

const Contacto = () =>{

    return(
        <section className="seccion-contacto contenedor">
            <h2>Contacto</h2>
            <h3>Contáctame y crearemos grandes proyectos</h3>

            <DivContenedorCards>
                <DivCardCon>
                    <DivDescCon>   
                        <p>UBICACIÓN</p>
                        <p><span>Tlalnepantla de Baz - México</span></p>
                    </DivDescCon>
                    <DivIconosCon>
                        <i className="fas fa-map-marker-alt"></i>
                    </DivIconosCon>
                </DivCardCon>

                <a href="https://wa.me/525571690209" target="_blank" rel="noreferrer noopener">
                    <DivCardCon>
                        <DivDescCon>   
                            <p>WHATSAPP</p>
                            <p><span>Mi WhatsApp</span></p>
                        </DivDescCon>
                        <DivIconosCon>

                                <i className="fab fa-whatsapp"></i>

                        </DivIconosCon>
                    </DivCardCon>
                </a>

                <a href="mailto: ironmaiden-emylle@hotmail.com" target="_blank" rel="noreferrer noopener">
                    <DivCardCon>
                        <DivDescCon>   
                            <p>EMAIL</p>
                            <p><span>ironmaiden-emylle@hotmail.com</span></p>
                        </DivDescCon>
                        <DivIconosCon>

                                <i className="fas fa-envelope"></i>

                        </DivIconosCon>
                    </DivCardCon>
                </a>

                <a href="https://www.linkedin.com/in/erick-garcía-castillo" target="_blank" rel="noopener noreferrer">
                    <DivCardCon>
                        <DivDescCon>   
                            <p>LinkedIn</p>
                            <p><span>Perfil de LinkedIn</span></p>
                        </DivDescCon>
                        <DivIconosCon>

                                <i className="fab fa-linkedin"></i>

                        </DivIconosCon>
                    </DivCardCon>
                </a>

            </DivContenedorCards>
        </section>

    )
}

export default Contacto;