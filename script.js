const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagenN.jpg'];

const slider = document.querySelector('.slider');
const thumbnailsContainer = document.querySelector('.thumbnails');

let currentImageIndex = 0;

function showImage(index) {
  slider.style.backgroundImage = `url(${images[index]})`;
}

function createThumbnail(image, index) {
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.style.backgroundImage = `url(${image})`;
  thumbnail.addEventListener('click', () => {
    currentImageIndex = index;
    showImage(currentImageIndex);
  });
  return thumbnail;
}

function initThumbnails() {
  images.forEach((image, index) => {
    const thumbnail = createThumbnail(image, index);
    thumbnailsContainer.appendChild(thumbnail);
  });
}

function startSlider() {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }, 3000);
}

initThumbnails();
showImage(currentImageIndex);
startSlider();

// Función para mostrar la ventana emergente de confirmación al hacer clic en el enlace "Desactivar"
function confirmarDesactivacion() {
  if (confirm("Deactivate device? Device can be activated again by contacting support.")) {
    iniciarDesactivacion();
  }
}

// Función para simular la desactivación del dispositivo
function iniciarDesactivacion() {
  // Mostrar ventana emergente de "Desactivación de dispositivo en curso"
  alert("Device deactivation in progres... Please wait");
  
  // Simular una barra de progreso de 0% a 100% durante 5 segundos
  let progreso = 0;
  const intervalo = setInterval(() => {
    progreso += 20; // Incrementar el progreso en 20% cada segundo
    console.log(`Progress: ${progreso}%`);
    if (progreso >= 100) {
      clearInterval(intervalo); // Detener el intervalo cuando se alcanza el 100%
      // Mostrar alerta de "Dispositivo desactivado correctamente"
      alert("Device deactivated successfully. To re-activate, please contact support.");
      document.querySelector('h3 span').innerText = "Deactivated";
// Cambiar el color del texto a rojo
document.querySelector('h3 span').style.color = "red";
    }
  }, 1000); // Ejecutar cada segundo (1000 milisegundos)
}


