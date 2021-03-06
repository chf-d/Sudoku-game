alert("username : ABCD \n password : 1234");
// Script for the landing page

let eng_or_heb = 'eng';

// Makes the game in English
function playing_in_english() {

    alert("username : ABCD \n password : 1234");

    eng_or_heb = 'eng';

    // First page
    document.getElementById('h1_landing_page').innerHTML = 'Welcome!';
    document.getElementById('h3_landing_page').innerHTML = 'Want to play sudoku ?';
    document.getElementById('main_div_username_and_password').style.direction = 'ltr';
    document.getElementById('div_username').innerHTML = 'Please enter your username';
    document.getElementById('username').placeholder = 'username';
    document.getElementById('div_password').innerHTML = 'Please enter your password';
    document.getElementById('password').placeholder = 'password';
    document.getElementById('Lets_go_button').innerHTML = "Let's go";

    if (document.getElementById('username_error').innerHTML == 'שם משתמש לא תקין, תנסה שוב בבקשה.') {
        document.getElementById('username_error').innerHTML = 'Invalid username, please try again.';
        document.getElementById('username_error').style.textAlign = 'left';
    }

    if (document.getElementById('password_error').innerHTML == 'סיסמה לא תקינה, תנסה שוב בבקשה.') {
        document.getElementById('password_error').innerHTML = 'Invalid password, please try again.';
        document.getElementById('password_error').style.textAlign = 'left';
    }

    // Second page
    document.getElementById('h2_in_selection_page').innerHTML = 'Hi';
    document.getElementById('selection_page').style.direction = 'ltr';
    document.getElementById('h3_in_selection_page').innerHTML = 'good to see you!';
    document.getElementById('p_in_selection_page').innerHTML = 'Please select the difficulty level you want to play.';
    document.getElementById('easy_header').innerHTML = 'easy';
    document.getElementById('easy_Explanation').innerHTML = 'You will get a sudoku that needs to be resolved 35%';
    document.getElementById('easy_button').innerHTML = 'easy game';
    document.getElementById('normal_header').innerHTML = 'normal';
    document.getElementById('normal_Explanation').innerHTML = 'You will get a sudoku that needs to be resolved 50%';
    document.getElementById('normal_button').innerHTML = 'normal game';
    document.getElementById('Hard_header').innerHTML = 'hard';
    document.getElementById('Hard_Explanation').innerHTML = 'You will get a sudoku that needs to be resolved 65%';
    document.getElementById('Hard_button').innerHTML = 'Hard game';

    // Third page
    document.getElementById('h1_in_game_page').innerHTML = 'good luck !';
    document.getElementById('game_page').style.direction = 'ltr';
    document.getElementById('hint_header').innerHTML = 'Stuck? <br> Get a hint';
    document.getElementById('hint_Explanation').innerHTML = 'Do not rush to use it.<br>You can use it only <span id="hint_span"></span> times throughout the game.';
    document.getElementById('hint_button').innerHTML = 'hint';
    document.getElementById('hint_left_p').innerHTML = 'You have <span id="hint_left_span"></span> hints left';
    document.getElementById('mobyle_hint_header').innerHTML = 'Stuck? Get a hint';
    document.getElementById('mobyle_hint_Explanation').innerHTML = 'Do not rush to use it. You can use it only <span id="mobyle_hint_span"></span> times throughout the game.';
    document.getElementById('mobyle_hint_button').innerHTML = 'hint';
    document.getElementById('mobyle_left_p').innerHTML = 'You have <span id="mobyle_left_span"></span> hints left';
    document.getElementById('again_button').innerHTML = 'new game';
    document.getElementById('finnish_button').innerHTML = 'finish';
    document.getElementById('eror_header').innerHTML = 'oops';
    document.getElementById('eror_p').innerHTML = 'You did not succeed this time,<br> try your luck again.';
    document.getElementById('eror_h4').innerHTML = 'You made <span id="eror_span"></span> mistakes';
    document.getElementById('mobyle_eror_header').innerHTML = 'oops';
    document.getElementById('mobyle_eror_p').innerHTML = 'You did not succeed this time,<br> try your luck again.';
    document.getElementById('mobyle_eror_h4').innerHTML = 'You made <span id="mobyle_eror_span"></span> mistakes';
    document.getElementById('success_header').innerHTML = 'Well done !';
    document.getElementById('success_p').innerHTML = 'You played the game without a single mistake!';
    document.getElementById('mobyle_success_header').innerHTML = 'Well done !';
    document.getElementById('mobyle_success_p').innerHTML = 'You played the game without a single mistake!';
}

// Makes the game in Hebrew
function playing_in_hebrew() {

    alert("שם משתמש : ABCD \n סיסמה : 1234");

    eng_or_heb = 'heb';

    // First page
    document.getElementById('h1_landing_page').innerHTML = '! ברוך הבא';
    document.getElementById('h3_landing_page').innerHTML = '? רוצה לשחק סודוקו';
    document.getElementById('main_div_username_and_password').style.direction = 'rtl';
    document.getElementById('div_username').innerHTML = 'נא הקלד את שם המשתמש שלך';
    document.getElementById('username').placeholder = 'שם משתמש';
    document.getElementById('div_password').innerHTML = 'נא הקלד את הסיסמה שלך';
    document.getElementById('password').placeholder = 'סיסמה';
    document.getElementById('Lets_go_button').innerHTML = 'בוא נתחיל';

    if (document.getElementById('username_error').innerHTML == 'Invalid username, please try again.') {
        document.getElementById('username_error').innerHTML = 'שם משתמש לא תקין, תנסה שוב בבקשה.';
        document.getElementById('username_error').style.textAlign = 'right';
    }

    if (document.getElementById('password_error').innerHTML == 'Invalid password, please try again.') {
        document.getElementById('password_error').innerHTML = 'סיסמה לא תקינה, תנסה שוב בבקשה.';
        document.getElementById('password_error').style.textAlign = 'right';
    }

    // Second page
    document.getElementById('h2_in_selection_page').innerHTML = 'היי';
    document.getElementById('selection_page').style.direction = 'rtl';
    document.getElementById('h3_in_selection_page').innerHTML = 'טוב לראות אותך!';
    document.getElementById('p_in_selection_page').innerHTML = 'בחר את רמת הקושי שאתה רוצה לשחק.';
    document.getElementById('easy_header').innerHTML = 'קל';
    document.getElementById('easy_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 35%';
    document.getElementById('easy_button').innerHTML = 'משחק קל';
    document.getElementById('normal_header').innerHTML = 'בינוני';
    document.getElementById('normal_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 50%';
    document.getElementById('normal_button').innerHTML = 'משחק בינוני';
    document.getElementById('Hard_header').innerHTML = 'קשה';
    document.getElementById('Hard_Explanation').innerHTML = 'תקבל סודוקו שצריך לפתור 65%';
    document.getElementById('Hard_button').innerHTML = 'משחק קשה';

    // Third page
    document.getElementById('h1_in_game_page').innerHTML = 'בהצלחה !';
    document.getElementById('game_page').style.direction = 'rtl';
    document.getElementById('hint_header').innerHTML = 'נתקעת? <br> קבל רמז';
    document.getElementById('hint_Explanation').innerHTML = 'אל תמהר להשתמש בזה.<br> תוכל להשתמש ברמזים רק <span id="hint_span"></span> פעמים במשך כל המשחק';
    document.getElementById('hint_button').innerHTML = 'רמז';
    document.getElementById('hint_left_p').innerHTML = 'נשאר לך <span id="hint_left_span"></span> רמזים';
    document.getElementById('mobyle_hint_header').innerHTML = 'נתקעת? קבל רמז';
    document.getElementById('mobyle_hint_Explanation').innerHTML = 'אל תמהר להשתמש בזה. תוכל להשתמש ברמזים רק <span id="mobyle_hint_span"></span> פעמים במשך כל המשחק';
    document.getElementById('mobyle_hint_button').innerHTML = 'רמז';
    document.getElementById('mobyle_left_p').innerHTML = 'נשאר לך <span id="mobyle_left_span"></span> רמזים';
    document.getElementById('again_button').innerHTML = 'משחק חדש';
    document.getElementById('finnish_button').innerHTML = 'סיימתי';
    document.getElementById('eror_header').innerHTML = 'אופסס';
    document.getElementById('eror_p').innerHTML = 'לא הצלחת הפעם,<br> נסה את מזלך שוב אולי תצליח.';
    document.getElementById('eror_h4').innerHTML = 'עשית <span id="eror_span"></span> טעויות';
    document.getElementById('mobyle_eror_header').innerHTML = 'אופסס';
    document.getElementById('mobyle_eror_p').innerHTML = 'לא הצלחת הפעם,<br> נסה את מזלך שוב אולי תצליח.';
    document.getElementById('mobyle_eror_h4').innerHTML = 'עשית <span id="mobyle_eror_span"></span> טעויות';
    document.getElementById('success_header').innerHTML = 'כל הכבוד !';
    document.getElementById('success_p').innerHTML = 'הצלחת לשחק את המשחק מבלי לעשות טעות אחת !';
    document.getElementById('mobyle_success_header').innerHTML = 'כל הכבוד !';
    document.getElementById('mobyle_success_p').innerHTML = 'הצלחת לשחק את המשחק מבלי לעשות טעות אחת !';
}

//Checks if login information is correct and Moves to the selection page
function landing_page() {

    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    document.getElementById('username_error').innerHTML = '';
    document.getElementById('password_error').innerHTML = '';

    if (user.toLowerCase() != 'abcd') {

        if (eng_or_heb == 'heb') {
            document.getElementById('username_error').innerHTML = 'שם משתמש לא תקין, תנסה שוב בבקשה.';
            document.getElementById('username_error').style.textAlign = "right";
        }
        else {
            document.getElementById('username_error').innerHTML = 'Invalid username, please try again.';
        }
    }

    if (pass != 1234) {

        if (eng_or_heb == 'heb') {
            document.getElementById('password_error').innerHTML = 'סיסמה לא תקינה, תנסה שוב בבקשה.';
            document.getElementById('password_error').style.textAlign = "right";
        }
        else {
            document.getElementById('password_error').innerHTML = 'Invalid password, please try again.';
        }
    }

    if (user.toLowerCase() == 'abcd' && pass == 1234) {
        document.getElementById('landing_page').style.display = 'none';
        document.getElementById('selection_page').style.display = 'block';
        document.getElementById('h2_in_selection_page').innerHTML += ' ' + user + '!';
    }
}

// Clears the error inputs for a new username and password
function Clean_username_error_div() {
    document.getElementById('username_error').innerHTML = '';
}
function Clean_password_error_div() {
    document.getElementById('password_error').innerHTML = '';
}

//Deletes and returns the language buttons
function language_buttons_display_block() {
    document.getElementById('language_buttons').style.display = 'block';
}
function language_buttons_display_none() {
    document.getElementById('language_buttons').style.display = 'none';
}


// Allows to write only one number without zero
function input_value(a) {

    if (a.value == 0) {
        a.value = '';
    }

    if (a.value.length > 1) {

        if (a.value.charAt(1) == 0) {

            a.value = a.value.slice(0, 1)
        }

        else {

            a.value = a.value.slice(1)
        }
    }
}



let sudoku = [
    [9, 5, 7, 6, 1, 3, 2, 8, 4],
    [4, 8, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 3, 6, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 3, 6, 8],
    [3, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 4, 5, 7, 9, 2, 6, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 3, 6, 1, 8, 5, 4, 2, 9]
];

let new_sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// create a new sudoku
function create_a_new_sudoku() {

    let Used_numbers = '';

    for (let i = 1; i <= 9; i++) {

        let rand_num = Math.floor(Math.random() * (10 - 1)) + 1;

        if (Used_numbers.indexOf(rand_num) != -1) {
            i--
        }

        else {

            for (let j = 0; j < 9; j++) {

                for (let y = 0; y < 9; y++) {

                    if (sudoku[j][y] == i) {

                        new_sudoku[j][y] = rand_num;
                        Used_numbers += rand_num;
                    }
                }
            }
        }
    }

    // Puts the new sudoku into the table
    for (let x = 0; x < 9; x++) {

        for (let z = 0; z < 9; z++) {

            document.getElementById(`input_${x + 1}_${z + 1}`).value = new_sudoku[x][z];
            document.getElementById(`input_${x + 1}_${z + 1}`).style.backgroundColor = 'rgb(255, 255, 255)'
        }
    }
}
create_a_new_sudoku()

// Moves to the game page and Deletes some of the sudoku
function Delete_sudoku(value) {

    // Moves to the game page
    document.getElementById('selection_page').style.display = 'none';
    document.getElementById('game_page').style.display = 'block';

    // Deletes some of the sudoku
    for (let i = 0; i < value; i++) {
        let rand_num_1 = Math.floor(Math.random() * (10 - 1)) + 1;
        let rand_num_2 = Math.floor(Math.random() * (10 - 1)) + 1;

        if (document.getElementById(`input_${rand_num_1}_${rand_num_2}`).value == '') {
            i--
        }
        else {
            document.getElementById(`input_${rand_num_1}_${rand_num_2}`).value = '';
        }
    }

    // Full input gets a unique design and blocks from changing it
    for (let x = 1; x <= 9; x++) {

        for (let y = 1; y <= 9; y++) {

            if (document.getElementById(`input_${x}_${y}`).value != '') {

                document.getElementById(`input_${x}_${y}`).style.color = 'rgb(94, 92, 92)';
                document.getElementById(`input_${x}_${y}`).style.backgroundColor = 'rgb(240, 240, 241)'
                document.getElementById(`input_${x}_${y}`).readOnly = true;

            }
        }
    }

    // Inserts how much times will be able to use with the hint
    if (value == '30') {
        document.getElementById('hint_span').innerHTML = '4';
        document.getElementById('mobyle_hint_span').innerHTML = '4';
        document.getElementById('hint_left_span').innerHTML = '4';
        document.getElementById('mobyle_left_span').innerHTML = '4';
    }
    else if (value == '40') {
        document.getElementById('hint_span').innerHTML = '6';
        document.getElementById('mobyle_hint_span').innerHTML = '6';
        document.getElementById('hint_left_span').innerHTML = '6';
        document.getElementById('mobyle_left_span').innerHTML = '6';
    }
    else {
        document.getElementById('hint_span').innerHTML = '8';
        document.getElementById('mobyle_hint_span').innerHTML = '8';
        document.getElementById('hint_left_span').innerHTML = '8';
        document.getElementById('mobyle_left_span').innerHTML = '8';
    }
}

// Selects a random location and confesses that it is empty and adds value there
function hint() {

    // Checks if it is more than 0
    if (document.getElementById('hint_left_span').innerHTML > 0) {

        // Makes the counter 1 less
        document.getElementById('hint_left_span').innerHTML--;
        document.getElementById('mobyle_left_span').innerHTML--;

        // Looking for an empty location
        for (let i = 0; i < 1; i++) {
            let rand_num_1 = Math.floor(Math.random() * (10 - 1)) + 1;
            let rand_num_2 = Math.floor(Math.random() * (10 - 1)) + 1;

            if (document.getElementById(`input_${rand_num_1}_${rand_num_2}`).value != '') {
                i--;
            }
            else {
                document.getElementById(`input_${rand_num_1}_${rand_num_2}`).value = new_sudoku[rand_num_1 - 1][rand_num_2 - 1];
                document.getElementById(`input_${rand_num_1}_${rand_num_2}`).style.color = 'rgb(94, 92, 92)';
                document.getElementById(`input_${rand_num_1}_${rand_num_2}`).style.backgroundColor = 'rgb(240, 240, 241)';
                document.getElementById(`input_${rand_num_1}_${rand_num_2}`).readOnly = true;
            }
        }
    }
}


// Cleans the sudoku and puts in a new one
function new_game() {

    for (let x = 1; x <= 9; x++) {

        for (let y = 1; y <= 9; y++) {

            document.getElementById(`input_${x}_${y}`).style.color = 'rgb(23, 23, 230)';
            document.getElementById(`input_${x}_${y}`).style.backgroundColor = 'rgb(255, 255, 255)'
            document.getElementById(`input_${x}_${y}`).readOnly = false;

        }
    }

    create_a_new_sudoku()

    document.getElementById('game_page').style.display = 'none';
    document.getElementById('selection_page').style.display = 'block';
    document.getElementById('Hint_values').style.display = 'block';
    document.getElementById('mobyle_Hint_values').style.display = 'block';
    document.getElementById('Error_Message').style.display = 'none';
    document.getElementById('mobyle_error_message').style.display = 'none';
    document.getElementById('Success_Message').style.display = 'none';
    document.getElementById('mobyle_success_message').style.display = 'none';
}

let error_counter = 0;


// All validations for the end
function finnish() {

    error_counter = 0;

    // Cleane the hint div
    document.getElementById('Hint_values').style.display = 'none';
    document.getElementById('mobyle_Hint_values').style.display = 'none';


    // Locks the inputs and paints in red what is empty
    for (let x = 1; x <= 9; x++) {

        for (let z = 1; z <= 9; z++) {

            document.getElementById(`input_${x}_${z}`).readOnly = true;

            if (document.getElementById(`input_${x}_${z}`).value == '') {

                document.getElementById(`input_${x}_${z}`).style.backgroundColor = 'rgba(255, 0, 0, 0.15)'
                error_counter++;
            }
        }
    }

    chack_row()
    chack_col()
    chack_box()

    if (chack_row() == true && chack_col() == true && chack_box() == true) {
        document.getElementById('Success_Message').style.display = 'block';
        document.getElementById('mobyle_success_message').style.display = 'block';
    }
    else {
        document.getElementById('Error_Message').style.display = 'block';
        document.getElementById('mobyle_error_message').style.display = 'block';
        document.getElementById('eror_span').innerHTML = error_counter;
        document.getElementById('mobyle_eror_span').innerHTML = error_counter;
    }
}


// Checks the rows if they contain all the numbers
function chack_row() {

    let counter_row = 0;

    // Takes the numbers along with their location and inserts them as an object into the array
    for (let i = 1; i <= 9; i++) {

        let row = [];

        for (let j = 1; j <= 9; j++) {

            row.push({ number: parseInt(document.getElementById(`input_${i}_${j}`).value), index: `input_${i}_${j}` });
        }

        // Enter each number individually into the array to check if it exists twice
        for (let y = 1; y <= 9; y++) {

            let row_num = []

            for (let n = 0; n < 9; n++) {

                if (row[n].number == y) {
                    row_num.push(row[n]);
                }

            }

            // If he finds a number more than once he paints the non-original in red
            if (row_num.length > 1) {

                for (let c = 0; c < row_num.length; c++) {

                    if (document.getElementById(`${row_num[c].index}`).style.backgroundColor == 'rgb(255, 255, 255)') {
                        document.getElementById(`${row_num[c].index}`).style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
                        document.getElementById(`${row_num[c].index}`).style.color = 'red';
                        error_counter++;
                    }
                }
            }
            else if (row_num.length == 1) {
                counter_row++;
            }
        }
    }

    // If all goes well he returns truth
    if (counter_row == 81) {
        return true
    }
    else {
        return false
    }
}


// Checks the cols if they contain all the numbers
function chack_col() {

    let counter_col = 0;

    // Takes the numbers along with their location and inserts them as an object into the array
    for (let i = 1; i <= 9; i++) {

        let col = [];

        for (let j = 1; j <= 9; j++) {

            col.push({ number: parseInt(document.getElementById(`input_${j}_${i}`).value), index: `input_${j}_${i}` });
        }

        // Enter each number individually into the array to check if it exists twice
        for (let y = 1; y <= 9; y++) {

            let col_num = []

            for (let n = 0; n < 9; n++) {

                if (col[n].number == y) {
                    col_num.push(col[n]);
                }

            }

            // If he finds a number more than once he paints the non-original in red
            if (col_num.length > 1) {

                for (let c = 0; c < col_num.length; c++) {

                    if (document.getElementById(`${col_num[c].index}`).style.backgroundColor == 'rgb(255, 255, 255)') {
                        document.getElementById(`${col_num[c].index}`).style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
                        document.getElementById(`${col_num[c].index}`).style.color = 'red';
                        error_counter++;
                    }
                }
            }
            else if (col_num.length == 1) {
                counter_col++;
            }
        }
    }

    // If all goes well he returns truth
    if (counter_col == 81) {
        return true
    }
    else {
        return false
    }
}

// Checks the boxs if they contain all the numbers
function chack_box() {

    let counter_box = 0;

    // Takes the numbers along with their location and inserts them as an object into the array
    // Because it is a box I needed 4 loops Because each loop ran 3 times
    let start1 = 1;
    let stop1 = 3;

    for (let i = 1; i <= 3; i++) {

        let start2 = 1;
        let stop2 = 3;

        for (let ii = 1; ii <= 3; ii++) {

            let box = [];

            for (let j = start1; j <= stop1; j++) {

                for (let y = start2; y <= stop2; y++) {

                    box.push({ number: parseInt(document.getElementById(`input_${j}_${y}`).value), index: `input_${j}_${y}` });
                }
            }


            // Enter each number individually into the array to check if it exists twice
            for (let n = 1; n <= 9; n++) {

                let box_num = [];

                for (let nn = 0; nn < 9; nn++) {

                    if (box[nn].number == n) {

                        box_num.push(box[nn])
                    }
                }

                // If he finds a number more than once he paints the non-original in red
                if (box_num.length > 1) {

                    for (let c = 0; c < box_num.length; c++) {

                        if (document.getElementById(`${box_num[c].index}`).style.backgroundColor == 'rgb(255, 255, 255)') {
                            document.getElementById(`${box_num[c].index}`).style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
                            document.getElementById(`${box_num[c].index}`).style.color = 'red';
                            error_counter++;
                        }
                    }
                }
                else if (box_num.length == 1) {
                    counter_box++;
                }
            }

            start2 += 3;
            stop2 += 3;
        }

        start1 += 3;
        stop1 += 3;
    }

    // If all goes well he returns truth
    if (counter_box == 81) {
        return true
    }
    else {
        return false
    }

}

