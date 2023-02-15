const hashOutput = document.querySelector('.hash');
const componentsOutput = document.querySelector('.components');

new CBFjs().get(function(hash, components) {
    console.log(components)

    hashOutput.innerHTML = 'Хэш: ' + hash;
    for (let i=0; i < components.length; i++) {
      console.log(i)
      let p = document.createElement("p");
      if (i == components.length - 1) {
        p.innerHTML = "Font list = "
      }
      p.innerHTML += components[i];
      
      componentsOutput.appendChild(p);
    }
  })