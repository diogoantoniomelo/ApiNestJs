import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {
    id: number;

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

    @IsEmail()  
    email: string;

    @IsNotEmpty()
    senha: string;

    @IsNotEmpty({
        message: 'Nome completo é obrigatório'
    })
    nomeCompleto: string;
    
    dataDeEntrada: Date;
}