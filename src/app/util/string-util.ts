import { Option } from './option';

export class StringUtil {

  public static getTwoLengthNumberStringOptions(
      startingValue: number,
      endValue: number,
      incrementValue: number) : Option[] {

    let options: Option[] = [];

    for (let optionIndex = startingValue; optionIndex <= endValue; optionIndex += incrementValue) {

      let stringValue = StringUtil.getTwoLengthStringFromNumber(optionIndex);

      options.push({key: stringValue, value: stringValue});
    }

    return options;
  }

  public static getNumberStringOptions(
      startingValue: number,
      endValue: number,
      incrementValue: number) : Option[] {

    let options: Option[] = [];

    for (let optionIndex = startingValue; optionIndex <= endValue; optionIndex += incrementValue) {

      let stringValue = String(optionIndex);

      options.push({key: stringValue, value: stringValue});
    }

    return options;
  }

  public static getTwoLengthStringFromNumber(number: number) : string {

    let stringValue = String(number);

    if (stringValue.length === 1) {
      stringValue = ('0' + stringValue);
    }

    return stringValue
  }
}
