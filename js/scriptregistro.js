function validarFormulario(event) {
    event.preventDefault();

    const errorMsgElement = document.getElementById('errorMsg');
    const successMsgElement = document.getElementById('successMsg');
    errorMsgElement.style.display = 'none';
    successMsgElement.style.display = 'none';

    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value.trim();
    const email = document.getElementById('email').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    if (!nombres || !apellidos || !tipoDocumento || !numeroDocumento || !email || !direccion) {
        errorMsgElement.textContent = '⚠️ Por favor, complete todos los campos obligatorios.';
        errorMsgElement.style.display = 'block';
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsgElement.textContent = '⚠️ El formato del correo electrónico no es válido.';
        errorMsgElement.style.display = 'block';
        return false;
    }
    
    const datosRegistro = {
        nombres: nombres,
        apellidos: apellidos,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        correoElectronico: email,
        direccion: direccion
    };

    console.log("-----------------------------------------");
    console.log("Datos listos para ser enviados al servidor:");
    console.log(datosRegistro);
    console.log("-----------------------------------------");

    successMsgElement.style.display = 'block';
    return false;
}