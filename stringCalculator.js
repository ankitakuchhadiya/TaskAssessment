function stringCal(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /[\n,]/;
    let numString = numbers;

    if (numbers.startsWith("//")) {
        const [delimiterPart, ...numberParts] = numbers.split('\n');
        const customDelimiter = delimiterPart.slice(2);

        if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
            delimiter = new RegExp(customDelimiter.slice(1, -1).split('][').map(escapeRegExp).join('|'));
        } else {
            delimiter = new RegExp(escapeRegExp(customDelimiter));
        }

        numString = numberParts.join('\n');
    }

    const numberArr = numString.split(delimiter).map(num => parseInt(num, 10)).filter(num => num <= 1000);

    const negativeNumbers = numberArr.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
    return numberArr.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = stringCal;
