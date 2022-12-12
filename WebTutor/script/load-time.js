(function () {
    window.onload = function load_time() {
        let element = document.getElementById('load-time');
        element.innerText = 'Время загрузки ' + (window.performance.timing.domContentLoadedEventEnd -
            window.performance.timing.navigationStart) / 1000 + ' секунд';
    }
})();