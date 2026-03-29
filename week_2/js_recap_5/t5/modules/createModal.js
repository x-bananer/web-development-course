import createMenu from './createMenu.js';

const createModal = (restaurant, menu) => {
    const container = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = restaurant.name;

    const address = document.createElement('p');
    address.textContent = `Address: ${restaurant.address}`;

    const city = document.createElement('p');
    city.textContent = `City: ${restaurant.city}`;

    const company = document.createElement('p');
    company.textContent = `Company: ${restaurant.company}`;

    const menuTitle = document.createElement('h4');
    menuTitle.textContent = "Today's menu";

    const menuElement = createMenu(menu?.courses);

    container.append(title, address, city, company, menuTitle, menuElement);

    return container;
};

export default createModal;
