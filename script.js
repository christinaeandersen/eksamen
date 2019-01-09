window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showHindbaer();
}

function showHindbaer() {
    console.log("show hindbaer");
    document.querySelector("#white").classList.remove("hide");
    document.querySelector("#hindbaer").classList.remove("hide");
    document.querySelector("#hindbaer").classList.add("pulse");
    document.querySelector("#hindbaer").addEventListener("click", hideHindbaer);

}

function hideHindbaer() {
    console.log("hideHindbaer");
    document.querySelector("#hindbaer").removeEventListener("click", hideHindbaer);
    document.querySelector("#hindbaer").classList.remove("pulse");
    document.querySelector("#hindbaer").classList.add("hide");
    document.querySelector("#white").classList.add("hide");

    showForside();

}

function showForside() {
    console.log("show forside");
    document.querySelector("#white").classList.add("hide");
    document.querySelector("#hindbaer").classList.add("hide");
    document.querySelector("#hindbaer").classList.add("fade");


}
