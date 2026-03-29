'use strict';

const target = document.querySelector('#target');

const data = [];

data.push(navigator.userAgent);
data.push(navigator.platform);
data.push(screen.width);
data.push(screen.height);
data.push(screen.availWidth);
data.push(screen.availHeight);
data.push(new Date().toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
}));

for (const str of data) {
    const itemHtml = document.createElement('p');
    itemHtml.textContent = str;
    target.append(itemHtml);
}