module.exports = function toReadable (number) {
    let s='';
    let ones = ['zero', 'one', 'two','three','four', 'five','six','seven','eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number==0) return ones[0];
    if (number%100<20 && number%100 !=0) {s= ones[number%100];}
    else {
        s=tens[Math.floor((number%100)/10)-2];
        if (number%10 !=0 ){
            s=s+' ' +ones[number%10];
        }
    }
    if (Math.floor((number%1000)/100)>0)
    {
        if (number%100!=0){
        s=ones[Math.floor((number%1000)/100)]+' hundred '+s;}
        else {
            s=ones[Math.floor((number%1000)/100)]+' hundred';
        }
    }
    return s;
}
