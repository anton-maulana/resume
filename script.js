
    var root = document.documentElement, btn = document.getElementById('theme');
    try { var s = localStorage.getItem('theme'); if (s) root.setAttribute('data-theme', s) } catch (e) { }
    btn.addEventListener('click', function () {
        var t = root.getAttribute('data-theme');
        var light = t === 'light' || (!t && matchMedia('(prefers-color-scheme: light)').matches);
        var next = light ? 'dark' : 'light'; root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next) } catch (e) { }
    });