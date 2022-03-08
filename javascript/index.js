var formulario = document.getElementsByClassName("formulario")[0],
  elementos = formulario.elements,
  boton = document.getElementsByName("button");

var validarNombre = function (e) {
  if (formulario.Nombres.value == 0) {
    alert("Completa el campo Nombres");
    e.preventDefault();
  }
};

var validarApellidos = function (e) {
  if (formulario.Apellidos.value == 0) {
    alert("Completa el campo Apellidos");
    e.preventDefault();
  }
};

var validarCorreo = function (e) {
  if (formulario.Correo.value == 0) {
    alert("Completa el campo Correo");
    e.preventDefault();
  }
};

var validarCelular = function (e) {
  if (formulario.Celular.value == 0) {
    alert("Completa el campo Celular ");
    e.preventDefault();
  }
};

var validarMensaje = function (e) {
  if (formulario.Mensaje.value == 0) {
    alert("Completa el campo Mensaje ");
    e.preventDefault();
  }
};

var validarCheckbox = function (e) {
  if (formulario.Terminos.checked == false) {
    alert("Acepta los Terminos y Condiciones ");
    e.preventDefault();
  }
};

var validar = function (e) {
  validarNombre(e);
  validarApellidos(e);
  validarCorreo(e);
  validarCelular(e);
  validarMensaje(e);
  validarCheckbox(e);
};

formulario.addEventListener("submit", validar);




(function () {
  var actualizarHora = function () {
    var fecha = new Date(),
      horas = fecha.getHours(),
      ampm,
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
      pAMPM = document.getElementById('ampm'),
      pMinutos = document.getElementById('minutos'),
      pSegundos = document.getElementById('segundos'),
      pDiaSemana = document.getElementById('diaSemana'),
      pDia = document.getElementById('dia'),
      pMes = document.getElementById('mes'),
      pYear = document.getElementById('year');
 
  var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  pDiaSemana.textContent = semana[diaSemana];

  pDia.textContent = dia;

  var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
  pMes.textContent = meses[mes];

  pYear.textContent = year;
  
  if (horas >= 12) {
      horas = horas - 12;
      ampm = 'PM';
      } else {
      ampm = 'AM';
      }
      if (horas == 0) {
          horas = 12;
}

pHoras.textContent = horas;
pAMPM.textContent = ampm;

if (minutos < 10 ){ minutos = "0" + minutos };
if (segundos < 10 ){ segundos = "0" + segundos };

pMinutos.textContent = minutos;
pSegundos.textContent = segundos;
};

actualizarHora();
var intervalo = setInterval(actualizarHora,1000);

})()

var count = 0;
function nuevapagina(page) {
if (count == 0) {  //en linea
count ++;
OpenWin = this.open(page,"CtrlWindow","top=80,left=100,screenX=100,screenY=80,width=550,height=460,toolbar=no,menubar=no,location=no, scrollbars=no,resizable=yes");
}

function closepop() {if (OpenWin != null) OpenWin.close() }
window.onunload = closepop;
}
