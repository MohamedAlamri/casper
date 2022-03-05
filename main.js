let filterItems = document.querySelectorAll('.portfolio .shufle li');
let filterImgs = document.querySelectorAll('.portfolio .box img');

filterItems.forEach((li) => {
    li.addEventListener('click', removeAllActive )
    li.addEventListener('click', mangImgs )
});

function removeAllActive(){
    filterItems.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });

}

function mangImgs(){
    filterImgs.forEach((img) =>{
        img.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.img).forEach((el) => {
        el.style.display = 'block';
    });
}