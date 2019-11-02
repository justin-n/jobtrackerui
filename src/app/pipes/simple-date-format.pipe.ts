import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'simpleDateFormat' })
export class SimpleDateFormatPipe implements PipeTransform {

    transform(dates: Date[]) {
        return dates.map(d => formatDate(d, 'yyyy-MM-dd', 'en-US'));
    }
}
