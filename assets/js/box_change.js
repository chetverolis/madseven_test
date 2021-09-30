function box_change_js() {
    const all_boxes = document.querySelectorAll('div.box'),
          body = document.querySelector('body'),
          wrapper = document.querySelector('div#wrapper');

    let body_width = body.offsetWidth,
        wrapper_width = wrapper.offsetWidth;
    
    // Меняем 5 и 6 коробку местами
    all_boxes[5].parentNode.insertBefore(all_boxes[5], all_boxes[4]);

    window.addEventListener('resize', function() {
        let body_width = body.offsetWidth,
            wrapper_width = wrapper.offsetWidth;
        if (body_width <= 1116) {
            // Меняем 5 и 6 коробку местами
            all_boxes[5].parentNode.insertBefore(all_boxes[4], all_boxes[5]);
        } else {
            // Меняем 5 и 6 коробку местами
            all_boxes[5].parentNode.insertBefore(all_boxes[5], all_boxes[4]);
        }
    })
}