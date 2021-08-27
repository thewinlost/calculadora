async function abreAdd(req, res){
    res.render("calculadora/add.ejs", {});
}

async function add(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var operacao = req.body.operacao;
    var resultado;

    if (operacao == "Soma"){
        resultado = parseInt(num1) + parseInt(num2);
    }
    else if (operacao== "Subtração"){
        resultado = parseInt(num1) - parseInt(num2);
    }
    else if (operacao== "Multiplicação"){
        resultado = parseInt(num1) * parseInt(num2);
    }
    else if (operacao == "Divisão"){
        resultado = parseInt(num1) / parseInt(num2);
    }

    res.render("calculadora/list.ejs", {resultado:resultado});
}

module.exports = {
    add,
    abreAdd,
};