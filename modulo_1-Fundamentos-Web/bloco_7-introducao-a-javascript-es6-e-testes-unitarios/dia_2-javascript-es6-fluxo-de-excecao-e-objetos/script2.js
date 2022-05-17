const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  const adicionaTurno = (objeto, chave, valor) => {
    objeto[chave] = valor;
  }

  adicionaTurno(lesson2, 'turno', 'noite');

  console.log(lesson2);

  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  const listaKeys = (obj) => {
    console.log(Object.keys(obj));
  }

  listaKeys(lesson1);

  //Crie uma função para mostrar o tamanho de um objeto.

  const tamanhoDoObjeto = (obj) => {
    console.log(Object.keys(obj).length);
  }

  tamanhoDoObjeto(lesson1);

  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

  const listaValues = (obj) => {
      console.log(Object.values(obj));
  }

  listaValues(lesson1);

  //Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  //Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

  const totalEstudantes = (obj) => {
     let estudantes = 0;
     for (let lesson in obj){
        estudantes += obj[lesson].numeroEstudantes;
     }
     return estudantes;
  }

  console.log(totalEstudantes(allLessons));
  
  //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  
  const getValue = (key, position) => {
    const lesson = allLessons[key];
    const lessonValues = Object.values(lesson);
    return lessonValues[position];
  }

  console.log(getValue('lesson1', 0));

  //Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

  const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj);
    let resultado;
    for (let i in array) {
      if (array[i][0] === key && array[i][1] === value) {
        resultado = true;
      } else {
        resultado = false;
      }
    }
    return resultado;
  }

  console.log(verifyPair(lesson3, 'turno', 'noite'));

  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

  // Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

  const quantosAlunos = () => {
    let array = Object.values(allLessons);
    let alunos = 0;
    for (let obj of array) {
      if (obj['materia'] === 'Matemática'){
        alunos += obj['numeroEstudantes'];
      }
    }
    return alunos;
  }

  console.log(quantosAlunos());