import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { registration } from "../../../http/userAPI";
import cl from "./AuthPageStyleSheets.module.css";
import { Redirect } from "react-router-dom";

export default function RegistrationPage({ isAuth, setIsAuth }) {
  const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "minLength":
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case "isEmpty":
            value ? setEmpty(false) : setEmpty(true);
            break;
          case "isEmail":
            const re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            re.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true);
            break;
        }
      }
    }, [value]);

    useEffect(() => {
      if (isEmpty || minLengthError || emailError) {
        setInputValid(false);
      } else setInputValid(true);
    }, [isEmpty, minLengthError, emailError]);

    return {
      isEmpty,
      minLengthError,
      emailError,
      inputValid,
    };
  };

  const useInput = (initalValue, validations) => {
    const [value, setValue] = useState(initalValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);
    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = (e) => {
      setDirty(true);
    };

    return {
      value,
      isDirty,
      onChange,
      onBlur,
      ...valid,
    };
  };

  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 6 });

  const registr = () => {
    registration(email.value, password.value, setIsAuth);
  };

  if (isAuth) return <Redirect to="/" />;

  return (
    <div className={cl.login_form}>
      <p className={cl.title}>Create account</p>
      <div className={cl.main_form}>
        <form>
          <div className={cl.form}>
            <p className={cl.form_title__email}>email:</p>
            {email.isDirty && email.isEmpty && (
              <div style={{ color: "red" }}>Поле не может быть пустым</div>
            )}
            {email.isDirty && email.minLengthError && (
              <div style={{ color: "red" }}>Больше</div>
            )}
            {email.isDirty && email.emailError && (
              <div style={{ color: "red" }}>Неправильно введён меил</div>
            )}
            <Input
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
              style={{ marginBottom: 15, marginLeft: 32 }}
              type="email"
              name="email"
              placeholder="ex: index@mail.com"
            ></Input>
          </div>
          <div className={cl.form}>
            <p className={cl.form_title__password}>password:</p>
            {password.isDirty && password.minLengthError && (
              <div style={{ color: "red" }}>пароль слишком короткий</div>
            )}
            <Input
              onChange={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
              value={password.value}
              type="password"
              placeholder="ex: steveJobs123"
            ></Input>
          </div>
        </form>
        <Button
          disabled={!email.inputValid || !password.inputValid}
          onClick={registr}
          className={cl.login_btn}
          type="primary"
        >
          Register!
        </Button>
      </div>
    </div>
  );
}
