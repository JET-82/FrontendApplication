import styled from "styled-components";

export const MenuCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  gap: 5px;
`;



export const Header = styled.div`
  display: flex;
  font-family: 'Madi';
  font-size: 30px;
  /* background-color: #EBE4DE; */
  background-color: #F5F5F5;
  width: 100%;
  height: 10%;
  padding: 20px 0 0 0;
`;


export const Preshow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
  background-color: #FFB30E;

`;

export const Total = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Madi';
  gap: 200px;
`
export const OrderBtn = styled.button`
  background-color: white;
  color: #F97613;
  width: 300px;
  height: 60px;
  border-radius: 15px;
  font-family: Madi;
  font-size: 1.2rem;
  border: none;
  &:hover{
      cursor: pointer;
      background-color: tomato;
      color: white
    }
`;

export const HeaderImg = styled.div`
  width: 100%;
  height: 80%;
  
`