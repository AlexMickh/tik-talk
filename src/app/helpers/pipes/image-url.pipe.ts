import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string | null): string | null {
    return value ? `https://icherniakov.ru/yt-course/${value}` : null;
  }

}
