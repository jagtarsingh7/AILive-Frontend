export const removeTzIfString = (date: string | null | undefined) => {
  if (typeof date === 'string') {
    const dateWithoutPeriod = date.split('.')[0];
    const dateWithoutZ = dateWithoutPeriod.split('Z')[0];
    return dateWithoutZ.replace(' ', 'T');
  }
  return undefined;
};

export const getDateWithoutTz = (date: Date) => {
  const tzOffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(date.getTime() - tzOffset);
};

export const getDateFromStringOrDate = (dateOrString: Date | string) =>
  dateOrString instanceof Date ? dateOrString : new Date(dateOrString);
