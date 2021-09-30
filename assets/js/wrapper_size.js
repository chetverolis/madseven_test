function wrapper_size_js() {
    const wrapper_size = document.querySelector('span#wrapper_size'),
          wrapper = document.querySelector('div#wrapper');

    let wrapper_width = wrapper.offsetWidth;

    function set_size() {
        let wrapper_width = wrapper.offsetWidth;
        wrapper_size.innerHTML = `${wrapper_width}px`;
    }

    set_size();

    window.addEventListener('resize', function() {
        set_size();
    })
}