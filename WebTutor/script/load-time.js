(function () {
    let startTime = new Date().getTime();

    function load_time() {
        let element = document.getElementById('load-time');
        element.innerText = 'Время загрузки ' + (new Date().getTime() - startTime) / 1000 + ' секунд';
    }

    window.onload = function () {
        load_time();
    }
})();