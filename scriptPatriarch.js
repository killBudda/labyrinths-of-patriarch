// Задание 1 ✮ ⋆ ˚｡𖦹 ⋆｡°✩
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`; }

    var counter = 0;

    const nightMovers = [
        'встретишь Будду - убей Будду',
        'встретишь патриарха - убей патриарха',
        'встретишь отца и мать - убей отца и мать'
    ]

    document.getElementById('addTextBtn').addEventListener('click', function () {
        const block = document.getElementById('container');
        if (counter < 3){
            const p = document.createElement('p');
            p.textContent = nightMovers[counter];
            counter++;
            block.appendChild(p);
            block.style.borderColor = getRandomColor();
        } 
    });

// Задание 2 ✮ ⋆ ˚｡𖦹 ⋆｡°✩
    document.getElementById('addTaskBtn').addEventListener('click', function () {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim(); 
        
    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.style.marginLeft = '15px';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.backgroundColor = '#0b0b32';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '2px';
        deleteBtn.style.cursor = 'pointer';
        
        deleteBtn.addEventListener('click', function() {
            listItem.remove();
        });
        
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem); 
        taskInput.value = "";
    } else {
        alert('Введите задачу ✮ ⋆ ˚｡𖦹 ⋆｡°✩');
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { 
        e.preventDefault();
        document.getElementById('addTaskBtn').click();
    }
});

// Задание 3 ✮ ⋆ ˚｡𖦹 ⋆｡°✩
    const ul = document.getElementById('reasonsToLate');
    const tramvai = ul.children[0];
    const tiktok = ul.children[1];
    const tualet = ul.children[2];
    const marsh75 = ul.children[3];
    const karkavin = ul.children[4];
    const lebed = ul.children[5];
    const probki = ul.children[6];
    const obval = ul.children[7];
    const tihohodki = ul.children[8];
    const marsh78 = ul.children[9];
    const son = ul.children[10];

    document.getElementById('sortBtn').addEventListener('click', function() {
        const ul = document.getElementById('reasonsToLate');
        const items = Array.from(ul.getElementsByTagName('li'));
        
        const newOrder = [9, 5, 3, 7, 2, 6, 1, 0, 4, 10];

        ul.innerHTML = '';
        newOrder.forEach(index => {
            if (items[index]) {
                ul.appendChild(items[index]);
            }
        });
    });