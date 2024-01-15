function showNav(){
    //nhờ JS tìm cái nav bar hiện tại 
    const navElement = document.getElementById("nav");
    // add class "active"
    navElement.classList.add("active");
}
function hideNav(){
    //nhờ JS tìm cái nav bar hiện tại 
    const navElement = document.getElementById("nav");
    // add class "active"
    navElement.classList.remove("active");
}