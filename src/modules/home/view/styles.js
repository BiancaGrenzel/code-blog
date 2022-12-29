import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100vw - 800px);
    padding: 32px 400px;
    background: #F3F5F7;
    height: calc(100vh - 196px - 64px);
    max-height: calc(100vh - 196px - 64px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 32px;
`