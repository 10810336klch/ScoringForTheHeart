let answersA = null;
let answersB = null;

document.getElementById('formA').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    answersA = Object.fromEntries(formData.entries());
    checkResults();
});

document.getElementById('formB').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    answersB = Object.fromEntries(formData.entries());
    checkResults();
});

function checkResults() {
    if (answersA && answersB) {
        let total = Object.keys(answersA).length;
        let match = 0;

        for (let key in answersA) {
            if (answersA[key] === answersB[key]) {
                match++;
            }
        }

        let score = Math.round((match / total) * 100);
        document.getElementById('result').textContent = `雙方相似度：${score}%`;
    }
}
