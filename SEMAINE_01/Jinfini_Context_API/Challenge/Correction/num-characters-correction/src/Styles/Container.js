import styled from 'styled-components';

const Wrapper = styled.section`
    margin : 0 auto;
    width : 500px;
`;

const Container = ({children}) => {

    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container;