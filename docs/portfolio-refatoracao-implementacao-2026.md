# Refatoração do portfólio — implementação

Implementação local em 17/11/2026, baseada em `portfolio_wesley_plano_refatoracao_2026.md`. Não houve deploy.

## Entregas

- Homepage editorial com posicionamento Senior Software Engineer / Full Stack & AI Engineering, 8+ anos e base principal em React/Node.js.
- Métricas: experiência, escala da Penzack (1M+, contribuição em equipe), 1,000+ leads/mês e liderança de dois desenvolvedores e um designer. Removidas métricas sem suporte no plano.
- Ordem: Hero → Impacto → Projetos → Engenharia na prática → Liderança → Sobre → Stack → Experiência → Escrita → Contato.
- Sete cases em EN/PT/ES, com contexto, desafio, contribuição individual, abordagem, decisões/limites, resultado, aprendizado e diagrama conceitual em HTML acessível. Sem screenshots fictícios.
- Destaques: Penzack, Fácil CRM, James Moto Shop. POC da Tactia identificada; Tactia Build limitada a desenho de solução; implantação da Fácil CRM não presumida.
- Dados factuais de métricas, stack/status dos projetos, cargos e datas centralizados em `src/utils/portfolio.ts`. Copy localizada nos JSONs; histórico mantém a sobreposição de Independent e Desencoder.
- Menu mobile nativo por teclado, fechamento com Escape, navegação completa e seletor de idioma preservando a rota.
- Contato prioriza e-mail, LinkedIn, GitHub e currículo. Escrita apresenta estado sem artigos, sem links fictícios para publicações.
- Metadados localizados, canonical/hreflang, sitemap incluindo novos cases e currículo; imagem Open Graph própria para cada case e imagem principal atualizada.

## Rotas geradas

Para cada idioma `en`, `pt`, `es`:

- `/{locale}`
- `/{locale}/work`
- `/{locale}/work/penzack`
- `/{locale}/work/facil-crm`
- `/{locale}/work/james-moto-shop`
- `/{locale}/work/tactia-build`
- `/{locale}/work/tactia-ai`
- `/{locale}/work/elint`
- `/{locale}/work/desencoder`
- `/{locale}/writing`
- `/{locale}/resume`

Rotas existentes preservadas, inclusive `/resume.pdf`, mantida como arquivo legado sem links novos que o apresentem como currículo atual.

## Evidências e pendências editoriais

O objeto `evidence` registra a fonte interna e separa claims aceitos pelo plano dos não verificados. “Verificado” significa sustentado pela base fornecida no plano; não constitui auditoria independente dos sistemas de clientes.

O PDF existente foi extraído com `pdftotext`: contém perfil Frontend e períodos/cargos anteriores às correções do plano. Por isso, não foi duplicado nem renomeado para aparentar duas versões atualizadas. A página de currículo apresenta duas opções, sinaliza os exports pendentes e permite solicitar cada versão por e-mail.

Para ativar downloads, obter os exports aprovados dos Google Docs, colocá-los em `public/resumes/senior-software-engineer.pdf` e `public/resumes/senior-frontend-engineer.pdf`, atualizar `resumes` em `src/utils/portfolio.ts` e substituir o PDF de compatibilidade pela versão principal aprovada. Não houve criação de currículos sem aprovação dos dados.

Permanecem pendentes materiais reais autorizados, datas/escopo de implantação não informados nos projetos novos, evidência de escala superior a 1M+, benchmarks reais e URLs individuais de artigos. Os cases usam conteúdo qualitativo e diagramas explicitamente conceituais enquanto esses materiais não existem no repositório.

## Validação

- `pnpm check`: 0 erros, 0 avisos.
- `pnpm lint`: passou.
- `pnpm test`: faz build estático e executa cinco testes de paridade de idiomas, fatos profissionais, claims, metadados/rotas e links/assets/âncoras internos.
- Build: 35 páginas geradas; 21 páginas de case.
- Revisão visual da homepage em 320×740 e 1440×1000. Sem overflow horizontal em 320px; CTAs principais no primeiro viewport. Case Tactia e menu por teclado conferidos em 375px. Enter abre o menu; Escape fecha e devolve foco.
- Console na navegação inspecionada: sem erros registrados.
- A captura desktop do navegador Orca apresentou timeout; a revisão desktop foi concluída com Chrome headless usando perfil temporário isolado.

Lighthouse mobile local sobre o build estático (`astro preview`, Chrome headless, emulação padrão):

| Medição | Resultado |
| --- | --- |
| Performance | 100 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |
| LCP | 0,8s |
| CLS | 0,002 |
| Total Blocking Time | 0ms |

São resultados de laboratório desta execução, não dados p75 de produção. INP real exige dados de campo. O diagnóstico adicional de nome acessível do logo foi corrigido para incluir o texto visível `WL.`.

Comando de auditoria: `CHROME_PATH=/opt/google/chrome/chrome npx --yes lighthouse http://localhost:4322/en --output=json --output-path=/tmp/portfolio-refactor/lighthouse-mobile.json --chrome-flags='--headless --no-sandbox' --only-categories=performance,accessibility,best-practices,seo --quiet`.
