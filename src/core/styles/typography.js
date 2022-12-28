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