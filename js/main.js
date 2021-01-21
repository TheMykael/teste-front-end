/*
$.getJSON("js/products.json", function(data){

	var tamanho = produtos.products.length,
	    arrayProdutos = [];

	for (var i=0; i < tamanho; i++){
		var nome = produtos.products[i].productName;
		var descricao = produtos.products[i].descriptionShort;
		var foto = produtos.products[i].photo;
		var preco = produtos.products[i].price;

		var stringHTML = "<b>"+nome+"<b>"+
						"<br>Descrição: "+descricao+
						"<br>Foto: "+foto+
						"<br>Preço: "+preco+
		arrayProdutos.push(stringHTML);
	}

	function preencheDados(arrayProdutos){
	    var consumir_vitrine = ["bateria","pratos","pedal", "modulo", "prato17", "bag", "banco", "pedal_percussao"];
	    for (var i=0; i < consumir_vitrine.length; i++){
	      $('#li_'+consumir_vitrine[i]).html(arrayProdutos[i]);
	    }
	}

	preencheDados(arrayProdutos);
});

/*
for (var i in data) { //vai passar por todos os objetos dentro do array
		nome = data[i]["productName"];
		descricao = data[i]["descriptionShort"];
		foto = data[i]["photo"];
		preco = data[i]["price"];
    }
*/

/*
var $item = $('.vitrine_produtos ul li'),
	$dialog = $('.dialog');

$dialog.dialog({
    autoOpen: false,
    modal: true
});

$item.on('click', function() {
    var $id = $(this).data('id'),
        $name = $(this).data('name'),
        $description = $(this).data('description'),
        $photo = $(this).data('photo'),
        $price = $(this).data('price'),
    
    $dialog.html('Este é o ' + $name + '. Ele tem ' + $age + ' anos e é o ' + $id + 'º usuário registrado.');
    $dialog.dialog('open');
});
*/

import dadosCrus from './products.json';

const dadosCrus = fs.readFileSync("products.json");
const dadosEmJson = dadoscurs.json()
const listProdutos = Array.from(dadosEmJson.produts)
let listaHTML = ""
listProdutos.forEach( (umProduto) => {
      const { productName , descriptionShort , photo , price } = umProduto
   const item = `<li> Name  :${productName} <br>Description : ${descriptionShort} <br>photo : ${photo} 
<br>price : ${price} </li>`
listaHtml += item
});