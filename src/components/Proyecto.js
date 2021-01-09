import React, {useState} from 'react';
import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import {imagenes} from '../assets/imagenes';
import { makeStyles } from '@material-ui/core/styles';
import Icono from './Icono';

const DivProyecto = styled.div`
    background-color: #F5F5F5;
    border-radius: 10px;
    text-align: center;
    padding: 1rem;
    flex-basis: calc(50% - 1rem);
    margin-bottom: 2rem;

    h3{
        font-size: 2rem;
        font-weight: 400;
        margin: 1rem 0;
    }

`;

const DivCard = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

`;


const IconosLenguajes = styled.div`

    display: grid;
    grid-template-columns: repeat(3, max-content);
    column-gap: 3rem;
    margin-top: 1rem;
    img{
        height: 3.2rem;
    }
    @media (min-width: 768px){
        img{
            height: 4.5rem;
        }
    }

`;
const ImagenGit = styled.img`
    width: 3rem;

`;


const BotonVer = styled.button`
    background-color: #8E59DE;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    font-size: 1.2rem;
    border: none;
    transition: all .3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #4b24b5;
    }
    &:focus{
        outline: none;
    }

`;

const IconosInferiores = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    text-align: center;
    align-items: center;
    margin: 1rem 0 3rem 0;

    p{
        font-size: 1.1.rem;
        font-weight: 400;
    }
`;

const ParrafoDescripción = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2;

`;

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles(theme => ({
    modal: {
        position: 'absolute',
        width: 700,
        backgroundColor: '#f5f5f5',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3,4),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        maxHeight: 900,
    }

}));

const Proyecto = ({project}) => {


    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const {nombre, descripcion, Enlace, pagina, imagen, iconos,imagenFull} = project;

    let imagenProyecto;
    switch(imagen){
        case 'imgPro1': 
            imagenProyecto = imagenes.imgPro1;
        break;
        case 'imgPro2': 
            imagenProyecto = imagenes.imgPro2;
        break;
        case 'imgPro3': 
            imagenProyecto = imagenes.imgPro3;
        break;
        case 'imgPro4': 
            imagenProyecto = imagenes.imgPro4;
        break;
        default:
            break;

    }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return (

        <DivProyecto>
        <img src={imagenProyecto} alt="Imagen Proyecto"/>
        <h3>{nombre}</h3>
        <BotonVer onClick={handleOpen}>Ver Más</BotonVer>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={`${classes.modal} modal`}>

                <div className="contenido-modal">
                <h2 id="simple-modal-title">{nombre}</h2>
                    <DivCard>
                        <img src={ imagenFull ? imagenes.imgPro4Full : imagenProyecto} alt="Imagen Proyecto"/>
                        <ParrafoDescripción>{descripcion}</ParrafoDescripción>
                        <IconosLenguajes>
                            {iconos.map(icono => (
                                <Icono
                                key={icono}
                                    icono={icono}
                                />
                            ))}
                        </IconosLenguajes>
                        <IconosInferiores>
                            <div>
                                <p>Ver Código en GitHub</p>
                                <a href={Enlace} target="_blank" rel="noreferrer noopener">
                                    <ImagenGit src={imagenes.imgGitHub} alt="Imagen Git"/>
                                </a>
                            </div>
                            <div>
                                <p>Ver Proyecto Funcionando</p>
                                <a href={pagina} target="_blank" rel="noreferrer noopener">
                                    <ImagenGit src={imagenes.imgLinks} alt="Imagen Link"/>
                                </a>
                            </div>
                        </IconosInferiores>
                        <BotonVer 
                            onClick={handleClose}
                        >Cerrar &times;</BotonVer>
                    </DivCard>
                </div>
            </div>
        </Modal>

        </DivProyecto>

      );
}
 
export default Proyecto;