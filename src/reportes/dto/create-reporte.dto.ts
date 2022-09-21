import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateReporteDto {

    
  
    @ApiProperty()
    fecha: Date;

    @ApiProperty()
    descripcion: string;

  @ApiProperty()
  usuario: Usuario;

  @ApiProperty()
  clasificacion: string[];

  @ApiProperty()
  fotografia: string;
}
