function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-320px";
    document.getElementById("overlay").style.display = "none";
}

// Dark Mode

const darkBtn = document.querySelector(".dark-btn");

if (darkBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkBtn.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        darkBtn.innerHTML = '<i data-lucide="moon"></i>';
    }

    lucide.createIcons();

    darkBtn.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            darkBtn.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            darkBtn.innerHTML = '<i data-lucide="moon"></i>';
        }

        lucide.createIcons();
    };

}




const searchBook = document.getElementById("searchBook");

if(searchBook){

searchBook.addEventListener("keyup", function(){

const value = this.value.toLowerCase();

const books = document.querySelectorAll(".urdu-box");

books.forEach(book=>{

const text = book.innerText.toLowerCase();

if(text.includes(value)){
    book.style.display = "block";
}else{
    book.style.display = "none";
}

});

});

}




function toggleStory(header){

    const content = header.nextElementSibling;
    const icon = header.querySelector("span");

    content.classList.toggle("active");

    if(content.classList.contains("active")){
        icon.innerHTML = "−";
    }else{
        icon.innerHTML = "+";
    }

}


function toggleDua(header){

    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    if(content.style.display === "block"){
        content.style.display = "none";

        if(icon){
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }

    }else{

        content.style.display = "block";

        if(icon){
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }

    }

}