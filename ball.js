var john1 =89
var john2 =120
var john3 =103
var mike1 =116
var mike2 =94
var mike3 =123
var johnp
johnp = (john1+john2+john3)/3
var mikep
mikep = (mike1+mike2+mike3)/3
if (johnp>mikep){
    console.log('两队队平均分分别为：'+johnp+" "+mikep)
    console.log('john队胜利')
}else if(mikep>johnp){
    console.log('两队平均分分别为：'+johnp+" "+mikep)
    console.log("mike队胜利")
}else{
    console.log('两队平均分分别为：'+johnp+" "+mikep)
    console.log("两队平局")
}

var mary1 = 97
var mary2 = 134
var mary3 = 105
var maryp = (mary1+mary2+mary3)/3
if(johnp>mikep&&johnp>maryp){
    console.log('三队平均分分别为：'+johnp+" "+mikep+" "+maryp)
    console.log('john队胜利')
}else if (mikep>johnp&&mikep>maryp){
    console.log('三队平均分分别为：'+johnp+" "+mikep+" "+maryp)
    console.log('mike队胜利')
}else if(maryp>johnp&&maryp>mikep){
    console.log('三队平均分分别为：'+johnp+" "+mikep+" "+maryp)
    console.log('mary队胜利')
}else{
    console.log('三队平均分分别为：'+johnp+" "+mikep+" "+maryp)
    console.log('三队平局')
}

