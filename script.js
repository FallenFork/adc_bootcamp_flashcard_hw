const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let flashcard = flashcards[currentIndex];

    // Creating the card
    let cardContent = document.getElementById('card-content');

    if (showingTerm === true) {
        cardContent.innerText = flashcard.term;
    } else {
        cardContent.innerText = flashcard.definition;
    }
}

function flipCard() {
    if (showingTerm === true) {
        showingTerm = false;
    } else {
        showingTerm = true;
    }

    displayCard();
}

function prevCard() {
    if (currentIndex === 0) {
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }

    showingTerm = true;

    displayCard();
}

function nextCard() {
    if (currentIndex === flashcards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    showingTerm = true;

    displayCard();
}

function addCard(term, definition) {
    if (term !== '' && definition !== '') {
        flashcards.push({ term: term, definition: definition });
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
    }

}

// The rest of the code you will write is apart of event listeners
document.getElementById('flashcard').addEventListener('click', () => flipCard());
document.getElementById('prev-btn').addEventListener('click', () => prevCard());
document.getElementById('next-btn').addEventListener('click', () => nextCard());
document.getElementById('add-card-btn').addEventListener('click', () => addCard(
    document.getElementById('new-term').value,
    document.getElementById('new-definition').value
));



// This line will display the card when the page is refreshed
window.onload = displayCard;
