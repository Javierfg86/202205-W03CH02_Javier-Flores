import { footerTemplate, headerTemplate } from './templates.js';
(() => {
    document.querySelector('header').innerHTML = headerTemplate;
    document.querySelector('footer').innerHTML = footerTemplate;
})();
