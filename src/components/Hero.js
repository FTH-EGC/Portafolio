import React from 'react';
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';

const ContenidoHero = styled.div`

    height: 100vh;

`;


const ContenedorImagenHero = styled.div`

    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

`;

const ImagenHero1 = styled.img`
    width: 25rem;

`;

const ImagenHero2 = styled.img`
    position: absolute;
    width: 20rem;
    top: 37rem;
    transition: all .4s ease-in-out;
    visibility: hidden;

    @media (min-width: 768px){
        margin: 0;
        top: 28rem;
        width: 50rem;
        visibility: visible;
    }

`;

const ContenidoPrincipal = styled.div`

    color: #ffffff;
    border: 15px solid #8E59DE;
    border-radius: 35px;
    padding: 3rem 1rem;
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    margin-top: 2rem;
    position: relative;
    z-index: 1;
    transition: all .4s ease-in-out;
    h1{
        font-size: 3rem;
        text-align: center;
        margin: 1rem 0;
    }
    h2{
        font-size: 1.5rem;
        text-align:center;
        margin: .5rem;
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
        h2{
            font-size: 2rem;
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
        <ContenidoHero>

            <div className="contenedor-imagenes">
                <ContenedorImagenHero>
                    <ImagenHero1 src={imagenes.imgHero} alt=""/>
                </ContenedorImagenHero>

                <ContenidoPrincipal>
                    <h1>Erick García</h1>
                    <h2>Desarrollador Web</h2>
                    <p>{texto}</p>
                    <Nav>
                        <a href="!#">Sobre Mí</a>
                        <a href="!#">Tecnologías</a>
                        <a href="!#">Proyectos</a>
                        <a href="!#">Contacto</a>
                    </Nav>

                </ContenidoPrincipal>
            </div>
            
            <ImagenHero2 src={imagenes.imgHer2} alt=""/>
            
        </ContenidoHero>

     );
}
 
export default Hero;