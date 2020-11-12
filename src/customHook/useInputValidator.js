import React from 'react';

export default function useValidator(dependencies) {
    
    const {
        emailValue, setEmailValidation,
        passwordValue, setPasswordValidation,
        companyValue, setCompanyValidation,
        currencyValue, setCurrencyValidation,
        establishedValue, setEstablishedValidation,
    } = dependencies;

    React.useEffect(() => {
        if (emailValue && emailValue.includes("@")) setEmailValidation(true);
        if (!emailValue) setEmailValidation(false);
    }, [emailValue, setEmailValidation]);
    React.useEffect(() => {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/gm;
        if (reg.test(passwordValue)) setPasswordValidation(true);
        if(!passwordValue) setPasswordValidation(false);
    }, [passwordValue, setPasswordValidation]);
    React.useEffect(() => {
        if (companyValue) setCompanyValidation(true);
        if (!companyValue) setCompanyValidation(false);
    }, [companyValue, setCompanyValidation]);
    React.useEffect(() => {
        if (currencyValue) setCurrencyValidation(true);
        if (!currencyValue) setCurrencyValidation(false);
    }, [currencyValue, setCurrencyValidation]);
    React.useEffect(() => {
        if (establishedValue) setEstablishedValidation(true);
    }, [establishedValue, setEstablishedValidation]);

};
