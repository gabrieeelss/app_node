const express = require('express')
const app = express()
 
app.use(express.json()); 
const itensCardapio = [
    {
        "id": 1,
        "nome": "Marmita Delicia",
        "descricao": "arroz, feijão, batata frita, bife a cavalo",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeiy8Ogi21GXZa9K314p0yQICeotbB7K9nQ&s",
        "preco": 29.0
    },
    {
        "id": 2,
        "nome": "Marmita Parmegiana",
        "descricao": "arroz, batata frita, frango a milanesa com molho de tomate e presunto e queijo",
        "foto": "https://www.estadao.com.br/resizer/v2/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg?quality=80&auth=1e80a50a274f370b5a498c5c05e3c3922fcfcc23a8d31821b4ab182863e56060&width=720&height=410&focal=758,1139%22%22",
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
 
app.get("/marmitas", function (req, res) {
    res.send(itensCardapio)
})
 
app.get("/marmitas/:id", function (req, res) {
    let id = req.params.id
    res.send(itensCardapio[id])
})
 app.listen(3030)