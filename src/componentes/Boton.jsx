import styled from "styled-components";

const ContenedorBoton = styled.div`
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 38px;
    color: white;
    border-radius: 25px;
    border: 2px solid white;
    margin: 4px;
    cursor: pointer;
    user-select: none;
    flex: 1 1;
    background-color: ${props => (props.esOperador === "true" ? "#177681" : "#26c9d5")};

    &:hover {
        background-color: ${props => (props.esOperador === "true" ? "#0e3f43" : "#177681")};
    }
`

const Boton = (props) => {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=') ? "true" : "false"
    };

    return <ContenedorBoton esOperador={esOperador(props.children)} onClick={props.isCalcButton ? () => props.manejarClick() : () => props.manejarClick(props.children)}>
        {props.children}
    </ContenedorBoton>
}

export default Boton