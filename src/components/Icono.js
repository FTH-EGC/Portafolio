import React from 'react';
import {imagenes} from '../assets/imagenes';


const Icono = ({icono}) => {

    let iconLenguajes;
    switch(icono){
        case 'HTML5': 
            iconLenguajes = imagenes.imgHTML5;
        break;
        case 'CSS3': 
            iconLenguajes = imagenes.imgCss3;
        break;
        case 'JS': 
            iconLenguajes = imagenes.imgJS;
        break;
        case 'React': 
            iconLenguajes = imagenes.imgReact;
        break;
        case 'Styled': 
        iconLenguajes = imagenes.imgStyled;
        break;
        case 'Tailwind': 
        iconLenguajes = imagenes.imgTailwind;
        break;

        default:
            break;

    }

    return ( 
        <img src={iconLenguajes} alt="Iconos Lenguajes"/>
     );
}
 
export default Icono;