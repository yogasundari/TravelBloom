document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            name: "Ancient Temple",
            description: "Experience the rich history and spiritual essence of ancient temples.",
            images: ["images/temple1.jpg", "images/temple2.jpg"] // Only two images
        }
    ];

    const beaches = [
        {
            name: "Beach Paradise",
            description: "Relax on the golden sands and enjoy the crystal-clear waters.",
            images: ["images/beach1.jpg", "images/beach2.jpg"] // Only two images
        }
    ];

    const countries = [
        {
            name: "India",
            description: "Discover vibrant cultures and historic landmarks.",
            images: ["images/india1.jpg", "images/india2.jpg"] // Only two images
        }
    ];

    const templeContainer = document.getElementById("temples-container");
    const beachContainer = document.getElementById("beaches-container");
    const countryContainer = document.getElementById("countries-container");

    temples.forEach(temple => {
        const templeDiv = document.createElement("div");
        templeDiv.className = "recommendation";

        templeDiv.innerHTML = `
            <h3>${temple.name}</h3>
            <p>${temple.description}</p>
            ${temple.images.map(img => `<img src="${img}" alt="${temple.name}" width="100%">`).join('')}
        `;

        templeContainer.appendChild(templeDiv);
    });

    beaches.forEach(beach => {
        const beachDiv = document.createElement("div");
        beachDiv.className = "recommendation";

        beachDiv.innerHTML = `
            <h3>${beach.name}</h3>
            <p>${beach.description}</p>
            ${beach.images.map(img => `<img src="${img}" alt="${beach.name}" width="100%">`).join('')}
        `;

        beachContainer.appendChild(beachDiv);
    });

    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "recommendation";

        countryDiv.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.description}</p>
            ${country.images.map(img => `<img src="${img}" alt="${country.name}" width="100%">`).join('')}
        `;

        countryContainer.appendChild(countryDiv);
    });

    document.getElementById("contact-form").addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for contacting us!");
    });
});
