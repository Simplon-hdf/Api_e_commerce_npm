import { IsString, Length, isString } from 'class-validator'

export class CreateUserDto {

    @IsString()
    @Length(5, 20)
    pseudo: string;

    @IsString()
    @Length(5, 30)
    username: string;

    @IsString()
    @Length(5, 72)
    password: string;
}