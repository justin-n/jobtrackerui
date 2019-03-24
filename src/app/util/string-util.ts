import { Option } from './option';

export class StringUtil {

  public static getTwoLengthNumStrOptions(
      startingValue: number,
      totalOptions: number,
      incrementValue: number) : Option[] {

      let options: Option[] = [];

      for (let optionIndex = startingValue; optionIndex <= totalOptions; optionIndex += incrementValue) {

      let stringValue = String(optionIndex);

      if (stringValue.length == 1) {
          stringValue = ("0" + stringValue);
      }

      options.push({key: stringValue, value: stringValue});
      }

      return options;
  }
}
