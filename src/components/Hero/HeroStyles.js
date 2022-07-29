import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  position: relative;
  

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const Button = styled.button `
text-decoration: none;
 position: absolute;
 border: none;
 font-size: 20px;
 font-family: inherit;
 color: #fff;
 width: 9em;
 height: 3em;
 line-height: 2em;
 text-align: center;
 background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
 background-size: 300%;
 border-radius: 30px;
 z-index: 1;
 margin-left:1.7rem;

 &:hover {
  animation: ani 8s linear infinite;
  border: none;
  cursor:pointer;
 }

 &:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
 }

 &:hover::before {
  filter: blur(20px);
 }

 &:active {
  background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
 }
 
 @media screen and (max-width:640px){
  margin-top: 150px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 90%;
    font-size: 14px;
    line-height: 16px;
 }

`
