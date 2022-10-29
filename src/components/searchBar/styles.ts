import styled from "styled-components";

export const Search = styled.div`
    width: 700px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;

    button{
        width: 50px;
        height: 100%;
        border-left: 1px solid rgba(0, 0, 0, 0.09);
        font-weight: 700;
        color: rgba(0, 0, 0, 0.3);
        background: none;
    }

    button:hover{
        color: lightblue;
        cursor: pointer;
    }

    input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 20px;
        font-weight: 300;
    }
`

