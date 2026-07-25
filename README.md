# Aneline Assis — Landing Page (Neuropsicopedagogia Clínica)

## Estrutura de arquivos
```
/
├── index.html
├── robots.txt
├── sitemap.xml
├── css/
│   ├── variables.css   (tokens: cor, tipografia, espaçamento)
│   ├── style.css       (layout e componentes)
│   └── responsive.css  (tablet e mobile)
├── js/
│   └── script.js       (menu mobile, scroll reveal, FAQ, header)
└── assets/
    └── favicon.svg
```

## Fotografias e logo utilizados

Todas as imagens enviadas pela Aneline já estão aplicadas em `assets/`:

- `aneline-hero.jpg` — foto de perfil (Hero).
- `aneline-sobre.jpg` — foto da profissional usada na seção "Sobre".
- `atendimento-1.jpg` — usada na seção "Para quem é o atendimento".
- `atendimento-2.jpg` — galeria "Consultório" (layout single, `atendimento-3.jpg` removida por estar fora de foco; adicionar 2ª foto quando houver novo material).
- `logo-mark.png` — símbolo da logo (fundo removido), usado no cabeçalho e no favicon.
- `logo-horizontal.png` — versão horizontal da logo (fundo removido), usada no rodapé.
- `logo-vertical.png` — versão vertical/completa da logo (fundo removido), disponível para uso futuro (ex.: materiais impressos, assinatura de e-mail).
- `favicon.png`, `favicon-32.png`, `apple-touch-icon.png` — gerados a partir da logo real.
- `og-cover.jpg` — capa para compartilhamento em redes sociais, gerada a partir da foto de perfil.

Imagens enviadas mas não aplicadas em nenhuma seção no momento (disponíveis
em `assets/` para uso futuro, se desejar):
- `aneline-mesa.jpg` — segunda foto profissional enviada (mesa/documento).
- `crianca-atividade.jpg` — foto da criança com carrinhos.

A foto do grupo em evento (duas mulheres de blazer branco) não foi utilizada
na página — se fizer sentido, pode entrar futuramente em um bloco de
"presença em congressos" ou nas redes sociais.

## Paleta ajustada à identidade real

As cores foram recalibradas a partir da logo oficial enviada (verde
`#023A21` e dourado `#D6C98F`), mantidas em `css/variables.css`.

## Antes de publicar

1. **Domínio real** — atualize as URLs em `<link rel="canonical">`, Open
   Graph, Twitter Card, `sitemap.xml` e `robots.txt` para o domínio final.
2. **Google Meu Negócio / Mapa** — se desejar, é possível incluir um
   `<iframe>` do Google Maps na seção "Consultório".
3. **Mais fotos** — a galeria do consultório está com 2 fotos; adicionar mais
   fotos do ambiente (recepção, fachada) fortalece ainda mais essa seção.

## Paleta e tipografia
- Verde profundo `#0E3B27` (extraído da logo `#023A21`), dourado `#C6A75E`
  (extraído da logo `#D6C98F`), branco quente `#FBF9F3`.
- Playfair Display (títulos) + Poppins (corpo), via Google Fonts.

## Testado
- Responsivo (desktop, notebook, tablet, mobile).
- Sem frameworks, sem dependências externas além das fontes do Google.
- Todos os textos são conteúdo final, prontos para publicação.
