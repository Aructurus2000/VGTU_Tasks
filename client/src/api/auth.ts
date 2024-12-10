import { AxiosInstance } from './axiosInstance';
import {Axios} from "axios";


interface LoginRequestDto {
    login: string;
    password: string;
}

interface LoginResponseDto {
    access_token: string;
    usename: string;
    role: string;
}

const signIn = async(loginData: LoginRequestDto) => {
    const {axiosPost} = AxiosInstance();
    return await axiosPost('/login', loginData) as LoginResponseDto;
}

export const Auth = {
    signIn
}

