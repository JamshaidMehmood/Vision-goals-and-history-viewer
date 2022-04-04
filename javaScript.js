
let about = document.querySelector(".about");
let buttons = document.querySelectorAll(".tab-btn");
let content = document.querySelectorAll(".content");

about.addEventListener("click", function (event) {

    //  console.log(event.target.dataset.id);
    let id_exsist = event.target.dataset.id;
    if (id_exsist)   //checking if id exsist
    {
        buttons.forEach(function (btn) {
            btn.classList.remove("active");
            event.target.classList.add("active");

        });
        content.forEach(function (chi_artic) {
            chi_artic.classList.remove("active");
        });
    }
    let current_target = document.getElementById(id_exsist);
    current_target.classList.add("active");

});

