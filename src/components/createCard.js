const createCard = (imgData) => {
    // create card container
    const container = document.createElement('div');
    container.classList.add('card');
    container.id = imgData.id;

    // create card content
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.title;

    const title = document.createElement('h6');
    title.classList.add('card-title');
    title.innerText = imgData.title;

    container.append(img, title);
    return container;
};

export default createCard;
