export const formatDate = (date: string):string => {
    const splitDateValue = date.split('-');
    const year = splitDateValue[0];
    const month = splitDateValue[1];
    const day = splitDateValue[2];
    
    const dateObj = new Date(`${month}-${day}-${year}`);
    const splitDateObj = dateObj.toString().split(' ');
    const monthName = splitDateObj[1];

    return `${monthName} ${day}, ${year}`;
}