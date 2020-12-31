import React from 'react';
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';



const ImagenHero1 = styled.img`
    width: 20rem;

`;


const ContenidoHero = styled.div`

    display: grid;

`;

const Principal = styled.div`

    border: 25px solid #9C9A9A;
    color: #ffffff;
    text-align: center;
    border-radius: 20px;
    max-width: 800px;
    margin: 0 auto;
    h1{
        font-size: 3rem;
    }
`;

const ImagenHero2 = styled.img`

    width: 55rem;

`;


const texto = '</>';


const Hero = () => {
    return ( 
        <ContenidoHero>
            <div>
                <ImagenHero1 src={imagenes.imgHero} alt=""/>
            </div>

            <div className="contenedor">
                <Principal>
                    <h1>Erick García</h1>
                    <h2>Desarrollador Web</h2>
                    <p> {texto} </p>
                </Principal>
            </div>

            <div>
            <ImagenHero2 src={imagenes.imgHer2} alt=""/>
            </div>

        </ContenidoHero>

     );
}
 
export default Hero;