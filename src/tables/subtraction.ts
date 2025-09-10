const subtractionStartBtn = document.getElementById("startBtn") as HTMLButtonElement;
const subtractionResetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const subtractionQuizContainer = document.getElementById("quizContainer") as HTMLDivElement;

subtractionStartBtn.addEventListener("click", () => {
    generateSubtractionQuiz();
    subtractionResetBtn.disabled = false;
});

subtractionResetBtn.addEventListener("click", () => {
    subtractionQuizContainer.innerHTML = "";
    subtractionResetBtn.disabled = true;
});

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 900) + 100; // Random 3-digit number
}

function generateSubtractionQuiz() {
    subtractionQuizContainer.innerHTML = ""; // Clear old content

    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();

    // Split numbers into digits
    const num1Digits = num1.toString().split('');
    const num2Digits = num2.toString().split('');

    const tbl = document.createElement("table");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Borrow</th><th>Subtraction</th>";
    tbl.appendChild(headerRow);

    // Create rows for borrow inputs
    const borrowRow = document.createElement("tr");
    borrowRow.innerHTML = `<td>
        <label>Hundreds: </label><input type="number" id="borrowHundreds" placeholder="0" min="0" max="9" />
        <label>Tens: </label><input type="number" id="borrowTens" placeholder="0" min="0" max="9" />
        <label>Ones: </label><input type="number" id="borrowOnes" placeholder="0" min="0" max="9" />
    </td>`;

    // Display the subtraction problem
    const subtractionRow = document.createElement("tr");
    subtractionRow.innerHTML = `<td>
        <div class="number-row">
            <span>${num1Digits[0]}</span> <span>${num1Digits[1]}</span> <span>${num1Digits[2]}</span>
        </div>
        <div class="number-row">
            - <span>${num2Digits[0]}</span> <span>${num2Digits[1]}</span> <span>${num2Digits[2]}</span>
        </div>
    </td>`;

    tbl.appendChild(borrowRow);
    tbl.appendChild(subtractionRow);

    subtractionQuizContainer.appendChild(tbl);

    const borrowHundreds = document.getElementById("borrowHundreds") as HTMLInputElement;
    const borrowTens = document.getElementById("borrowTens") as HTMLInputElement;
    const borrowOnes = document.getElementById("borrowOnes") as HTMLInputElement;

    borrowHundreds.addEventListener("input", updateSubtraction);
    borrowTens.addEventListener("input", updateSubtraction);
    borrowOnes.addEventListener("input", updateSubtraction);

    function updateSubtraction() {
        // Ensure the input values are treated as numbers
        const borrowedHundreds: number = parseInt(borrowHundreds.value) || 0;
        const borrowedTens: number = parseInt(borrowTens.value) || 0;
        const borrowedOnes: number = parseInt(borrowOnes.value) || 0;

        // Ensure we're performing arithmetic with numbers
        const resultHundreds: number = (parseInt(num1Digits[0]) - parseInt(num2Digits[0])) - borrowedHundreds;
        const resultTens: number = (parseInt(num1Digits[1]) - parseInt(num2Digits[1])) - borrowedTens;
        const resultOnes: number = (parseInt(num1Digits[2]) - parseInt(num2Digits[2])) - borrowedOnes;

        const result = `${resultHundreds} ${resultTens} ${resultOnes}`;

        // Display the updated result
        const resultRow = document.createElement("tr");
        resultRow.className = "answer-row";
        resultRow.innerHTML = `<td colspan="2">${result}</td>`;
        tbl.appendChild(resultRow);
    }
}
