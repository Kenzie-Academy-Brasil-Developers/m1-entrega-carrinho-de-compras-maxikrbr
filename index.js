let backBody = document.getElementById('background')

let mainDom = document.createElement('main')

let productList = document.createElement('ul')

mainDom.appendChild(productList)
backBody.appendChild(mainDom)

const productsCart = [
    {
        id: 1,
        name: "Uvas",
        price: 10.00
    },
    {
        id: 2,
        name: "Pão",
        price: 5.00
    },
    {
        id: 3,
        name: "Chocolate",
        price: 8.00
    },
    {
        id: 4,
        name: "Sorvete",
        price: 12.00
    },
    {
        id: 5,
        name: "Suco",
        price: 5.50
    }
]

function soma(){
    let sum = 0
    for (let i = 0; i < productsCart.length; i++){
        sum += productsCart[i].price
    }
    return sum
}

function listarCarrinho(){
    for (let i = 0; i < productsCart.length; i++){
        let productDetails = document.createElement('li')
        let name = document.createElement('span')
        let price = document.createElement('p')
        name.innerText = `${productsCart[i].name}`
        price.innerText = `${productsCart[i].price}`
        productDetails.appendChild(name)
        productDetails.appendChild(price)
        productList.appendChild(productDetails)
    }
}

function somaTotal(){
    let amm = document.createElement('li')
    let name = document.createElement('span')
    let total = document.createElement('p')
    let buttonEnd = document.createElement('button')
    let finalizarCompra = document.createElement('p')
    name.innerText = 'Total'
    total.innerText = `${soma()}`
    finalizarCompra.innerText = 'Finalizar Compra'
    amm.appendChild(name)
    amm.appendChild(total)
    buttonEnd.appendChild(finalizarCompra)
    productList.appendChild(amm) 
    productList.appendChild(buttonEnd)
}

listarCarrinho()
somaTotal()