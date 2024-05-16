const express = require('express')
const app = express()
const usuario=[
    {nome:'carlos', idade:20},
    {nome:'pedro', idade:30,peso:100},
    {nome:'jr', idade:30,peso:100, cep:'58221-00'}
]
// app.use((req,res,next)=>{
//     res.send(usuario)
// })
// app.use("/nome",(req,res,next)=>{
//     res.send(usuario[1].nome)
// })
app.use("/soma",(req,res,next)=>{
    let total=0
    for(i=0; i<usuario.length; i++){
        total=total+parseInt(usuario[i].idade)
    }
    res.send('Soma total:'+total)
})
module.exports = app