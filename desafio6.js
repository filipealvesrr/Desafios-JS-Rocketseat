// Busca por tecnologia

function checaSeUsuarioUsaCss(usuario) {
    let checksum = false;

    for(let tecnologia of usuario.tecnologias) {
        if(tecnologia === 'CSS') {
            checksum = true;
        }
    }

    return checksum;
}

const usuarios = [
    {nome: 'Carlos', tecnologias: ['HTML', 'CSS']},
    {nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS']},
    {nome: 'Tuane', tecnologias: ['HTML', 'Node.js']},
]

for(let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i]);

    if(usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
