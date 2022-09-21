import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

    @ApiProperty()
    usuario: string;
    @ApiProperty()
    correo: string;
    @ApiProperty()
    clave:  string;
    @ApiProperty()
    rol:    string;
    @ApiProperty()
    activo: boolean;


}
