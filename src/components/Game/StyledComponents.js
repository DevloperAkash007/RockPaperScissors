import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1400px;
  } ;
`
export const ScoreBoard = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const GameName = styled.h1`
  font-size: 25px;
  font-family: 'Bree serif';
  font-weight: 800;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  } ;
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 10px 30px;
  border-radius: 10px;
  flex-direction: column;
  align-items:center;  
  @media screen and (max-width: 767px){
    padding: 5px 10px;
  };
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 32px;
  margin-bottom: 5px;
  font-weight: 900;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  } ;
`
export const ScoreValue = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #223a5f;
  text-align: center;
  font-family: ${props => props.fontFamily};
`

export const PlayingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 640px;
  margin: auto;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    width: 50%;
  } ;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
  margin-bottom: 40px;
`
export const PlayerResultContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`
export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayerName = styled.h1`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
`

export const ButtonItem = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin: 20px;
  cursor: pointer;
`
export const Image = styled.img`
  width: 180px;
  @media screen and (max-width: 767px) {
    width: 120px;
  } ;
`
export const GameResult = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  margin-bottom: 20px;
  font-weight: 800;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
`

export const RuleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 800;
`
export const RulesImage = styled.img`
  width: 100%;
`
export const PopupContainer = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const CloseButton = styled.button`
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`
