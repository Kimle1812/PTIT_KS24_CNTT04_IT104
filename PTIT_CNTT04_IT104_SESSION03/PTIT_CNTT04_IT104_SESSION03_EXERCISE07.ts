function filterCharacters(word: string): string {
    let filter: string = "";
    for (let i = 0; i < word.length; i++) {
        if (!filter.includes(word[i]!)) {
            filter += word[i];
        }
    }
    return filter;
}
console.log(filterCharacters("banana"));
