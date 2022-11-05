import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {
    id: number;

    
    @Expose({
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({
        message: "Nome de usuário já utilizado"
    })
    @IsNotEmpty({
        message: "Nome de usuário é obrigatório"
    })
    @IsString({
        message: "Nome inválido"
    })
    nomeDeUsuario: string;

    @Expose({
        name: 'email'
    })
    @IsEmail()  
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'A senha é obrigatória'
    })
    senha: string;

    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'Nome completo é obrigatório'
    })
    nomeCompleto: string;
    
    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}