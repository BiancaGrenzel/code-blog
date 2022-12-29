import React from 'react';
import { Typography } from '../../styles';
import { Container, Icon, Line} from './style';

const Card = () => {
    return (
        <Container>
            <Line>
                <Typography.Text>
                    02 de jul, 2021
                </Typography.Text>
                <Icon src='https://www.svgrepo.com/show/147921/heart.svg'/>
            </Line>
            <Typography.Title>
                Agora é oficial: o Windows 11 está vindo
            </Typography.Title>
            <Typography.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </Typography.Text>
        </Container>
    )
}

export default Card;