define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var NuevaData = Array();
    function obtenerdata() {
        var i;
        var j;
        for (i = 0; i < 6; i++) {
            j = i.toString();
            var obtenerdato = document.getElementById(j);
            return obtenerdato;
        }
    }
    function crearDatos() {
        var data = new (NuevaData.length + 1, obtenerdata());
        NuevaData.push(data);
        mostrarDatos();
    }
    function mostrarDatos() {
        var i;
        var LData = document.getElementById("fotos");
        var li = document.createElement("li");
        for (i = 0; i < NuevaData.length; i++) {
            var li_1 = document.createElement("li");
            //LFoto.appendChild(li).innerHTML="<img src='imgs/"+Galeria[i].imagen+"'>";
            LData.appendChild(li_1).innerHTML = "\"RUT: " + NuevaData[i].contenido + "\"";
        }
    }
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    window.addEventListener("load", mostrarDatos);
});
