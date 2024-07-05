function stringCal(numbers) {
    if (numbers === "") {
        return 0;
    }
    const numberArr = numbers.split(/[\n,]/).map(num => parseInt(num, 10));
    return numberArr.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCal;
