document.addEventListener('DOMContentLoaded', function () {
    fetch('http:/localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLtable(data['data']));
    
});


const addBtn = document.querySelector('#add-btn');
addBtn.onclick = function () {
    const ingredientInput = document.querySelector('#name-input');
    const ingredient = ingredientInput.value;
    ingredientInput.value = '';
    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']))

    ;

}

function insertRowIntoTable(data) {
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');
    let tableHtml = "<tr>";
    data.foreach(function ({ingredient}) {
        tableHtml += '<td>${ingredient}</td>';
        tableHtml += '<td><button class="delete-btn">Delete></td>';

    })

    tableHtml += "</tr>";

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }

}

function loadHTMLtable(data){
    const table = document.querySelector('table tbody');
    if (data.length ===0){
        table.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>";
        return;
    }
    let tableHtml ="";
    data.foreach(function ({ingredient}){
        tableHtml += "<tr>";
        tableHtml += '<td>${ingredient}</td>';
        tableHtml += '<td><button class="delete-btn">Delete></td>';
        tableHtml += "</tr>";


    });

    table.innerHTML = tableHtml;
}