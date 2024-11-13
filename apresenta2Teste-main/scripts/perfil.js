// Função que verifica se o usuário está logado e exibe seus dados
function carregarPerfil() {
    // Verifica se os dados do usuário estão no localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Se o usuário estiver logado (dados no localStorage), exibe suas informações
    if (usuario) {
        document.getElementById('nome-usuario').textContent = usuario.nome;
        document.getElementById('email-usuario').textContent = usuario.email;
    } else {
        // Se não houver dados, redireciona para a página de login
        window.location.href = 'login.html';
    }
}

// Função para sair (limpar os dados do localStorage)
function sair() {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html'; // Redireciona para a tela de login
}

// Carrega as informações do perfil ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarPerfil();
    
    // Adiciona a funcionalidade do botão sair
    document.getElementById('logout-btn').addEventListener('click', sair);
});
