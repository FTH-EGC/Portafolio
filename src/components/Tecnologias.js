import React from 'react'
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';

const SeccionTecnologia = styled.section`

    background-color: #7B60A1;
    padding: 1rem 0 2rem 0;
    margin: 4rem 0;
    display: none;
    h2{
        color: #ffffff;
    }

`;

const TecnologiasDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
`;

const Tecnologia = styled.div`
    background-color: #F5F5F5;
    padding: 2rem 1rem;
    border-radius: 20px;    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    min-height: 12rem;


    &:hover{
    -webkit-box-shadow: 4px 4px 18px 1px rgba(0,0,0,0.71);
    -moz-box-shadow: 4px 4px 18px 1px rgba(0,0,0,0.71);
    box-shadow: 4px 4px 18px 1px rgba(0,0,0,0.71);
    }

`;

const Img = styled.img`
    width: 5rem;

`;
const Img2 = styled.img`
    width: 7rem;

`;
const Img3 = styled.img`
    width: 9rem;

`;

const Tecnologias = () => {
    return ( 

        <SeccionTecnologia>
            <div className="contenedor">
                <h2>Tecnologías que utilizo</h2>
                <TecnologiasDiv>
                    <Tecnologia>
                        <Img src={imagenes.imgHTML5} alt="Imagen HTML5"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img src={imagenes.imgCss3} alt="Imagen CSS3"/>
                    </Tecnologia>
                    <Tecnologia>
                        <img src={imagenes.imgTailwind} alt="Imagen Tailwind"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img2 src={imagenes.imgSass} alt="Imagen SASS"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img2 src={imagenes.imgJS} alt="Imagen JS"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img3 src={imagenes.imgNpm} alt="Imagen NPM"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img3 src={imagenes.imgReact} alt="Imagen React"/>
                    </Tecnologia>
                    <Tecnologia>
                        <Img3 src={imagenes.imgPhp} alt="Imagen PHP"/>
                    </Tecnologia>

                </TecnologiasDiv>
            </div>
        </SeccionTecnologia>

     );
}
 
export default Tecnologias;