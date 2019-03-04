import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    border: none;
    border-bottom: ${props => props.theme.fg} solid 3px;
    padding: 10px;
    margin: 10px;
    width: 120px;
    flex: none;
    display: flex;
    justify-content: center;
    :focus {outline:0;}
    :visited{
          color: black;
    }
    @media (hover) {
        :hover {
            color: ${props => props.theme.main};
            border-bottom: ${props => props.theme.main} solid 3px;
        }
    }
`;

export default Button;