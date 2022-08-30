//using selectors inside the element
const article = document.querySelectorAll(".question");

article.forEach((item) => {
    const btn = item.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click" ,() => {
        article.forEach((question) => {
            if(question !== item){
                question.classList.remove("show-text");
            }
        })
        item.classList.toggle("show-text");
    })
})

// traversing the dom
// const questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach((btn) => {
//     btn.addEventListener("click" , (e) => {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     })
// })
