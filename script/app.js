import { ufSelect, cidadeSelect ,carregarCidades, carregarUFs, carregarBairros} from './componentes/consumindoApi.js';

carregarUFs()

ufSelect.addEventListener('change', (e) => {
    carregarCidades();
  });
  
cidadeSelect.addEventListener('change', (e) => {
    carregarBairros();
  });


  
