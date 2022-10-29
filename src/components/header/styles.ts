import styled from 'styled-components';

export const HeaderBar = styled.div`
    padding: 20px;
    width: 100%;
    height: 60px;
    background-color: #111111;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 1080px;
`
export const Brand = styled.div`
    display: flex;
    align-items: center;

    h1{
        font-size: 20px;
        color: #eeeeee;
        font-weight: 300;
        padding: 10px
    }

    img{
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: yellow
    }
`
