const signin = document.querySelector(".content.border");
const hidden = document.querySelector(".main-hidden");
const menubar = document.querySelector(".menu-bar");

signin.addEventListener('mouseover', ()=>
{
  hidden.style.display = "grid";
}
    );
   hidden.addEventListener('mouseover', ()=>
{
  hidden.style.display = "grid";
}
    );
    signin.addEventListener('mouseout', () =>
    {
      hidden.style.display = "none";
    })
   hidden.addEventListener('mouseout', () =>
    {
      hidden.style.display = "none";
    })