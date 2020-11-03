function mostrarList(){
  let result = document.getElementById("result")
  let cantidad = document.getElementById("cantidad")
  let cant = parseInt(cantidad.value)
  if(cant && cant > 0){
    let list = [];
    for(i = 1; i <= cant; i++)
      list.push(`${i}.mp4`)
    list.sort()
    result.innerHTML = JSON.stringify(list);
  }
  else
    result.innerHTML = "No ingreso un valor valido";
}