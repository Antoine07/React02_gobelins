import styled from "styled-components";

// vous pouvez passer des props à vos composants en utilisant la syntaxe suivante de styled components
// props => props.myProp
const Content = styled.div`
    margin : 1rem;
    padding: 1rem;
    background-color : ${props => props.color}; 
    font-size : ${props => props.size}px;
`;

export default Content;