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

            const negatives = [];

            array.forEach(element => {
                const number = parseInt(element);

                if (number < 0) {
                    negatives.push(number);
                }

                result += number;
            });

            if (negatives.length > 0) {
                let negativesList = "";

                negatives.forEach(negative => {
                    negativesList += negative + ",";
                });

                if (negativesList.length > 0) {
                    negativesList = negativesList.substring(0, negativesList.length - 1);
                }

                throw new Error('negatives not allowed ' + negativesList);
            }

            return result;
        }
    }
}

module.exports = StringCalculator;