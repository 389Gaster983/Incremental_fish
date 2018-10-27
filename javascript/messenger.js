var lines = ["5", "4", "3", "2", "1"];

function write_message(text) {
	console.log(text);

	if (lines[0] != text) {
		// shift all the lines up one
		for (var index = 4; index >= 0; index--) {
			lines[index] = lines[index - 1];
		}

		lines[0] = text;
	}

	for (var index = 0; index < 5; index++) {
		document.getElementById("history_message_" + (index + 1).toString()).innerText = lines[index];
	}
}