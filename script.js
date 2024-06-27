function calculateScore() {
    const totalQuestions = parseInt(document.getElementById('totalQuestions').value);
    const correctAnswers = parseInt(document.getElementById('correctAnswers').value);
    const rightAnswerMarks = parseInt(document.getElementById('rightAnswerMarks').value);
    const penalty = parseInt(document.getElementById('penalty').value);
    const wrongAnswerMarks = parseInt(document.getElementById('wrongAnswerMarks').value);

    const wrongAnswers = totalQuestions - correctAnswers;
    const penaltyPoints = Math.floor(wrongAnswers / 4) * penalty;
    const wrongAnswersPenalty = wrongAnswers * wrongAnswerMarks;

    const score = (correctAnswers * rightAnswerMarks) - penaltyPoints - wrongAnswersPenalty;

    document.getElementById('result').innerText = `The final score is: ${score}`;
}
