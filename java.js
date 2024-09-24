var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenuu = document.getElementById("sidemenu");
function openmenu()
{
    sidemenuu.style.right = "0";
}

function closemenu()
{
    sidemenuu.style.right = "-200px";
}


// Google sheet


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7nUok7sh5hwky0f7HR137Zom9vyej6lm0hA6zFPLOgpfIw7H7zsTLd0WBGLsldcBM/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        }, 5000)
        form.rest()
      } )
      .catch(error => console.error('Error!', error.message))
  })