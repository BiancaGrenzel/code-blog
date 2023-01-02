import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 64px);
    padding: 32px 32px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`
