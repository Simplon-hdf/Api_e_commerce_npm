import { IsString, IsUUID, Length, isString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class CreateUserDto {
    @ApiProperty({
        description: 'This field represents the new user nickname',
        minLength: 5,
        maxLength: 20,
      })
    @IsString()
    @Length(5, 20)
    pseudo: string;

    @ApiProperty({
        description: 'This field represents the new user username',
        minLength: 5,
        maxLength: 30,
      })
    @IsString()
    @Length(5, 30)
    username: string;

    @ApiProperty({
        description: 'This field represents the new user password',
        minLength: 72,
        maxLength: 72,
      })
    @IsString()
    @Length(1, 72) // Trop long pour les tests
    password: string;
}