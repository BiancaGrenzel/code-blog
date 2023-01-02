import styled from 'styled-components';

export const Header = styled.div`
    background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
    padding: 32px 400px;
    width: calc(100% - 800px);
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "title subtitle ."
    "input input .";
    @media (max-width: 1400px) {
        width: calc(100vw - 300px);
        padding: 32px 150px;
    }
    @media (max-width: 700px) {
        width: calc(100vw - 64px);
        padding: 32px 32px;
    }
`;