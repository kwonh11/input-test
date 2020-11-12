import React from 'react';
import styled from 'styled-components';
import { FormControl, MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import DetailsIcon from '@material-ui/icons/Details';

const comboboxContent = {
    currency: {
        placeholder: "화폐단위를 선택하세요",
        notification: "필수 입력사항입니다.",
        currencies: ["원", "엔", "달러", "위안", "유로"]
    },
};

const InputWrap = styled.div`
    width: 100%;
    height: 76px;
    padding-bottom: 19px;
    margin-bottom: 18px;
    & .MuiSelect-iconOutlined {
      margin-right: 4px;
    }
`;
const Notification = styled.div`
    width: 100%;
    margin-left: 11px;
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.color === "red" ? "#ff0000" : "#000000"}
`;
const StyledFormControl = styled(FormControl)`
    width: 100%;
`;
const StyledEm = styled.em`
    color: #9f9f9f;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;


export default function CustomSelector(props) {
    const {validation, type, selectorValue, handleChangeSelector} = props;

    const content = comboboxContent[type];
    return (
    <InputWrap>
      <StyledFormControl variant="outlined" color="secondary">
        <Select
          value={selectorValue}
          displayEmpty
          onChange={handleChangeSelector}
          placeholder={content.placeholder}
          IconComponent={DetailsIcon}
        >
          <MenuItem value="">
            <StyledEm>{content.placeholder}</StyledEm>
          </MenuItem>
          {
              content.currencies.map(currency => (<MenuItem key={currency} value={currency}>{currency}</MenuItem>))
          }
        </Select>
      </StyledFormControl>
      <Notification color={validation ? "none" : "red"}>
            {validation? "" : content.notification}
      </Notification>
    </InputWrap>
    )
};