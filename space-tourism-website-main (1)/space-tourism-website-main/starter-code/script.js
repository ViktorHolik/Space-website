// 1. Select the elements
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-lists');

// 2. Listen for the click event
hamburger.addEventListener('click', () => {
    // 3. Toggle the "active" class on the nav-lists
    navList.classList.toggle('active');
    
    // Optional: Log to console to check if it's working
    console.log("Menu toggled");
});

// Selecteer de Explore knop
const exploreBtn = document.querySelector('.explore-btn');

// Voeg de klik-functie toe
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        // Navigeer naar de destination pagina
        window.location.href = 'destination-moon.html';
    });
}

const planetData = {
  moon: {
    name: "Moon",
    image: "assets/destination/image-moon.png",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  mars: {
    name: "Mars",
    image: "assets/destination/image-mars.png",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  europa: {
    name: "Europa",
    image: "assets/destination/image-europa.png",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug hotel.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  titan: {
    name: "Titan",
    image: "assets/destination/image-titan.png",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
};

const tabItems = document.querySelectorAll('.tab-item');
const planetImg = document.getElementById('planet-img');
const planetName = document.getElementById('planet-name');
const planetDesc = document.getElementById('planet-desc');
const planetDist = document.getElementById('planet-dist');
const planetTravel = document.getElementById('planet-travel');

tabItems.forEach(tab => {
  tab.addEventListener('click', () => {
    // 1. Verwijder 'active' class van alle tabs en voeg toe aan de geklikte tab
    document.querySelector('.tab-item.active').classList.remove('active');
    tab.classList.add('active');

    // 2. Haal de data op basis van het 'data-name' attribuut
    const targetPlanet = tab.getAttribute('data-name');
    const info = planetData[targetPlanet];

    // 3. Update de DOM
    planetImg.src = info.image;
    planetImg.alt = info.name;
    planetName.innerText = info.name;
    planetDesc.innerText = info.description;
    planetDist.innerText = info.distance;
    planetTravel.innerText = info.travel;
  });
});

const crewData = [
    {
        name: "Douglas Hurley",
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: "assets/crew/image-douglas-hurley.png"
    },
    {
        name: "Mark Shuttleworth",
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: "assets/crew/image-mark-shuttleworth.png"
    },
    {
        name: "Victor Glover",
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18 Hornet and is a graduate of Test Pilot School.",
        image: "assets/crew/image-victor-glover.png"
    },
    {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Her family fled Iran in 1984. She was the first self-funded woman to fly to the International Space Station.",
        image: "assets/crew/image-anousheh-ansari.png"
    }
];

// 3. Selecteer de HTML elementen
const dots = document.querySelectorAll('.dot');
const crewRole = document.querySelector('.crew-role');
const crewName = document.querySelector('.crew-name');
const crewDesc = document.querySelector('.crew-desc');
const crewImg = document.querySelector('.crew-img');

// 4. De wissel-functie
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Verwijder 'active' class van alle dots en voeg toe aan geklikte dot
        document.querySelector('.dot.active').classList.remove('active');
        dot.classList.add('active');

        // Update de content met een kleine vertraging voor een soepele overgang (optioneel)
        updateCrewMember(index);
    });
});

function updateCrewMember(index) {
    const member = crewData[index];
    
    // Update de teksten en afbeelding
    crewRole.textContent = member.role;
    crewName.textContent = member.name;
    crewDesc.textContent = member.bio;
    crewImg.src = member.image;
    crewImg.alt = member.name;
}


const techData = [
  {
    name: "Launch vehicle",
    images: { portrait: "assets/technology/image-launch-vehicle-portrait.jpg", landscape: "assets/technology/image-launch-vehicle-landscape.jpg" },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond."
  },
  {
    name: "Spaceport",
    images: { portrait: "assets/technology/image-spaceport-portrait.jpg", landscape: "assets/technology/image-spaceport-landscape.jpg" },
    description: "A spaceport or cosmodrome is a site for launching or receiving spacecraft, by analogy to a seaport for ships or an airport for aircraft."
  },
  {
    name: "Space capsule",
    images: { portrait: "assets/technology/image-space-capsule-portrait.jpg", landscape: "assets/technology/image-space-capsule-landscape.jpg" },
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings."
  }
];

const techDots = document.querySelectorAll('.num-dot');
const techName = document.querySelector('.tech-name');
const techDesc = document.querySelector('.tech-desc');
const techImgPortrait = document.querySelector('source[media="(min-width: 1024px)"]');
const techImgLandscape = document.querySelector('.tech-img');

techDots.forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelector('.num-dot.active').classList.remove('active');
    dot.classList.add('active');
    
    const index = dot.dataset.index;
    const data = techData[index];

    techName.textContent = data.name;
    techDesc.textContent = data.description;
    techImgPortrait.srcset = data.images.portrait;
    techImgLandscape.src = data.images.landscape;
  });
});