import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import CustomTextField from '../common/CustomTextField';
import CustomSelector from '../common/CustomSelector';
import CustomPicker from '../common/CustomPicker';

import useInputValidator from '../customHook/useInputValidator';
import useSendableValidator from '../customHook/useSendableValidator';

const Form = styled.form`
    position: relative;
    margin: 0 0 6px;
    width: 585px;
    height: 794px;
    display: flex;
    flex-direction: column;
    padding: 60px;
    border-radius: 11px;
    border: solid 1px #dadce0;
`;
// width: 251px;
const TitleWrap = styled.div`
    height: 29px;
    margin-bottom: 13px;
`;
const StyledTitle = styled(Typography)`
    font-family: Arial;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2f2f2f;
`;
// font-family: Arial;
const DescriptionWrap = styled.div`
    width: 100%;
    height: 19px;
    margin-top: 13px;
    margin-bottom: 27px;
`;
const StyledDescription = styled(Typography)`
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #1f1f1f;
`;

const StyledRadioGroup = styled(RadioGroup)`
    flex-direction: row;
    margin-bottom: 21.5px;
    & .MuiTypography-body1 {        
        font-family: Arial;
        font-size: 14px;
    }
    & .Mui-checked+.MuiFormControlLabel-label {
        font-weight: bold;
    }
    & .MuiRadio-colorSecondary.Mui-checked {
        color: #f15642;
        
    }
`;

const SubtitleWrap = styled.div`
    width: 100%;
    height: 18px;
    margin-bottom: 8px;
`;
const StyledSubtitle = styled(Typography)`
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
`;

const ButtonWrap = styled.div`
    width: 100%;

`;
const StyledButton = styled(Button)`
    width: 91px;
    height: 37px;
    color: white;
    background-color: #f15642;
    margin-right: 15.4px;
    &:hover {
        background-color: rgba(241,86, 66, 0.8)
    }
`;
const Login = styled.a`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
    text-decoration-line: underline;
`;

const LanguageWrap = styled.div`
    position: absolute;
    width: 51px;
    height: 18px;
    bottom: -28px;
    left: 22px;
    font-size: 9px;
`;
const LanguageInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      fontSize: 9,
      // Use the system font instead of the default Roboto font.
  
    }
  }))(InputBase);
const languages = ["한국어", "영어"];

export default function JoinForm(props) {

    const [radioValue, setRadioValue] = React.useState('company');
    const [emailValue, setEmailValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");
    const [companyValue, setCompanyValue] = React.useState("");
    const [currencyValue, setCurrencyValue] = React.useState("");
    const [establishedValue, setEstablishedValue] = React.useState(false);
    const [language, setLanguage] = React.useState("한국어");

    const [emailValidation, setEmailValidation] = React.useState(false);
    const [passwordValidation, setPasswordValidation] = React.useState(false);
    const [companyValidation, setCompanyValidation] = React.useState(false);
    const [currencyValidation, setCurrencyValidation] = React.useState(false);
    const [establishedValidation, setEstablishedValidation] = React.useState(false);

    const [sendable, setSendable] = React.useState(false);

    useInputValidator({
        emailValue, setEmailValidation,
        passwordValue, setPasswordValidation,
        companyValue, setCompanyValidation,
        currencyValue, setCurrencyValidation,
        establishedValue, setEstablishedValidation,
    });
    useSendableValidator({
        emailValidation,
        passwordValidation,
        companyValidation,
        currencyValidation,
        establishedValidation,
        setSendable
    });

    const handleChangeRadio = (e) => {
        setRadioValue(e.target.value);
        console.log(`radio : ${e.target.value}`);
    };
    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
        console.log(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeCompany = (e) => {
        setCompanyValue(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeCurrency = (e) => {
        setCurrencyValue(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeEstablished = (date) => {
        setEstablishedValue(date);
        console.log(date);
    }
    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
        console.log(e.target.value);
    }
    const preventSubmit = (e) => {
        e.preventDefault();
        if (sendable) console.log(
            `submit succeed
            email: ${emailValue}
            password: ${passwordValue}
            company: ${companyValue}
            currency: ${currencyValue}
            established: ${establishedValue}`);
        if (!sendable) console.log('submit failed');
    }
    return (
        <Form onSubmit={preventSubmit}>
            <TitleWrap>
                <StyledTitle variant="h5">
                    Gconstudio 계정 만들기
                </StyledTitle>
            </TitleWrap>
            <DescriptionWrap>
                <StyledDescription >
                    하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.
                </StyledDescription>
            </DescriptionWrap>
            <StyledRadioGroup value={radioValue} onChange={handleChangeRadio}>
                <FormControlLabel value="company" control={<Radio />} label="번역회사" />
                <FormControlLabel value="client" control={<Radio />} label="의뢰인" />
                <FormControlLabel value="Translator" control={<Radio />} label="번역가" />
            </StyledRadioGroup>
            <SubtitleWrap>
                <StyledSubtitle>
                    기본정보 입력
                </StyledSubtitle>
            </SubtitleWrap>
            <CustomTextField type="email" 
                inputValue={emailValue} 
                validation={emailValidation} 
                handleChangeInput={handleChangeEmail}
            />
            <CustomTextField type="password" 
                inputValue={passwordValue} 
                validation={passwordValidation} 
                handleChangeInput={handleChangePassword}
            />
            <CustomTextField type="company" 
                inputValue={companyValue} 
                validation={companyValidation} 
                handleChangeInput={handleChangeCompany}
            />
            <CustomSelector type="currency" 
                selectorValue={currencyValue} 
                validation={currencyValidation} 
                handleChangeSelector={handleChangeCurrency}
            />
            <CustomPicker type="establishedDate" 
                pickerValue={establishedValue} 
                validation={establishedValidation} 
                handleChangePicker={handleChangeEstablished} 
            />
            <ButtonWrap>
                <StyledButton type="submit">
                    다음
                </StyledButton>
                <Login>
                    로그인
                </Login>
            </ButtonWrap>
            <LanguageWrap>
                <FormControl>
                    <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={language}
                    onChange={handleChangeLanguage}
                    input={<LanguageInput />}
                    >
                    {
                        languages.map(language => <MenuItem key={language} value={language}>{language}</MenuItem>)
                    }
                </Select>
                </FormControl>
            </LanguageWrap>
        </Form>
    )
}