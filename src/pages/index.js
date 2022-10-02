import './index.scss';

/*Стол поднимается*/
document.getElementById('button_up').onclick = function () {
    document.getElementById('first__image_table').classList.toggle('first__image_up');
}

/*Стол опускается*/
document.getElementById('button_down').onclick = function () {
    document.getElementById('first__image_table').classList.toggle('first__image_down');
}