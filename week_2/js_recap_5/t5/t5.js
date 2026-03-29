'use strict';
import fetchData from './modules/fetchData.js';
import createModal from './modules/createModal.js';
import createRow from './modules/createRow.js';

const API_URL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const table = document.querySelector('#target');
const modal = document.querySelector('#modal');

const getRestaurants = async () => {
    try {
        return await fetchData(API_URL + '/restaurants');
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getRestaurantMenu = async (id, lang) => {
    try {
        return await fetchData(API_URL + `/restaurants/daily/${id}/${lang}`);
    } catch (error) {
        console.error(error);
        return null;
    }
};

const showTableMessage = (message) => {
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Company</th>
        </tr>
        <tr>
            <td colspan="4">${message}</td>
        </tr>
    `;
};

const showModalMessage = (message) => {
    modal.innerHTML = '';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    modal.append(messageElement);
};

(async () => {
    const restaurants = await getRestaurants();

    if (!restaurants) {
        showTableMessage('Failed to load restaurants.');
        return;
    }

    for (const restaurant of restaurants) {
        const tr = createRow(restaurant);

        tr.addEventListener('click', async () => {
            for (const elem of document.querySelectorAll('.highlight')) {
                elem.classList.remove('highlight');
            }

            tr.classList.add('highlight');

            modal.innerHTML = '';
            modal.showModal();

            const pMenu = await getRestaurantMenu(restaurant._id, 'fi');

            if (!pMenu) {
                showModalMessage('Failed to load menu.');
                return;
            }

            const modalDOM = createModal(restaurant, pMenu);

            modal.append(modalDOM);
        });

        table.append(tr);
    }
})();
