document.querySelector("#user-cart").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/cart.html";
})

document.querySelector("header > svg").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/index.html";
})

document.querySelector("nav > ul:nth-child(1) > li:nth-child(1)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/furniture.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(2)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/rugs.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(3)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/decor.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(4)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/bed.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(5)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/homeimprov.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(6)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/kitchen.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(7)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/outdoor.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(8)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/jwelry.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(9)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/lighting.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(10)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/kids.html";
})
document.querySelector("nav > ul:nth-child(1) > li:nth-child(11)").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/more.html";
})
document.querySelector("nav > ul:nth-child(3) > li.crimson").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/restagcards.html";
})

document.querySelector("#user-account > p").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/login.html";
})
document.querySelector("#user-account > .user-icon").addEventListener("click", function () {
    window.location.href = "/Overstock-Clone/login.html";
})

var userName = localStorage.getItem("userName");
if (userName !== null) {
    document.querySelector("#tooltip > ul > li:nth-child(1) > h2").innerHTML = `Hi, ${userName}`;
    var logout = document.createElement("button");
    logout.innerText = "Log Out";
    logout.style.width = "fit-content"
    logout.style.margin = "0 auto 10px";
    logout.style.padding = "0 10px";
    logout.style.color = "white";
    logout.style.backgroundColor = "black";
    logout.addEventListener("click", logOut);
    document.querySelector("#tooltip").append(logout);
}

function logOut() {
    localStorage.removeItem("userName");
    var btn = document.querySelector("#tooltip > button");
    btn.remove();
    window.location.href = "/Overstock-Clone/index.html"

}

var search = document.querySelector(".search-icon");
search.addEventListener("click",searchIt);

function searchIt(){
    var searchInput = document.querySelector("#search > input").value;
    if(searchInput == "furniture"){
        window.location.href = "/Overstock-Clone/furniturecards.html";
    }
    else if(searchInput == "rugs"){
        window.location.href = "/Overstock-Clone/rugscards.html";
    }
    else if(searchInput == "lighting"){
        window.location.href = "/Overstock-Clone/lightingcards.html";
    }
    else if(searchInput == "bed" || searchInput == "bath"){
        window.location.href = "/Overstock-Clone/beddingcards.html";
    }
    else if(searchInput == "garden" || searchInput == "outdoor"){
        window.location.href = "/Overstock-Clone/gardencards.html";
    }
}