const express = require('express')
const app = express()
 
app.use(express.json()); 
const itensCardapio = [
    {
        "id": 1,
        "nome": "Marmita Delicia",
        "descricao": "arroz, feijão, batata frita, bife a cavalo",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeiy8Ogi21GXZa9K314p0yQICeotbB7K9nQ&s",
        "preco": 29.90
    },
    {
        "id": 2,
        "nome": "Marmita Parmegiana",
        "descricao": "arroz, batata frita, frango a milanesa com molho de tomate e presunto e queijo",
        "foto": "https://amarmitaria.com.br/wp-content/uploads/2022/09/quemsomos.png",
        "preco": 29.0
    },
    {
        "id": 3,
        "nome": "Marmita Picanha ",
        "descricao": "arroz, feijão e picanha",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpg9cVHd0sWwO2WVytADGNn9yADjUwYPmmQA&s",
        "preco": 22.90
    },
    {
        "id": 4,
        "nome": "Marmita Feijoada",
        "descricao": "arroz, couve, bisteca, torresmo, farofa e vinagrete",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_5dR6123Hfv5ha_IOg-uoL1uf_Kgvt8-sA&s",
        "preco": 55.90
    },
    {
        "id": 5,
        "nome": "Marmita Bife a milanesa",
        "descricao": "arroz, feijão, batata frita, bife a milanesa",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeiy8Ogi21GXZa9K314p0yQICeotbB7K9nQ&s",
        "preco": 19.0
    }
 
]
const itensSaladas = [
    {
        "id": 1,
        "nome": "Salada Delícia",
        "descricao": "mix de folhas, tomate cereja, cenoura ralada, frango grelhado e croutons",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vcpglkZvev1B8PUsSH0lYbwHNZdarF_iPA&s",
        "preco": 29.0
    },
    {
        "id": 2,
        "nome": "Salada Caesar",
        "descricao": "alface americana, frango grelhado, croutons, parmesão ralado e molho caesar",
        "foto": "https://dicheff.com.br/wp-content/uploads/2023/09/salada-caesar.jpg",
        "preco": 29.0
    },
    {
        "id": 3,
        "nome": "Salada de Picanha",
        "descricao": "mix de folhas, picanha grelhada em tiras, cebola roxa e tomate",
        "foto": "https://minervafoods.com/wp-content/uploads/2023/04/picanha-dry-rub-minerva-foods.jpg",
        "preco": 22.90
    },
    {
        "id": 4,
        "nome": "Salada Completa",
        "descricao": "alface, rúcula, cenoura, beterraba, ovo cozido, peito de frango e grão-de-bico",
        "foto": "https://www.maxi.co.ao/wp-content/uploads/2019/04/receita-salada-grao-bico-frango.jpg",
        "preco": 55.90
    },
    {
        "id": 5,
        "nome": "Salada Mediterrânea",
        "descricao": "pepino, tomate, azeitonas, cebola roxa, queijo branco e azeite de oliva",
        "foto": "https://cozinhandodiferente.com.br/wp-content/uploads/2024/10/salada-mediterranea-500x375.png",
        "preco": 19.0
    }
];

const itensBebidas = [
    {
        "id": 1,
        "nome": "Suco Natural de Laranja",
        "descricao": "suco de laranja natural, sem conservantes, servido bem gelado",
        "foto": "https://osterstatic.reciperm.com/webp/10251.webp",
        "preco": 8.00
    },
    {
        "id": 2,
        "nome": "Refrigerante Lata",
        "descricao": "refrigerante em lata 350ml, diversos sabores",
        "foto": "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/11542/669add5769e6e2x9g4.webp",
        "preco": 6.00
    },
    {
        "id": 3,
        "nome": "Água Mineral sem Gás",
        "descricao": "água mineral sem gás, garrafa 500ml",
        "foto": "https://www.delgo.com.br/imagens/como-e-feito-o-envase-de-agua-mineral.jpg",
        "preco": 4.50
    },
    {
        "id": 4,
        "nome": "Água Mineral com Gás",
        "descricao": "água mineral com gás, garrafa 500ml",
        "foto": "https://fontagua.com.br/wp-content/uploads/2020/04/splash_15l-gas.jpg",
        "preco": 5.00
    },
    {
        "id": 5,
        "nome": "Suco de Uva Integral",
        "descricao": "suco de uva integral, 300ml, sem adição de açúcar",
        "foto": "https://wx.mlcdn.com.br/ponzi/production/portaldalu/58836.jpg",
        "preco": 9.50
    }
];

 
app.get("/marmitas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(itensCardapio)
})
 
app.get("/marmitas/:id", function (req, res) {
    let id = req.params.id
    res.send(itensCardapio[id])
})

app.get("/saladas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(itensSaladas)
})
 
app.get("/saladas/:id", function (req, res) {
    let id = req.params.id
    res.send(itensSaladas[id])
})

app.get("/bebidas", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(itensBebidas)
})
 
app.get("/bebidas/:id", function (req, res) {
    let id = req.params.id
    res.send(itensBebidas[id])
})

 app.listen(3000)