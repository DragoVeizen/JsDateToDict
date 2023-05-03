
let x = {
  '2023-05-01': 10,
  '2023-05-02': 20,
  '2023-05-03': 30,
  '2023-05-04': 40,
  '2023-05-05': 50,
  '2023-05-06': 60,
  '2023-05-07': 70,
  '2023-05-12': 10,
  '2023-05-08': 40,
  '2023-05-10': 60,
  '2023-05-09': 30,
  '2023-05-11': 70,
};
 function convertDictToWeekDict(D) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekDict = {};
  
    // initialize weekDict with empty values for each day of the week
    for (const day of daysOfWeek) {
      weekDict[day] = 0;
    }
  
    // iterate over the input dictionary and sum values for each day of the week
    for (const [dateStr, value] of Object.entries(D)) {
      const date = new Date(dateStr);
      const dayOfWeek = daysOfWeek[date.getDay()];
      weekDict[dayOfWeek] += value;
    }
  
    // interpolate missing days in the weekDict by taking the mean of the previous and next day's value
    for (let i = 0; i < daysOfWeek.length; i++) {
      const day = daysOfWeek[i];
      if (weekDict[day] === 0) {
        const prevDay = daysOfWeek[(i - 1 + 7) % 7];
        const nextDay = daysOfWeek[(i + 1) % 7];
        weekDict[day] = Math.round((weekDict[prevDay] + weekDict[nextDay]) / 2);
      }
    }
  
    return weekDict;
  }

  console.log(convertDictToWeekDict(x));
  module.exports = convertDictToWeekDict;
