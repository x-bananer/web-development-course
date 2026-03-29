const createRow = (restaurant) => {
    const { name, address, city, company } = restaurant;

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const addressCell = document.createElement('td');
    addressCell.textContent = address;

    const cityCell = document.createElement('td');
    cityCell.textContent = city;

    const companyCell = document.createElement('td');
    companyCell.textContent = company;

    row.append(nameCell, addressCell, cityCell, companyCell);

    return row;
}

export default createRow;