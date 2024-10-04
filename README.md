# Jogo de Adivinhação de Letras

Este é um projeto desenvolvido para a disciplina Lógica de Programação II do meu curso na faculdade, onde o objetivo é adivinhar as letras de uma palavra oculta. O projeto consiste em um site simples com dois campos de entrada: um para inputar a palavra a ser descoberta e outro para fazer tentativas de adivinhar as letras dessa palavra. O jogador tem até 5 tentativas de erro para adivinhar as letras corretamente.

![[Imagem do Site](src/img/adivinhaPalavraLayout.png)

## Funcionalidades

- **Entrada de Palavra:** O usuário insere uma palavra oculta para ser adivinhada. Palavras com espaços não são permitidas.
- **Palavra com Traços:** Palavra inserida pelo usuário é mostrada em um campo com suas letras substituídas por traços. 
- **Tentativa de Adivinhação:** Após a palavra ser inputada, o jogador pode tentar adivinhar as letras da palavra. O campo de tentativa só é ativado após a palavra ter sido inputada corretamente.
- **Validação de Entradas:**
  - Não é permitido inputar palavras com espaço.
  - Não é permitido tentar adivinhar uma letra antes de a palavra ser inputada.
  - Não é permitido fazer uma tentativa com o campo de input vazio.
  - Não é permitido fazer um input com o mais de uma letra para a tentativa.
- **Display com a Palavra:** Ao acertar uma letra, traço correspondente a ela é apagado e substituído pela letra correta.
- **Limite de Tentativas:** O jogador pode realizar até 5 tentativas para adivinhar as letras, caso acerte não perde a tentativa.

## Como Usar

1. Insira a palavra a ser descoberta no primeiro campo de entrada.
2. Após inserir a palavra, tente adivinhar uma letra no segundo campo de entrada.
3. O jogo permite até 5 tentativas de adivinhar as letras, caso acerte não perde a tentativa.
4. As validações garantirão que entradas incorretas ou incompletas não sejam aceitas.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
