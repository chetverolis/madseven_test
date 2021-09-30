function box_size_js() {
    const all_boxes = document.querySelectorAll('div.box'),
          all_span_size = document.querySelectorAll('span.size');

    // Считаем размер коробки
    if (all_boxes) {
        function set_size() {
            for(let i = 0; i < all_boxes.length; i++) {
                // Получаем размер
                let box_width = all_boxes[i].offsetWidth,
                    box_height = all_boxes[i].offsetHeight;
                // Выставляем полученный размер
                all_span_size[i].innerHTML = `${box_width} x ${box_height}`;
            }
        }
        
        set_size();

        window.addEventListener('resize', function() {
            set_size();
        })
    }
}