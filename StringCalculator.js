let StringCalculator = class {
    sum(list) {
        if (list.length == 0) {
            return 0;
        } else {
            const array = list.split(",");
            let result = 0;

            array.forEach(element => {
                const number = parseInt(element);
                result += number;
            });

            return result;
        }
    }
}

module.exports = StringCalculator;