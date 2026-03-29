const createMenu = (courses) => {
    const menuContainer = document.createElement('div');

    if (!courses || courses.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No menu available for today.';
        menuContainer.append(emptyMessage);
        return menuContainer;
    }

    for (const course of courses) {
        const { name, price, diets } = course;

        const courseItem = document.createElement('article');
        courseItem.classList.add('course');

        const nameElement = document.createElement('p');
        const nameStrong = document.createElement('strong');
        nameStrong.textContent = name || 'Ei ilmoitettu';
        nameElement.append(nameStrong);

        const priceElement = document.createElement('p');
        priceElement.textContent = `Hinta: ${price || 'Ei ilmoitettu'}`;

        const dietsElement = document.createElement('p');
        dietsElement.textContent = `Diets: ${diets || 'Ei ilmoitettu'}`;

        courseItem.append(nameElement, priceElement, dietsElement);
        menuContainer.append(courseItem);
    }

    return menuContainer;
};

export default createMenu;
