var items = [
  [
    {
      "nome": "Pizza",
      "preco": "R$ 10.00",
      "url": "images/pratos/pizza.png"
    },
    {
      "nome": "Lasanha",
      "preco": "R$ 5.00",
      "url": "images/pratos/lasanha.png"
    },
    {
      "nome": "Pastel",
      "preco": "R$ 3.00",
      "url": "images/pratos/pastel.png"
    },
    {
      "nome": "Frango Frito",
      "preco": "R$ 13.00",
      "url": "images/pratos/frango.png"
    },
    {
      "nome": "Hamburguer",
      "preco": "R$ 7.00",
      "url": ""
    },
    {
      "nome": "Churros",
      "preco": "R$ 12.00",
      "url": ""
    },
    {
      "nome": "Coxinha",
      "preco": "R$ 5.00",
      "url": ""
    },
    {
      "nome": "Barca de sushi",
      "preco": "R$ 20.00",
      "url": ""
    },
    {
      "nome": "Strogonoff",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Batata Frita",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Arrumadinho",
      "preco": "R$ 13.00",
      "url": ""
    },
    {
      "nome": "Creme de galinha",
      "preco": "R$ 8.00",
      "url": ""
    }
  ],
  [
    {
      "nome": "Água",
      "preco": "R$ 5.00",
      "url": ""
    },
    {
      "nome": "Água com gás",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Suco",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Coca-Cola",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Fanta",
      "preco": "R$ 5.00",
      "url": ""
    },
    {
      "nome": "Pepsi",
      "preco": "R$ 7.00",
      "url": ""
    },
    {
      "nome": "Guarná Jesus",
      "preco": "R$ 5.00",
      "url": ""
    },
    {
      "nome": "Antarctica",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Heineken",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Brahma",
      "preco": "R$ 10.00",
      "url": ""
    },
    {
      "nome": "Skol",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Amstel",
      "preco": "R$ 8.00",
      "url": ""
    },
  ],
  [
    {
      "nome": "Torta de Limão",
      "preco": "R$ 5.00",
      "url": ""
    },
    {
      "nome": "Torta de laranja",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Brigadeiro",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Beijinho",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Tapioca doce",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Churros",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Goiabada",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Sorvete",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Pudim",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Bolo de cenoura",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Bolo de milho",
      "preco": "R$ 8.00",
      "url": ""
    },
    {
      "nome": "Quindim",
      "preco": "R$ 8.00",
      "url": ""
    },

  ]
]

function CriarTag(name, preco, url) {
  pratos.innerHTML += "<div id='item'><img class='foto' src='"+url+"'></img><h3 id='nome'>"+name+"</h3><h3 id='preco'>"+preco+"</h3></div>"
}

var controller = 0

function GerarCardapio() {
  for (var i = 0;i < items[controller].length;i++) {
    CriarTag(
      items[controller][i].nome,
      items[controller][i].preco,
      items[controller][i].url,
    )
  }
}

function LimparCardapio() {
  pratos.innerHTML = ''
}

function MudarComida(id) {

  if (id == 'prato') {
    controller = 0
  } else if(id == 'bebida') {
    controller = 1
  } else {
    controller = 2
  }
  LimparCardapio()
  GerarCardapio() 
}

GerarCardapio() 