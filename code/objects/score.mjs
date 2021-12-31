import k from "../main.mjs";

export function addScore(score) {
    // display score
	const scoreLabel = add([
		text(score),
		origin("center"),
		pos(width() / 2, 80),
		fixed(),
	])

    return (scoreLabel)
};

//Updates score and return its value
export function updateScore(score, scoreLabel) {
    score++
    scoreLabel.text = score
	return(score)
}