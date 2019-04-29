function getLinksFromMd(str) {
    let texts =  str.match(/(?<=\[).+?(?=\])/g);
    let hrefs = str.match(/(?<=\()(.+?)(?=\))/g);
    let array = [];
    if (texts) {
        texts.forEach((element, index) => array.push({ href: hrefs[index], text: element}));
    };    
    return array;
  };

module.exports.getLinksFromMd = getLinksFromMd;