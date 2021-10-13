import jquery=require('jquery');

const $:JQueryStatic=jquery;
interface Datos{
  id:number;
  contenido:any;
}
let NuevaData=Array<Datos>();
function obtenerdata(){
  let i:number;
  let j:string;
  for(i=0;i<6;i++){
    j=i.toString();
    let obtenerdato:any = document.getElementById(j);
    return obtenerdato;
  }
}
function crearDatos(){
    
    let data:Datos= new (NuevaData.length +1, obtenerdata());
    NuevaData.push(data);
    mostrarDatos();
}
function mostrarDatos(){
  let i:number;
  let LData:any=document.getElementById("fotos");
  let li:any=document.createElement("li");
  for(i=0;i<NuevaData.length;i++){
    let li:any=document.createElement("li");
      //LFoto.appendChild(li).innerHTML="<img src='imgs/"+Galeria[i].imagen+"'>";
      LData.appendChild(li).innerHTML=`"RUT: ${NuevaData[i].contenido}"`;
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

window.addEventListener("load",mostrarDatos);
