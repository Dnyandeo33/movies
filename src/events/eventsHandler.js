import loadHandler from '../handlers/loadKeyupHandler.js';

const loadEvent = () => {
    window.addEventListener('load', loadHandler);
};

export default loadEvent;
