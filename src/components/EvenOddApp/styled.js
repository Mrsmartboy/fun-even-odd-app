import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

`

export const CardContainer=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-image: linear-gradient(to bottom,#ff6e7f,#bfe9ff);
 width: 50%;
 border-radius: 10px;
 height: 500px;
 text-align: center;

`

export const Header=styled.h1`
   color: #0f172a;
   font-size: 40px;
   font-weight: bold;

`

export const Para=styled.p`
   color: #334155;
   font-size: 20px;
   font-weight: 400;
`
export const Button =styled.button`
border: 2px solid #000000;
border-radius: 10px;
padding: 10px;
background-color: #ffffff;
cursor: pointer;
`

export const Para1=styled.p`
  font-size: 15px;
  color: #1e293b;

`