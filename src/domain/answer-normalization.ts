const IGNORED_PUNCTUATION = /[¿?¡!.,]/g;
const COMBINING_MARKS = /[\u0300-\u036f]/g;

export function normalizeAnswer(value: unknown) {
  return String(value ?? "")
    .trim()
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .replace(IGNORED_PUNCTUATION, "");
}
