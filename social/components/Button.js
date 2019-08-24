import styled from 'styled-components';

const Button = styled.button`
    border-radius: 1px;
    padding: 0.5em;

    &:hover:enabled {
        cursor: pointer;
        background: #eee;
        color: black;
        border-color: 1px solid black;
    }

    
`

export default Button