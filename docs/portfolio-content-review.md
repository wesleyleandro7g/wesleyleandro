# Revisão do portfólio

Referência factual: [currículo ATS fornecido](https://docs.google.com/document/d/1zdt6jtrkUrjs5vh_o8vRK1d1URrBanTuaQYUp6oFEWo/edit), instruções do proprietário e confirmação do telefone nesta conversa. Revisão realizada em 6 de novembro de 2026.

## Posicionamento e histórico

O posicionamento é **Senior Software Engineer**, com especialização em **Frontend Engineering — React, Next.js e TypeScript**. Backend, arquitetura, qualidade e cloud aparecem como experiência complementar; AI Engineering aparece como área de estudo, sem alegar produtos de IA em produção.

| Empregadora / modalidade | Cargo em inglês | Período |
| --- | --- | --- |
| AZX | Senior Frontend Developer | Mar 2024–Present |
| James Moto Shop | Full Stack Developer | Sep 2023–Mar 2024 |
| Elint Tech | Frontend Developer | Aug 2022–Mar 2024 |
| Desencoder | Full Stack Developer | Mar 2019–Aug 2022 |
| Independent | Freelance Full Stack Developer | May 2017–Apr 2020 |

Penzack é identificado como produto desenvolvido na AZX. Os períodos concomitantes foram preservados conforme as referências. Formação: IFNMG — Instituto Federal do Norte de Minas Gerais, 2018–2022; nenhum curso ou grau foi inferido.

Hero, About, Experience, projetos, metadados e conteúdo estruturado foram alinhados em inglês, português e espanhol. O histórico profissional vem antes das competências e dos interesses na página inicial. Os projetos selecionados priorizam Penzack, James Moto Shop e Elint Tech; Desencoder permanece na página de projetos e em sua rota original.

## Métricas e limites de atribuição

| Dado publicado | Contexto |
| --- | --- |
| 8+ anos | Experiência profissional |
| 1M+ usuários | Escala da plataforma Penzack, sem atribuir aquisição de usuários ao engenheiro |
| 1.000+ leads por mês | Plataforma comercial da James Moto Shop |
| 40% de melhoria na taxa de fechamento | Sistema de gestão de vendas, trabalho freelance |
| 60% de redução no tempo administrativo | Dashboard de monitoramento de chamadas, trabalho freelance |
| 6% de aumento de vendas | Recursos de promoção do agregador de negócios locais, trabalho freelance |

As três métricas de trabalhos freelance não foram atribuídas à James Moto Shop, à AZX, à Elint Tech ou à Desencoder.

## Afirmações removidas e pendências de confirmação

- **60% de melhoria no carregamento:** não há benchmark nas referências. Removida. O resultado de 60% documentado pertence ao dashboard administrativo.
- **Três migrações de plataforma:** não há comprovação desse total. Mantida apenas a migração documentada de Create React App para Next.js na Elint Tech.
- **Dois milhões de usuários:** substituído por 1M+ em todas as traduções e páginas.
- **Arquiteturas específicas:** removidas alegações sem respaldo sobre performance budgets, planos de rollback, camadas compartilhadas de dados, estratégias de cache, escalabilidade horizontal e pipelines específicos dos estudos de caso.
- **Stack da Desencoder:** a referência não detalha tecnologias desse projeto. A seção de tecnologias é omitida nesse estudo, em vez de atribuir a ele a stack geral do perfil.
- **Artigos:** os três links anteriores apontavam para o perfil do LinkedIn. Foram retirados da lista de publicados até existirem URLs diretas verificadas. A rota de artigos permanece com aviso de conteúdo futuro e temas planejados.
- **IA em produção:** faltam projetos e resultados documentados; a apresentação indica exploração e estudo.
- **Formação:** nome do curso e grau não constam na referência e não foram inventados.
- **Google Docs original:** o proprietário confirmou o telefone **+55 38 99993-2655**. O WhatsApp e o PDF local usam esse número. O currículo original no Google Docs ainda contém **+55 38 99992-2655** e precisa ser atualizado em sua origem. Nenhum documento externo foi editado.

## SEO, acessibilidade e ativos

- Títulos e descrições específicos para cada idioma e estudo de caso, com foco em frontend, React, Next.js, TypeScript e oportunidades internacionais.
- Canonical e hreflang existentes preservados; adicionados locales alternativos de Open Graph, autor e texto alternativo da imagem no Twitter.
- JSON-LD de Person com cargo, AZX, IFNMG, competências e idiomas documentados. ProfilePage na home e WebPage nas demais páginas, vinculados à pessoa.
- Imagem Open Graph atualizada; currículo PDF substituído pela exportação ATS, com apenas o telefone corrigido na cópia local.
- Mais contraste no texto secundário, foco de teclado explícito, deslocamento de âncoras para o cabeçalho fixo, headings semânticos nos estudos de caso e quebra de linha nos cabeçalhos dos cards.
- Removida a animação contínua do indicador de disponibilidade. Sem novas dependências do projeto; Astro, componentes, fontes e design system preservados.

## Arquivos alterados

Conteúdo e dados:

- `src/i18n/messages/en.json`
- `src/i18n/messages/pt.json`
- `src/i18n/messages/es.json`
- `src/utils/data.ts`

Componentes e páginas:

- `src/components/sections/hero-section.astro`
- `src/components/sections/about-section.astro`
- `src/components/sections/experience-section.astro`
- `src/components/sections/selected-work-section.astro`
- `src/pages/[locale]/index.astro`
- `src/pages/[locale]/work/[slug].astro`
- `src/pages/[locale]/writing/index.astro`

SEO, estilos e ativos:

- `src/layouts/site-layout.astro`
- `src/lib/metadata.ts`
- `src/styles/globals.css`
- `scripts/generate-social-assets.mjs`
- `public/opengraph-image.png`
- `public/resume.pdf`

Verificação e documentação:

- `package.json`
- `README.md`
- `scripts/portfolio.test.mjs`
- `docs/portfolio-content-review.md`

## Quality gates

- `pnpm lint`: aprovado.
- `pnpm check`: aprovado, sem erros, avisos ou hints.
- `pnpm test`: aprovado; cobre paridade de traduções, histórico, períodos, contexto de métricas e ausência de artigos não verificados.
- `pnpm build`: aprovado; 23 páginas geradas.
- Inspeção do HTML: 21 páginas localizadas e 318 verificações de links internos, ativos e âncoras; canonical, hreflang, metadados, JSON-LD e inclusão da nova rota no sitemap aprovados.
- PDF: texto comparado à exportação ATS, com alteração exclusiva do telefone; duas páginas renderizadas e inspecionadas, segunda página visualmente idêntica à fonte.
- Imagem Open Graph: renderização inspecionada.
- Prévia local: HTTP 200.
- GitHub: perfil público acessível. LinkedIn: URL consistente com o ATS e com o GitHub, mas a leitura pública foi bloqueada pelo serviço (HTTP 999).
- Detector Impeccable: uma recomendação sobre o grid decorativo já existente. Preservado por fazer parte da identidade visual solicitada.
- **Limite de verificação:** a ferramenta de navegador falhou ao criar/selecionar abas; a validação visual final em desktop/mobile e os controles interativos precisam de conferência em um navegador disponível. Não há alegação de aprovação de Lighthouse ou de testes visuais automatizados.

Alterações feitas no checkout local; sem publicação ou deploy.
