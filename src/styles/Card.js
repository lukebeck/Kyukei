import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CardForm = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  flex: none;
  height: 350px;
  width: 300px;
  margin-top: 10vh;
  padding: 30px 0;
  border: solid 1px ${props => props.theme.fg};
  border-radius: 30px;
  box-shadow: 3px 3px rgb(30, 30, 30);
  text-align: center;
`;

const Card = props => (
    <CardContainer>
        <CardForm>
            {props.children}
        </CardForm>
    </CardContainer>
)

export default Card;