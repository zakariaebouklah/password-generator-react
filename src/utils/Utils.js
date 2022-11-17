
export function getRandomChar(min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

export function getRandomSymbol() {
    const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
