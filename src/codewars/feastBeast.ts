export function feast(beast: string, dish: string): boolean {
  return beast[0] + beast[beast.length - 1] === dish[0] + dish[dish.length - 1];
}
