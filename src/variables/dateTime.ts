import { getCurrentYear } from '@/helpers/date';

export const currentYear = getCurrentYear();
export const currentYearString = currentYear.toString();
const timezoneOffsetHours = (new Date().getTimezoneOffset() / 60) * -1;
export const timezoneOffset = `GMT${timezoneOffsetHours < 0 ? timezoneOffsetHours : '+' + timezoneOffsetHours}`;
