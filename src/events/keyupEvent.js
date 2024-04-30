import dom from '../dom.js';
import keyupHandler from '../handlers/keyupHandler.js';

const keyupEvent = () => {
    dom.input.addEventListener('keyup', keyupHandler)
}

export default keyupEvent;