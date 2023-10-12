// carga de lista de capitulos
document.addEventListener("DOMContentLoaded", () => {
	const selectorcap = document.querySelectorAll("a.cap");
	if (selectorcap) {
		// console.log(selectorcap);
		for (var item of selectorcap) {
			item.addEventListener("click", function (e) {
				e.preventDefault();
				let result = this.classList[1].replace("cap", "");
				sessionStorage.setItem("selcapitulo", result);
				window.location = this.href;
			});
		}
	}
});

// carga de formularios de preguntas
document.addEventListener("DOMContentLoaded", () => {
	const BASE_URL = "http://lyssoluciones.com/desarrollos/museo/mibot.php";
	const formulario = document.querySelector("#formpregunta");

	const titulocolor = document.querySelector(".cap-title.text-cap1");
	const subtitulocolor = document.querySelector(".sub.text-cap1");
	const bgcolor = document.querySelector(".preg-c2.bg-cap1");

	if (titulocolor) {
		// console.log("preguna");
		let selcapitulo = sessionStorage.getItem("selcapitulo");
		titulocolor.classList.replace("text-cap1", `text-cap${selcapitulo}`);
		subtitulocolor.classList.replace("text-cap1", `text-cap${selcapitulo}`);
		bgcolor.classList.replace("bg-cap1", `bg-cap${selcapitulo}`);
	}

	if (formulario) {
		formulario.addEventListener("submit", function (e) {
			e.preventDefault();
			axios
				.post(
					BASE_URL,
					{
						pregunta: pregunta.value,
					},
					{
						headers: {
							"content-type": "application/x-www-form-urlencoded",
						},
					}
				)
				.then((response) => {
					console.log(response.data?.respuesta);
					cambiarestadopresuesta();
				});
		});
	}
});

function cambiarestadopresuesta() {
	document.querySelectorAll(".cambiorespuesta").forEach(function (element) {
		// console.log(element);
		console.log(element.style.display);
		if (element.style.display == "none") {
			element.style.display = "block";
		} else element.style.display = "none";
	});
}
