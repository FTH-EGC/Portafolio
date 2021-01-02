import React, {useRef, useEffect} from 'react';
import styled from '@emotion/styled';
import {TweenMax, TimelineLite, Power3} from 'gsap';
import {imagenes} from '../assets/imagenes';
import ReactTypingEffect from 'react-typing-effect';


const SectionHero = styled.section`

    visibility: hidden;

`;

const ContenedorImagenHero = styled.div`

    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;

`;

const ContenedorImagenHero2 = styled.div`
    display: grid;
    grid-template-columns: repeat(5,max-content);
    column-gap: 1rem;
    margin: 4rem 0 1rem 0;
    img{
        height: 3.75rem;
        transition: all .7s;

        @media (min-width: 768px){
            height: 6rem;
        }
    }
    @media (min-width: 768px){
        column-gap: 1.5rem;
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
        font-size: 3.5rem;
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



let texto = '</>'

const Hero = () => {

    let hero = useRef(null);
    let images = useRef(null);
    let imgComp = useRef(null);
    let tl = new TimelineLite({delay: .8});

    useEffect(() => {

        // Images Vars 
        const icon1 = images.children[0];
        const icon2 = images.children[1];
        const icon3 = images.children[2];
        const icon4 = images.children[3];
        const icon5 = images.children[4];


        TweenMax.to(hero, 0, {css:{visibility: 'visible'}})

        tl
        .from(imgComp, 1.2, {x: -1920, ease: Power3.easeOut}, {duration: 2})
        .from(icon5, 1.2, {x: -1920, ease: Power3.easeOut}, {duration: 1})
        .from(icon4, 1.4, {x: -1920, ease: Power3.easeOut}, {duration: 1})
        .from(icon3, 1.6, {x: -1920, ease: Power3.easeOut}, {duration: 1})
        .from(icon2, 1.8, {x: -1920, ease: Power3.easeOut}, {duration: 1})
        .from(icon1, 2, {x: -1920, ease: Power3.easeOut}, {duration: 1})

     //eslint-disable-next-line
    }, [])


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


    return ( 
        <SectionHero ref={el => hero = el} >

            <div className="contenedor-imagenes">
                <ContenedorImagenHero ref={el => imgComp = el}>
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
                        <a href="!#" onClick={ scrollElemento}>Sobre Mí</a>
                        <a href="!#" onClick={scrollElementoTec}>Tecnologías</a>
                        <a href="!#" onClick={scrollElementoPro}>Proyectos</a>
                        <a href="!#">Contacto</a>
                    </Nav>
                </div>

                <ContenedorImagenHero2 ref={el => images = el}>
                    <img src={imagenes.imgDev1} alt="Imagen Icono Dev"/>
                    <img src={imagenes.imgDev2} alt="Imagen Icono Dev"/>
                    <img src={imagenes.imgDev3} alt="Imagen Icono Dev"/>
                    <img src={imagenes.imgDev4} alt="Imagen Icono Dev"/>
                    <img src={imagenes.imgDev5} alt="Imagen Icono Dev"/>
                </ContenedorImagenHero2>
            </div>
            
        </SectionHero>

     );
}
 
export default Hero;