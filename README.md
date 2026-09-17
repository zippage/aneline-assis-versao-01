# Landing Page — Aneline Assis (Neuropsicopedagoga Clínica)

Projeto desenvolvido pela **ZipPage** para a Aneline Assis, neuropsicopedagoga
clínica que atende crianças e adolescentes com dificuldades de aprendizagem,
com consultório em Moema e atendimento também na Vila Mariana (São Paulo/SP).

O objetivo da página é claro: ser o primeiro contato de pais e responsáveis
que percebem sinais de dificuldade escolar no filho, transmitir autoridade
técnica e acolhimento ao mesmo tempo, e converter essa visita em uma
conversa pelo WhatsApp — que é como a Aneline efetivamente fecha os
atendimentos. Toda a estrutura da página (sinais → sobre a profissional →
como funciona → serviços → para quem é → consultório → dúvidas → CTA final)
foi pensada como uma jornada de confiança: a mãe/pai que chega com uma
dúvida vaga ("será que é falta de atenção ou é outra coisa?") deve sair
sabendo se aquele atendimento é para o filho dela e pronta para agendar.

## Stack

HTML, CSS e JavaScript vanilla — sem framework, sem build step, sem
dependências além das fontes do Google. Essa escolha é deliberada: é um
site institucional de página única, não uma aplicação, então qualquer
framework aqui seria peso sem benefício real de manutenção ou performance.

```
/
├── index.html
├── robots.txt
├── sitemap.xml
├── css/
│   ├── variables.css   → tokens: cor, tipografia, espaçamento, sombra
│   ├── style.css       → layout e componentes
│   └── responsive.css  → breakpoints (tablet e mobile)
├── js/
│   └── script.js       → menu mobile, scroll reveal, FAQ accordion,
│                          header on scroll, carrossel do consultório
└── assets/
```

## Identidade visual

Paleta extraída da logo oficial da Aneline (verde `#023A21`, dourado
`#D6C98F`) e recalibrada em `css/variables.css` para uso em interface:

- Verde profundo `--color-green-800` (`#0E3B27`) — cor de marca, usado em
  fundos escuros (cards de serviço, seção "Como funciona", CTA, rodapé).
- Dourado em duas escalas conforme o tamanho do texto — decisão tomada
  junto com a cliente após alguns ajustes de rodada:
  - `--color-gold-600` / `--color-gold-vivid`: usados em texto (eyebrows,
    links, destaque do título). A cliente priorizou um dourado mais vivo
    mesmo sabendo que o contraste ficou um pouco abaixo do recomendado
    pela WCAG AA (ver comentário no próprio arquivo `variables.css`) — é
    uma escolha estética consciente, não um descuido, mas vale reavaliar
    se um dia surgir reclamação de leitura por parte de visitantes.
  - `--color-gold-500` / `--color-gold-300`: sem essa restrição, usados
    em ícones, linhas, marcadores e botões (têm texto escuro por cima ou
    são puramente decorativos).
- `--color-text-soft`: cinza escurecido propositalmente (contraste ~13:1)
  depois que a cliente relatou dificuldade de leitura na primeira versão.
- Tipografia: Playfair Display (títulos, serifada, remete a elegância
  clínica) + Poppins (corpo, para leitura confortável em telas pequenas).

## Assets

Todas as fotos são da própria Aneline e de sessões reais de atendimento
(nenhuma foto de banco de imagens) — isso é proposital, reforça
autenticidade num nicho onde confiança é o principal fator de decisão dos
pais.

- `aneline-hero.jpg` — foto da Hero. Já é a segunda versão: a primeira foi
  trocada a pedido da própria cliente, por achar a original "artificial".
- `aneline-sobre.jpg` — foto usada na seção "Sobre".
- `atendimento-leitura.jpg` — seção "Para quem é o atendimento".
- `atendimento-1.jpg`, `atendimento-2.jpg`, `consultorio-memoria.jpg`,
  `consultorio-escrita.jpg`, `consultorio-encaixe.jpg` — as 5 fotos do
  carrossel da seção "Consultório" (`js/script.js`, função
  `initClinicCarousel`). `atendimento-2.jpg` já está recortada para remover
  uma listra preta que existia no topo da foto original.
- `logo-mark.png` / `logo-horizontal.png` / `logo-vertical.png` — logo em
  três variações, fundo removido.
- `favicon.png`, `favicon-32.png`, `apple-touch-icon.png`, `og-cover.jpg` —
  gerados a partir do material oficial de identidade visual.

Enviadas mas ainda não usadas em nenhuma seção (ficam disponíveis em
`assets/` para quando fizer sentido):
- `aneline-mesa.jpg` — segunda foto profissional (mesa/documento).
- `crianca-atividade.jpg` — criança com carrinhos.

## Decisões de UX que vale registrar

- Os 3 cards de "Serviços" foram padronizados na mesma cor (verde) a
  pedido da cliente. Também tirei a numeração 01/02/03 que existia antes:
  esses três serviços não são etapas de um processo, são ofertas em
  paralelo, então numerar sugeria uma sequência que não existe. Troquei
  por ícones. A numeração real de etapas ficou só em "Como funciona",
  que de fato é um processo sequencial (1→4).
- O "traço" antes dos eyebrows (pequenos rótulos acima dos títulos) virou
  só uma bolinha dourada, depois de duas rodadas de ajuste — a cliente
  achou o traço genérico.
- Fundos bege foram trocados por branco em todas as seções, a pedido da
  cliente, mantendo separação visual com uma borda sutil entre seções
  ao invés de contraste de cor.

## Antes de publicar

1. **Domínio real** — atualizar `<link rel="canonical">`, Open Graph,
   Twitter Card, `sitemap.xml` e `robots.txt` para o domínio final.
2. **Google Meu Negócio / Mapa** — se fizer sentido, dá pra incluir um
   `<iframe>` do Google Maps na seção "Consultório".
3. **Mais fotos do espaço físico** — o carrossel do consultório está bem
   servido (5 fotos), mas fotos da fachada/recepção ainda fortaleceriam
   a seção, se surgirem.

## Testado
- Responsivo (desktop, notebook, tablet, mobile) — testado com Playwright
  em 1440px e 390px de viewport antes de cada entrega.
- Carrossel testado com teclado (setas), clique e swipe em touch.
- Todos os textos são conteúdo final, revisado com a cliente ao longo de
  várias rodadas — não é lorem ipsum nem texto placeholder.
