   // makeup dropdown func 
   function makeup_d(){
    let cont=document.getElementById("makeup_dropdown");
    cont.style.display="block";
  }
  function makeup_dl(){
    let cont=document.getElementById("makeup_dropdown");
    cont.style.display="none";
  }

//   skincare dropdown func 
  function skincare_d(){
    let cont=document.getElementById("skincare_dropdown");
    cont.style.display="block";
    cont.style.margin="auto";
  }
  function skincare_dl(){
    let cont=document.getElementById("skincare_dropdown");
    cont.style.display="none";
  }

//   fragrance dropdownfunc 
function fragrance_d(){
    let cont=document.getElementById("fragrance_dropdown");
    cont.style.display="block";
    cont.style.margin="auto";
  }
  function fragrance_dl(){
    let cont=document.getElementById("fragrance_dropdown");
    cont.style.display="none";
  }


// haircare dropdown func 
function haircare_d(){
    let cont=document.getElementById("haircare_dropdown");
    cont.style.display="block";
    cont.style.margin="auto";
  }
  function haircare_dl(){
    let cont=document.getElementById("haircare_dropdown");
    cont.style.display="none";
  }

// brushes dropdown func 
function brushes_d(){
    let cont=document.getElementById("brushes_dropdown");
    cont.style.display="block";
    cont.style.margin="auto";
  }
  function brushes_dl(){
    let cont=document.getElementById("brushes_dropdown");
    cont.style.display="none";
  }

// login form popup 
  let openForm=()=>{
        let loginform=document.getElementById("login-form");
        loginform.style.display="block";

    }

    function closeForm (){
        let loginform=document.getElementById("login-form")
        loginform.style.display="none";
    }


    let login_submit=()=>{
      let loginid=document.getElementById("login_input").value;

      let data=JSON.parse(localStorage.getItem("signupData")) || [];
     

      if(loginid === data.email || loginid === data.mobile){
          localStorage.setItem("login_info",JSON.stringify(loginid));

          alert("Login Sucessfull");
          closeForm();
          window.location.href="../home/index.html";
      }
      else{
          closeForm();
          openSignup();
      }
    
  }


// signup form popup 
    let openSignup=()=>{
        let signupform=document.getElementById("signup-form");
        signupform.style.display="block";

    }
    function closeSignup(){
        let signupform=document.getElementById("signup-form");
        signupform.style.display="none";

    }
    

  function func(){
    // let userdetail= JSON.parse(localStorage.getItem("signupData")) || [];
    let userSignup={
        name: document.getElementById("user_name").value,
        email: document.getElementById("user_email").value,
        password: document.getElementById("user_password").value,
        mobile: document.getElementById("user_number").value,
    }

    console.log(userSignup);
   
    // userdetail.push(userSignup);
    localStorage.setItem("signupData",JSON.stringify(userSignup));
    let userName=document.getElementById("login");
    userName.innerText=userSignup.name;
    userName.style.fontWeight="600";
    closeSignup();
    // window.location.reload();

  }
//   func()

  function backtologin(){
    window.location.href="index.html";
    openForm();
  }



  
    let mca=JSON.parse(localStorage.getItem("signupData")) || [];
   console.log(mca.name)
    let naam=document.querySelector(".fgh");    
      naam.innerHTML=mca.name||"Login";
