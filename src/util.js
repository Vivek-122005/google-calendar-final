import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeek(weekNumber = null, month = dayjs().month()) {
  const today = dayjs(); // Current day
  const year = today.year();

  if (weekNumber === null) {
    const currentDayOfMonth = today.date();
    weekNumber = Math.floor((currentDayOfMonth + today.startOf("month").day()) / 7); // Calculate current week number
  }

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysInWeek = [];
  const startDayOfWeek = weekNumber * 7;

  for (let i = 0; i < 7; i++) {
    currentMonthCount = startDayOfWeek + i;
    daysInWeek.push(dayjs(new Date(year, month, currentMonthCount)));
  }

  return daysInWeek;
}

export function getDay(day = null, weekNumber = null, month = dayjs().month()) {
  const today = dayjs(); // Get current date
  const year = today.year();

  if (day === null && weekNumber === null) {
    return today; // Return current day by default
  }

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  const currentMonthCount = weekNumber * 7 + day - firstDayOfTheMonth;

  return dayjs(new Date(year, month, currentMonthCount));
}