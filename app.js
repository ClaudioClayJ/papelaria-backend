const express = require('express')
const app = express()
const cep = [
    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    },
    {
        "cep": "77814-790",
        "logradouro": "Rua 20",
        "complemento": "",
        "bairro": "Loteamento Monte Sinai",
        "localidade": "Araguaína",
        "uf": "TO",
        "ibge": "1702109",
        "gia": "",
        "ddd": "63",
        "siafi": "9241"
      }
]
const usuario=[
    {nome:'carlos', idade:20},
    {nome:'pedro', idade:30,peso:100},
    {nome:'jr', idade:30,peso:100, cep:'58221-00'}
]

app.use("todos",(req,res,next)=>{
    res.send(usuario)
})
app.use("/nome",(req,res,next)=>{
    res.send(usuario[1].nome)
})
app.use("/soma",(req,res,next)=>{
    let total=0
    for(i=0; i<usuario.length; i++){
        total=total+parseInt(usuario[i].idade)
    }
    
    res.send('Soma total:'+total)
})
// app.use("/cep",(req,res,next)=>{
//         res.send(cep)
// })
// app.use("/cep/:valor",(req,res,next)=>{
//     const valor = req.params.valor
//     res.send(valor) 
// })
// app.use("/cep/:locais",(req,res,next)=>{
//     const locais = cep.filter(local =>(
//         local.cep == "01001-000"));
//         res.send(locais)
// })
// app.use("/cep/:valor",(req,res,next)=>{
//     const valor = req.params.valor
//     const locais = cep.filter(local => local.cep === valor);
//     res.send(locais)
// })
app.use("/viacep/:valor",(req,res,next)=>{
    const valor = req.params.valor
    const resultado=""
    const url = "https://viacep.com.br/ws/"+valor+"/json"
    fetch(url).then(resposta =>{
        console.log(resposta)
    })
})
module.exports = app