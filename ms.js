// xebera bıde hılde
function xok(type, text, repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    switch (type) {
      case "xeber":
        alert(text);
        break;
      case "ena":
        confirm(text);
        break;
      case "nivis":
        prompt(text);
        break;
      default:
        console.log("type error");
      }
    }
  }

// bınvise ekran
  function nvis(text) {
    document.write(text);
  }

// xemla wê çêke
  function xeml(id, styleName, value) {
    //console.log(typeof(value));
    switch (typeof(value)) {
    case "number":
      id.style.cssText += styleName + ":" + value +"px";
      break;
    case "string":
      id.style.cssText += styleName + ":" + value;
      break;

    default:
      // code
    }

  }

// xemla wê dıde
  function xemlçı(id, styleName) {
    return " " + window.getComputedStyle(id).getPropertyValue(styleName);
  }

// seetê röy dıde
var dem;
function demek(){
  dem = {
    dem: new Date().getTime(),
    demS: new Date().getHours(),
    demd: new Date().getMinutes(),
    dems: new Date().getSeconds()
  };
} 

function vekeCam(id){
  navigator.getUserMedia({
    video :{}
   }, steam => (id.srcObject = steam), 
   error => console.log(error));
}

// write and create or edit a file 
function fnıvis(fileName, text){
 return  localStorage.setItem(fileName, text);
}

function fxandın(fileName){
 return  localStorage.getItem(fileName);
} 

function ftemız(fileName){
  return localStorage.removeItem(fileName);
}

// fonqsyone nvisa
function hevva(text){
  var mtn =""
  var arr = text.split(" ")
  arr.forEach((e) => {
    mtn+=e
  })
  return mtn.
}