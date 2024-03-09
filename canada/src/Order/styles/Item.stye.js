import styled from "styled-components";
export const ItemCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  height: 100px;
  width: 360px;
  background-color: whitesmoke;
  font-family: "Madi";
  /* font-size: 15px; */
  border-radius: 20px;
  padding: 0 10px;
`;

export const ItemImg = styled.img`
  width: 80px;
  border-radius: 4px;
  margin-right: 7px
`
export const ItemDes = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;
`
export const ItemDesPrice = styled.p`
  display: flex;
  flex-direction: column;
  color: #FB8A22;
`

export const ItemDesMenu = styled.p`
  display: flex;
  flex-direction: column;
  color: gray;

`
export const ItemDesCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  div {
    width: 15px;
    text-align: center;
  }
  button {
    &:hover{
      cursor: pointer;
    }
  }
`