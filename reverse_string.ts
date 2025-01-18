const reverseString = (str: string): string => str.split('').reverse().join('');

console.log(reverseString('radar')); // 'radar'
console.log(reverseString('hello')); // 'olleh'