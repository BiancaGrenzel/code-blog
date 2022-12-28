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
`;

export const Text = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
`;

export const Title = styled(Text)`
    grid-area: title;
`;

export const Subtitle = styled(Text)`  
    justify-self: end; 
    grid-area: subtitle; 
`;

export const Input = styled.input`
    justify-self: center; 
    grid-area: input;
    width:100%;
    height: 64px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    border: 0px none;
    &::placeholder{
        color: #fff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        opacity: 0.5;
    }
`;