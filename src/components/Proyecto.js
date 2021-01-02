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
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;

    img{
        width: 4rem;
    }

`;
const ImagenGit = styled.img`
    width: 3rem;
    margin-top: 2rem;

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
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
      },
      content: {
        padding: "12px 0",
        overflow: 'scroll'
        },
      header: {
            padding: '12px 0',
            borderBottom: '1px solid darkgrey'
        },
}));

const Proyecto = ({project}) => {


    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const {nombre, descripcion, Enlace, pagina, imagen, iconos} = project;

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

    }

    const handleOpen = () => {
        setOpen(true);
        console.log(project.id);
        console.log(project)
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
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">{nombre}</h2>
            <DivCard>
                <img src={imagenProyecto} alt="Imagen Proyecto"/>
                <p>{descripcion}</p>
                <IconosLenguajes>
                    {iconos.map(icono => (
                        <Icono
                        key={icono}
                            icono={icono}
                        />
                    ))}
                </IconosLenguajes>
                <a href={Enlace} target="_blank" rel="noreferrer noopener">
                    <ImagenGit src={imagenes.imgGitHub} alt=""/>
                </a>
            </DivCard>
        </div>
        </Modal>

        </DivProyecto>

      );
}
 
export default Proyecto;