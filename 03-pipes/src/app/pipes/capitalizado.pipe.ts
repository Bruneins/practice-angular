import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): unknown {
    console.log(value);
    console.log(todas);
    value = value.toLowerCase();
    let nombres = value.split(' ');
    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }
    return nombres.join(' ');
  }
}
