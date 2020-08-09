// Script for the language page

// Makes the game in English
function playing_in_english() {
    document.getElementById('h1_language_page').innerHTML = 'Welcome!';
    document.getElementById('h3_language_page').innerHTML = 'Want to play sudoku ?';
    document.getElementById('p_language_page').innerHTML = 'Choose your language';
    document.getElementById('Lets_go_button').innerHTML = "Let's go";
}

// Makes the game in Hebrew
function playing_in_hebrew() {
    document.getElementById('h1_language_page').innerHTML = '! ברוך הבא';
    document.getElementById('h3_language_page').innerHTML = '? רוצה לשחק סודוקו';
    document.getElementById('p_language_page').innerHTML = 'תבחר את השפה שלך';
    document.getElementById('Lets_go_button').innerHTML = 'בא נתחיל';
}

// Moves to the selection page
function landing_page() {
    document.getElementById('landing_page').style.display = 'none';
    document.getElementById('selection_page').style.display = 'block';
}