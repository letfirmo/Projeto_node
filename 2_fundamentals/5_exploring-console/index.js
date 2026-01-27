//mais de um valor
const x = 10;
const y = "João";
const z = [1, 2];

console.log(x, y, z);

//objeto com vários valores
const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

console.log(pessoa);    

//tabela
console.table(pessoa); 

//aviso
console.warn('Cuidado!');

//erro
console.error('Algo deu errado!');

//limpar console
 
//contagem
console.count('contador');
console.count('contador');
console.count('contador');
console.countReset('contador');
console.count('contador'); 

//tempo
console.time('tempo de execução');
for (let i = 0; i < 1000000; i++) {
    //simulação de processamento
}  
console.timeEnd('tempo de execução');

//debug
console.debug('Mensagem de debug');

//info
console.info('Mensagem informativa');

//assert
console.assert(1 === 2, '1 não é igual a 2');  
console.assert(2 === 2, 'Isso não será exibido');

//stack trace
function funcA() {
    funcB();
}
function funcB() {
    funcC();
}
function funcC() {
    console.trace('Rastreamento de pilha');
}
funcA();

//grupo
console.group('Grupo de mensagens');
console.log('Mensagem 1');
console.log('Mensagem 2');
console.groupEnd('Grupo de mensagens');

//mensagem formatada
console.log('Olá, meu nome é %s e tenho %d anos.', 'Ana', 25);

//mensagem com estilo CSS (funciona em navegadores)
console.log('%cEsta é uma mensagem estilizada', 'color: blue; font-size: 20px;');

//mensagem com emoji
console.log('Tudo certo! ✅');

//mensagem multilinha
console.log(`Esta é uma mensagem
que se estende por
várias linhas.`);

//mensagem com objeto complexo
const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2021,
    especificacoes: {
        motor: 'V8',
        potencia: '450hp',
        transmissao: 'Manual'
    }
};
console.log(carro);

//mensagem com array
const frutas = ['Maçã', 'Banana', 'Laranja', 'Manga'];
console.log(frutas);   
//mensagem com data e hora

const agora = new Date();
console.log('Data e hora atuais:', agora);

//Limpar console
setTimeout(() => {
    console.clear();
}, 2000); // Limpa o console após 2 segundos