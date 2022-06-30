function weekdayText(weekdays){
    return function (num){
        if(num > weekdays.length - 1){
            throw new Error('Invalid weekday number')
        }
        return weekdays[num];
    }
}

const getText = weekdayText(['M','T','W','T','F']);
console.log(getText(5));