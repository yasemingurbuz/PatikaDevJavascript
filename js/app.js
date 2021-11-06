const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

function initializePageFromMenu(menu) {
    createButtonsFromMenu(menu);
    displayMenuItems(menu);
}

function displayMenuItems(menu, filter = "All") {
    const filterdMenu = menu.filter((menuItem) =>
        filter == "All" ? true : filter == menuItem.category
    );

    const menuItemElements = createMenuItemElements(filterdMenu);
    const sectionCenter = document.querySelector(".section-center.row");

    // clear existing items
    sectionCenter.innerHTML = "";

    menuItemElements.forEach((menuItem) => {
        sectionCenter.appendChild(menuItem);
    });
}

function createMenuItemElements(menu, filter) {
    const menuItemElements = menu.map((menuItem) => {
        const menuItemDisplay = document.createElement("div");
        menuItemDisplay.classList.add("menu-items");
        menuItemDisplay.classList.add("col-lg-6");
        menuItemDisplay.classList.add("col-sm-12");

        menuItemDisplay.appendChild(createMenuItemImage(menuItem));
        menuItemDisplay.appendChild(createMenuItemInfo(menuItem));

        return menuItemDisplay;
    });

    return menuItemElements;
}

function createMenuItemInfo(menuItem) {
    const menuItemInfo = document.createElement("div");

    menuItemInfo.classList.add("menu-info");

    menuItemInfo.appendChild(createMenuItemTitle(menuItem));
    menuItemInfo.appendChild(createMenuItemText(menuItem));

    return menuItemInfo;
}

function createMenuItemTitle(menuItem) {
    const menuItemTitle = document.createElement("div");

    menuItemTitle.classList.add("menu-title");

    const menuItemTitleName = document.createElement("h4");
    menuItemTitleName.textContent = menuItem.title;

    const menuItemTitlePrice = document.createElement("h4");
    menuItemTitlePrice.textContent = menuItem.price;
    menuItemTitlePrice.classList.add("price");

    menuItemTitle.appendChild(menuItemTitleName);
    menuItemTitle.appendChild(menuItemTitlePrice);

    return menuItemTitle;
}

function createMenuItemText(menuItem) {
    const menuItemText = document.createElement("div");
    menuItemText.textContent = menuItem.desc;
    menuItemText.classList.add("menu-text");

    return menuItemText;
}

function createMenuItemImage(menuItem) {
    const menuItemImage = document.createElement("img");

    menuItemImage.src = menuItem.img;
    menuItemImage.alt = menuItem.title;
    menuItemImage.classList.add("photo");

    return menuItemImage;
}

function createButtonsFromMenu(menu) {
    const buttonContainer = document.querySelector("div.btn-container");

    const uniqueCategories = getCategoriesFromMenu(menu);

    uniqueCategories.forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-outline-dark");
        button.classList.add("btn-item");
        button.textContent = category;

        addButtonEventListener(button, menu);

        buttonContainer.appendChild(button);
    });
}

function addButtonEventListener(buttonElement, menu) {
    buttonElement.addEventListener("click", function () {
        const filter = buttonElement.textContent;
        displayMenuItems(menu, filter);
    });
}

function getCategoriesFromMenu(menu) {
    const categories = [];

    const uniqueCategories = new Set(menu.map((menuItem) => menuItem.category));

    categories.push("All");
    categories.push(...uniqueCategories);

    return categories;
}

initializePageFromMenu(menu);
