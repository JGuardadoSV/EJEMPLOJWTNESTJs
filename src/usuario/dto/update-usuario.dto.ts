import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto  {

    @ApiProperty()
    id: string;
    @ApiProperty()
    usuario: string;
    @ApiProperty()
    correo: string;
    @ApiProperty()
    rol:    string;
    @ApiProperty()
    activo: boolean;
}
