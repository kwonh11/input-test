import 'date-fns';
import React from 'react';
import styled from 'styled-components';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DetailsIcon from '@material-ui/icons/Details';

const comboboxContent = {
    establishedDate: {
        label: <div>a</div>,
        placeholder: "설립일을 선택하세요.",
        notification: "필수 입력사항입니다."
    },
};


const InputWrap = styled.div`
    width: 100%;
    height: 76px;
    padding-bottom: 19px;
    margin-bottom: 18px;
    & .MuiOutlinedInput-adornedEnd {
        padding-right: 0;
    }
`;

const styles = {
    helperText: {
        fontSize: "12px",
        fontWeight: "normal",
        color: "#ff0000"
    }
};
export default function CustomPicker(props) {
    const {type, pickerValue, validation, handleChangePicker} = props;
    const content = comboboxContent[type];
    return (
    <InputWrap>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            color="secondary"
            inputVariant="outlined"
            variant="landscape"
            autoOk
            id="date-picker-outline"
            placeholder={content.placeholder}
            value={!pickerValue ? "" : pickerValue}
            onChange={handleChangePicker}
            format="yyyy년 MM월 dd일"
            fullWidth
            helperText={validation? "" : content.notification}
            FormHelperTextProps={{style: styles.helperText}}
            InputAdornmentProps={{ position: "end" }}
            keyboardIcon={<DetailsIcon/>}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            autoComplete="reset"
        />
        </MuiPickersUtilsProvider>
    </InputWrap>
    )
};
