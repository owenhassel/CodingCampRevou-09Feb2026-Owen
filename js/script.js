welcomeMessage();

function welcomeMessage() {
    let name = prompt("Welcome to Hello Company! What is your name?");

    if (name == null || name.trim() === "") {
        name = "Guest";
    }

    document.getElementById('welcome-speech').innerHTML =
        `Hello, ${name}! Welcome to Hello Company.`;
}

function submitForm() {

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const message = document.getElementById("message").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || birthdate === "" || message === "" || !gender) {
        alert("Semua field harus diisi ya.");
        return;
    }

    const formattedDate = new Date(birthdate).toLocaleDateString("id-ID");

    const currentTime = new Date().toString();

    document.getElementById("output").innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${formattedDate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}