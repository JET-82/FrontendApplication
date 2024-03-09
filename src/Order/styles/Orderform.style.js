import styled from "styled-components";
export const MenuCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 10px; */
  width: 100%;
  height: 70%;
  background-color: orange;
`;


export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rock3D';
  font-family: 'Madi';
  font-size: 40px;
  background-color: orange;
  width: 100%;
  margin:0;
  padding: 10px 0;
`;


export const Preshow = styled.div`
  height: 25%;
  width: 100%;
  /* background-color: white; */
`;


export const OrderBtn = styled.button`
  background-color: white;
  width: 300px;
  height: 60px;
  border-radius: 15px;
  font-family: Madi;
  font-size: 1.2rem;
  &:hover{
      cursor: pointer;
      background-color: orange;
      color: white
    }
`;