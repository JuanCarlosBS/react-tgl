import React, { Fragment, useState } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePage, TitlePageBold, Filters, LabelFilter,  NewBetLink, Items } from './styles'
import RecentGame from '../../components/RecentGame'
import CheckFilter from '../../components/CheckFilter'
import * as saveGamesActions from '../../store/ducks/saveGames/actions';
import { ApplicationState } from '../../store';
import { saveGame } from '../../store/ducks/saveGames/types';

interface StateProps {
    saveGames: saveGame[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps

const DUMMY_GAMES = [
    {
      "type": "Lotofácil",
      "description": "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      "range": 25,
      "price": 2.5,
      "max-number": 15,
      "color": "#7F3992",
      "min-cart-value": 30
    },
    {
      "type": "Mega-Sena",
      "description": "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      "range": 60,
      "price": 4.5,
      "max-number": 6,
      "color": "#01AC66",
      "min-cart-value": 30
    },
    {
      "type": "Quina",
      "description": "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      "range": 80,
      "price": 2,
      "max-number": 5,
      "color": "#F79C31",
      "min-cart-value": 30
    }
]

function RecentGames(props: Props) {
    const [game, setGame] = useState<number>(-1)
    const { loadRequest } = props
    const { saveGames } = props

    loadRequest()

    function handleGame(gameValue: number) {
        selectGame(gameValue)
    }
    function selectGame(props: number){
        setGame(props)
    }


    return (
        <Fragment>
            <Header />
        <Container>
            
            <div className="content">
                <RecentGamesHeader>
                    <RecentGamesFilter>
                    <TitlePageBold>RECENT GAMES</TitlePageBold>
                    <TitlePage>Filters</TitlePage>
                        <Filters>
                            {DUMMY_GAMES.map((product, index) =>{ 
                                if (index === game) {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={product.color} secondColor={'#fff'}>{product.type}</CheckFilter>
                                } else {
                                    return <CheckFilter selectFilter={handleGame} value={index} firstColor={'#fff'} secondColor={product.color}>{product.type}</CheckFilter>
                                }
                            }
                            )}
                        </Filters>
                    </RecentGamesFilter>
                    <NewBetLink to='/new-bet'> New Bet ❯</NewBetLink>
                </RecentGamesHeader>
            </div>
            <Items>
                {saveGames.map((savedGame) => {
                    if (game === -1) 
                        return (<RecentGame numbers={savedGame.numbers} date={'30/05/2002'} price={savedGame.price} game={savedGame.type} color={savedGame.color}></RecentGame>)
                    else if (DUMMY_GAMES[game].type === savedGame.type)
                        return (<RecentGame numbers={savedGame.numbers} date={'30/05/2002'} price={savedGame.price} game={savedGame.type} color={savedGame.color}></RecentGame>)
                    else
                        return 
                })}
            </Items>
        </Container>
        </Fragment>

    )
}

const mapStateToProps = (state: ApplicationState) => ({
    saveGames: state.saveGames.data,
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(saveGamesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecentGames)