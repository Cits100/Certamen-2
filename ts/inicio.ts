import jquery=require('jquery');

const $:JQueryStatic=jquery;

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

function ValidarRut(valor:any){
  var tmp=valor.split('-');
  let digito=tmp[1];
  let rut=tmp[0];
  if(digito=='K') digito='k';
  var M=0,S=1;
  for(;rut;rut=Math.floor(rut/10))
    S=(S+rut%10*(9-M++%6))%11;
    console.log(S?S-1:'k');

 return S?S-1:'k';
}