import React from 'react';
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';

const ContenidoHero = styled.div`
    max-height: 100vh;
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

    @media (min-width: 768px){
        margin: 0;
        top: 28rem;
        width: 50rem;
    }

`;

const ContenidoPrincipal = styled.div`

    color: #ffffff;
    border: 13px solid #9C9A9A;
    border-radius: 35px;
    padding: 3rem 1rem;
    position: relative;
    max-width: 800px;
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
        margin: 1rem 0;
    }
    @media (min-width: 768px){
        padding: 5rem 1rem;
        h1{
            font-size: 5rem;
        }
        h2{
            font-size: 2rem;
        }
        p{
            margin-bottom: 2rem;
        }
    }
`;

const texto = '</>';


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
                </ContenidoPrincipal>
            </div>
            
            <ImagenHero2 src={imagenes.imgHer2} alt=""/>
            
        </ContenidoHero>

     );
}
 
export default Hero;