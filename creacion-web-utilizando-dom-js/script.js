// change mode light to dark
function changeBackground(mode) {
    const navbar = document.getElementById('navbar');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');


    if (mode === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        navbar.classList.remove('navbar-light-mode');
        navbar.classList.add('navbar-dark');

        dropdownMenus.forEach(menu => {
            menu.classList.add('dropdown-menu-dark');
        });
    } else if (mode === 'light') {
        
        document.body.classList.add('light-mode');

        navbar.classList.add('navbar-light-mode');
        navbar.classList.remove('navbar-dark');

        dropdownMenus.forEach(menu => {
            menu.classList.remove('dropdown-menu-dark');
        });
    }

}

//carousel

let customCurrentIndex = 0;

// Function carousel
function moveCustomCarousel(direction) {
    const customCarouselInner = document.getElementById('customCarouselInner');
    const customItems = document.querySelectorAll('.custom-carousel-item');
    const totalCustomItems = customItems.length;

    customCurrentIndex = (customCurrentIndex + direction + totalCustomItems) % totalCustomItems;

    customCarouselInner.style.transform = `translateX(-${customCurrentIndex * 100}%)`;
}

//autoplay
function autoplayCarousel() {
    moveCustomCarousel(1);
}

const autoplayInterval = setInterval(autoplayCarousel, 4000);


//about to expand
document.addEventListener('DOMContentLoaded', function () {
    const aboutText = document.getElementById('aboutText');
    const toggleButton = document.getElementById('toggleButton');


    aboutText.classList.add('collapsed');


    toggleButton.addEventListener('click', function () {
        aboutText.classList.toggle('collapsed');
        toggleButton.textContent = aboutText.classList.contains('collapsed') ? 'Read More' : 'Read Less';
    });
});

//projects
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');


    filterProjects('all');


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    function filterProjects(category) {
        projectItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }
});


//form

let currentCustomStep = 1;

//Next step
function nextCustomStep() {
    document.getElementById(`step-${currentCustomStep}`).classList.remove('active');
    currentCustomStep++;
    document.getElementById(`step-${currentCustomStep}`).classList.add('active');
}

//previous sétp

function previousCustomStep() {
    document.getElementById(`step-${currentCustomStep}`).classList.remove('active');
    currentCustomStep--;
    document.getElementById(`step-${currentCustomStep}`).classList.add('active');
}
//function to show or not more option to select one page or multipage
function toggleCustomSiteOptions() {
    const siteType = document.getElementById('siteType').value;
    document.getElementById('onePageOptions').style.display = siteType === 'unaPagina' ? 'block' : 'none';
    document.getElementById('multiPageOptions').style.display = siteType === 'multiPagina' ? 'block' : 'none';
}

//This is the message after to send
function submitCustomForm() {
    const name = document.getElementById('clientName').value;
    alert(`${name}, hemos recibido tu cotización, un asesor se comunicará lo más pronto posible.`);
    resetCustomForm();
}

function resetCustomForm() {
    document.getElementById('quoteForm').reset();
    currentCustomStep = 1;
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step-1').classList.add('active');
}

// button up

window.onscroll = function () {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};