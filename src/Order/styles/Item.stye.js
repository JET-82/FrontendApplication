import styled from "styled-components";
export const ItemCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 100px;
  width: 300px;
  background-color: whitesmoke;
  font-family: "Madi";
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
  width: 50%;
  color: #FB8A22;
`

export const ItemDesMenu = styled.p`
  display: flex;
  flex-direction: column;
  width: 50%;
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