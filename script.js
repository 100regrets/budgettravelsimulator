const destinations = [

    // EUROPE
    {
        continent: "Europe",
        country: "France",
        city: "Paris",
        emoji: "🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        flight: 120,
        hotel: 90,
        food: 35,
        activities: 25,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Europe",
        country: "France",
        city: "Nice",
        emoji: "🇫🇷",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=80",
        flight: 140,
        hotel: 100,
        food: 35,
        activities: 25,
        types: ["sun", "city", "food"]
    },

    {
        continent: "Europe",
        country: "Italie",
        city: "Rome",
        emoji: "🇮🇹",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80",
        flight: 150,
        hotel: 75,
        food: 30,
        activities: 20,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Europe",
        country: "Italie",
        city: "Naples",
        emoji: "🇮🇹",
        image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=900&q=80",
        flight: 170,
        hotel: 60,
        food: 30,
        activities: 20,
        types: ["sun", "city", "food"]
    },

    {
        continent: "Europe",
        country: "Espagne",
        city: "Barcelone",
        emoji: "🇪🇸",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
        flight: 130,
        hotel: 75,
        food: 30,
        activities: 20,
        types: ["sun", "city", "food"]
    },

    {
        continent: "Europe",
        country: "Espagne",
        city: "Madrid",
        emoji: "🇪🇸",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
        flight: 120,
        hotel: 65,
        food: 30,
        activities: 20,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Europe",
        country: "Portugal",
        city: "Lisbonne",
        emoji: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
        flight: 180,
        hotel: 70,
        food: 25,
        activities: 20,
        types: ["sun", "city", "food"]
    },

    {
        continent: "Europe",
        country: "Portugal",
        city: "Porto",
        emoji: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
        flight: 160,
        hotel: 55,
        food: 25,
        activities: 20,
        types: ["city", "food"]
    },

    {
        continent: "Europe",
        country: "Grèce",
        city: "Athènes",
        emoji: "🇬🇷",
        image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=80",
        flight: 200,
        hotel: 65,
        food: 30,
        activities: 20,
        types: ["sun", "city", "culture"]
    },

    {
        continent: "Europe",
        country: "Grèce",
        city: "Santorin",
        emoji: "🇬🇷",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
        flight: 230,
        hotel: 110,
        food: 35,
        activities: 30,
        types: ["sun", "nature"]
    },

    {
        continent: "Europe",
        country: "Royaume-Uni",
        city: "Londres",
        emoji: "🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
        flight: 150,
        hotel: 90,
        food: 40,
        activities: 30,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Europe",
        country: "Hongrie",
        city: "Budapest",
        emoji: "🇭🇺",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=900&q=80",
        flight: 120,
        hotel: 50,
        food: 25,
        activities: 15,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Europe",
        country: "Croatie",
        city: "Split",
        emoji: "🇭🇷",
        image: "https://images.unsplash.com/photo-1555990538-1e5c6c0c9a6f?auto=format&fit=crop&w=900&q=80",
        flight: 220,
        hotel: 70,
        food: 30,
        activities: 25,
        types: ["sun", "nature"]
    },


    // ASIE
    {
        continent: "Asia",
        country: "Japon",
        city: "Tokyo",
        emoji: "🇯🇵",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
        flight: 700,
        hotel: 80,
        food: 30,
        activities: 35,
        types: ["city", "culture", "food"]
    },

    {
        continent: "Asia",
        country: "Japon",
        city: "Kyoto",
        emoji: "🇯🇵",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
        flight: 700,
        hotel: 75,
        food: 30,
        activities: 30,
        types: ["culture", "nature", "food"]
    },

    {
        continent: "Asia",
        country: "Thaïlande",
        city: "Bangkok",
        emoji: "🇹🇭",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
        flight: 650,
        hotel: 40,
        food: 15,
        activities: 20,
        types: ["city", "food", "culture"]
    },

    {
        continent: "Asia",
        country: "Thaïlande",
        city: "Phuket",
        emoji: "🇹🇭",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80",
        flight: 680,
        hotel: 45,
        food: 15,
        activities: 25,
        types: ["sun", "nature"]
    },

    {
        continent: "Asia",
        country: "Indonésie",
        city: "Bali",
        emoji: "🇮🇩",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        flight: 750,
        hotel: 40,
        food: 15,
        activities: 20,
        types: ["sun", "nature"]
    },

    {
        continent: "Asia",
        country: "Émirats arabes unis",
        city: "Dubaï",
        emoji: "🇦🇪",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        flight: 450,
        hotel: 110,
        food: 35,
        activities: 40,
        types: ["sun", "city"]
    },


    // AFRIQUE
    {
        continent: "Africa",
        country: "Maroc",
        city: "Marrakech",
        emoji: "🇲🇦",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        flight: 180,
        hotel: 45,
        food: 20,
        activities: 20,
        types: ["sun", "city", "culture", "food"]
    },

    {
        continent: "Africa",
        country: "Égypte",
        city: "Le Caire",
        emoji: "🇪🇬",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80",
        flight: 300,
        hotel: 40,
        food: 15,
        activities: 20,
        types: ["culture", "city"]
    },

    {
        continent: "Africa",
        country: "Afrique du Sud",
        city: "Le Cap",
        emoji: "🇿🇦",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
        flight: 750,
        hotel: 60,
        food: 25,
        activities: 30,
        types: ["nature", "sun", "city"]
    },


    // AMÉRIQUE
    {
        continent: "America",
        country: "États-Unis",
        city: "New York",
        emoji: "🇺🇸",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=80",
        flight: 500,
        hotel: 140,
        food: 50,
        activities: 50,
        types: ["city", "food"]
    },

    {
        continent: "America",
        country: "États-Unis",
        city: "Miami",
        emoji: "🇺🇸",
        image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=900&q=80",
        flight: 550,
        hotel: 120,
        food: 40,
        activities: 35,
        types: ["sun", "city"]
    },

    {
        continent: "America",
        country: "Canada",
        city: "Montréal",
        emoji: "🇨🇦",
        image: "https://images.unsplash.com/photo-1519178614-68673b201f36?auto=format&fit=crop&w=900&q=80",
        flight: 450,
        hotel: 80,
        food: 30,
        activities: 25,
        types: ["city", "nature", "food"]
    },

    {
        continent: "America",
        country: "Mexique",
        city: "Cancún",
        emoji: "🇲🇽",
        image: "https://images.unsplash.com/photo-1552074284-5e88ef1ba2d7?auto=format&fit=crop&w=900&q=80",
        flight: 550,
        hotel: 70,
        food: 25,
        activities: 30,
        types: ["sun", "nature"]
    },

    {
        continent: "America",
        country: "Brésil",
        city: "Rio de Janeiro",
        emoji: "🇧🇷",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80",
        flight: 650,
        hotel: 55,
        food: 20,
        activities: 25,
        types: ["sun", "city", "nature"]
    },


    // OCÉANIE
    {
        continent: "Oceania",
        country: "Australie",
        city: "Sydney",
        emoji: "🇦🇺",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d6?auto=format&fit=crop&w=900&q=80",
        flight: 900,
        hotel: 90,
        food: 35,
        activities: 35,
        types: ["sun", "city", "nature"]
    },

    {
        continent: "Oceania",
        country: "Nouvelle-Zélande",
        city: "Auckland",
        emoji: "🇳🇿",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=80",
        flight: 950,
        hotel: 80,
        food: 30,
        activities: 35,
        types: ["nature", "city"]
    }
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


/* =========================
   PAYS
========================= */

function updateCountries() {

    const continent = continentInput.value;

    countryInput.innerHTML =
        '<option value="all">Tous les pays</option>';

    const countries = [
        ...new Set(
            destinations
                .filter(destination =>
                    continent === "all" ||
                    destination.continent === continent
                )
                .map(destination => destination.country)
        )
    ];

    countries.sort();

    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country;
        option.textContent = country;

        countryInput.appendChild(option);
    });
}


/* =========================
   CALCUL DES JOURS
========================= */

function calculateDays(start, end) {

    const startDate = new Date(start);
    const endDate = new Date(end);

    return Math.ceil(
        (endDate - startDate) /
        (1000 * 60 * 60 * 24)
    );
}


/* =========================
   PRIX
========================= */

function calculatePrice(destination, days, travelers) {

    const flight =
        destination.flight * travelers;

    const rooms =
        Math.ceil(travelers / 2);

    const hotel =
        destination.hotel * days * rooms;

    const food =
        destination.food * days * travelers;

    const activities =
        destination.activities * days * travelers;

    return {
        flight,
        hotel,
        food,
        activities,
        total:
            flight +
            hotel +
            food +
            activities
    };
}


/* =========================
   RECHERCHE
========================= */

function searchTrips() {

    const budget =
        Number(budgetInput.value);

    const travelers =
        Number(travelersInput.value);

    const start =
        startInput.value;

    const end =
        endInput.value;

    const continent =
        continentInput.value;

    const country =
        countryInput.value;

    const style =
        styleInput.value;


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


    const days =
        calculateDays(start, end);


    if (days <= 0) {

        alert(
            "La date de retour doit être après la date de départ."
        );

        return;
    }


    const results =
        destinations.filter(destination => {

            if (
                continent !== "all" &&
                destination.continent !== continent
            ) {
                return false;
            }


            if (
                country !== "all" &&
                destination.country !== country
            ) {
                return false;
            }


            if (
                style !== "all" &&
                !destination.types.includes(style)
            ) {
                return false;
            }


            const price =
                calculatePrice(
                    destination,
                    days,
                    travelers
                );


            return price.total <= budget;
        });


    results.forEach(destination => {

        destination.price =
            calculatePrice(
                destination,
                days,
                travelers
            );

        destination.match = 90;
    });


    results.sort(
        (a, b) =>
            a.price.total -
            b.price.total
    );


    displayResults(
        results,
        days,
        travelers
    );
}


/* =========================
   AFFICHAGE
========================= */

function displayResults(
    results,
    days,
    travelers
) {

    resultsContainer.innerHTML = "";


    if (results.length === 0) {

        resultsInfo.textContent =
            "Aucune destination ne correspond à tes critères.";

        resultsContainer.innerHTML = `

            <div class="empty-results">

                <div class="empty-icon">
                    🌍
                </div>

                <h3>
                    Aucun voyage trouvé
                </h3>

                <p>
                    Essaie d'augmenter ton budget
                    ou de modifier tes critères.
                </p>

            </div>
        `;

        return;
    }


    resultsInfo.textContent =
        `${results.length} destination(s) trouvée(s) • ${travelers} voyageur(s) • ${days} jour(s)`;


    results.forEach(destination => {

        const price =
            destination.price;


        const card =
            document.createElement("article");

        card.className =
            "destination-card";


        card.innerHTML = `

            <div
                class="destination-image"
                style="
                    background-image:
                    url('${destination.image}');
                "
            >

                <div class="destination-emoji">
                    ${destination.emoji}
                </div>

            </div>


            <div class="destination-content">

                <div class="destination-title">

                    <h3>
                        ${destination.city}
                    </h3>

                    <span class="match">
                        ${destination.match}%
                    </span>

                </div>


                <div class="destination-country">
                    ${destination.country}
                </div>


                <div class="destination-price">

                    ${price.total.toLocaleString("fr-FR")} €

                    <small>
                        / voyage
                    </small>

                </div>


                <div class="destination-details">

                    <div class="detail">
                        ✈️ Vol<br>
                        <strong>
                            ${price.flight.toLocaleString("fr-FR")} €
                        </strong>
                    </div>


                    <div class="detail">
                        🏨 Hôtel<br>
                        <strong>
                            ${price.hotel.toLocaleString("fr-FR")} €
                        </strong>
                    </div>


                    <div class="detail">
                        🍝 Repas<br>
                        <strong>
                            ${price.food.toLocaleString("fr-FR")} €
                        </strong>
                    </div>


                    <div class="detail">
                        🎟️ Activités<br>
                        <strong>
                            ${price.activities.toLocaleString("fr-FR")} €
                        </strong>
                    </div>

                </div>


                <button
                    class="trip-button"
                    onclick="showDestination('${destination.city}')"
                >
                    Voir les détails →
                </button>

            </div>
        `;


        resultsContainer.appendChild(card);
    });
}


/* =========================
   BOUTON DETAILS
========================= */

function showDestination(city) {

    alert(
        `🌍 ${city}\n\nCette fonctionnalité permettra bientôt de voir le détail complet du voyage.`
    );
}


/* =========================
   EVENEMENTS
========================= */

continentInput.addEventListener(
    "change",
    updateCountries
);


searchButton.addEventListener(
    "click",
    searchTrips
);


updateCountries();
