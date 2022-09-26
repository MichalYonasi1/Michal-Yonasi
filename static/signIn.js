function validateForm(){
    var email = document.forms["regform"]["email"].value;
    var password = document.forms["regform"]["password"].value;

    if (email==null ||email == ""){
        alert("Email cannot be blank")
        return false;
    }
    else if (password==null || password==""){
        alert("Password cannot be blank")
        return false;

    }

}

const input = document.querySelector("input"),
        emailIcon = document.querySelector(".emailIcon")
        input.addEventListener("keyup", () =>{
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if(input.value === ""){
                emailIcon.classList.replace("fa-octagon-check", "fa-envelope");
                return emailIcon.style.color = "#b4b4b4"

            }
        if(input.value.match(pattern)){
            emailIcon.classList.replace("fa-envelope", "fa-octagon-check");
            return emailIcon.style.color = "#4bb543"
        }
        emailIcon.classList.replace("fa-octagon-check", "fa-envelope");
        emailIcon.style.color = "#de0611"
    }
        )
