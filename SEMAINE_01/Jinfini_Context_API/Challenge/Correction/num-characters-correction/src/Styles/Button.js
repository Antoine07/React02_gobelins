import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: ${props => props.little ? '1rem' : '2rem'};
  margin:  ${props => props.little ? '0.5rem' : '1rem'};
  padding: ${props => props.little ? '0.5rem' : '1rem'};
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;