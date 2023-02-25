// Accessing all the HTML elements in javascript from html file-
let button1=document.querySelector("#new_Password");
let newpassword=document.querySelector("#newpass");
let verify=document.querySelector("#verifyButton");
let logout=document.querySelector("#logout");

//Creating div element-
let message=document.createElement("div");

//accessing html element-
let changed=document.querySelector("#Change_Password")
changed.append(msg);

let data = JSON.parse(localStorage.getItem('data'));


//old password html accessing-
let old_password=document.querySelector("#Old_pass");

    //3. Same password function-
    function same()
    {  
        let password1=old_password.value;
        let count=0;
        data.forEach(element => {
       

       if(element!=null)
       {
       if(element.password==password1)
       {
           message.innerHTML="Please change the password!";
           message.style.color="green";
           count=1;
           
           let oldpassword=old_password.value;
           old_password.value="";
       }
    } 

     })

     if(count===0)
     {
         message.innerHTML="Password is not similar, Please check!";
         message.style.color="red";
     }
    }

    verify.addEventListener("click",same);

    //2. Changed Password function-
    function ChangedPass()
   {
    let newpass1=newpassword.value;
    let password1=opass;

    let div=document.createElement("div");
    changed.append(div);

    let count=0;
    data.forEach(element => {
   

    if(element!=null)
    {
     if(element.password==password1)
    {
     element.password=newpass1;

    div.innerHTML="Your Password successfully changed!";
    div.style.color="green";
    newpassword.value="";
   }
  } 
  })
   }
    button1.addEventListener("click",ChangedPass);

    //3. Logout function-
    function logout()
   {
    let count=0;
    delete data[data.length-1];
      
    console.log(data);  
   }

   logout.addEventListener("click",logout);



    // function same()
    // {
    // let password1=old_Password.value;
        
    // let count=0;
    // data1.forEach(element => 
    // {
    //   if(element!=null)
    //   {
    //    if(element.password==password1)
    //    {
    //     Message.innerHTML="Change your Password!";
    //     Message.style.color="green";
    //        count=1;
    //    }
    // } 
    //  })

    //  if(count===0)
    //  {
    //     Message.innerHTML="Please Check password! Doesn't match with old Password!";
    //     Message.style.color="Red";
    //  }
    // }

