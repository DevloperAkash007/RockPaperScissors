import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  ResponsiveContainer,
  ScoreBoard,
  PlayerResultContainer,
  PlayerName,
  GameName,
  ButtonItem,
  ResultContainer,
  PopupContainer,
  RulesButton,
  Player,
  RulesImage,
  CloseButton,
  PlayingContainer,
  Image,
  ScoreCard,
  Score,
  GameResult,
  PlayAgainButton,
  RuleContainer,
  ScoreValue,
} from './StyledComponents'

class Game extends Component {
  state = {
    score: 0,
    gameInPrgress: true,
    result: '',
    yourChoiceImg: '',
    opponentChoiceImg: '',
  }

  renderResult = () => {
    const playAgain = () => this.setState({gameInPrgress: true})
    const {result, yourChoiceImg, opponentChoiceImg} = this.state
    return (
      <ResultContainer>
        <PlayerResultContainer>
          <Player>
            <PlayerName>YOU</PlayerName>
            <Image alt="your choice" src={yourChoiceImg} />
          </Player>
          <Player>
            <PlayerName>OPPONENT</PlayerName>
            <Image alt="opponent choice" src={opponentChoiceImg} />
          </Player>
        </PlayerResultContainer>
        <GameResult>{result}</GameResult>
        <PlayAgainButton type="button" onClick={playAgain}>
          Play Again
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  increaseScore = result => {
    if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
  }

  checkingWinOrLoss = (you, opponent) => {
    const won = 'YOU WON'
    const lose = 'YOU LOSE'
    let result = ''
    if (you === 'ROCK' && opponent === 'PAPER') {
      result = lose
    } else if (you === 'ROCK' && opponent === 'SCISSORS') {
      result = won
    } else if (you === 'PAPER' && opponent === 'SCISSORS') {
      result = lose
    } else if (you === 'PAPER' && opponent === 'ROCK') {
      result = won
    } else if (you === 'SCISSORS' && opponent === 'ROCK') {
      result = lose
    } else if (you === 'SCISSORS' && opponent === 'PAPER') {
      result = won
    } else {
      result = 'IT IS DRAW'
    }
    return result
  }

  playRondomOpponent = () => {
    const {choicesList} = this.props
    const randomValue = Math.floor(Math.random() * 3)
    const getOpponentValue = choicesList[randomValue]
    return getOpponentValue
  }

  onPlay = (id, imageUrl) => {
    const yourChoice = {id, imageUrl}
    const opponentChoice = this.playRondomOpponent()
    const you = yourChoice.id
    const opponent = opponentChoice.id
    const yourChoiceImg = yourChoice.imageUrl
    const opponentChoiceImg = opponentChoice.imageUrl

    const result = this.checkingWinOrLoss(you, opponent)
    this.increaseScore(result)
    this.setState({
      yourChoiceImg,
      opponentChoiceImg,
      result,
      gameInPrgress: false,
    })
  }

  renderGame = () => {
    const {choicesList} = this.props
    const ClickImage = props => {
      const {choice, onPlay} = props
      const {id, imageUrl} = choice
      const playGame = () => {
        onPlay(id, imageUrl)
      }
      return (
        <ButtonItem
          data-testid={`${id.toLocaleLowerCase()}Button`}
          type="button"
          onClick={playGame}
        >
          <Image alt={id} src={imageUrl} />
        </ButtonItem>
      )
    }
    return (
      <PlayingContainer>
        {choicesList.map(choice => (
          <ClickImage key={choice.id} choice={choice} onPlay={this.onPlay} />
        ))}
      </PlayingContainer>
    )
  }

  render() {
    const {gameInPrgress, score} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreBoard>
            <GameName>
              ROCK
              <br /> PAPER <br /> SCISSORS
            </GameName>
            <ScoreCard>
              <Score>Score</Score>
              <ScoreValue fontFamily="Roboto">{score}</ScoreValue>
            </ScoreCard>
          </ScoreBoard>

          {gameInPrgress ? this.renderGame() : this.renderResult()}

          <RuleContainer>
            <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
              {close => (
                <PopupContainer>
                  <CloseButton>
                    <RiCloseLine size="30" onClick={close} />
                  </CloseButton>
                  <RulesImage
                    alt="rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                </PopupContainer>
              )}
            </Popup>
          </RuleContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default Game
