import React from 'react';

export default function useSendableValidator(dependencies) {

    const {
        emailValidation,
        passwordValidation,
        companyValidation,
        currencyValidation,
        establishedValidation,
        setSendable
    } = dependencies;

    React.useEffect(() => {
        if (emailValidation &&
            passwordValidation &&
            companyValidation &&
            currencyValidation &&
            establishedValidation) {
                setSendable(true);
            } else {
                setSendable(false);
            }
    }, [emailValidation,
        passwordValidation, 
        companyValidation,
        currencyValidation, 
        establishedValidation, 
        setSendable])
    ;
}