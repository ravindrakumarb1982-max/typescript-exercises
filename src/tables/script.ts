const startBtnMultiplication = document.getElementById("startBtn") as HTMLButtonElement;
const resetBtnMultiplication = document.getElementById("resetBtn") as HTMLButtonElement;
const tableSelect = document.getElementById("tableSelect") as HTMLSelectElement;
const quizContainer = document.getElementById("quizContainer") as HTMLDivElement;
const timerEl = document.getElementById("timer") as HTMLSpanElement;
const celebrationEl = document.getElementById("celebration") as HTMLDivElement;

let timerInterval: number | null = null;
let startTime: number = 0;
let usedHelp: boolean = false; // track help usage

// Start Timer
function startTimer() {
    resetTimer();
    startTime = Date.now();
    timerInterval = window.setInterval(() => {
        const elapsed: number = Date.now() - startTime;
        const hours: number = Math.floor(elapsed / 3600000);
        const minutes: number = Math.floor((elapsed % 3600000) / 60000);
        const seconds: number = Math.floor((elapsed % 60000) / 1000);
        const millis: number = elapsed % 1000;

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
    const table: number = parseInt(tableSelect.value);
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

// Generate Quiz
function generateQuiz(table: number) {
    quizContainer.innerHTML = "";

    const tbl: HTMLTableElement = document.createElement("table");
    const headerRow: HTMLTableRowElement = document.createElement("tr");
    headerRow.innerHTML = "<th>Question</th><th>Your Answer</th><th>Result</th>";
    tbl.appendChild(headerRow);

    const inputs: HTMLInputElement[] = [];

    for (let i: number = 1; i <= 10; i++) {
        const row: HTMLTableRowElement = document.createElement("tr");

        // Question cell
        const questionCell: HTMLTableCellElement = document.createElement("td");
        questionCell.innerText = `${table} × ${i}`;

        // Input + Show Answer button
        const inputCell: HTMLTableCellElement = document.createElement("td");
        const input: HTMLInputElement = document.createElement("input");
        input.type = "number";
        input.dataset.answer = String(table * i);

        const showBtn: HTMLButtonElement = document.createElement("button");
        showBtn.textContent = "Show Answer";
        showBtn.className = "showAnswerBtn";
        showBtn.style.marginLeft = "8px";
        showBtn.disabled = false;

        // Result cell
        const resultCell: HTMLTableCellElement = document.createElement("td");

        // Show Answer button logic
        showBtn.addEventListener("click", () => {
            usedHelp = true; // mark help used
            const correctAnswer: number = table * i;
            input.value = String(correctAnswer);
            resultCell.innerHTML = `✅ Correct Answer: ${correctAnswer}`;
            resultCell.className = "correct";
            showBtn.disabled = true;
        });

        inputCell.appendChild(input);
        inputCell.appendChild(showBtn);

        inputs.push(input);

        // Input validation
        input.addEventListener("input", () => {
            const val: number = parseInt(input.value);
            if (val === table * i) {
                resultCell.innerHTML = "✅";
                resultCell.className = "correct";

                // Move to next input
                const nextIndex: number = inputs.indexOf(input) + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                } else {
                    stopTimer();
                    const elapsed: number = Date.now() - startTime;

                    if (!usedHelp && elapsed <= 60000) {
                        triggerCelebration(); // 🎉 celebrate
                    }
                }
            } else if (input.value !== "") {
                resultCell.innerHTML = "❌";
                resultCell.className = "wrong";
                input.focus();
            } else {
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
