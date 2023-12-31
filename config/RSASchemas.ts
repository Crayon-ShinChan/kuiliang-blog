import { v4 as uuidv4 } from "uuid";

type SchemaEntry = [string, string, string];
type RSASchemaType = {
  upperLetters: SchemaEntry[];
  lowerLetters: SchemaEntry[];
  allLetters: SchemaEntry[];
};

const upperLetters: SchemaEntry[] = [
  ["A", "00", uuidv4()],
  ["B", "01", uuidv4()],
  ["C", "02", uuidv4()],
  ["D", "03", uuidv4()],
  ["E", "04", uuidv4()],
  ["F", "05", uuidv4()],
  ["G", "06", uuidv4()],
  ["H", "07", uuidv4()],
  ["I", "08", uuidv4()],
  ["J", "09", uuidv4()],
  ["K", "10", uuidv4()],
  ["L", "11", uuidv4()],
  ["M", "12", uuidv4()],
  ["N", "13", uuidv4()],
  ["O", "14", uuidv4()],
  ["P", "15", uuidv4()],
  ["Q", "16", uuidv4()],
  ["R", "17", uuidv4()],
  ["S", "18", uuidv4()],
  ["T", "19", uuidv4()],
  ["U", "20", uuidv4()],
  ["V", "21", uuidv4()],
  ["W", "22", uuidv4()],
  ["X", "23", uuidv4()],
  ["Y", "24", uuidv4()],
  ["Z", "25", uuidv4()],
];
const lowerLetters: SchemaEntry[] = [
  ["a", "00", uuidv4()],
  ["b", "01", uuidv4()],
  ["c", "02", uuidv4()],
  ["d", "03", uuidv4()],
  ["e", "04", uuidv4()],
  ["f", "05", uuidv4()],
  ["g", "06", uuidv4()],
  ["h", "07", uuidv4()],
  ["i", "08", uuidv4()],
  ["j", "09", uuidv4()],
  ["k", "10", uuidv4()],
  ["l", "11", uuidv4()],
  ["m", "12", uuidv4()],
  ["n", "13", uuidv4()],
  ["o", "14", uuidv4()],
  ["p", "15", uuidv4()],
  ["q", "16", uuidv4()],
  ["r", "17", uuidv4()],
  ["s", "18", uuidv4()],
  ["t", "19", uuidv4()],
  ["u", "20", uuidv4()],
  ["v", "21", uuidv4()],
  ["w", "22", uuidv4()],
  ["x", "23", uuidv4()],
  ["y", "24", uuidv4()],
  ["z", "25", uuidv4()],
];

const RSASchemas: RSASchemaType = {
  upperLetters,
  lowerLetters,
  allLetters: [
    ...upperLetters,
    ...lowerLetters.map(
      (x): SchemaEntry => [x[0], String(Number(x[1]) + 26), x[2]]
    ),
  ],
};

export default RSASchemas;
