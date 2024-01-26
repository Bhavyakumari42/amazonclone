const signin = document.querySelector(".content.border");
const hidden = document.querySelector(".main-hidden");
signin.addEventListener('mouseover', ()=>
{
  hidden.style.display = "grid";
}
    );
    signin.addEventListener('mouseout', ()=>
{
  hidden.style.display = "none";
}
    );