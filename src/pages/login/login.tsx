import React from "react";
import { Button, Typography } from "@mui/material";
import InputController from "../../components/input-controller/input-controller";
import { useForm, useFormState } from "react-hook-form";
import { LoginUser } from "../../models/types/users";
import {
    loginValidationRequired,
    passwordValidationRequired,
} from "../../validation/validation-required";
import CheckUser from "../../hook/check-user";
import { ILogin } from "./../../models/interface/login";
import Prompt from "../../components/prompt/prompt";

import "./login.scss";

const Login: React.FC<ILogin> = ({ auth, error, onSubmit, loading }) => {
    const { handleSubmit, control, reset } = useForm<LoginUser>({
        mode: "onSubmit",
        defaultValues: {
            login: "",
            password: "",
        },
    });
    const { errors } = useFormState({ control });
    const onSubmitForm = (data: LoginUser) => {
        onSubmit(data);
        reset();
    };
    //Вынести логику в другой компонент
    return (
        <CheckUser path="/home" auth={auth}>
            {
                // !loading
                //     ?
                //     <div className='Loader'>
                //         <ColorRing
                //             visible={true}
                //             height="100"
                //             width="100"
                //             ariaLabel="blocks-loading"
                //             colors={['#a2a7fa', '#9ca1ff', '#a2a7fa', '#9ca1ff', '#9499ff']}
                //         />
                //     </div>
                <div className="SignIn-form">
                    <Typography
                        variant="h5"
                        component="div"
                        className="SignIn-form-title"
                    >
                        Войти
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        gutterBottom={true}
                        className="SignIn-form-subtitle"
                    >
                        Для доступа к аккаунту
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <InputController
                            control={control}
                            name="login"
                            label="Логин"
                            rules={loginValidationRequired}
                            error={errors.login?.message}
                            helperText={errors.login?.message}
                        />
                        <InputController
                            control={control}
                            name="password"
                            label="Пароль"
                            type="password"
                            rules={passwordValidationRequired}
                            error={errors.password?.message}
                            helperText={errors.password?.message}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth={true}
                            sx={{
                                marginTop: 2,
                            }}
                        >
                            Войти
                        </Button>
                        <Typography className="SignIn-form-error">
                            {error ? error : null}
                        </Typography>
                        <Prompt
                            path="/"
                            question="У вас еще нет аккаунта?"
                            linkText="Пройдите регистрацию"
                        />
                    </form>
                </div>
            }
        </CheckUser>
    );
};

export default Login;
