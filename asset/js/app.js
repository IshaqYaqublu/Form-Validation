
// $('.section').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });
    let user = document.querySelector("#user");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    let btn = document.querySelector(".btn");


    btn.addEventListener("click" ,function(e){
        let canavar =user.value.charAt(0).toUpperCase() + user.value.slice(1);
        if(user.value.length < 5){
            user.style.border = "2px solid red"
            user.focus()
            document.getElementById('name_error').innerHTML = "Istifadeci adiniz 5 simvoldan cox olmalidir" 
        }
  
        if(password.value.length < 6){
            password.style.border = "2px solid red"
            password.focus()
            alert("Password sifreniz 6 simvoldan cox olmalidir")
            document.getElementById('name_error1').innerHTML = "passwword 6 simvoldan cox olmalidir" 

        }
        e.preventDefault()
    })

    // let first = document.getElementById("first");

    // //drag / dragstart / dragend / dragleave / dragover/ drop

    // first.addEventListener('dragstart' , function(){
    //     console.log('drag started');
    // }) 

    // first.addEventListener('drag', function(){
    //     console.log("Sir hemise sirdi");
    // })

    // first.addEventListener('dragend', function(){
    //     console.log("Drag end");
    // })


    // let content = document.getElementById("content");
    // let icon = document.querySelector("#second")

    // content.addEventListener('dragover', function(){
    //     content.style.border ="5px solid blue"
    //     icon.style.opacity = "1"
    // })
    // content.addEventListener('dragleave', function(){
    //     content.style.border ="5px solid red"
    //     icon.style.opacity = "0"

    // })

