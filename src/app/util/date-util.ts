import { JobTime } from '../entities/job-time';

export class DateUtil {

  public static dateIsWithinDayOf(day : Date, dateToTest: Date) : boolean {

    return (day.getDay() === dateToTest.getDay()
         && day.getMonth() === dateToTest.getMonth()
         && day.getFullYear() === dateToTest.getFullYear());
    }

  public static getUniqueDatesFromJobTimes(jobTimes : JobTime[]) : Date[] {

    let timeIns = jobTimes.map(jt => jt.getTimeIn());

    let dates = timeIns.map(ti => new Date(ti.getFullYear(), ti.getMonth(), ti.getDate()));

    let uniqueDateNumbers : number[] = [];

    dates.forEach(d => {
        if (uniqueDateNumbers.indexOf(+d) === -1) {
            uniqueDateNumbers.push(+d);
        }
    });

    return uniqueDateNumbers.map(udn => new Date(udn));
  }

  public static jobTimeTimeInComparator(a: JobTime, b: JobTime) : number {

    return DateUtil.dateComparator(a.getTimeIn(), b.getTimeIn());
  }

  public static dateComparator(a: Date, b: Date) : number {

    if (a.getTime() < b.getTime()) return -1;

    else if (a.getTime() > b.getTime()) return 1;

    else return 0;
  }

  public static getNumberOfDaysInMonth(monthNumber: number, yearNumber: number) : number {

    switch (monthNumber) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return DateUtil.getNumberOfDaysInFebruary(yearNumber);
      default:
        throw new Error('Invalid monthNumber passed to getNumberOfDaysInMonth');
    }
  }

  public static get2Length12HourHoursFrom24HourHours(hours: number) : number {

    if (hours > 12) {
      return (hours - 12);
    }
    else if (hours >= 1 && hours <= 12) {
      return hours;
    }
    else {
      return 12;
    }
  }

  public static getDateRoundedToNearest5MinutesOf(date: Date) : Date {

    let epochMillis = date.getTime();

    let fiveMinutesOfMilliseconds = (1000 * 60 * 5);

    return new Date(
      Math.round(epochMillis / fiveMinutesOfMilliseconds) * fiveMinutesOfMilliseconds);
  }

  public static getPeriodStringFrom24HourHours(hours: number) : string {

    if (hours >= 0 && hours <= 11) {
      return 'AM';
    }
    else {
      return 'PM';
    }
  }

  public static get24HourHoursFrom(twelveHourHours: number, period: string) : number {

    if (period === 'AM') {
      if (twelveHourHours === 12) {
        return 0;
      }
      else if (twelveHourHours === 1) {
        return 1;
      }
      else {
        return twelveHourHours;
      }
    }
    else {
      return (twelveHourHours + 12);
    }
  }

  private static getNumberOfDaysInFebruary(yearNumber: number) : number {

    if (DateUtil.isLeapYear(yearNumber)) {

      return 29;
    }
    else {

      return 28;
    }
  }

  private static isLeapYear(yearNumber: number) : boolean {

    if ((yearNumber % 4) === 0) {

      if ((yearNumber % 100) === 0) {

        if ((yearNumber % 400) === 0) {

          return true;
        }
        else {

          return false;
        }
      }
      else {

        return true;
      }
    }
    else {

      return false;
    }
  }
}
