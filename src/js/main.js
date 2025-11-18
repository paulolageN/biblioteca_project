// Rolagem suave horizontal nos carrosséis
const bookLists = document.querySelectorAll(".book-list");
bookLists.forEach(list => {
    list.addEventListener("wheel", (e) => {
        e.preventDefault();
        list.scrollLeft += e.deltaY;
    });
});
