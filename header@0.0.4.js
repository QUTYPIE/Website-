$(document).ready(function () {
    const el = document.querySelectorAll('img');
    const observer = lozad(el);
    observer.observe();

    $(".lazy").Lazy({
        onFinishedAll: function () {
            // called once all elements was handled
            console.log('lazily loaded something;')
        }
    });

    $('#prefuckingLOADER').fadeOut(500).remove()
});