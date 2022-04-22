function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
    // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criaDias() {
    for (let day of dezDaysList){
      let dia = document.createElement('li');
      dia.className = 'day';
      dia.innerText = day;
      let dias = document.getElementById('days');
      dias.appendChild(dia);
      if (day === 24 || day === 31){
          dia.className += ' holiday';
        } else if (day === 4 || day === 11 || day === 18) {
          dia.className += ' friday';
        }else if (day === 25) {
            dia.className += ' holiday friday';
        }
    }
  }

  criaDias();
//   Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function criaBotao (texto, idBotao) {
    let btn = document.createElement('button');
    btn.type = 'button'
    btn.innerText = texto;
    btn.id = idBotao;
    return btn;
}

document.getElementsByClassName('buttons-container')[0].appendChild(criaBotao('Feriado', 'btn-holiday'));

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"
function destacaFeriados(evento) {
    let feriados = document.getElementsByClassName('holiday');
    let newColor = 'magenta';
    let defaultColor = 'rgb(238,238,238)'
    for (let i = 0; i < feriados.length; i += 1) {
        if (feriados[i].style.backgroundColor !== newColor){
            feriados[i].style.backgroundColor = newColor;
        } else if (feriados[i].style.backgroundColor !== defaultColor){
            feriados[i].style.backgroundColor = defaultColor;
        }
    }
}

let botaoFeriado = document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click', function(){destacaFeriados()});

//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
document.getElementsByClassName('buttons-container')[0].appendChild(criaBotao('Sexta-Feira', 'btn-friday'));
