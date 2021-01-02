import React, {useState} from 'react'
import styled from '@emotion/styled';
import {imagenes} from '../assets/imagenes';
import projects from '../proyectos.json';
import Proyecto from './Proyecto';


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
        max-width: 100%;
        
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
    display: flex;
    flex-direction: column;

    @media (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;



const ImagenProyecto = styled.img`

    width: 20rem;

`;



const Proyectos = () => {



    return ( 
        <section className="seccion-proyectos">
            <h2>Proyectos</h2>

            <div className="contenedor">
                <DivContenidoTec>
                    <DivImgaenes>
                        <ImagenProyecto src={imagenes.imgLaptop} alt="Imagen Dispositivo"/>
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
                    {projects.map(project => (
                        
                        <Proyecto 
                            key={project.id}
                            project={project}
                        />
                    ))}
                </DivProyectos>


            </div>

        </section>
     );
}
 
export default Proyectos;