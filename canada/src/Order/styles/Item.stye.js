import styled from "styled-components";
export const ItemCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  height: 90px;
  width: 350px;
  opacity: 0.9;
  background-color: white;
  font-family: "Madi";
  border-radius: 20px;
  padding: 0 10px;
  box-shadow: 2px 2px 3px gray;
`;

export const ItemImg = styled.img`
  width: 80px;
  height: 53.38px;
  border-radius: 4px;
  margin-right: 7px
`
export const ItemDes = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;
`
export const ItemDesPrice = styled.div`
  display: flex;
  flex-direction: column;
  color: #FB8A22;
`

export const ItemDesMenu = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;

`
export const ItemDesCount = styled.div`
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