const sum = require('./funcoes.js');

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

