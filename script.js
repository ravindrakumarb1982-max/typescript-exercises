"use strict";
const startBtnMultiplication = document.getElementById("startBtn");
const resetBtnMultiplication = document.getElementById("resetBtn");
const tableSelect = document.getElementById("tableSelect");
const quizContainer = document.getElementById("quizContainer");
const timerEl = document.getElementById("timer");
const celebrationEl = document.getElementById("celebration");
let timerInterval = null;
let startTime = 0;
let usedHelp = false; // track help usage
// Start Timer
function startTimer() {
    resetTimer();
    startTime = Date.now();
    timerInterval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        const millis = elapsed % 1000;
        timerEl.textContent =
            `${hours.toString().padStart(2, "0")}:` +
                `${minutes.toString().padStart(2, "0")}:` +
                `${seconds.toString().padStart(2, "0")}:` +
                `${millis.toString().padStart(3, "0")}`;
    }, 10);
}
// Stop Timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}
// Reset Timer
function resetTimer() {
    stopTimer();
    timerEl.textContent = "00:00:00:000";
}
// 🎉 Celebration function
function triggerCelebration() {
    celebrationEl.style.display = "block";
    document.body.style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
    setTimeout(() => {
        celebrationEl.style.display = "none";
        document.body.style.background = "white";
    }, 4000); // show for 4 seconds
}
// Event Listeners
startBtnMultiplication.addEventListener("click", () => {
    const table = parseInt(tableSelect.value);
    usedHelp = false; // reset help tracking
    generateQuiz(table);
    startTimer();
});
resetBtnMultiplication.addEventListener("click", () => {
    quizContainer.innerHTML = "";
    resetTimer();
    celebrationEl.style.display = "none";
    document.body.style.background = "white";
});
// Check if quiz is complete
function checkQuizCompletion(inputs, table) {
    const allCorrect = inputs.every(input => {
        const val = parseInt(input.value);
        const expectedAnswer = table * (inputs.indexOf(input) + 1);
        return val === expectedAnswer;
    });
    if (allCorrect) {
        stopTimer();
        const elapsed = Date.now() - startTime;
        if (!usedHelp && elapsed <= 60000) {
            triggerCelebration(); // 🎉 celebrate
        }
    }
}
// Generate Quiz
function generateQuiz(table) {
    quizContainer.innerHTML = "";
    const tbl = document.createElement("table");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Question</th><th>Your Answer</th><th>Result</th>";
    tbl.appendChild(headerRow);
    const inputs = [];
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        // Question cell
        const questionCell = document.createElement("td");
        questionCell.innerText = `${table} × ${i}`;
        // Input + Show Answer button
        const inputCell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.dataset.answer = String(table * i);
        const showBtn = document.createElement("button");
        showBtn.textContent = "Show Answer";
        showBtn.className = "showAnswerBtn";
        showBtn.style.marginLeft = "8px";
        showBtn.disabled = false;
        // Result cell
        const resultCell = document.createElement("td");
        // Show Answer button logic
        showBtn.addEventListener("click", () => {
            usedHelp = true; // mark help used
            const correctAnswer = table * i;
            input.value = String(correctAnswer);
            resultCell.innerHTML = `✅ Correct Answer: ${correctAnswer}`;
            resultCell.className = "correct";
            showBtn.disabled = true;
            
            // Check if quiz is complete after showing answer
            checkQuizCompletion(inputs, table);
        });
        inputCell.appendChild(input);
        inputCell.appendChild(showBtn);
        inputs.push(input);
        // Input validation
        input.addEventListener("input", () => {
            const val = parseInt(input.value);
            if (val === table * i) {
                resultCell.innerHTML = "✅";
                resultCell.className = "correct";
                // Move to next input
                const nextIndex = inputs.indexOf(input) + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
                else {
                    // Check completion when reaching last input
                    checkQuizCompletion(inputs, table);
                }
            }
            else if (input.value !== "") {
                resultCell.innerHTML = "❌";
                resultCell.className = "wrong";
                input.focus();
            }
            else {
                resultCell.innerHTML = "";
                resultCell.className = "";
            }
        });
        row.appendChild(questionCell);
        row.appendChild(inputCell);
        row.appendChild(resultCell);
        tbl.appendChild(row);
    }
    quizContainer.appendChild(tbl);
    inputs[0].focus();
}