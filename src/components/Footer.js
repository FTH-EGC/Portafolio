import React from 'react';
import styled from '@emotion/styled';




const Footer = () => {
    return (  

        <div className="footer">
            <div className="contenedor">
                     <Nav>
                        <a href="!#" onClick={ scrollElemento}>Sobre Mí</a>
                        <a href="!#" onClick={scrollElementoTec}>Tecnologías</a>
                        <a href="!#" onClick={scrollElementoPro}>Proyectos</a>
                        <a href="!#" onClick={scrollElementoCon}>Contacto</a>
                    </Nav>
            </div>
        </div>

    );
}
 
export default Footer;