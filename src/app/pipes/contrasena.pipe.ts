import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true ): string {
    return (mostrar) ? '*'.repeat(value.length  ): value;
  }

}
