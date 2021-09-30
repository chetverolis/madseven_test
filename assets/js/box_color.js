function box_color_js() {
    const all_boxes = document.querySelectorAll('div.box');

    let button_check = 0;

    // let timer,
    //     i = 0,
    //     j = 0;

    // function showMustGoOn() {
    //     // Ставим цвета
    //     if (j == 0) {
    //         all_boxes[i].style.backgroundColor = 'red';
    //     } else if (j == 1) {
    //         all_boxes[i].style.backgroundColor = 'blue';
    //     } else {
    //         all_boxes[i].style.backgroundColor = 'green';
    //     }
    //     // Проверки
    //     if (j == 3) {
    //         j = 0;
    //         clearTimeout(timer);
    //         showMustGoOn();
    //     }
    //     if ((i + 1) == all_boxes.length) {
    //         j++;
    //         i = 0;
    //         clearTimeout(timer);
    //         showMustGoOn();
    //     }
    //     // Главный таймер
    //     timer = setTimeout(function() {
    //         i++;
    //         clearTimeout(timer);
    //         showMustGoOn();
    //     }, 500);
    // }

    // showMustGoOn();

    button.addEventListener('click', function() {
        if (button_check == 0) {
            button_check = 1;
            button.innerHTML = 'Закончить'
            for(let i = 0; i < all_boxes.length; i++) {
                all_boxes[i].classList.add('animate');
            }
        } else {
            button_check = 0;
            button.innerHTML = 'Начать шоу!'
            for(let i = 0; i < all_boxes.length; i++) {
                all_boxes[i].classList.remove('animate');
            }
        }
    })
}