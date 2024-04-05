let headerImg = document.querySelector('.header');
let navbar = document.querySelector('.navbar.navbar-expand-sm.ff');
setTimeout(() => {
        headerImg.classList.add('act-img');
}, 400)

window.onscroll = () => {
        if (scrollY > 300) {
                navbar.classList.add("bg-white", "pt-2", "pb-2", "sticky-top")
                navbar.classList.remove("d-none")
        }
        else {
                navbar.classList.remove("bg-white", "pt-2", "pb-2", "sticky-top")
                navbar.classList.add("d-none")
        }
}
// Team Member Function
let teamMember = document.querySelectorAll(".team-member");
let tmSummary = document.querySelector('.tm-summary');
let cnName = document.querySelector('.client-name h4');
let cnSpecialization = document.querySelector('.client-name p');
let tmDetails = document.querySelector('.tm-details');
let tmCard = document.querySelector('.tm-card');
teamMember.forEach((e) => {
        e.onclick = () => {
                if (e.classList.contains('active')) {
                        return "";
                }
                else {
                        teamMember.forEach((e) => {
                                e.classList.remove('active');
                        })
                        e.classList.add('active');
                        tmDetails.classList.add('active');
                        tmCard.classList.add('active');
                        tmSummary.textContent = e.children[0].getAttribute('data-details');
                        cnName.textContent = e.children[0].getAttribute('data-name');
                        cnSpecialization.textContent = e.children[0].getAttribute('data-speciale');
                        setTimeout(() => {
                                tmDetails.classList.remove('active');
                                tmCard.classList.remove('active');
                        }, 800)
                }
        }
});