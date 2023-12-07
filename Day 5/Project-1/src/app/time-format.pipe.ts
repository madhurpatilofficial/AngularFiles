import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  
})
export class TimeFormatPipe implements PipeTransform {
  
  transform(input: number, format: string = 'min'): string {
    const maps = [
      { interval: 86400000, value: 'day' },
      { interval: 3600000, value: 'hr' },
      { interval: 50000, value: 'min' },
      { interval: 1000, value: 'sec' },
    ]
    const map = maps.find(m => m.value === format);
    if (map) {
      return `${Math.round(input / map.interval)} ${map.value}`
    }
    return 'O min';
  }

}
