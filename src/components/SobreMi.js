import React from 'react'
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';

const InfoPersonal = styled.div`

    background-color: #F5F5F5;
    display: grid;
    grid-template-rows: repeat(2, max-content);
    text-align: center;
    padding: 2rem;
    border-radius: 30px;
    
`;

const ContenidoPersonal = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: center;
    }

`;
const DescripcionPersonal = styled.div`
    flex-basis: 50%;
    line-height: 2;
    text-align: justify;
    font-size: 1.1rem;

`;

const DivImagenMi = styled.div`
    grid-column: 2/3;

`;

const ImagenMi = styled.img`
    width: 30rem;

`;


const SobreMi = () => {
    return ( 

            <div className="contenedor">
                <InfoPersonal>
                    <h2>Sobre Mí</h2>
                    <ContenidoPersonal>
                        <DescripcionPersonal>
                            <p>
                                Hola! Me llamo Erick García, tengo 22 años, estudié la carrera de Ing. en Sistemas Computacionales 
                                y me especialicé en Proyectos Informáticos y Tecnología Web.
                            </p>
                        </DescripcionPersonal>
                        <DivImagenMi>
                            <ImagenMi src={imagenes.imgSobreMi} alt="Imagen Sobre Mi"/>
                        </DivImagenMi>
                    </ContenidoPersonal>
                </InfoPersonal>
            </div>

     );
}
 
export default SobreMi;