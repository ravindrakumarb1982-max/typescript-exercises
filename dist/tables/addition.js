"use strict";
const additionStartBtn = document.getElementById("startBtn");
const additionResetBtn = document.getElementById("resetBtn");
const additionQuizContainer = document.getElementById("quizContainer");
additionStartBtn.addEventListener("click", () => {
    generateAdditionQuiz();
    additionResetBtn.disabled = false;
});
additionResetBtn.addEventListener("click", () => {
    additionQuizContainer.innerHTML = "";
    additionResetBtn.disabled = true;
});
function generateRandomAdditionNumber() {
    return Math.floor(Math.random() * 900) + 100; // Random 3-digit number
}
function generateAdditionQuiz() {
    additionQuizContainer.innerHTML = ""; // Clear old content
    const num1 = generateRandomAdditionNumber();
    const num2 = generateRandomAdditionNumber();
    // Split numbers into digits
    const num1Digits = num1.toString().split('');
    const num2Digits = num2.toString().split('');
    const tbl = document.createElement("table");
    // Create rows for carry inputs
    const carryRow = document.createElement("tr");
    carryRow.innerHTML = `<td colspan="2">
        <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
            <div style="margin-right: 20px; width: 30px;"></div>
            <div class="number-row">
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <label style="font-size: 14px; margin-bottom: 5px;">Carry</label>
                    <input type="number" id="carryHundreds" placeholder="0" min="0" max="9" style="width: 50px; height: 30px; text-align: center;" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <label style="font-size: 14px; margin-bottom: 5px;">Carry</label>
                    <input type="number" id="carryTens" placeholder="0" min="0" max="9" style="width: 50px; height: 30px; text-align: center;" />
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <label style="font-size: 14px; margin-bottom: 5px;">Carry</label>
                    <input type="number" id="carryOnes" placeholder="0" min="0" max="9" style="width: 50px; height: 30px; text-align: center;" />
                </div>
            </div>
        </div>
    </td>`;
    // Display the addition problem
    const additionRow = document.createElement("tr");
    additionRow.innerHTML = `<td colspan="2">
        <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
            <div style="margin-right: 20px; font-size: 24px; width: 30px;"></div>
            <div class="number-row">
                <div class="number-box">${num1Digits[0]}</div>
                <div class="number-box">${num1Digits[1]}</div>
                <div class="number-box">${num1Digits[2]}</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
            <div style="margin-right: 20px; font-size: 24px; width: 30px; text-align: center;">+</div>
            <div class="number-row">
                <div class="number-box">${num2Digits[0]}</div>
                <div class="number-box">${num2Digits[1]}</div>
                <div class="number-box">${num2Digits[2]}</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
            <div style="margin-right: 20px; width: 30px;"></div>
            <div style="border-top: 2px solid #333; width: 180px;"></div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
            <div style="margin-right: 20px; width: 30px;"></div>
            <div class="number-row">
                <input type="number" class="answer-input" id="answerThousands" placeholder="?" min="0" max="9" />
                <input type="number" class="answer-input" id="answerHundreds" placeholder="?" min="0" max="9" />
                <input type="number" class="answer-input" id="answerTens" placeholder="?" min="0" max="9" />
                <input type="number" class="answer-input" id="answerOnes" placeholder="?" min="0" max="9" />
            </div>
        </div>
    </td>`;
    tbl.appendChild(carryRow);
    tbl.appendChild(additionRow);
    additionQuizContainer.appendChild(tbl);
    const carryHundreds = document.getElementById("carryHundreds");
    const carryTens = document.getElementById("carryTens");
    const carryOnes = document.getElementById("carryOnes");
    const answerThousands = document.getElementById("answerThousands");
    const answerHundreds = document.getElementById("answerHundreds");
    const answerTens = document.getElementById("answerTens");
    const answerOnes = document.getElementById("answerOnes");
    // Calculate the correct answer
    const correctAnswer = num1 + num2;
    const correctDigits = correctAnswer.toString().padStart(4, '0').split('');
    // Add validation for answer inputs
    answerThousands.addEventListener("input", () => checkAnswer(answerThousands, correctDigits[0]));
    answerHundreds.addEventListener("input", () => checkAnswer(answerHundreds, correctDigits[1]));
    answerTens.addEventListener("input", () => checkAnswer(answerTens, correctDigits[2]));
    answerOnes.addEventListener("input", () => checkAnswer(answerOnes, correctDigits[3]));
    function checkAnswer(input, correctDigit) {
        if (input.value === correctDigit) {
            input.style.backgroundColor = "#d4edda";
            input.style.borderColor = "#28a745";
        }
        else if (input.value !== "") {
            input.style.backgroundColor = "#f8d7da";
            input.style.borderColor = "#dc3545";
        }
        else {
            input.style.backgroundColor = "";
            input.style.borderColor = "#007BFF";
        }
    }
}
