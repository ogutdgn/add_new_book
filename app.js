const ul = document.querySelector(".book_list");
const title_text = document.querySelector("#title");
const author_text = document.querySelector("#author");
const isbn_text = document.querySelector("#isbn");
const submit = document.querySelector(".submit_button");
const remove_btn = document.querySelector(".btn");


const allfunc=(title,author,isbn)=>{
    return `
    <div class="book">
                    <li>${title}</li>
                    <li>${author}</li>
                    <li>${isbn}</li>
                    <li><button class="btn">&#128473;</button></li>
                </div>
                <hr>
                  `
}


submit.addEventListener("click", () => {
    if (title_text.value != "" && author_text.value != "" && isbn_text.value != ""){
        if(confirm("Do you want to add this book?")) {
            ul.innerHTML += allfunc(title_text.value, author_text.value, isbn_text.value);
        }
        title_text.value = "";
        author_text.value = "";
        isbn_text.value = "";
        
    }else{
        alert("Fields can not be empty");
    }
});
ul.addEventListener("click",e=>{
    if(confirm("Do you want to remove this book?")){
        if(e.target.classList.contains("btn")){
            e.target.parentElement.parentElement.remove();
        }
    };
});
