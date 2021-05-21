<p align="center">
  <a href="https://youtube.com/playlist?list=PLLC9I8AGyoNi0dckQw0sQf0_MVMWTGIET">
    <img src="https://cdn.discordapp.com/attachments/725215239875854337/845130417816600576/Hnet.com-image.gif" width="550">
  </a>
</p>


# bot para discord
Este foi um bot que eu fiz faz algum tempo, e código estava uma bagunça, então decidi refazer o bot por completo e recomeçar com as melhores praticas que tenho no momento. Eu tenho uma playlist no meu canal do youtube caso queira aprender mais sobre: **[Assistir vídeo no YouTube](https://youtube.com/playlist?list=PLLC9I8AGyoNi0dckQw0sQf0_MVMWTGIET)**

|||
| :---: | :--- |
| <img src="https://yt3.ggpht.com/yti/ANoDKi6ijhtf2qBYvDOtCsvsfdQkdblyCMT-iEEkYV-Qq2k=s88-c-k-c0x00ffffff-no-rj-mo" width="300"> | **Bot para discord [@ronildes](https://github.com/Ronildes)**<br>O código antigo que fiz anteriormente desse bot foi um dos meus primeiros contatos com a programação. Aprendi inumeras coisas, treinei bastante lógica de programação e aprendi a mecher com um MySQL, tenho um repositório sobre bots para discord e ele pode facilitar a sua vida, caso queria:  **[Ir para o repositório](https://www.npmjs.com/package/discord-easy-functions)**<br>


# Configurando o projeto

## Obs:
O banco de dados é o postgreSQL, dentro de um container Docker.

#

- Antes de qualquer coisa, coloque eu seu terminal isso:
- com isso você vai instalar todas as dependências do projeto

```shell
  yarn
```

- Para você deixar o seu banco de dados compatível com este projeto:

```shell
  yarn typeorm migration:run
```

- Confira o arquivo "bot-config.ts" e coloque as configurações que deseja

```js
const settings = {
  prefix: '(Type your prefix here)',
  token: '(Type your token here)',
};

export default settings;
```

- Se você quiser iniciar o servidor use:

```shell
  yarn dev
```

# Autor
[<img src="https://avatars.githubusercontent.com/u/72399418?v=4" width=200><br><sub>@ronildes</sub>](https://github.com/ronildes)


