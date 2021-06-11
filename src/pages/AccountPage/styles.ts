import React from 'react';
import styles from 'styled-components'

export const Container = styles.div`
    width: 100%;
    height: 100%;

`

export const Content = styles.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify content center;
`

export const Input = styles.input`
    margin-top: 12px;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 8px 8px;
    background-color: #fff;
    border: 2px solid #707070;
    border-radius: 8px;
    font-size: 16px;
    width: 325px;
`

export const Button = styles.button`
    padding: 8px 82px;
    margin-top: 26px;
    background: #b5c401;
    border-radius: 8px;
    border: 0px solid #fff;
    color: #fff;   
    cursor: pointer;
`

export const Title = styles.h6`
    margin-top: 35px;
    font-size: 24px;
    color: #707070
`

export const SubTitle = styles(Title)`
    margin-top: 10px;
    font-size: 18px;
`

export const P = styles.p`
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
    color:#707070
`