import styled from "styled-components";

///////////////////// CANDIDATE CARD COMPONENT :
export const ContainerCard = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95%;
  box-shadow: grey 1px 1px 5px;
  width: 90%;
  margin-bottom: 10px;
  /* background-color: blue; */
`;
export const ProfilePhoto = styled.img`
  width: 40vh;
  height: 45vh;
  box-shadow: grey 1px 1px 5px;
  margin-bottom: 0;
  /* background-color: blue; */
`;
export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 110px;
  font-size: 15px;
  /* background-color: blue; */
  width: 35vh;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
  width: 30vh;
  margin-top: 0;
  height: 35px;
`;

export const ButtonX = styled.button`
  color: red;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 20px;
  outline-style: none;
  margin-top: 0;
`;

export const ButtonHeart = styled.button`
  color: #16bf00;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 20px;
  outline-style: none;
`;

export const ResetButton = styled.button`
  border-radius: 8px;
  color: red;
  height: 20px;
  margin-right: 10px;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color: #f5f6f6;
  }
  padding: 4px 10px;
  font-size: 10px;
  outline-style: none;
`;

///////////////////// MATCH LIST COMPONENT :
export const ContainerMatchList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: grey 1px 1px 5px;
  width: 45vh;
  height: 80vh;
  /* background-color: pink; */
  flex-wrap: wrap;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* background-color: yellow; */
  justify-content: space-around;
  margin: 3px;
  align-items: center;
`;
export const MatchCard = styled.div`
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 80px;
  flex-wrap: wrap;
`;
export const PhotoExemple = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const MatchName = styled.h6`
  font-size: 10px;
  margin: 0;
  padding: 0;
`;
