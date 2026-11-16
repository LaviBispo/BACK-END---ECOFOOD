
export function validarSenha(senha: string) {
    const erros: string[] = [];

    if (senha.length < 8) {
        erros.push('A senha deve ter no mínimo 8 caracteres.');
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push('A senha deve ter uma letra maiúscula.');
    }

    if (!/[a-z]/.test(senha)) {
        erros.push('A senha deve ter uma letra minúscula.');
    }

    if (!/[0-9]/.test(senha)) {
        erros.push('A senha deve ter um número.');
    }

    if (!/[^A-Za-z0-9\s]/.test(senha)) {
        erros.push('A senha deve ter um símbolo.');
    }

    if (/\s/.test(senha)) {
        erros.push('A senha não pode conter espaços.');
    }

    return {
        valida: erros.length === 0,
        erros,
    };
}
