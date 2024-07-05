function stringCal(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /[\n,]/;
    let numString = numbers;

    if (numbers.startsWith("//")) {
        const [delimiterPart, ...numberParts] = numbers.split('\n');
        delimiter = new RegExp(delimiterPart.slice(2));
        numString = numberParts.join('\n');
    }

    const numberArr = numbers.split(delimiter).map(num => parseInt(num, 10)).filter(num => num <= 1000);

    const negativeNumbers = numberArr.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
    return numberArr.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCal;
