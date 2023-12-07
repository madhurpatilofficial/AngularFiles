import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    let newStr: String = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);

    }
    return newStr;

  }
}
