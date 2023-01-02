import React from 'react';
import { Typography } from '../../styles';
import { Container, Icon, Line} from './style';

const Card = ({date, title, text}) => {
    return (
        <Container>
            <Line>
                <Typography.Text>
                    {date}
                </Typography.Text>
                <Icon src='https://www.svgrepo.com/show/147921/heart.svg'/>
            </Line>
            <Typography.Title>
                {title}
            </Typography.Title>
            <Typography.Text>
                {text}
            </Typography.Text>
        </Container>
    )
}

export default Card;