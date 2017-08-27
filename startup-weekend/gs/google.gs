
var authKey = 'asdhakjshdkjasdasmndajksdkjaskldga8odya9d8yoasyd98asdyaisdhoaisyd0a8sydoashd8oasydoiahdpiashd09ayusidhaos8dy0a8dya08syd0a8ssdsax';

 
function generateAuthHash(valuesArr) {
  valuesArr.push(authKey);
  var allvaluesStr = valuesArr.reduce(function(acc, value) { return acc + value.toString(); }, '');
  var bytesAsSHA512 = computeAsSHA512(allvaluesStr);
  return fromBytesToString(bytesAsSHA512);
}


function computeAsSHA512(str) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_512, str, Utilities.Charset.UTF_8);
}

function fromBytesToString(byteArr) {
  return byteArr.map(function(b) { return ("0" + (b < 0 && b + 256 || b).toString(16)).substr(-2); })
    .join("");
}


function doGet() {
  return HtmlService.createHtmlOutputFromFile('pago');
}