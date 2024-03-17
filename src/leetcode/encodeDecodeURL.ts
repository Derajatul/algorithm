/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  return encodeURIComponent(longUrl);
}
console.log(encode("https://leetcode.com/problems/design-tinyurl"));
/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return decodeURIComponent(shortUrl);
}
console.log(decode("https%3A%2F%2Fleetcode.com%2Fproblems%2Fdesign-tinyurl"));

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
