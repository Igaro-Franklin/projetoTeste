function selecionarOpcao(opcao, pessoa) {
    var checkbox = document.getElementById(opcao);
    var pessoaDiv = document.getElementById(pessoa);
    var label = document.querySelector('label[for="' + opcao + '"]').textContent;
    
    if (checkbox.checked) {
      pessoaDiv.innerHTML += label + '<br>';
    } else {
      pessoaDiv.innerHTML = pessoaDiv.innerHTML.replace(label + '<br>', '');
    }
  }
  


  function exibirValores() {
    var input01Value = document.getElementById('input01').value;
    var input02Value = document.getElementById('input02').value;
    var input03Value = document.getElementById('input03').value;
    var input04Value = document.getElementById('input04').value;
    var input05Value = document.getElementById('input05').value;
    var input06Value = document.getElementById('input06').value;
    var input07Value = document.getElementById('input07').value;
    var input08Value = document.getElementById('input08').value;
    var input09Value = document.getElementById('input09').value;
    var input10Value = document.getElementById('input10').value;
    var input11Value = document.getElementById('input11').value;
    var input12Value = document.getElementById('input12').value;
    var input13Value = document.getElementById('input13').value;

  
    document.getElementById('span1').textContent = input01Value;
    document.getElementById('span2').textContent = input02Value;
    document.getElementById('span3').textContent = input03Value;
    document.getElementById('span4').textContent = input04Value;
    document.getElementById('span5').textContent = input05Value;
    document.getElementById('span6').textContent = input06Value;
    document.getElementById('span7').textContent = input07Value;
    document.getElementById('span8').textContent = input08Value;
    document.getElementById('span9').textContent = input09Value;
    document.getElementById('span10').textContent = input10Value;
    document.getElementById('span11').textContent = input11Value;
    document.getElementById('span12').textContent = input12Value;
    document.getElementById('span13').textContent = input13Value;
  }



  function gerarPDF() {
    var doc = new jsPDF();
    var selecionadasDiv = document.getElementById('selecionadas');
    var conteudo = selecionadasDiv.innerText;
    
    doc.text(conteudo, 10, 10);
    doc.save('conteudo.pdf');
}
  