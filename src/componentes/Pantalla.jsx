import styled from "styled-components";

const Input = styled.div`
    height: 75px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    background-color: #0e2d31;
    color: white;
    padding: 11px 30px 11px 11px;
    margin: 1px solid #888;
    box-shadow: -1px 4px 1px 1px #1d5d64;
`

const Pantalla = ({input}) => {
    return <Input>
        {input}
    </Input>
}

export default Pantalla