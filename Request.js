window.onload = function()
    {
        let Item = document.querySelector(".input-box");
        let list = document.querySelector(".line");
        let addItem = document.querySelector(".btn");
        addItem.addEventListener("click", ()=>{
            list.insertAdjacentHTML(
                `afterbegin`,
                `<li>
                   <i class="fas fa-trash deletelist"></i>
                   <h4>${Item.value}</h4>
                </li>`
            );
            Item.value = "";
            let deletelist = document.querySelectorAll(".deletelist");
            deletelist.forEach((del) =>{
                    del.addEventListener("click", ()=>{
                        del.parentElement.remove();
                    });
                });
        });
    };