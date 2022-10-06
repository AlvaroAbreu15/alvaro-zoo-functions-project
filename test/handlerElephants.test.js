const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento \'count\' deve retornar 4.', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se passado o argumento \'names\', deverá retornar um array de nomes que contenha o nome Jefferson.', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Se passado o argumento \'averageAge\', deverá retornar um numero próximo a 10.5.', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Para o argumento \'location\' deve retornar a string \'NW\'.', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Para o argumento \'popularity\', a função deve retornar um numero igual ou maior que 5.', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Para o argumento \'availability\', a função deve passar um array de dias que não contenha \'Monday\'.', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Quando não passado nenhúm argumento, a função retorna undefined.', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Quando nao passada uma string, a função retorna \'Parâmetro inválido, é necessário uma string\'.', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passando por argumento um objeto vazio {} deve retornar a string \'Parâmetro inválido, é necessário uma string\'', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants('string')).toBeNull();
  });
});
