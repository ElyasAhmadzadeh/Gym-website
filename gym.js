const navBarItem = document.querySelectorAll(".nav-item");
const breadcrumb_list = document.querySelector(".breadcrumb");


function navBarHeightAnimation() {
    const correntScroll = window.scrollY;
    const elementHeight = window.innerHeight;
    if (window.innerWidth > 992) {
        if (elementHeight - correntScroll <= 100) {
            navBarItem.forEach(
                item => {
                    item.classList.remove("py-lg-3");
                    item.classList.add("py-lg-1");
                }
            )
        }
        else {
            navBarItem.forEach(
                item => {
                    item.classList.remove("py-lg-1");
                    item.classList.add("py-lg-3");
                }
            )
        }
    }

}

function breadcrumbActivator(event) {
    event.preventDefault();
    const clickedEl = event.target;
    const container = clickedEl.closest(".breadcrumb");
    if (clickedEl.className.includes("text-dark")) {
        const wholeEls = container.querySelectorAll("a");
        wholeEls.forEach(
            element =>{
                element.classList.add("text-dark");
            }
        )
        clickedEl.classList.remove("text-dark"); 
    }

}


window.addEventListener("scroll", navBarHeightAnimation);
breadcrumb_list.addEventListener("click", breadcrumbActivator);