export const abbreviateDate = (date: string): string => {
    const splitDateValue = date.split(' ');
    const dateObj = new Date(date);
    const year = splitDateValue[3];
    const month = dateObj.getMonth() < 10 ? `0${dateObj.getMonth()+1}` : dateObj.getMonth();
    const day = splitDateValue[2];

    return `${year}-${month}-${day}`;
}