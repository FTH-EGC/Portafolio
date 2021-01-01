import React from 'react';
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';
import ReactTypingEffect from 'react-typing-effect';


const ContenedorImagenHero = styled.div`

    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

`;

const ContenedorImagenHero2 = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 4rem 0;

    &:hover{
        
    }

`;

const ImagenHero1 = styled.img`
    width: 25rem;

`;



const ContenidoPrincipal = styled.div`

    color: #ffffff;
    border: 15px solid #8E59DE;
    border-radius: 35px;
    padding: 3rem 1rem;
    max-width: 820px;
    margin: 0 auto;
    margin-top: 2rem;
    transition: all .4s ease-in-out;
    h1{
        font-size: 3rem;
        text-align: center;
        margin: 1rem 0;

    }


    p{
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        margin: 0;
    }
    @media (min-width: 768px){
        padding: 4rem 1rem;
        h1{
            font-size: 5rem;
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
    a{
        flex: 1;
        color: #8E59DE;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 1rem;
        transition: all .2s ease-in-out;
        &:hover{
            color: #4b24b5;
        }
    }

    @media (min-width: 768px){
        flex-direction: row;
        
        a{
            margin: 0;
        }
    }
`;



let texto = '</>'

const Hero = () => {


    return ( 
        <div >

            <div className="contenedor-imagenes">
                <ContenedorImagenHero>
                    <ImagenHero1 src={imagenes.imgHero} alt=""/>
                </ContenedorImagenHero>
                <ContenidoPrincipal>
                    <ReactTypingEffect
                            text={["Erick García Castillo"]}
                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                            displayTextRenderer={(text, i) => {
                            return (
                                <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                    <span
                                        key={key}
                                        style={{color: 'white'}}
                                    >{char}</span>
                                    );
                                })}
                                </h1>
                            );
                            }}        
                    />
                    <h2>Desarrollador Web</h2>
                    <p>{texto}</p>
                </ContenidoPrincipal>

                <div className="contenedor">
                    <Nav>
                        <a href="!#">Sobre Mí</a>
                        <a href="!#">Tecnologías</a>
                        <a href="!#">Proyectos</a>
                        <a href="!#">Contacto</a>
                    </Nav>
                </div>

                <ContenedorImagenHero2>
                    <ImagenHero1 src={imagenes.imgHero3} alt=""/>
                </ContenedorImagenHero2>
            </div>
            
        </div>

     );
}
 
export default Hero;