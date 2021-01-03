import React from 'react';
import styled from '@emotion/styled';


const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    a{
        flex: 1;
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 1rem;
        transition: all .2s ease-in-out;
        &:hover{
            color: #4b24b5;
            cursor: pointer;
        }
    }

    @media (min-width: 768px){
        flex-direction: row;
        
        a{
            margin: 0;
        }
    }
`;

const Footer = () => {
    const scrollElementoHero= e => {
        e.preventDefault();
        const seccionSobre = document.querySelector('.css-1lo1cxt');
        seccionSobre.scrollIntoView({behavior: 'smooth'}); 
    } 


    const scrollElemento= e => {
        e.preventDefault();
        const seccionSobre = document.querySelector('.seccion-personal');
        seccionSobre.scrollIntoView({behavior: 'smooth'}); 
    } 

    const scrollElementoTec= e => {
        e.preventDefault();
        const seccionTec = document.querySelector('.seccion-tecnologias');
        seccionTec.scrollIntoView({behavior: 'smooth'}); 
    } 
    const scrollElementoPro= e => {
        e.preventDefault();
        const seccionTec = document.querySelector('.seccion-proyectos');
        seccionTec.scrollIntoView({behavior: 'smooth'}); 
    } 
    const scrollElementoCon= e => {
        e.preventDefault();
        const seccionTec = document.querySelector('.seccion-contacto');
        seccionTec.scrollIntoView({behavior: 'smooth'}); 
    } 


    return (  

        <div className="footer">
            <div className="contenedor">
                     <Nav>
                        <a href="!#" onClick={scrollElementoHero}>Inicio</a>
                        <a href="!#" onClick={scrollElemento}>Sobre Mí</a>
                        <a href="!#" onClick={scrollElementoTec}>Tecnologías</a>
                        <a href="!#" onClick={scrollElementoPro}>Proyectos</a>
                        <a href="!#" onClick={scrollElementoCon}>Contacto</a>
                    </Nav>
            </div>
        </div>

    );
}
 
export default Footer;