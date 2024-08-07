module.exports = function toReadable (number) {

    if (number == 0) {
        return 'zero';
    }
    const n19 = ['one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const n10th = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    
    res = '';
    function under99(number) {
        if (number < 20) {
            res += n19[number-1];
        }
        else {
            tens = Math.floor(number / 10);
            ed = number % 10;
            if (tens > 0) {
                res += n10th[tens-2];
            }
            if (ed > 0) {
                res += n19[ed-1]
            }
        }
    }
    
    const hundreds = Math.floor(number / 100);
    if (hundreds > 0) {
        under99(hundreds);
        res += 'hundred '
    }
    number %= 100;
    if (number > 0){
        under99(number);
    }
    
    return res.trim();
}
