import styled from 'styled-components';

export const Text = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: ${props => props.color ? props.color : "black"};
    margin: 0px;
`;

export const Title = styled(Text)`
    grid-area: title;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    color: ${props => props.color ? props.color : "black"};
`;

export const Subtitle = styled(Text)`  
    justify-self: end; 
    grid-area: subtitle; 
`;