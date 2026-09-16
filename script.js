const destinations = [
    // EUROPE
    {continent:"Europe",country:"France",city:"Paris",emoji:"🇫🇷",flight:120,hotel:90,food:35,activities:25,types:["city","culture","food"]},
    {continent:"Europe",country:"France",city:"Nice",emoji:"🇫🇷",flight:140,hotel:100,food:35,activities:25,types:["sun","city","food"]},
    {continent:"Europe",country:"Italie",city:"Rome",emoji:"🇮🇹",flight:150,hotel:75,food:30,activities:20,types:["city","culture","food"]},
    {continent:"Europe",country:"Italie",city:"Naples",emoji:"🇮🇹",flight:170,hotel:60,food:30,activities:20,types:["sun","city","food"]},
    {continent:"Europe",country:"Espagne",city:"Barcelone",emoji:"🇪🇸",flight:130,hotel:75,food:30,activities:20,types:["sun","city","food"]},
    {continent:"Europe",country:"Espagne",city:"Madrid",emoji:"🇪🇸",flight:120,hotel:65,food:30,activities:20,types:["city","culture","food"]},
    {continent:"Europe",country:"Portugal",city:"Lisbonne",emoji:"🇵🇹",flight:180,hotel:70,food:25,activities:20,types:["sun","city","food"]},
    {continent:"Europe",country:"Portugal",city:"Porto",emoji:"🇵🇹",flight:160,hotel:55,food:25,activities:20,types:["city","food"]},
    {continent:"Europe",country:"Grèce",city:"Athènes",emoji:"🇬🇷",flight:200,hotel:65,food:30,activities:20,types:["sun","city","culture"]},
    {continent:"Europe",country:"Grèce",city:"Santorin",emoji:"🇬🇷",flight:230,hotel:110,food:35,activities:30,types:["sun","nature"]},
    {continent:"Europe",country:"Royaume-Uni",city:"Londres",emoji:"🇬🇧",flight:150,hotel:90,food:40,activities:30,types:["city","culture","food"]},
    {continent:"Europe",country:"Hongrie",city:"Budapest",emoji:"🇭🇺",flight:120,hotel:50,food:25,activities:15,types:["city","culture","food"]},
    {continent:"Europe",country:"Croatie",city:"Split",emoji:"🇭🇷",flight:220,hotel:70,food:30,activities:25,types:["sun","nature"]},

    // ASIE
    {continent:"Asia",country:"Japon",city:"Tokyo",emoji:"🇯🇵",flight:700,hotel:80,food:30,activities:35,types:["city","culture","food"]},
    {continent:"Asia",country:"Japon",city:"Kyoto",emoji:"🇯🇵",flight:700,hotel:75,food:30,activities:30,types:["culture","nature","food"]},
    {continent:"Asia",country:"Thaïlande",city:"Bangkok",emoji:"🇹🇭",flight:650,hotel:40,food:15,activities:20,types:["city","food","culture"]},
    {continent:"Asia",country:"Thaïlande",city:"Phuket",emoji:"🇹🇭",flight:680,hotel:45,food:15,activities:25,types:["sun","nature"]},
    {continent:"Asia",country:"Indonésie",city:"Bali",emoji:"🇮🇩",flight:750,hotel:40,food:15,activities:20,types:["sun","nature"]},
    {continent:"Asia",country:"Émirats arabes unis",city:"Dubaï",emoji:"🇦🇪",flight:450,hotel:110,food:35,activities:40,types:["sun","city"]},

    // AFRIQUE
    {continent:"Africa",country:"Maroc",city:"Marrakech",emoji:"🇲🇦",flight:180,hotel:45,food:20,activities:20,types:["sun","city","culture","food"]},
    {continent:"Africa",country:"Égypte",city:"Le Caire",emoji:"🇪🇬",flight:300,hotel:40,food:15,activities:20,types:["culture","city"]},
    {continent:"Africa",country:"Afrique du Sud",city:"Le Cap",emoji:"🇿🇦",flight:750,hotel:60,food:25,activities:30,types:["nature","sun","city"]},

    // AMÉRIQUE
    {continent:"America",country:"États-Unis",city:"New York",emoji:"🇺🇸",flight:500,hotel:140,food:50,activities:50,types:["city","food"]},
    {continent:"America",country:"États-Unis",city:"Miami",emoji:"🇺🇸",flight:550,hotel:120,food:40,activities:35,types:["sun","city"]},
    {continent:"America",country:"Canada",city:"Montréal",emoji:"🇨🇦",flight:450,hotel:80,food:30,activities:25,types:["city","nature","food"]},
    {continent:"America",country:"Mexique",city:"Cancún",emoji:"🇲🇽",flight:550,hotel:70,food:25,activities:30,types:["sun","nature"]},
    {continent:"America",country:"Brésil",city:"Rio de Janeiro",emoji:"🇧🇷",flight:650,hotel:55,food:20,activities:25,types:["sun","city","nature"]},

    // OCÉANIE
    {continent:"Oceania",country:"Australie",city:"Sydney",emoji:"🇦🇺",flight:900,hotel:90,food:35,activities:35,types:["sun","city","nature"]},
    {continent:"Oceania",country:"Nouvelle-Zélande",city:"Auckland",emoji:"🇳🇿",flight:950,hotel:80,food:30,activities:35,types:["nature","city"]}
];

const continentInput = document.getElementById("continent");
const countryInput = document.getElementById("country");
const budgetInput = document.getElementById("budget");
const travelersInput = document.getElementById("travelers");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const styleInput = document.getElementById("style");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");
const resultsInfo = document.getElementById("resultsInfo");

function updateCountries() {
    const continent = continentInput.value;

    countryInput.innerHTML = '<option value="all">Tous les pays</option>';

    const countries = [...new Set(
        destinations
            .filter(d => continent === "all" || d.continent === continent)
            .map(d => d.country)
    )];

    countries.sort();

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countryInput.appendChild(option);
    });
}

function calculateDays(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    return Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
    );
}

function calculatePrice(destination, days, travelers) {
    const flight = destination.flight * travelers;
    const rooms = Math.ceil(travelers / 2);
    const hotel = destination.hotel * days * rooms;
    const food = destination.food * days * travelers;
    const activities = destination.activities * days * travelers;

    return {
        flight,
        hotel,
        food,
        activities,
        total: flight + hotel + food + activities
    };
}

function searchTrips() {
    const budget = Number(budgetInput.value);
    const travelers = Number(travelersInput.value);
    const start = startInput.value;
    const end = endInput.value;
    const continent = continentInput.value;
    const country = countryInput.value;
    const style = styleInput.value;

    if (!budget || budget <= 0) {
        alert("Entre un budget valide.");
        return;
    }

    if (!travelers || travelers <= 0) {
        alert("Indique le nombre de voyageurs.");
        return;
    }

    if (!start || !end) {
        alert("Choisis tes dates de voyage.");
        return;
    }

    const days = calculateDays(start, end);

    if (days <= 0) {
        alert("La date de retour doit être après la date de départ.");
        return;
    }

    const results = destinations.filter(destination => {

        if (continent !== "all" && destination.continent !== continent) {
            return false;
        }

        if (country !== "all" && destination.country !== country) {
            return false;
        }

        if (style !== "all" && !destination.types.includes(style)) {
            return false;
        }

        const price = calculatePrice(destination, days, travelers);

        return price.total <= budget;
    });

    results.forEach(destination => {
        destination.price = calculatePrice(
            destination,
            days,
            travelers
        );

        destination.match = 90;
    });

    results.sort((a, b) => a.price.total - b.price.total);

    displayResults(results, days, travelers);
}

function displayResults(results, days, travelers) {

    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsInfo.textContent = "Aucune destination trouvée.";

        resultsContainer.innerHTML = `
            <div class="empty-results">
                <div class="empty-icon">😕</div>
                <h3>Aucun voyage trouvé</h3>
                <p>Essaie d'augmenter ton budget ou de changer tes critères.</p>
            </div>
        `;

        return;
    }

    resultsInfo.textContent =
        `${results.length} destination(s) trouvée(s) pour ${travelers} voyageur(s) et ${days} jour(s).`;

    results.forEach(destination => {

        const price = destination.price;

        const card = document.createElement("div");

        card.className = "destination-card";

        card.innerHTML = `
            <div class="destination-image">
                ${destination.emoji}
            </div>

            <div class="destination-content">

                <div class="destination-title">
                    <h3>${destination.city}</h3>
                    <span>${destination.match}%</span>
                </div>

                <div class="destination-country">
                    ${destination.country}
                </div>

                <div class="destination-price">
                    ${price.total.toLocaleString("fr-FR")} €
                    <small>/ voyage</small>
                </div>

                <div class="destination-details">

                    <div class="detail">
                        ✈️ Vol<br>
                        ${price.flight.toLocaleString("fr-FR")} €
                    </div>

                    <div class="detail">
                        🏨 Hôtel<br>
                        ${price.hotel.toLocaleString("fr-FR")} €
                    </div>

                    <div class="detail">
                        🍝 Repas<br>
                        ${price.food.toLocaleString("fr-FR")} €
                    </div>

                    <div class="detail">
                        🎟️ Activités<br>
                        ${price.activities.toLocaleString("fr-FR")} €
                    </div>

                </div>

            </div>
        `;

        resultsContainer.appendChild(card);
    });
}

continentInput.addEventListener("change", updateCountries);

searchButton.addEventListener("click", searchTrips);

updateCountries();
