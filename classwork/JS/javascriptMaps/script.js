function calcWordFrequencies() {
	let userInput = prompt();
	let words = userInput.split(" ");
	let wordsToCount = new Map();
	for (let word of words) {
		if (wordsToCount.has(word)){
			let newCount = wordsToCount.get(word) + 1;
			wordsToCount.set(word, newCount);
		} else {
			wordsToCount.set(word, 1);
		}
	}
	for (let [word, wordCount] of wordsToCount) {
		console.log(word + " " + wordCount);
	}
   
}
