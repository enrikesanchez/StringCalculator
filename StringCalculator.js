let StringCalculator = class {
    sum(list) {
        if (list.length == 0) {
            return 0;
        } else {
            let delimiter = ",";
            let cleanedList = list;

            if (list.startsWith("//")) {
                delimiter = list.substring(2, 3);
                cleanedList = list.substring(4);
            }
            
            const modifiedList = cleanedList.replace(/\n/, delimiter);
            const array = modifiedList.split(delimiter);
            let result = 0;

            array.forEach(element => {
                const number = parseInt(element);

                if (number < 0) {
                    throw new Error('negatives not allowed ' + number);
                }

                result += number;
            });

            return result;
        }
    }
}

module.exports = StringCalculator;