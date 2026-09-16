// ========================================
// BUDGET TRAVEL - SIMULATEUR
// ========================================


// Nos destinations de départ
const destinations = [

    {
        city: "Lisbonne",
        country: "Portugal",
        emoji: "🇵🇹",
        flight: 180,
        hotel: 70,
        food: 35,
        activities: 20,
        types: ["sun", "city", "food"]
    },

    {
        city: "Valence",
        country: "Espagne",
        emoji: "🇪🇸",
        flight: 150,
        hotel: 65,
        food: 30,
        activities: 20,
        types: ["sun", "city", "food"]
    },

    {
        city: "Athènes",
        country: "Grèce",
        emoji: "🇬🇷",
        flight: 200,
        hotel: 65,
        food: 30,
        activities: 20,
        types: ["sun", "city"]
    },

    {
        city: "Naples",
        country: "Italie",
        emoji: "🇮🇹",
        flight: 170,
        hotel: 60,
        food: 35,
        activities: 20,
        types: ["city", "food", "sun"]
    },

    {
        city: "Budapest",
        country: "Hongrie",
        emoji: "🇭🇺",
        flight: 120,
        hotel: 50,
        food: 25,
        activities: 15,
        types: ["city", "food"]
    },

    {
        city: "Porto",
        country: "Portugal",
        emoji: "🇵🇹",
        flight: 160,
        hotel: 55,
        food: 30,
        activities: 15,
        types: ["city", "food", "sun"]
    },

    {
        city: "Split",
        country: "Croatie",
        emoji: "🇭🇷",
        flight: 220,
        hotel: 70,
        food: 35,
        activities: 25,
        types: ["sun", "nature"]
    },


{
    city: "Londres",
    country: "Royaume-Uni",
    emoji: "🇬🇧",
    flight: 150,
    hotel: 90,
    food: 40,
    activities: 30,
    types: ["city", "food"]
},

{
    city: "Marrakech",
    country: "Maroc",
    emoji: "🇲🇦",
    flight: 180,
    hotel: 45,
    food: 20,
    activities: 20,
    types: ["sun", "city", "food"]
},

{
    city: "New York",
    country: "États-Unis",
    emoji: "🇺🇸",
    flight: 500,
    hotel: 140,
    food: 50,
    activities: 50,
    types: ["city", "food"]
},

{
    city: "Tokyo",
    country: "Japon",
    emoji: "🇯🇵",
    flight: 700,
    hotel: 80,
    food: 30,
    activities: 35,
    types: ["city", "food"]
}

];


// ========================================
// RÉCUPÉRATION DES ÉLÉMENTS HTML
// ========================================

const searchButton = document.getElementById("searchButton");

const budgetInput = document.getElementById("budget");

const travelersInput = document.getElementById("travelers");

const startInput = document.getElementById("start");

const endInput = document.getElementById("end");

const styleInput = document.getElementById("style");

const resultsContainer = document.getElementById("results");

const resultsInfo = document.getElementById("resultsInfo");


// ========================================
// CALCUL DU NOMBRE DE JOURS
// ========================================

function calculateDays(start, end) {

    const startDate = new Date(start);
    const endDate = new Date(end);

    const difference =
        endDate.getTime() - startDate.getTime();

    const days =
        Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}


// ========================================
// CALCUL DU PRIX DU VOYAGE
// ========================================

function calculatePrice(destination, days, travelers) {

    // Vol aller-retour
    const flight =
        destination.flight * travelers;


    // Une chambre pour environ 2 personnes
    const rooms =
        Math.ceil(travelers / 2);


    // Hôtel
    const hotel =
        destination.hotel * days * rooms;


    // Nourriture
    const food =
        destination.food * days * travelers;


    // Activités
    const activities =
        destination.activities * days * travelers;


    // Prix total
    const total =
        flight +
        hotel +
        food +
        activities;


    return {
        flight,
        hotel,
        food,
        activities,
        total
    };
}


// ========================================
// AFFICHAGE DES DESTINATIONS
// ========================================

function displayResults(results, budget, days, travelers) {

    resultsContainer.innerHTML = "";


    if (results.length === 0) {

        resultsContainer.innerHTML = `

            <div class="empty-results">

                <div class="empty-icon">
                    😕
                </div>

                <h3>
                    Aucun voyage trouvé
                </h3>

                <p>
                    Ton budget est peut-être trop faible
                    pour ces dates.
                    Essaie d'augmenter ton budget.
                </p>

            </div>

        `;

        resultsInfo.textContent =
            "Aucune destination ne correspond à tes critères.";

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

                    <h3>
                        ${destination.city}
                    </h3>

                    <span>
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

                        ✈️ Vol

                        <br>

                        ${price.flight.toLocaleString("fr-FR")} €

                    </div>


                    <div class="detail">

                        🏨 Hôtel

                        <br>

                        ${price.hotel.toLocaleString("fr-FR")} €

                    </div>


                    <div class="detail">

                        🍝 Repas

                        <br>

                        ${price.food.toLocaleString("fr-FR")} €

                    </div>


                    <div class="detail">

                        🎟️ Activités

                        <br>

                        ${price.activities.toLocaleString("fr-FR")} €

                    </div>

                </div>

            </div>

        `;


        resultsContainer.appendChild(card);

    });

}


// ========================================
// LANCEMENT DU SIMULATEUR
// ========================================

function searchTrips() {

    // Récupération des valeurs

    const budget =
        Number(budgetInput.value);

    const travelers =
        Number(travelersInput.value);

    const start =
        startInput.value;

    const end =
        endInput.value;

    const selectedStyle =
        styleInput.value;


    // Vérification du budget

    if (!budget || budget <= 0) {

        alert("Entre un budget valide.");

        return;
    }


    // Vérification des dates

    if (!start || !end) {

        alert("Choisis tes dates de voyage.");

        return;
    }


    // Calcul des jours

    const days =
        calculateDays(start, end);


    if (days <= 0) {

        alert(
            "La date de retour doit être après la date de départ."
        );

        return;
    }


    // ====================================
    // CALCUL DES DESTINATIONS
    // ====================================

    const results = [];


    destinations.forEach(destination => {

        const price =
            calculatePrice(
                destination,
                days,
                travelers
            );


        // On garde seulement
        // les voyages qui rentrent dans le budget

        if (price.total <= budget) {

            // Correspondance avec
            // le type de voyage choisi

            let match = 60;


            if (
                destination.types.includes(
                    selectedStyle
                )
            ) {

                match += 30;

            }


            // Plus le voyage utilise bien
            // le budget, plus le score monte

            const budgetUsage =
                price.total / budget;


            if (budgetUsage >= 0.7) {

                match += 10;

            }


            results.push({

                ...destination,

                price: price,

                match: Math.min(match, 100)

            });

        }

    });


    // ====================================
    // TRI DES RÉSULTATS
    // ====================================

    results.sort(
        (a, b) => {

            return b.match - a.match;

        }
    );


    // ====================================
    // AFFICHAGE
    // ====================================

    displayResults(
        results,
        budget,
        days,
        travelers
    );

}


// ========================================
// BOUTON
// ========================================

searchButton.addEventListener(
    "click",
    searchTrips
);
