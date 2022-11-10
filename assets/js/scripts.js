function getElementHeight(el = null) {
    let elInfo = el.getBoundingClientRect();
    return elInfo.height;
}

function stickyHeader(show = false, header = null) {
    // Если передаем false = прячем шапку
    if (!show) {
        header.classList.remove("header--sticky");
    } else {
        // или показываем шапку
        header.classList.add("header--sticky");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    let header = document.querySelector(".header");
    const HEADER_TRIGGER = getElementHeight(header) + 150; // px от начала документа до появления шапки

    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > HEADER_TRIGGER) {
            stickyHeader(true, header);
        } else {
            stickyHeader(false, header);
        }
    });
});
