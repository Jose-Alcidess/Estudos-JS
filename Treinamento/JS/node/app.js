const validacao = require('./mode1');

if (validacao.hora > 12) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}