import styled from "styled-components";

export const Container = styled.article`
    width: 700px;
    height: 250px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    padding: 20px;
    margin-bottom: 10px;
    position: relative;

    time{
        font-size: 12px;
        font-weight: 200;
    }

    h2{
        font-size: 18px;
        font-weight: 300;
    }

    div{
        display: flex;
        flex-direction: row;
        padding-top: 20px
    }

    div p{
        background-color: aliceblue;
        font-size: 10px;
        color: rgba(0,0,0,0.5);
        padding: 5px 10px;
        margin-right: 10px
    }

    & span{
        position: absolute;
        display: block;
        background-color: lightblue
    }

    & span:nth-child(1){
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        transform-origin: center;
        transform: scaleX(0);
        transition: transform 0.2s;
    }
    &:hover span:nth-child(1){
        transform: scaleX(1);
    }
    & span:nth-child(2){
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        transform-origin: center;
        transform: scaleY(0);
        transition: transform 0.2s;
    }
    &:hover span:nth-child(2){
        transform: scaleY(1);
    }

    & span:nth-child(3){
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transform-origin: center;
        transform: scaleX(0);
        transition: transform 0.2s;
    }
    &:hover span:nth-child(3){
        transform: scaleX(1);
    }
    & span:nth-child(4){
        left: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        transform-origin: center;
        transform: scaleY(0);
        transition: transform 0.2s;
    }
    &:hover span:nth-child(4){
        transform: scaleY(1);
    }
`