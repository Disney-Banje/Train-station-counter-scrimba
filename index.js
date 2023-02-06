let count, countEl, saveEl, dayTotal, sum;

count = 0;
sum = 0;
countEl = document.getElementById('count-el');
saveEl = document.getElementById('save-el');
dayTotal = document.getElementById('count-sum');

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let newVarible = countEl.textContent;
    saveEl.textContent += `${newVarible} - `;
    countEl.textContent = 0;
    count = 0;
}

