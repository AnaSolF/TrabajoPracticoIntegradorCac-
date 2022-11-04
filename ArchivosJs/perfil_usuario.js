function change_Tab(id) {
    var sel = document.querySelector('#' + id);
    bootstrap.Tab.getOrCreateInstance(sel).show();

    Array.from(document.querySelectorAll('.menu_usuario li')).forEach(function(el) { 
        el.classList.remove('active');
    });

    const el = document.querySelector('#li-' + id);
    el.classList.add("active");
    
}

