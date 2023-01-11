# Controle de pedidos - CT do Queijo

O projeto de controle de pedidos para gerenciamento do CT do Queijo do IFRN - Campus Currais Novos foi desenvolvido para avaliação da Disciplina de Projeto de Desenvolvimento de Software do professor Andouglas.

## Tecnologia utilizadas

- 🐬 Banco de dados MySql
- 👨‍💻 Backend construído com o Framework Express
- 💻 Frotend feito com ReactJS
- 💅 Estilização com Styled-Components (css-in-js)

## Instalação e Execução

1. Antes de mais nada, para a execução desse projeto é necessária a instalação do NodeJS e do MySql.

2. Tambem é necessário instalar todas as dependências que serão utilizadas pela aplicação, tanto no front quando no backend. Assim, estando na raiz do projeto, será necessário utilizados os seguintes comandos.
   <code>
   cd client <br/>
   npm install <br/>
   cd ../api <br/>
   npm install <br/>
   </code>

3. Agora, antes de estartarmos a aplicação, é necessário observar atentamente aos dos presentes nos arquivos <code>api\db\connection.js</code> e <code>api\db\initialize.js</code>, pois são eles que possuem os dados para conexão com o banco de dados. Dessa forma, devem estar de acordo com a máquina utilizada pelo usuário.

4. É hora de iniciar a aplicação e o servidor. Ambos estão rodando em portas diferentes. Enquando o front-end está na porta 3000, o server encontra-se na porta 9000. Iremos utilizar os seguintes comandos:<br/>
   <code>
   cd api <br/>
   nodemon <br/>
   cd ../client <br/>
   npm start <br/>
   </code>

5. A interface navegável abrirá automaticamente no navegador padrão do dispositivo e já está pronta para uso. Para visualizar as funções do administrador, é necessário fazer o login em uma conta com privilégios. Por padrão, é possível utilizar estas credenciais:
<table>
    <tr>
        <td>email</td>
        <td>admin@admin.com</td>
    </tr>
    <tr>
        <td>senha</td>
        <td>admin</td>
    </tr>
</table>

## Processo de desenvolvimento

O desenvolvedor desta aplicação estave praticamente sem tempo para desenvolvê-la. Assim, a decisão mais sensata não foi utilizar alguma metodologia ágil, mas sim o eXtreme Go Horse. Aliás, se funciona, por que eu vou me preocupar?
