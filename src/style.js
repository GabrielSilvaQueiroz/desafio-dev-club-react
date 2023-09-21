import styled from 'styled-components'

export const ContainerPrincipal = styled.div`
background: #0A0A10;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
height: 100vh;
`;

export const Image = styled.img`
margin-top: 30px;
`;

export const H1 = styled.h1`
color: white;
font-family: Roboto;
font-size: 28px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: center;
margin-bottom: 76px;
`;

export const ContainerItens = styled.div`
background: #0A0A10;
padding: 50px 36px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
`;

export const Label = styled.p`
color: #EEE;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 122.222% */
letter-spacing: -0.408px;
margin-left: 15px;
`;

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
display: flex;
padding: 19px 139px 18px 15px;
align-items: center;
margin-bottom: 42px;

color: white;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
border: none;
outline: none;
padding-left: 15px;
`;

export const Button = styled.button`
background: #D93856;
height: 68px;
margin-top: 34px;

color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: 2.5px; /* 14.706% */

cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`;

export const RequestsOrder = styled.li`
`
