let productos=[
    {
        nombre:"Laptop Asus RogStrix",
        precio:2000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/LaptopAsusRog.jpg?alt=media&token=e583dda7-8d69-46e1-8981-371c4b4ad332','https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/Spec.jpg?alt=media&token=88db35e9-dbbc-47c9-9f24-a14279ded82d']
    },
    {
        nombre:"Katana MSI",
        precio:1100,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/Katana%20MSI.jpg?alt=media&token=cc6d2e1a-e61e-4259-a549-c2f3192349a5','https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/KatanaViewBack.jpg?alt=media&token=63bf98a9-f6b5-4011-9a82-7fe1a3257a5a']    },
        
    {
        nombre:"Torre Thermalik Glaciar",
        precio:1900,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/Torre%20Gamer%20Thermalik.jpg?alt=media&token=8c419e16-631b-4a98-8d6e-888a84c42e72','https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/Spec%20Torres.jpg?alt=media&token=a2c0ab00-47fc-4219-a50d-783ea3e54cbb']    },

        {
            nombre:"Katana MSI",
            precio:1100,
            fotos:['https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/Katana%20MSI.jpg?alt=media&token=cc6d2e1a-e61e-4259-a549-c2f3192349a5','https://firebasestorage.googleapis.com/v0/b/tiendaconfama.appspot.com/o/KatanaViewBack.jpg?alt=media&token=63bf98a9-f6b5-4011-9a82-7fe1a3257a5a']    }
]

let fila=document.getElementById("fila")

//Recorrer los productos

productos.forEach(function(productos){

    //Crear productos

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100","h-100")
    foto.src=productos.fotos[0]

    let nombre=document.createElement("h3")
    nombre.textContent=productos.nombre

    let precio=document.createElement("h2")
    precio.classList.add("fw-bold")
    precio.textContent='$'+productos.precio

    //Detectando eventos

    foto.addEventListener("mouseover",function(){
        foto.src=productos.fotos[1]
    })

    foto.addEventListener("mouseleave",function(){
        foto.src=productos.fotos[0]
    })


    // padres e hijos

    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})