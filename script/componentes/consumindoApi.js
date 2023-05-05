const ufSelect = document.getElementById('uf');
const cidadeSelect = document.getElementById('cidade');
const bairroSelect = document.getElementById('bairro');

function carregarUFs() {
  ufSelect.innerHTML = ''
  ufSelect.add(new Option('Selecione...', ''))

  cidadeSelect.innerHTML = '';
  cidadeSelect.add(new Option('Selecione...', ''));

  bairroSelect.innerHTML = '';
  bairroSelect.add(new Option('Selecione...', ''));

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(data => {
      for (let uf of data) {
        ufSelect.add(new Option(uf.nome, uf.sigla));
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function carregarCidades() {
  cidadeSelect.innerHTML = '';
  cidadeSelect.add(new Option('Selecione...', ''));
  const uf = ufSelect.value;
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .then(response => response.json())
    .then(data => {
      for (const cidade of data) {
        cidadeSelect.add(new Option(cidade.nome, cidade.id));
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function carregarBairros() {
  bairroSelect.innerHTML = '';
  bairroSelect.add(new Option('Selecione...', ''));

  const uf = ufSelect.value;

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/subdistritos
  `)
    .then(response => response.json())
    .then(data => {
      for (const bairro of data) {
        bairroSelect.add(new Option(bairro.nome, bairro.nome));
      }
    })
    .catch(error => {
      console.error(error);
    });
}


export { carregarUFs, carregarCidades, carregarBairros, ufSelect, cidadeSelect};


