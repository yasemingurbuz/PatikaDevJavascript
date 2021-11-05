// Select items
const form = document.querySelector('.form__container');
const input = document.querySelector('.form-input');
const list = document.querySelector('.list');
const jsAlert = document.querySelector('.js-alert');
const iconTimes = document.querySelector('.iconTimes');
const alertText = document.querySelector('.text');

// Setup Items
const setupItems = () => {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
    }
};

//load items
window.addEventListener('DOMContentLoaded', setupItems);

// Add list item function
const addListItem = e => {
    e.preventDefault();

    const value = input.value;
    const id = new Date().getTime().toString();

    if (value) {
        createListItem(id, value);

        // display alert
        displayAlert('Listeye eklendi', 'success');

        // add to local storage
        addToLocalStorage(id, value);

        // set back to default
        input.value = '';
    } else {
        displayAlert('Boş eklenemez.', 'danger');
    }
};

// check list
const checkList = e => {
    e.target.classList.add('active');
};

// remove list
const removeListItem = e => {
    const element = e.currentTarget.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    displayAlert('item silindi', 'danger');

    removeFromLocalStorage(id);
};

// Alert Function
const displayAlert = (text, action) => {
    jsAlert.classList.remove(
        `${
        jsAlert.classList.contains('alert-danger')
            ? jsAlert.classList.remove('alert-danger')
            : jsAlert.classList.remove('alert-success')
        }`
    );

    alertText.textContent = text;
    jsAlert.classList.add('alert', `alert-${action}`);

    setTimeout(() => {
        jsAlert.classList.remove('alert');
    }, 3000);
};

// remove alert
const removeAlert = () => {
    jsAlert.classList.remove('alert');
};

// Local storage Function
const addToLocalStorage = (id, value) => {
    const listItem = { id, value };
    let items = getLocalStorage();

    items = [...items, listItem];
    localStorage.setItem('list', JSON.stringify(items));
};

const removeFromLocalStorage = id => {
    let items = getLocalStorage();

    items = items.filter(item => item.id !== id);
    console.log(items);

    localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];
};

const createListItem = (id, value) => {
    // create element
    const element = document.createElement('li');

    // add class
    element.classList.add('list__item');

    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `
  <i class="fas fa-check iconCheck"></i>
  <p>${value}</p>
  <i class="fas fa-times js-icon"></i>
  `;

    const listItems = document.querySelectorAll('.list__item');
    if (listItems > 0) {
        listItems.addEventListener('click', checkList);
    }

    const removeIcon = element.querySelector('.js-icon');
    removeIcon.addEventListener('click', removeListItem);

    // append child
    list.appendChild(element);
};

// Event Listeners
form.addEventListener('submit', addListItem);
iconTimes.addEventListener('click', removeAlert);
list.addEventListener('click', checkList);
    