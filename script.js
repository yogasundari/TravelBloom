document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        {
            name: "Beach Paradise",
            description: "Relax on the golden sands and enjoy the crystal-clear waters.",
            images: ["images/beach1.jpg", "images/beach2.jpg"]
        },
        {
            name: "Temple Journey",
            description: "Explore the ancient temples and experience the spiritual essence.",
            images: ["images/temple1.jpg", "images/temple2.jpg"]
        }
    ];

    const destinationContainer = document.getElementById("destinations");

    destinations.forEach(destination => {
        const destinationDiv = document.createElement("div");
        destinationDiv.className = "destination";

        destinationDiv.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            ${destination.images.map(img => `<img src="${img}" alt="${destination.name}" width="100%">`).join('')}
        `;

        destinationContainer.appendChild(destinationDiv);
    });

    document.getElementById("contact-form").addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for contacting us!");
    });
});
