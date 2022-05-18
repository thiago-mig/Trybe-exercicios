const {sum, myRemove} = require('./funcoes.js');

//🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b

describe('Função que realiza a soma de 2 parâmetros:', () => {
  describe('Verifica se está realizando a soma de valores corretos:', () => {
    it('testa se o retorno de 4 + 5 é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('testa se o retorno de 0 + 0 é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
  });
  describe('Verifica se lança exceção ao inserir valores não numéricos:', () => {
    it('Testa se é lançado erro ao lançar valores em formato incorreto como parâmetro.', () => {
        expect(() => sum(4, '5')).toThrow(Error);
    });

    it("Testa se a mensagem de erro é 'parameters must be numbers'. ", () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
  });

});
//🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

describe('2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

});

