import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "a",
  "aa",
  "c",
  "c̓",
  "č",
  "č̓",
  "e",
  "ee",
  "h",
  "ḥ",
  "i",
  "ii",
  "k",
  "kʷ",
  "k̓",
  "k̓ʷ",
  "ł",
  "ƛ",
  "ƛ̓",
  "m",
  "m̓",
  "n",
  "n̓",
  "o",
  "oo",
  "p",
  "p̓",
  "q",
  "qʷ",
  "s",
  "š",
  "t",
  "t̓",
  "u",
  "uu",
  "w",
  "w̓",
  "x",
  "xʷ",
  "x̣",
  "x̣ʷ",
  "y",
  "y̓",
  "ʔ",
  "ʕ"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
