import styled from 'styled-components';

export const Area = styled.div`
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Load = styled.div`
 background: transparent;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite  ease-in-out;
    width: 1em;
    height: 4em;
    color: #999;
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    position: relative;
    font-size: 3rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;  

    &::before{
        background: transparent;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite  ease-in-out;
        width: 1em;
        height: 4em;
        position: absolute;
        top:0;
        content: '';
        left: -1.5em;
        -webkit-animation-delay:-0.32s;
        animation-delay: -0.32s;
      

    }
    &::after{
        background: transparent;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite  ease-in-out;
        width: 1em;
        height: 4em;
        position: absolute;
        top:0;
        content: '';
        left: 1.5em;
    }

@-webkit-keyframes load1{
    0%,
    80%,
    100% {
        box-shadow:0 0;
        height: 4em;
    }

    40% {
        box-shadow:0 -2em;
        height: 5em;
    }
}   

@keyframes load1{
    0%,
    80%,
    100% {
        box-shadow:0 0;
        height: 4em;
    }

    40%{
        box-shadow:0 -2em;
        height: 5em;
    }
}
`;