/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
function encodeVowelWord(word) {
	if (typeof word === "string") {
		return (word += "-yay")
	}
}

// Write your unit tests here
const testVowelWords = {
	eat: "eat-yay",
	omelet: "omelet-yay",
	are: "are-yay",
	egg: "egg-yay",
	explain: "explain-yay",
	always: "always-yay",
	ends: "ends-yay",
	every: "every-yay",
	another: "another-yay",
	under: "under-yay",
	island: "island-yay",
	elegant: "elegant-yay",
}

for (const word in testVowelWords) {
	if (Object.hasOwnProperty.call(testVowelWords, word)) {
		const expectedOutput = testVowelWords[word]
		result = encodeVowelWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeVowelWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}
/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
function encodeConsonantWord(word) {
	if (typeof word === "string") {
		word = word.toLowerCase()
		let wordAsArray = word.split("")
		let vowels = ["a", "e", "i", "o", "u"]
		let letterCounter = 0

		function testLetter(letter) {
			for (let j = 0; j < vowels.length; j += 1) {
				const vowel = vowels[j]
				if (letter === vowel) {
					return true
				}
			}
			return false
		}

		for (let i = 0; i < wordAsArray.length; i += 1) {
			const letter = wordAsArray[i]
			if (testLetter(letter)) {
				let removed = wordAsArray.splice(0, letterCounter)
				wordAsArray = wordAsArray.join("")
				removed = removed.join("")
				word = wordAsArray + `-${removed}ay`
				return word
			} else {
				letterCounter += 1
			}
		}
	}
}

// Write your unit tests here
const testSimpleConsonantWords = {
	latin: "atin-lay",
	banana: "anana-bay",
	happy: "appy-hay",
	duck: "uck-day",
	dopest: "opest-day",
	me: "e-may",
	too: "oo-tay",
	will: "ill-way",
	moist: "oist-may",
	wet: "et-way",
	real: "eal-ray",
	simple: "imple-say",
	say: "ay-say",
	bagel: "agel-bay",
	you: "ou-yay",
}

for (const word in testSimpleConsonantWords) {
	if (Object.hasOwnProperty.call(testSimpleConsonantWords, word)) {
		const expectedOutput = testSimpleConsonantWords[word]
		result = encodeConsonantWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeConsonantWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

const testClusteredConsonantWords = {
	cheers: "eers-chay",
	shesh: "esh-shay",
	smile: "ile-smay",
	string: "ing-stray",
	thanks: "anks-thay",
	trash: "ash-tray",
	stupid: "upid-stay",
	glove: "ove-glay",
}

for (const word in testClusteredConsonantWords) {
	if (Object.hasOwnProperty.call(testClusteredConsonantWords, word)) {
		const expectedOutput = testClusteredConsonantWords[word]
		result = encodeConsonantWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeConsonantWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
	if (typeof word === "string") {
		if (word !== "" && word !== null && word !== undefined) {
			let vowels = ["a", "e", "i", "o", "u"]
			for (let i = 0; i < vowels.length; i += 1) {
				let vowel = vowels[i]
				if (word.startsWith(vowel)) {
					return encodeVowelWord(word)
				}
			}
			return encodeConsonantWord(word)
		}
	}
}

// Write your unit tests here
for (const word in testVowelWords) {
	if (Object.hasOwnProperty.call(testVowelWords, word)) {
		const expectedOutput = testVowelWords[word]
		result = encodeWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

for (const word in testSimpleConsonantWords) {
	if (Object.hasOwnProperty.call(testSimpleConsonantWords, word)) {
		const expectedOutput = testSimpleConsonantWords[word]
		result = encodeWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

for (const word in testClusteredConsonantWords) {
	if (Object.hasOwnProperty.call(testClusteredConsonantWords, word)) {
		const expectedOutput = testClusteredConsonantWords[word]
		result = encodeWord(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeWord(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}
/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
	if (typeof text === "string") {
		textArray = text.toLowerCase().split(" ")
		text = ""

		for (let i = 0; i < textArray.length; i += 1) {
			let word = textArray[i]
			let wordAsArray = word.split("")
			let alphabet = "abcdefghijklmnopqrstuvwxyz"
			let alphabetArray = alphabet.split("")
			let endsInPunctuation = null
			let finalCharacter = word[word.length - 1]

			if (alphabetArray.includes(finalCharacter)) {
				endsInPunctuation = false
			} else {
				endsInPunctuation = true
			}

			if (endsInPunctuation) {
				let removed = wordAsArray.pop()
				word = wordAsArray.join("")
				word = encodeWord(word) + removed
			} else {
				word = encodeWord(word)
			}

			if (text === "") {
				text += word
			} else {
				text += ` ${word}`
			}
		}
		return text
	}
}
// Write your unit tests here

for (const word in testVowelWords) {
	if (Object.hasOwnProperty.call(testVowelWords, word)) {
		const expectedOutput = testVowelWords[word]
		result = encodeText(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeText(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

for (const word in testSimpleConsonantWords) {
	if (Object.hasOwnProperty.call(testSimpleConsonantWords, word)) {
		const expectedOutput = testSimpleConsonantWords[word]
		result = encodeText(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeText(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}

for (const word in testClusteredConsonantWords) {
	if (Object.hasOwnProperty.call(testClusteredConsonantWords, word)) {
		const expectedOutput = testClusteredConsonantWords[word]
		result = encodeText(word)
		console.assert(
			result === expectedOutput,
			JSON.stringify({
				test: `encodeText(${word})`,
				expected: expectedOutput,
				result: result,
			})
		)
	}
}
