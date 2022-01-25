import k from "../main.mjs";

export function addScore(score, scoreToWin) {
    // display score
	const scoreLabel = add([
		text(score, " / ", scoreToWin),
		origin("center"),
		pos(width() / 10, 80),
		fixed(),
	])

	const separator = add([
		text(" / "),
		origin("center"),
		pos(width() / 10 + (scoreLabel.width * 2), 80),,
		fixed(),
	])

	const scoreToReach = add([
		text(scoreToWin),
		origin("center"),
		pos(width() / 10 + (separator.width + scoreLabel.width * 7 / 4), 80),,
		fixed(),
	])

    return ({scoreLabel: scoreLabel, separator: separator, scoreToReach: scoreToReach})
};

//Updates score and return its value
export function updateScore(score, scoreLabel) {
    scoreLabel.text = score
	return(score)
}


export function getScore(){
	return(score)
}