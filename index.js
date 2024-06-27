const form = document.getElementById('formRegister');
const Artista = document.getElementById('nameInput');
const Disco = document.getElementById('discoInput');
const Fecha = document.getElementById('fechaInput');
const tableBody = document.getElementById('tableBody');

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const Artista = nameInput.value;
    const Disco = discoInput.value;
    const Fecha = fechaInput.value;
    if (Artista && Disco && Fecha) {
        const newData = {Artista, Disco, Fecha};
        data.push(newData);
        saveDataToLocalStorage();
        renderTable();
        form.reset();
    }    
})

function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}

function renderTable() {
    tableBody.innerHTML = '';
    data.forEach(function (item, index) {
        const row = document.createElement('tr');
        const ArtistaCell = document.createElement('td');
        const DiscoCell = document.createElement('td');
        const FechaCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        ArtistaCell.textContent = item.Artista;
        DiscoCell.textContent = item.Disco;
        FechaCell.textContent = item.Fecha;
        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(ArtistaCell);
        row.appendChild(DiscoCell);
        row.appendChild(FechaCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
})
}

renderTable();
