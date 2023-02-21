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

        let resultado = calculadora.mult(1, 2)
        expect(resultado).toEqual(2)

        resultado = calculadora.mult(-1, 2)
        expect(resultado).toEqual(-2)

        resultado = calculadora.mult(0.22, 2)
        expect(resultado).toEqual(0.44)
       
        resultado = calculadora.mult(0, 2)
        expect(resultado).toEqual(0)
       
        resultado = calculadora.mult(6/2, 2)
        expect(resultado).toEqual(6)
        
        resultado = calculadora.mult(2, 6/2)
        expect(resultado).toEqual(6)

        resultado = () => calculadora.mult("a", 2);
        expect(resultado).toThrow('Não é um número')

        resultado = () => calculadora.mult(2, "a");
        expect(resultado).toThrow('Não é um número')


    })

    it('Operação de Divisão', () => {

        let resultado = calculadora.div(2, 1)
        expect(resultado).toEqual(2)

        resultado = calculadora.div(1.22, 2)
        expect(resultado).toEqual(0.61)
       
        resultado = calculadora.div(2, 1.22)
        expect(resultado).toEqual(1.639344262295082)
        
        resultado = calculadora.div(-6,2)
        expect(resultado).toEqual(-3)

        resultado = calculadora.div(0, 2)
        expect(resultado).toEqual(0)
        
        resultado = calculadora.div(2/4, 2)
        expect(resultado).toEqual(0.25)
       
        resultado = calculadora.div(2, 2/8)
        expect(resultado).toEqual(8)

        resultado = () => calculadora.div("a", 2);
        expect(resultado).toThrow('Não é um número')

        resultado = () => calculadora.div(2, "a");
        expect(resultado).toThrow('Não é um número')


    })

    it('Operação de Raiz', () => {

        let resultado = calculadora.raiz(16)
        expect(resultado).toEqual(4)

    })

})