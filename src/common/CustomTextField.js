import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


const textFieldContent = {
    email: {
        placeholder: "이메일(아이디)를 입력하세요.",
        notification: "이메일 양식을 확인하세요"
    },
    password: { 
        placeholder: "비밀번호를 입력하세요.",
        notification: "비밀번호는 8자리 이상, 16자리 이하이고, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다."
    },
    company: {
        placeholder: "회사명을 입력하세요.",
        notification: "회사명을 확인하세요."
    },
}


const InputWrap = styled.div`
    width: 100%;
    height: 76px;
    padding-bottom: 19px;
    margin-bottom: 18px;
`;

const styles = {
    helperText: {
        fontSize: "12px",
        fontWeight: "normal",
        color: "#ff0000"
    }
};
export default function TextFieldTemplate(props) {
    const {validation, type, inputValue, handleChangeInput} = props;
    const content = textFieldContent[type];

    return (
    <InputWrap>
        <TextField 
        color="secondary"
        placeholder={content.placeholder}
        variant="outlined"
        type={type === "password" ? "password" : "text"}
        fullWidth
        value={inputValue}
        onChange={handleChangeInput}
        helperText={validation? "" : content.notification}
        FormHelperTextProps={{style: styles.helperText}}
        />
    </InputWrap>
    )
};