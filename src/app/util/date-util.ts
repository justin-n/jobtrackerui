export class DateUtil {

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
