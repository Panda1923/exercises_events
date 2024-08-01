
function calculateBMI() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura && peso) {
        const alturaInMeters = altura / 100;
        const bmi = (peso / (alturaInMeters * alturaInMeters)).toFixed(1);
        document.getElementById('result').value = bmi;
    } else {
        alert('Por favor, introduce tanto la estatura como el peso.');
    }
}