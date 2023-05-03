const convertDictToWeekDict = require('./dataJs');

describe('convertDictToWeekDict', () => {
  test('Standard input with all days of the week present', () => {
    const input1 = {
      '2023-05-01': 10,
      '2023-05-02': 20,
      '2023-05-03': 30,
      '2023-05-04': 40,
      '2023-05-05': 50,
      '2023-05-06': 60,
      '2023-05-07': 70,
    };
    const expectedOutput1 = {
      'Sun': 70,
      'Mon': 10,
      'Tue': 20,
      'Wed': 30,
      'Thu': 40,
      'Fri': 50,
      'Sat': 60,
    };
    const actualOutput1 = convertDictToWeekDict(input1);
    expect(actualOutput1).toEqual(expectedOutput1);
  });
});

describe('convertDictToWeekDict2', () => {
  test('Standard input with one day of the week missing', () => {
    const input2 = {
      '2023-05-01': 10,
      '2023-05-03': 30,
      '2023-05-04': 40,
      '2023-05-05': 50,
      '2023-05-06': 60,
      '2023-05-07': 70,
    };
    const expectedOutput2 = {
      'Sun': 70,
      'Mon': 10,
      'Tue': 20,
      'Wed': 30,
      'Thu': 40,
      'Fri': 50,
      'Sat': 60,
    };
    const actualOutput2 = convertDictToWeekDict(input2);
    expect(actualOutput2).toEqual(expectedOutput2);
  });
});