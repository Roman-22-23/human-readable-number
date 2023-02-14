module.exports = function toReadable (number) {
  let tenList = 'zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen';
  let tensList = ',,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety';
  return number<20?tenList.split(',')[number]:number<100?tensList.split(',')[(number/10)|0]+(number%10?' '+toReadable(number-((number/10)|0)*10):''):toReadable((number/100)|0)+' hundred'+(number%100?' '+toReadable(number-((number/100)|0)*100):'');
}