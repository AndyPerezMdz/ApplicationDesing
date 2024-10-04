document.addEventListener("DOMContentLoaded", function(){

    const tabs = document.querySelectorAll(".tab-item");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {

            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));


            this.classList.add("active");
            document.getElementById(this.getAttribute("data-tab")).classList.add("active");

        });
    });
});

