import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWords',
  standalone: true
})
export class FirstWordsPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    if (!value || wordCount <= 0) return '';

    const words = value.split(' ').slice(0, wordCount);
    return words.join(' ');
  }

}
