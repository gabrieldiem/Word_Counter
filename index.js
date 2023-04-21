function setWordCount(text, container) {
    const wordCount = text.trim().split(" ").filter(word => word !== "").length;
    container.innerHTML = `Word count: ${wordCount}`;
}

function setCharCount(text, container) {
    const charCount = text.length;
    container.innerHTML = `Total character count: ${charCount}`;
}

const mainTextarea = document.getElementById("textarea--home");
const [wordCount, totalCharCount, spaceCount, totalCharCountWithoutSpaces, paragraphCount] = [
    document.getElementById("word-count"),
    document.getElementById("total-character-count"),
    document.getElementById("space-character-count"),
    document.getElementById("total-character-count-without-spaces"),
    document.getElementById("paragraph-count"),
];

mainTextarea.addEventListener("input", () => {
    const text = mainTextarea.value;
    
    setWordCount(text, wordCount);
    setCharCount(text, totalCharCount);
});