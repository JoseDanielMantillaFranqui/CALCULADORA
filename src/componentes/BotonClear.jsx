import styled from "styled-components";

const ContenedorBotonClear = styled.div`
    height: 80px;
    display: flex;
    font-size: 1.6em;
    flex: 1;
    background-color: #0d3531;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 45px;
    user-select:none;

    &:hover {
        background-color: #912121;
    }
`

const BotonClear = (props) => {
    return <ContenedorBotonClear onClick={props.manejarClear}>
        {props.children}
    </ContenedorBotonClear>
}

export default BotonClear