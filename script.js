const signin = document.querySelector(".content.border");
const hidden = document.querySelector(".main-hidden");
const menubar = document.querySelector(".menu-bar");
const blackcont = document.querySelector(".blackcontainer"); 
const searchlocation = document.querySelector(".navbar-address"); 
const dropdown = document.querySelector(".deliverdropdown");

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
    
    });
   hidden.addEventListener('mouseout', () =>
    {
      hidden.style.display = "none";
   
    });

    // js for location 
   

    searchlocation.addEventListener("click", ()=>
    {
      blackcont.classList.add("black");
        dropdown.style.display = "flex";
        document.body.classList.add("scroll-black");

    });
    blackcont.addEventListener('click', ()=>
    {
      blackcont.classList.remove("black");
      dropdown.style.display = "none";
      document.body.classList.remove("scroll-black");

    })