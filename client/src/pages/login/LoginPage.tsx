import { FC, useState } from 'react';
import { TextField } from '../../components/textField';

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginChangedHandler = (value: string) => {
        setLogin(value);
    }

    const passwordChangedHandler = (value: string) => {
        setPassword(value);
    }

    return (
        <>
            <TextField labelText="Логин" value={login} type="text" onChange={loginChangedHandler} />
            <TextField labelText="Пароль" value={password} type="password" onChange={passwordChangedHandler} />
        </>
    );
};