## Para ir além

Conseguiu realizar toda a atividade? Vamos melhorar ainda mais o site.

A primeira coisa que você deve estar se perguntando é: "Mas como? Ele nem viu o meu site e vai dar opinião." Realmente, eu não vou, mas o Google vai:

- Build o seu site com o comando:

    ```jsx
    gatsby build
    ```

- Instale o http-server

    ```bash
    npm i -g http-server
    ```

- Sirva o seu site estaticamente, no terminal utilize o seguinte comando

    ```bash
    http-server public
    ```

- Abra  Navegador Google Chrome ( o Opera também serve, mas o Chrome é melhor para isso) no [localhost:8080](http://localhost:8080)
- No Google Chrome abra as ferramentas de desenvolvedor com o Crtl+Shift+i
- Nas abas superiores onde tem escrito Elements e Console, navegue até o Lighthouse
- Clique em generate report, você será apresentado a diversas métricas e sugestões de melhorias para o seu site
- Tente aplicar as melhorias para obter a maior nota possível (100 é bem difícil) em Performance e Accessibility, em SEO e Best practices é possível atingir 100.