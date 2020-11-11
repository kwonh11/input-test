import styled from 'styled-components';

const FormContainer = styled.div`
    padding-top: 73px;
    display: flex;
    justify-content: center;
`;

export default function Container(props) {
    const { children } = props;
    return (
        <FormContainer>
            {children}
        </FormContainer>
    )
}