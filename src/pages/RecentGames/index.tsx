import React from 'react'
import Header from '../../components/Header'

import { Container, RecentGamesHeader, RecentGamesFilter, TitlePageBold, Filters, LabelFilter, CheckBox, NewBetLink } from './styles'

const RecentGames = () => {
    return (
        <Container>
            <Header />
            <div className="content">
                <RecentGamesHeader>
                    <RecentGamesFilter>
                    <TitlePageBold>RECENT GAMES</TitlePageBold>
                        <Filters>
                            <LabelFilter>Filters</LabelFilter>
                            <CheckBox>Lotofácil</CheckBox>
                            <CheckBox>Mega-sena</CheckBox>
                            <CheckBox>Lotomania</CheckBox>
                        </Filters>
                    </RecentGamesFilter>
                    <NewBetLink> New Bet ❯</NewBetLink>
                </RecentGamesHeader>
            </div>
        </Container>
    )
}

export default RecentGames