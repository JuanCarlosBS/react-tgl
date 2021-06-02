import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.header`
    min-width: 425px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1080px;
`

export const Logo = styled.h1`
    margin-left: 11px;
    font-size: 44px;
    color: #707070
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
`

export const TextMenu = styled.h2`
    font-size: 20px;
    color: #707070;
    cursor: pointer;

`

export const TextMenuFirst = styled(TextMenu)`
    margin-right: 57px;
`

export const LinkMenu = styled(Link)`
    font-size: 20px;
    color: #707070;
    cursor: pointer;
    text-decoration: none;
`

export const LinkMenuFirst = styled(LinkMenu)`
    margin-right: 57px;
`

export const Divider = styled.hr` 
    display: flex;
    margin-top: -4px;
    justify-content: center;
    width: 100%;
    border: 1px solid #EBEBEB;
`

export const Subline = styled.hr`
    max-width: 930px;
    margin-top: -4px;
    width: 95px;
    border: 3px solid #b5c401;
    border-radius: 6px;
`