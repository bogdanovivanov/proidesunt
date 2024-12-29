const text = 'Some "quoted" text with ""escaped"" double quotes';
const j = text.indexOf('"'); // Index of first double quote
const i = text.lastIndexOf('"'); // Index of last double quote

const result = text.slice(j + 1, i - 1).replace(/""/g, "\"");

console.log(result);
// Output: escaped

