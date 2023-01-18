const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}
const expr =
  '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'

function decode(expr) {
  let keys = Object.keys(MORSE_TABLE)
  let values = Object.values(MORSE_TABLE)
  let sp = '**********'
  let mas = []
  for (let i = 0; i < expr.length / 10; i++) {
    mas.push(expr.slice(i * 10, i * 10 + 10))
  }
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] === sp) {
      mas[i] = ' '
    } else {
      mas[i] = getStr(mas[i])
      mas[i] = mas[i].match(/.{1,2}/g)
      mas[i] = getSymbol(mas[i])
      for (let j = 0; j < keys.length; j++) {
        if (mas[i] === keys[j]) {
          mas[i] = values[j]
        }
      }
    }
  }
  function getStr(str) {
    let word = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '1') {
        return (word += str.slice(i))
      }
    }
    for (let i = 0; i < word.length; i++) {
      word = word.slice(i * 2, i * 2 + 2)
    }
    console.log(word)
    return word
  }
  function getSymbol(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '11') {
        res += '-'
      } else {
        res += '.'
      }
    }
    console.log(res)
    return res
  }
  console.log(mas[1])
  return mas.join('')
}

module.exports = {
  decode,
}
