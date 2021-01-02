import React from 'react'
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';


const DivContenidoTec = styled.div`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    column-gap: 2rem;

    @media (min-width: 768px){
        grid-template-columns: 30% 60%;
    }
`;

const DivImgaenes = styled.div`
    display: grid;
    background-color: #916B9A;
    padding: 2rem; 
    border-radius: 30px;
    row-gap: 1rem;

    img{
        width: 15rem;
    }

`;

const DivImagenesDC = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;

    img{
        width: 10rem;
    }
`;

const DivDescripcionP = styled.div`
    line-height: 2;
    text-align: justify;
    font-size: 1.3rem;
    color: #ffffff;

`;

const DivProyectos = styled.div`

    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`;

const DivProyecto = styled.div`
    background-color: #F5F5F5;
    border-radius: 10px;
    text-align: center;
    padding: 1rem;

    h3{
        font-size: 2rem;
        font-weight: 400;
    }

`;

const DivCard = styled.div`
    display: none;


`;


const BotonVer = styled.button`
    background-color: #8E59DE;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    font-size: 1.2rem;
    border: none;
    
    &:hover{
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }

`;


const Proyectos = () => {
    return ( 
        <section className="seccion-proyectos">
            <h2>Proyectos</h2>

            <div className="contenedor">
                <DivContenidoTec>
                    <DivImgaenes>
                        <img src={imagenes.imgLaptop} alt="Imagen Dispositivo"/>
                        <DivImagenesDC>
                            <img src={imagenes.imgTablet} alt="Imagen Dispositivo"/>
                            <img src={imagenes.imgCelular} alt="Imagen Dispositivo"/>
                        </DivImagenesDC>
                    </DivImgaenes>
                    <DivDescripcionP>
                        <p>
                        Aquí presento algunos de los proyectos que he realizado utilizando tecnologías web como HTML5, CSS3 y JS.
                        Los proyectos son responsive, por lo cual se adaptan a cualquier dispositivo (PC, Tablet y móvil).
                        </p>
                    </DivDescripcionP>
                </DivContenidoTec>

                <DivProyectos>
                    <DivProyecto>
                        <img src={imagenes.imgPro1} alt="Imagen Proyecto"/>
                        <h3>Handy Transport</h3>
                        <p>Página estática desarrollada con:</p>
                        <BotonVer>Ver Más</BotonVer>
                        <DivCard>
                            <div>
                                <img src={imagenes.imgHTML5} alt="Iconos Lenguajes"/>
                                <img src={imagenes.imgCss3} alt="Iconos Lenguajes"/>
                                <img src={imagenes.imgJS} alt="Iconos Lenguajes"/>
                            </div>
                            <a href="https://github.com/FTH-EGC/Handy-Transport" target="_blank" rel="noreferrer noopener">
                                <img src={imagenes.imgGitHub} alt=""/>
                            </a>
                        </DivCard>

                    </DivProyecto>
                    <DivProyecto>
                        <img src={imagenes.imgPro1} alt="Imagen Proyecto"/>
                        <h3>Handy Transport:</h3>
                        <p>Página estática desarrollada con:</p>
                        <DivCard>
                            <div>
                                <img src={imagenes.imgHTML5} alt="Iconos Lenguajes"/>
                                <img src={imagenes.imgCss3} alt="Iconos Lenguajes"/>
                                <img src={imagenes.imgJS} alt="Iconos Lenguajes"/>
                            </div>
                            <a href="https://github.com/FTH-EGC/Handy-Transport" target="_blank" rel="noreferrer noopener">
                                <img src={imagenes.imgGitHub} alt=""/>
                            </a>
                        </DivCard>

                    </DivProyecto>
                </DivProyectos>

            </div>

        </section>
     );
}
 
export default Proyectos;