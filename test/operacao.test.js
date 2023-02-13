const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacao.js')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.sum(0, 2);
        expect(resultado).toEqual(2)

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow('Não é um número')

        resultado = () => calculadora.sum(2, "b");
        expect(resultado).toThrow('Não é um número')
    })

    it('Operação de Subtração', () => {
        let resultado = calculadora.sub(1, 2)
        expect(resultado).toEqual(-1)

        resultado = calculadora.sub(-1, 2)
        expect(resultado).toEqual(-3)

        resultado = calculadora.sub(0, 2)
        expect(resultado).toEqual(-2)

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow('Não é um número')

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow('Não é um número')
    })

    it('Operação de Multiplicação', () => {
        
        let resultado = calculadora.mult(1,2)
        expect(resultado).toEqual(2)

        resultado = calculadora.mult(-1, 2)
        expect(resultado).toEqual(-2)

        resultado = calculadora.mult(0, 2)
        expect(resultado).toEqual(0)

        resultado = () => calculadora.mult("a", 2);
        expect(resultado).toThrow('Não é um número')

        resultado = () => calculadora.mult(2, "a");
        expect(resultado).toThrow('Não é um número')
       

    })

})