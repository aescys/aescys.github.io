//CDude content display feature
document.querySelectorAll('.comic_version_tab').forEach(comic => {
    comic.addEventListener('click', loadComic)
    comic.addEventListener('mouseover')
});

function loadComic(event) {
    let pdfLocation = "";
    let window = document.getElementById("comic_display_area");
    let comicSelected = event.currentTarget;
    if (comicSelected.id == "ComicalDudeMk1") {
        pdfLocation = "content/cdude/ComicalDudeMk1.pdf";
        window.innerHTML = `
            <iframe src="${pdfUrl}" width="100%" height="100%" style="border: none;"></iframe>
        `;
    }
}