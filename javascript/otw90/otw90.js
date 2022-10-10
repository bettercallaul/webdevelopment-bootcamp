function lifeInWeeks(age) {
  let days = age * 365;
  let weeks = age * 52;
  let months = age * 12;

  let daysRemain = 90 * 365 - days;
  let weeksRemain = 90 * 52 - weeks;
  let monthsRemain = 90 * 12 - months;

  console.log('You have ' + daysRemain + ' days, ' + weeksRemain + ' weeks, ' + 'and ' + monthsRemain + " months left.'.");
}
