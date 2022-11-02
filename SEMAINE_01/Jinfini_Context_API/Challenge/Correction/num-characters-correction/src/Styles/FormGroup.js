import styled from "styled-components";

const Group = styled.div`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const Label = styled.label`
    font-size: 1.8rem;
    font-weigth : bold;
    color : palevioletred;
`;

const FormGroup = ({children, label}) => {

    return(
        <Group>
            <Label >{label}</Label>
            {children}
        </Group>
    )
}

export default FormGroup;