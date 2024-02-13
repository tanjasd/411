document.getElementById('registration-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var country = document.getElementById('country').value;
    var zipcode = document.getElementById('zipcode').value;
    var email = document.getElementById('email').value;
    
    var isValid = true;
    var errorMessage = "";

    // Tarkista, että kaikki pakolliset kentät ovat täytetty
    if (username === "" || password === "" || name === "" || address === "" || country === "" || zipcode === "" || email === "") {
        isValid = false;
        errorMessage += "Kaikki kentät paitsi Lisätietoja ovat pakollisia.\n";
    }

    // Tarkista käyttäjä ID:n pituus
    if (username.length < 6) {
        isValid = false;
        errorMessage += "Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä.\n";
    }

    // Tarkista salasanan ehdot
    var passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        errorMessage += "Salasanassa tulee olla ainakin 6 merkkiä, sisältää vähintään yksi numero, yksi iso kirjain ja yksi erikoismerkki.\n";
    }

    // Tarkista postinumeron pituus
    if (zipcode.length !== 5 || isNaN(zipcode)) {
        isValid = false;
        errorMessage += "Postinumero on viisinumeroinen\n";
    }

    // Tarkista sähköpostiosoitteen muoto
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "Sähköpostiosoitteessa pitää olla miukumauku\n";
    }

    // Jos jokin validointi epäonnistuu, estä lomakkeen lähettäminen ja näytä virheviesti
    if (!isValid) {
        event.preventDefault();
        document.getElementById('error-message').innerText = errorMessage;
    }
});