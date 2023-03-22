import {
    MIN_PASSWORD_LENGTH,
    MAX_PASSWORD_LENGTH,
    EMAIL_VALIDATION,
} from "../constants";

export const similarPasswordHandler = (password, confirm) => {
    if (password.length !== confirm.length) return false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] !== confirm[i]) {
            return false;
        }
    }

    return true;
};

export const passwordHandler = (e, setPasswordInReg, setPasswordErrorInReg) => {
    setPasswordInReg(e.target.value);
    if (
        e.target.value.length < MIN_PASSWORD_LENGTH ||
        e.target.value.length > MAX_PASSWORD_LENGTH
    ) {
        setPasswordErrorInReg("Пароль должен быть длиннее 3 и меньше 9 символов");
        if (!e.target.value) {
            setPasswordErrorInReg("Пароль не может быть пустым");
        }
    } else {
        setPasswordErrorInReg("");
    }
};

export const emailHandler = (e, setEmailInReg, setEmailErrorInReg) => {
    setEmailInReg(e.target.value);

    if (e.target.value === "") {
        setEmailErrorInReg("Емайл не может быть пустым");
    }

    if (!EMAIL_VALIDATION.test(String(e.target.value).toLowerCase())) {
        if (e.target.value === "") {
            setEmailErrorInReg("(e-mail) не может быть пустым");
        } else {
            setEmailErrorInReg("Не корректный (e-mail), напишете @email.ru");
        }
    } else {
        setEmailErrorInReg("");
    }
};

export const loginHandler = (e, setLoginInReg, setLoginErrorInReg) => {
    setLoginInReg(e.target.value);
    if (e.target.value === "") {
        setLoginErrorInReg("(login) не может быть пустым");
    } else {
        setLoginErrorInReg("");
    }
};
