function calculateScore() {
    const totalQuestions = parseFloat(document.getElementById('totalQuestions').value);
    const correctAnswers = parseFloat(document.getElementById('correctAnswers').value);
    const rightAnswerMarks = parseFloat(document.getElementById('rightAnswerMarks').value);
    const penaltyPerWrong = parseFloat(document.getElementById('penaltyPerWrong').value);
    const penaltyForWrong = parseFloat(document.getElementById('penaltyForWrong').value);

    const wrongAnswers = totalQuestions - correctAnswers;
    const penaltyPoints = wrongAnswers * penaltyPerWrong;
    const wrongAnswersPenalty = penaltyForWrong * (wrongAnswers > 0 ? 1 : 0);

    const score = (correctAnswers * rightAnswerMarks) - penaltyPoints - wrongAnswersPenalty;

    document.getElementById('result').innerText = `The final score is: ${score.toFixed(2)}`;
}
