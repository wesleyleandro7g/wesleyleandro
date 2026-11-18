# Plano de refatoração do portfólio — Wesley Leandro

**Documento:** especificação funcional, editorial e técnica para implementação  
**Data:** 17 de novembro de 2026  
**Site de referência:** https://wesleyleandro.com/en  
**Versão:** 1.0  
**Status:** proposta de implementação; não implica alterações já realizadas no site  
**Idioma-base da copy:** inglês (`/en`), com equivalentes em português (`/pt`) e espanhol (`/es`)

---

## 0. Resumo executivo

### Objetivo

Evoluir o site de uma apresentação genérica de competências para um **portfólio de engenharia de software orientado a evidências**. O site deve demonstrar o que Wesley construiu, suas responsabilidades, as decisões arquiteturais que tomou, as integrações que implementou e os resultados que consegue sustentar em entrevista.

**Posicionamento principal:**

> Senior Software Engineer · Full Stack & AI Engineering  
> React · Node.js · TypeScript · Python · Go · System Architecture

**Mensagem central:** engenheiro de software sênior com **8+ anos de experiência**, forte base em React/Next.js e Node.js, experiência de liderança técnica e contribuição prática em sistemas corporativos, modernização de aplicações, integrações legadas e produtos com IA.

**Não transformar o site em:** landing page de serviços, catálogo de automações, perfil exclusivamente frontend ou apresentação exclusivamente de IA.

### Públicos prioritários

1. Recrutadores internacionais para Senior Software Engineer e Senior Full Stack Engineer.
2. Engineering Managers, Tech Leads e CTOs avaliando profundidade técnica e ownership.
3. Recrutadores de Senior Frontend Engineer que precisam validar React, performance e escala.
4. Empresas buscando profissionais com experiência em AI integration, modernização e engenharia de produtos.

### Resultado esperado

Ao navegar por 60–90 segundos, a pessoa deve conseguir responder:

- Quem é o profissional e quais posições fazem sentido para ele?
- Quais produtos e sistemas efetivamente desenvolveu?
- Qual foi sua responsabilidade individual em cada um?
- Que tecnologias e decisões arquiteturais domina na prática?
- Quais são as evidências de escala, qualidade, liderança e impacto?
- Como baixar um currículo adequado e entrar em contato?

---

## 1. Diagnóstico do site atual

A homepage `/en`, conferida em 17/11/2026, contém estas seções:

| Seção existente | Diagnóstico | Mudança proposta | Prioridade |
|---|---|---|---|
| Hero — “Building scalable systems, AI-powered products” | Boa direção, mas pouco pessoal e usa 7+ anos | Reescrever copy, usar 8+ anos e CTAs claros | P0 |
| Impact at scale | Métricas fortes, mas algumas diferem dos currículos ou não foram comprovadas | Revisar número de usuários, performance, migrações e rótulos | P0 |
| Engineering case studies | Apenas Penzack, Elint e Desencoder | Destacar Penzack, Fácil CRM e James Moto Shop; manter os demais na listagem completa | P1 |
| What I'm exploring | Seis tópicos abstratos sem evidências anexadas | Transformar em “Engineering in Practice”, com associação a projetos | P1 |
| Engineering with ownership | Texto coerente, porém genérico | Incluir liderança técnica, arquitetura e IA aplicada | P1 |
| Technical breadth | Não representa totalmente Go, Python e orquestração | Reorganizar por domínios com nível de evidência adequado | P1 |
| Writing & ideas | Mostra títulos, mas os links observados apontam para o perfil geral do LinkedIn | Usar URLs reais individuais e estado sem conteúdo quando necessário | P2 |
| Work history | Falta James Moto Shop; períodos e cargos estão desatualizados | Sincronizar com currículos e incluir experiência de Tech Lead | P0 |
| Contato | Muitas redes com o mesmo peso visual | Priorizar e-mail, LinkedIn, GitHub e CVs; secundarizar outras redes | P2 |

### Estrutura observada de páginas secundárias

- `/en/work`: destino do link **View all work**; conteúdo completo não foi recuperado nesta auditoria.
- `/en/work/penzack`: case existente com Context, Challenge, Approach, Architecture Decisions, Scalability, Impact e Key Lesson (conteúdo identificado em busca pública).
- `/en/work/elint`: case existente com estrutura semelhante.
- `/en/work/desencoder`: case existente, com estrutura semelhante em outras versões de idioma.
- `/en/writing`: destino do link **Read Insights**; conteúdo integral não foi recuperado nesta auditoria.
- `/resume.pdf`: destino do link **Resume**; conteúdo do PDF público não foi validado.
- `/pt` e `/es`: versões localizadas já publicadas, com parte do texto e das métricas antigas.

> **Regra de execução:** confirmar as rotas, componentes e arquivos no repositório antes de mudar a implementação. Caminhos novos descritos adiante são **propostas**, não afirmações de que já existem.

---

## 2. Dados canônicos e correções obrigatórias

### 2.1. Tabela de consistência

| Item | Site atual | Valor-base para a revisão | Ação |
|---|---|---|---|
| Experiência | 7+ years | **8+ years** | Alterar Hero, About, indicadores, metadados e versões localizadas |
| Experiência com React | Não explícita em anos | **6+ years building React applications**, conforme informação fornecida | Inserir onde for relevante, sem apresentar como tempo total de carreira |
| Usuários da Penzack | 2M+ | **1M+** documentado nos currículos; 2M+ ainda precisa ser confirmado | Usar 1M+ provisoriamente ou validar dado superior antes de publicar |
| “60% Performance gains” | Métrica publicada | **Sem comprovação apresentada de ganho de performance de 60%** | Remover do indicador até haver evidência; não confundir com 60% de redução de tarefa administrativa |
| “3 Platform migrations” | Métrica publicada | Quantidade exata não comprovada nesta revisão | Remover ou substituir por dado verificável |
| Core Web Vitals | Pouca evidência explícita | Contribuiu para melhorias na Penzack | Descrever sem números inventados |
| Cargo na AZX | Senior Software Engineer no site | **Senior Frontend Developer** no CV, Mar 2024 – Nov 2026 | Manter cargo factual, podendo descrever escopo amplo no texto |
| Elint Tech | 2022–2024 | **Aug 2022 – Sep 2023** | Sincronizar |
| Desencoder | 2018–2022 | **Mar 2019 – Aug 2022** | Sincronizar |
| James Moto Shop | Não aparece na timeline | **Tech Lead (Full Stack)**, Sep 2023 – Mar 2024 | Adicionar com equipe de 2 devs + 1 designer |
| Independent | Não aparece na timeline | **Full Stack Developer**, May 2017 – Apr 2020 | Adicionar como experiência paralela, se desejar mostrar histórico completo |
| Go | Omitido | APIs para acessar sistemas legados na Fácil CRM | Incluir na competência e no case, sem vender como linguagem dominante |
| Python/Hatchet | Pouco evidente | POC de orquestração Python/Hatchet com workers Docker, PostgreSQL e testes | Apresentar como POC, não inventar implantação ampla em produção |

### 2.2. Regras para claims

- Não publicar métricas arbitrárias nem estimativas apresentadas como fatos.
- Distinguir **escala do produto** de **resultado diretamente atribuível ao profissional**.
- Distinguir **POC**, **produção**, **experimento** e **planejamento**.
- Distinguir **cargo formal** de **responsabilidades técnicas exercidas**, quando forem diferentes.
- Ao dizer “led”, mostrar equipe/escopo concreto e evitar atribuir a si todo o trabalho do time.
- Não divulgar dados privados de clientes, credenciais, screenshots sensíveis ou diagramas com segredos.
- Exibir datas como registradas nos currículos fornecidos; nenhuma data deve ser alterada apenas para eliminar sobreposição.
- Se duas experiências ocorreram simultaneamente, indicar contrato/freelance/consultoria apenas se isso corresponder aos fatos.

### 2.3. Sugestão de indicadores verificáveis para o novo bloco de impacto

1. **8+ years** — software engineering experience.
2. **1M+ users** — scale of a fintech platform to which Wesley contributed (sujeito à validação do número final).
3. **1,000+ leads/month** — processed by a sales platform cuja construção liderou.
4. **3-person team** — two developers and one designer led in the James Moto Shop project.

Opcional: “60% less admin time” do case de dashboard de monitoramento, **somente se a métrica puder ser atribuída ao projeto correto e sustentada**.

---

## 3. Arquitetura de informação proposta

### 3.1. Sitemap alvo

```text
/{locale}                        Homepage (en, pt, es)
/{locale}/work                   All Projects & Case Studies
/{locale}/work/penzack           Case: Penzack
/{locale}/work/facil-crm         Case: Fácil CRM             [novo]
/{locale}/work/james-moto-shop   Case: James Moto Shop       [novo]
/{locale}/work/tactia-build      Case: Tactia Build          [novo]
/{locale}/work/tactia-ai         Case: Tactia Orchestration  [novo]
/{locale}/work/elint             Case existente, revisado
/{locale}/work/desencoder        Case existente, revisado
/{locale}/writing                Writing & Open Source
/{locale}/writing/{slug}         Artigo próprio, se houver  [opcional]
/resume.pdf                      Avaliar URL atual/retrocompatibilidade
/resumes/senior-software-engineer.pdf  [proposto]
/resumes/senior-frontend-engineer.pdf  [proposto]
```

- Não excluir URLs antigas sem redirecionamentos adequados.
- Se os cases atuais tiverem outra modelagem de rotas no repositório, adaptar à implementação real.
- Manter a navegação multilíngue atual; garantir equivalência de conteúdo, não apenas traduções parciais.

### 3.2. Navegação global

**Desktop:** `Work · Experience · About · Writing · Resume · Contact · Language`

**Mobile:** menu acessível com os mesmos destinos, CTA de currículo e seletor de idioma.

- `Work`: âncora da homepage ou `/en/work`.
- `Experience`: âncora da timeline na homepage.
- `About`: âncora do bloco de perfil.
- `Writing`: `/en/writing`.
- `Resume`: abre seletor ou menu simples com dois CVs.
- `Contact`: `mailto:`; sem formulário obrigatório.
- Logos e texto no Header devem levar à homepage.

### 3.3. Nova ordem da homepage

1. Hero / Positioning.
2. Engineering Impact.
3. Featured Case Studies.
4. Engineering in Practice.
5. Technical Leadership & Ownership.
6. About & Technical Stack.
7. Work History.
8. Writing & Open Source.
9. Contact / Let's Work Together.

**Justificativa de ordem:** recrutador primeiro entende o perfil, vê evidência de resultados e projetos, depois valida competências e trajetória.

---

## 4. Especificações da homepage, seção por seção

### 4.1. Hero — atualizar seção existente [P0]

**Objetivo:** comunicar rapidamente senioridade e especialização, sem parecer catálogo de keywords.

**Copy-base em inglês:**

> EYEBROW: `SENIOR SOFTWARE ENGINEER · FULL STACK & AI ENGINEERING`  
> H1: `Building software that solves real-world problems.`  
> LEAD: `I design, build, and scale software products — from high-performance web applications to enterprise systems and AI-powered solutions.`  
> SUPPORT: `8+ years in software engineering, delivering fintech platforms, modernizing legacy systems, and integrating AI into real business workflows.`

**CTA primário:** `Explore My Work` → `/en/work` ou âncora de projetos.  
**CTA secundário:** `View Resume` → seletor Software Engineer / Frontend Engineer.  
**CTA terciário:** `Get in Touch` → e-mail.

**Microprovas/stack, abaixo dos CTAs:** `React · Node.js · TypeScript · Python · Go · AI Engineering`.

**UI:**

- Headline de 2 linhas com ótima legibilidade e largura máxima controlada.
- Nome e cargo identificáveis sem depender de animação.
- CTAs visíveis no primeiro viewport desktop e mobile.
- Evitar excesso de logos, carrosséis e ornamentos.
- Opcional: pequena ilustração conceitual de arquitetura, desde que não concorra com o texto.

**Critério de aceite:** o Hero exibe corretamente 8+ anos, tem dois CTAs funcionais e é legível sem scroll horizontal em 320px.

### 4.2. Engineering Impact — revisar seção existente [P0]

**Novo título sugerido:** `Engineering impact, backed by real work.`

**Quatro cartões propostos:**

| Dado exibido | Rótulo | Texto curto |
|---|---|---|
| 8+ years | Experience | Building production software across fintech and enterprise products |
| 1M+ users | Platform scale | Contributed to a global investment and trading platform |
| 1,000+ / month | Leads handled | Sales platform built with React, Node.js, and ERP integration |
| 3 professionals | Technical leadership | Led two developers and one designer on a full-stack product |

**UI:** 4 colunas desktop, 2×2 tablet, coluna única ou 2 colunas mobile dependendo da largura. Dado em destaque; rótulo descritivo menor; link opcional “See case” em cada cartão.

**Excluir:** “60% performance gains” e “3 platform migrations” enquanto não houver evidências correspondentes.

**Critério de aceite:** todo número tem uma fonte interna documentada e não está atribuído ao projeto errado.

### 4.3. Featured Case Studies — ampliar seção existente [P1]

**Novo título:** `Selected engineering work`  
**Subtítulo:** `A closer look at the systems I've built, modernized, and helped scale.`

**Três cards prioritários (homepage):**

1. **Penzack — Fintech Platform at Scale**  
   `React · Next.js · TypeScript · Core Web Vitals`  
   `Contributed to a large-scale financial platform, delivering complex transaction workflows, modern React architecture, and performance improvements.`
2. **Fácil CRM — AI-Powered Customer Operations**  
   `AI Orchestration · Go · APIs · Enterprise Integrations`  
   `Built AI-powered CRM workflows with collaborating agents and Go APIs that connect intelligent services to legacy business systems.`
3. **James Moto Shop — Full-Stack Sales Platform**  
   `Tech Lead · React · Node.js · ERP · AWS`  
   `Led a small cross-functional team building a full-stack platform handling 1,000+ leads per month and integrating with an ERP.`

**Em cada card:**

- Nome e categoria de produto (não somente nome da empresa).
- Imagem real autorizada ou diagrama original; caso não haja, fallback visual neutro, sem simular uma captura real.
- Um resumo de 1–2 linhas orientado ao desafio.
- 3–5 tags técnicas relevantes.
- Um fato concreto (escala, responsabilidade ou tipo de arquitetura).
- CTA `Read case study` levando à página completa.

**Rodapé da seção:** `View all projects` → `/en/work`.

**Critério de aceite:** os três cards têm páginas completas, URLs estáveis, alt text útil e imagens que não expõem dados sensíveis.

### 4.4. Engineering in Practice — substituir “What I'm exploring” [P1]

**Problema atual:** seis cartões de conceitos gerais podem parecer conhecimento teórico.

**Novo título:** `Engineering in practice`  
**Subtítulo:** `The areas I work across — demonstrated through real products and technical decisions.`

**Três pilares:**

**A. Full Stack & System Architecture**  
`Building web platforms, backend services, APIs, and integrations with maintainable architectures.`  
Projetos relacionados: James Moto Shop, Desencoder, Tactia Build.

**B. AI Engineering & Automation**  
`Connecting AI capabilities to business systems through agent orchestration, APIs, and asynchronous workflows.`  
Projetos relacionados: Fácil CRM, Tactia.

**C. Performance & Product Engineering**  
`Designing reliable React experiences, improving Core Web Vitals, and modernizing production applications.`  
Projetos relacionados: Penzack, Elint Tech.

**UI:** três cards horizontais ou grid de três colunas, cada um com um ícone discreto, título, duas linhas de conteúdo e links reais para cases.

**Critério de aceite:** nenhum cartão termina só em buzzwords; todos apontam para pelo menos um projeto aplicável.

### 4.5. Technical Leadership & Ownership — nova seção [P1]

**Objetivo:** evidenciar liderança técnica sem descaracterizar o perfil de engenheiro hands-on.

**Copy-base:**

> **Beyond writing code**  
> `I take ownership of the software delivery process — from understanding business requirements and designing technical solutions to coordinating teams and shipping reliable products.`  
> `My experience includes leading a team of two developers and one designer, making architectural decisions, integrating enterprise systems, and collaborating with distributed international teams.`

**Provas visuais, em 3 itens:**

- `Team leadership` — 2 developers + 1 designer; James Moto Shop.
- `Architecture & delivery` — full-stack sales platform + ERP.
- `International collaboration` — distributed teams, English communication, financial platform.

**UI:** bloco editorial compacto com pequena linha do tempo ou três provas, não uma seção enorme de “soft skills”.

**Critério de aceite:** a referência à equipe de três pessoas aparece claramente, sem alegação de equipe maior ou cargo Staff não comprovado.

### 4.6. About — atualizar seção existente [P1]

**Novo título:** `Software engineering with ownership.`

**Copy-base em inglês:**

> `I'm a Senior Software Engineer based in Brazil with 8+ years of experience building scalable web applications and enterprise software. My strongest foundation is in React, TypeScript, Next.js, and Node.js, complemented by practical experience with Python, Go, PostgreSQL, AWS, and system integration.`
>
> `I've contributed to an international investment platform serving more than one million users, built full-stack business applications, and led a small cross-functional product team.`
>
> `More recently, I've worked on AI-enabled business systems, multi-agent workflows, Go APIs for legacy integrations, and Python-based orchestration. I value clear architecture, reliable delivery, collaboration, and software that solves real business problems.`

**Observações:**

- Não copiar o LinkedIn integralmente; a homepage deve ser uma versão mais escaneável.
- Manter link `Read my experience` ou âncora para a timeline.
- O título pode aparecer antes ou depois do bloco de competências conforme layout final.

### 4.7. Technical Stack — reorganizar “Technical breadth” [P1]

**Categorias propostas:**

| Categoria | Tecnologias/práticas | Evidência relevante |
|---|---|---|
| Frontend Engineering | React, Next.js, TypeScript, JavaScript, Core Web Vitals, accessibility | Penzack, Elint |
| Backend & APIs | Node.js, REST, GraphQL, Go, Prisma, PostgreSQL | James Moto Shop, Fácil CRM |
| AI Engineering | AI API integration, multi-agent orchestration, Python workflows, Hatchet | Fácil CRM, Tactia |
| Cloud & Delivery | AWS, Docker, CI/CD, Vercel, monitoring | Penzack, James Moto Shop, Tactia |
| Architecture & Quality | System design, API integration, testing, observability, maintainable code | Cases diversos |

**UI:** 4–5 cards ou linhas, sem barras de porcentagem de habilidade. Se houver chips, limitar quantidade e deixar o conteúdo bem agrupado.

**Cuidados:**

- Não apresentar Go, Python e IA como expertise equivalente a React/Node.js se o histórico não sustentar isso.
- Não adicionar Kafka, Kubernetes, Redis, RabbitMQ ou RAG apenas para otimizar buscas.
- Demonstrar maturidade técnica pelas decisões nos cases, não pelo número de tecnologias citadas.

### 4.8. Work History — reconstruir a timeline [P0]

**Título:** `Experience & technical ownership`.

**Registros propostos:**

| Período | Organização | Cargo / descrição |
|---|---|---|
| Mar 2024 – Nov 2026 | AZX / Penzack | Senior Frontend Developer — React/Next.js, workflows financeiros, Core Web Vitals, integração com APIs |
| Sep 2023 – Mar 2024 | James Moto Shop | Tech Lead (Full Stack) — liderou 2 devs + 1 designer; plataforma integrada ao ERP |
| Aug 2022 – Sep 2023 | Elint Tech | Frontend Developer — React, migração para Next.js, dashboards empresariais |
| Mar 2019 – Aug 2022 | Desencoder | Full Stack Developer — aplicações empresariais, integrações e fintech |
| May 2017 – Apr 2020 | Independent | Full Stack Developer — produtos sob medida, sistemas de vendas e relatórios |

**Interações:** cada item pode ter link `View related project` quando houver um case, mantendo visível a empresa, cargo e período sem expansão.

**Importante:** preservar sobreposição histórica da atividade Independent quando ela corresponde ao trabalho real. Não encobrir experiências simultâneas.

### 4.9. Writing & Open Source — melhorar seção existente [P2]

**Título:** `Engineering notes & open source`  
**Subtítulo:** `Practical lessons from building and modernizing software.`

**Temas propostos para conteúdos reais, não publicar como se já existissem:**

1. `Connecting AI Agents to Legacy Systems with Go APIs`
2. `Designing Reliable AI Workflows with Python and Hatchet`
3. `Improving Core Web Vitals in a Large-Scale Next.js Application`
4. `Modernizing React Applications Without Disrupting Production`

**Regras:**

- Cada card deve abrir o artigo/repositório individual efetivo.
- Se um artigo ainda não foi publicado, não usar título fictício como link para o perfil geral.
- Se nenhum texto estiver pronto, mostrar `Selected technical notes coming soon` discretamente ou ocultar a seção até haver conteúdo.
- Repositórios públicos devem ter README, contexto, instruções e licença apropriada.
- Se houver conteúdo confidencial, publicar apenas exemplos genéricos recriados do zero.

### 4.10. Contact — ajustar seção existente [P2]

**Título:** `Let's build something meaningful.`  
**Texto:** `Open to senior software engineering opportunities, full-stack product teams, and AI-enabled systems where technical ownership and real-world impact matter.`

**Ações prioritárias:** `Email me`, `LinkedIn`, `GitHub`, `Download resume`.

**Ações secundárias:** Discord, Telegram, WhatsApp — mover para rodapé discreto ou retirar do fluxo principal, conforme estratégia de privacidade e networking.

**UI:** contato claro, simples, sem formulário longo, e-mail copiável, CTA que funcione em dispositivos móveis.

---

## 5. Página `/en/work` — catálogo de projetos [P1]

### Objetivo

Transformar a listagem em um inventário seletivo de evidências, não numa vitrine indiscriminada de marcas.

### Projetos propostos e ordem

1. Penzack — Fintech Platform at Scale.
2. Fácil CRM — AI-Powered CRM & Multi-Agent Orchestration.
3. James Moto Shop — Full-Stack Sales & ERP Integration.
4. Tactia Build — Enterprise Systems Modernization.
5. Tactia — AI Workflow Orchestration.
6. Elint Tech — React/Next.js Modernization.
7. Desencoder — Full-Stack Fintech & Enterprise Development.

### Filtros opcionais

`All · Full Stack · Frontend · AI Engineering · Enterprise Modernization`

Não exibir filtros se o catálogo tiver poucos itens ou se o componente complicar a experiência mobile. A prioridade é uma boa ordem de apresentação.

### Metadados de cada card

- `slug`, título curto, nome da organização e ano/período.
- Categoria (`Fintech`, `Enterprise`, `AI`, `Modernization`).
- Papel do autor (`Senior Frontend Developer`, `Tech Lead`, etc.).
- Stack principal (máximo de cinco chips por card).
- Problema resolvido e contribuição individual em 1–2 frases.
- Imagem/diagrama real e respectivo `alt`.
- Métrica verificada ou afirmação qualitativa auditável.
- Link para case.

### Critérios de aceite

- Todos os cards relevantes aparecem na versão inglesa e seus equivalentes localizados.
- Cards mostram claramente **contribuição pessoal**, não confundem escala da empresa com realização exclusiva.
- Links acessíveis por teclado, hover/focus visível, filtros não bloqueiam SEO.

---

## 6. Modelo para cada case study

Todas as páginas de case devem compartilhar estrutura consistente, mas cada história pode usar seções opcionais.

### Estrutura recomendada

1. **Hero do case:** nome, categoria, resumo do desafio e tags.
2. **Quick facts:** papel, período, stack, status (produção/POC), equipe quando conhecido.
3. **Business context:** contexto do produto, público e necessidade de negócio.
4. **The challenge:** problema técnico/operacional específico.
5. **My responsibilities:** o que Wesley fez pessoalmente, distinto do restante da equipe.
6. **Technical approach:** arquitetura, camadas, integrações e decisões.
7. **Architecture diagram:** desenho simplificado, omitindo detalhes sensíveis.
8. **Engineering decisions & trade-offs:** alternativas, critérios, consequências.
9. **Performance, reliability & security:** quando aplicável e comprovável.
10. **Impact & outcomes:** resultados sustentáveis, quantitativos ou qualitativos.
11. **What I learned:** lição técnica concreta.
12. **Technology & related work:** stack, links e cases relacionados.

### Componentes reutilizáveis

- `CaseHero`
- `QuickFacts`
- `CaseSection`
- `ArchitectureDiagram`
- `EvidenceGallery`
- `TechTags`
- `RelatedProjects`
- `ProjectNavigation`

### Privacidade e materiais

- Não publicar tela de cliente, credenciais, números de telefone, informações pessoais ou endpoint privado sem autorização.
- Usar dados sintéticos nas demonstrações.
- Marcar diagramas de alto nível como **simplified architecture**.
- Para projetos privados, apresentar a solução e decisões sem compartilhar código fechado.
- Não usar imagens geradas como se fossem screenshots do produto.

---

## 7. Brief editorial de cada case study

### 7.1. Penzack — Fintech Platform at Scale [destaque]

**Rota proposta:** `/en/work/penzack` (já há página a revisar).  
**Papel:** Senior Frontend Developer, AZX, Mar 2024 – Nov 2026.  
**Stack:** React, Next.js, TypeScript, Zustand, TanStack Query, integração com APIs, Sentry, testes.

**Resumo proposto:**

> `Contributed to an international investment and trading platform serving 1M+ users, delivering onboarding, identity verification, financial transaction workflows, and improvements to frontend performance and Core Web Vitals.`

**Descrever no case:**

- Integração de frontend com autenticação, verificação de identidade/KYC e serviços financeiros.
- Experiência de usuário para depósitos/saques em mercados diferentes, inclusive Pix e OXXO.
- Modernização de arquitetura React/Next.js, App Router e Server Actions.
- Internacionalização e correções de compatibilidade entre navegadores.
- Monitoramento com Sentry e trabalho de otimização de Core Web Vitals/SEO.
- Trade-offs entre performance, consistência, manutenção e velocidade de entrega.

**Elementos visuais:** captura pública/autorizada de telas, esquema UI → APIs → serviços, diagrama de frontend architecture, gráfico de CWV apenas com dados verdadeiros.

**Pontos para validar:** contagem real de usuários (1M+ vs 2M+), números de CWV, descrição de decisões arquiteturais atualmente atribuídas a Wesley no case publicado (performance budgets, caching e CI), permissões para usar imagens.

### 7.2. Fácil CRM — AI-Powered Customer Operations [novo, destaque]

**Rota proposta:** `/en/work/facil-crm`.  
**Papel:** Software engineering / produto — especificar cargo exato após validação.  
**Status:** produto desenvolvido; esclarecer quais funcionalidades estão em produção.  
**Tecnologias verificadas na conversa:** APIs Go, integrações com sistemas legados, CRM e orquestração multiagente. Não presumir outras bibliotecas.

**Resumo proposto:**

> `Built an AI-powered CRM with multi-agent workflows that coordinate customer interactions and business tasks, supported by Go APIs designed to connect legacy client systems with AI-enabled services.`

**Descrever no case:**

- Contexto: empresas atendendo clientes e usando sistemas legados/dispersos.
- Desafio: permitir consulta/ação contextual por agentes sem substituir todo o legado.
- Fluxo de atendimento integrado ao CRM, recebimento de contexto, coordenação entre agentes, consultas a APIs e retorno ao cliente.
- Desenvolvimento de APIs em Go como camada de integração.
- Limites operacionais, erros de integração e autorização, quando houver evidência.
- Como o papel humano entra na supervisão, se esse recurso existir no produto.

**Diagrama inicial a refinar com implementação real:**

```text
Customer channels / CRM
          |
          v
    Orchestration
      /   |   \
  Agent Agent Agent
      \   |   /
          v
     Go API layer
          |
          v
  Legacy client systems
```

**Elementos visuais:** captura de CRM com dados falsos/autorizados, fluxograma simplificado dos agentes, diagrama de integrações, esquema request–response.

**Não inventar:** nome de frameworks de agentes, modelo de banco, throughput, taxa de resolução, SLA, mecanismos de autenticação ou avaliações não informados.

### 7.3. James Moto Shop — Full-Stack Sales Platform [novo, destaque]

**Rota proposta:** `/en/work/james-moto-shop`.  
**Papel:** Tech Lead (Full Stack), Sep 2023 – Mar 2024.  
**Equipe:** 2 desenvolvedores e 1 designer liderados.  
**Stack:** React, Next.js, TypeScript, Node.js, Prisma, AWS (EC2, S3, RDS), ERP.

**Resumo proposto:**

> `Led a cross-functional team of two developers and one designer to deliver a React/Node.js sales platform integrated with an administrative ERP and supporting 1,000+ leads per month.`

**Descrever no case:**

- Visão geral do funil de consórcio, portal comercial e sistema administrativo.
- Responsabilidade pela arquitetura e decisões de tecnologia.
- Coordenação do time, code quality e entrega ágil.
- Integração entre portal público, backend e ERP.
- Melhorias na jornada de lead → proposta/contrato, checkout e UX.
- Comunicação com negócio e priorização de entregas.

**Elementos visuais:** arquitetura portal → APIs → ERP; screenshots autorizados da UI, esquema do funil, módulos da aplicação; evidenciar contribuição sem expor dados.

**Pontos para validar:** ocupação formal vs atuação como Tech Lead, métricas de conversão (não inventar), permissões para mencionar marca e publicar telas.

### 7.4. Tactia Build — Enterprise Systems Modernization [novo]

**Rota proposta:** `/en/work/tactia-build`.  
**Área:** software empresarial e modernização de processos.

**Resumo proposto:**

> `Designed custom business systems and integrations that help consolidate fragmented workflows, reduce tool fragmentation, and create a more coherent operational environment.`

**Descrever:**

- Problema de empresas que operam com sistemas separados.
- Discovery e mapeamento de processos.
- Arquitetura da solução, integração e consolidação de dados.
- Escopo efetivamente entregue, separado de proposta comercial.
- Benefícios qualitativos e impactos demonstráveis quando medidos.

**Elementos:** antes/depois de fluxo operacional, diagrama dos sistemas integrados, imagens autorizadas ou mocks identificados como conceituais.

**Cuidado:** não converter proposta de valor em case de produção completo sem evidência de implementação.

### 7.5. Tactia — AI Workflow Orchestration [novo]

**Rota proposta:** `/en/work/tactia-ai`.  
**Status conhecido:** POC / infraestrutura inicial de orquestração.  
**Stack conhecida:** Python, Hatchet, PostgreSQL, Docker, workers, testes unitários/integração.

**Resumo proposto:**

> `Implemented a Python-based workflow orchestration proof of concept using Hatchet, PostgreSQL, and Docker workers, with automated tests for asynchronous task execution.`

**Descrever:**

- Por que separar workers e fluxos assíncronos.
- Papel da orquestração na execução de tarefas relacionadas a IA.
- Desenho dos workers e integração com persistência.
- Testes, isolamento de ambientes, critérios de confiabilidade.
- Limitações, aprendizados e próximos passos, claramente identificados como futuros.

**Elementos:** diagrama tasks → scheduler/orchestrator → workers → storage, trechos não proprietários de testes, evidências de execução POC.

**Não afirmar:** produção em escala, números de clientes/sessões ou funcionalidades futuras já implementadas.

### 7.6. Elint Tech — React Modernization & Dashboards [case existente]

**Rota:** `/en/work/elint`.

**Resumo proposto:**

> `Modernized enterprise React applications by migrating from Create React App to Next.js and building analytics dashboards for clients including Lacta and Universal Music.`

**Revisões:** datas Aug 2022 – Sep 2023, papel Frontend Developer, evidenciar React e dashboards; revisar afirmações do case atual sobre “multiple migrations”, rollback plans e SEO para garantir correspondência com trabalho real.

**Visuais:** antes/depois de arquitetura, diagrama de migração incremental, screenshots autorizados de dashboards.

### 7.7. Desencoder — Full-Stack Business & Fintech Software [case existente]

**Rota:** `/en/work/desencoder`.

**Resumo proposto:**

> `Built custom React applications and business integrations, including fintech workflows connecting frontend experiences with backend services for production users.`

**Revisões:** datas Mar 2019 – Aug 2022; demonstrar uso de React, integrações, sistemas empresariais e responsabilidade de ponta a ponta; evitar alegar padrões específicos de segurança sem documentação.

**Visuais:** fluxos do produto em nível alto, diagrama frontend → API → dados, interfaces com dados seguros.

---

## 8. Currículos e jornada do recrutador [P0/P1]

### Estrutura de download

Permitir acesso a duas versões, sem forçar o visitante a adivinhar:

- **Senior Software Engineer — Full Stack & AI** (principal).
- **Senior Frontend Engineer — React/Next.js** (alternativa).

**Comportamento recomendado:** CTA `Resume` abre pequeno menu acessível ou página/modal simples, oferecendo os dois arquivos com descrição curta.

**Regras:**

- PDFs devem ser exportados das versões atualizadas do Google Docs, após aprovação dos dados.
- Mostrar data da atualização, se conveniente.
- Preservar `/resume.pdf` como URL de compatibilidade, redirecionando ou apontando para a versão principal atualizada (decisão de produto).
- Nunca apontar botão para PDF desatualizado.
- Opcional: página `/en/resume` orientando qual CV é melhor para cada tipo de vaga.

---

## 9. Diretrizes de UX, design e conteúdo

### Direção visual

- Aparência profissional, editorial e técnica, sem excesso de gradientes e efeitos chamativos.
- Tipografia legível e títulos curtos; hierarquia nítida.
- Espaçamento amplo entre grandes seções, mas compactação inteligente nos cards.
- Preferir diagramas e screenshots reais a imagens genéricas de tecnologia.
- Evitar carrosséis automáticos e animações que escondam texto essencial.
- Reutilizar cores, grid e tipografia existentes quando estiverem funcionando; sem rebranding desnecessário.

### Responsividade

- Hero e CTAs completos em 320–375px.
- Cards da homepage passam a uma coluna quando necessário.
- Diagramas se adaptam a mobile ou usam scroll horizontal sinalizado, sem clipping de texto.
- Labels e métricas não quebram o layout; fontes não ficam pequenas demais.
- Galerias abrem visualização maior quando houver imagem detalhada.

### Acessibilidade

- Semântica HTML correta: um H1 por página, H2/H3 coerentes.
- Navegação por teclado, focus visível e skip link.
- Contraste AA, textos alternativos, ícones não usados como único rótulo.
- `prefers-reduced-motion` respeitado.
- Menus e filtros com `aria` correto.
- Links de currículo com nome e propósito acessíveis.

### Conteúdo

- Toda página deve distinguir **contexto**, **desafio**, **contribuição individual** e **resultado**.
- Evitar declarações grandiosas sem evidência e títulos genéricos.
- Usar inglês natural, técnico e conciso; sem excesso de buzzwords.
- Uniformizar nomes: **Fácil CRM**, **Tactia Build**, **Tactia**, **James Moto Shop**, **Penzack**, **Elint Tech**, **Desencoder**.
- Não publicar afirmações específicas só porque aparecem numa proposta de copy; validar primeiro.

---

## 10. SEO, metadados e performance técnica [P2]

### Metadados propostos — homepage inglesa

```text
<title>Wesley Leandro | Senior Software Engineer — Full Stack & AI Engineering</title>
<meta name="description" content="Senior Software Engineer with 8+ years building scalable web applications, backend integrations, and AI-powered enterprise systems. React, Node.js, TypeScript, Python and Go." />
```

**Páginas de cases:** título e description específicos por projeto, com categoria e competência principal; evitar títulos duplicados.

**Implementar/verificar no código:**

- Canonical por rota/idioma.
- `hreflang` entre `/en`, `/pt`, `/es` e `x-default` coerente.
- Open Graph/Twitter cards com imagem por página.
- `sitemap.xml`, robots e URLs normalizadas.
- Dados estruturados `Person` com nome, cargo, site e links sociais verdadeiros; `CreativeWork`/`Article` apenas quando fizer sentido e houver conteúdo real.
- Âncoras e links internos para cases e seções.
- Evitar indexar versões duplicadas do mesmo conteúdo por parâmetros.

### Performance e qualidade

- Otimizar imagens com formatos e tamanhos responsivos; não carregar screenshots pesados no Hero.
- Lazy-load para imagens fora do viewport; preservar prioridade do elemento LCP.
- Minimizar JavaScript para blocos puramente editoriais.
- Evitar animações que causem layout shift.
- Medir Lighthouse mobile e dados reais de Web Vitals quando disponíveis.

**Metas técnicas de referência**, não medições atuais:

| Métrica | Meta recomendada |
|---|---|
| LCP | <= 2,5s (p75) |
| INP | <= 200ms (p75) |
| CLS | <= 0,1 (p75) |
| Lighthouse Accessibility | >= 90 (meta interna) |
| Links quebrados | 0 |
| Erros de console em navegação típica | 0 |

Não publicar scores ou metas como se fossem resultados medidos.

---

## 11. Internacionalização e coerência com LinkedIn/CVs [P1]

### Conteúdo-fonte

Manter conteúdo principal estruturado e localizado nas três variantes:

- Inglês: idioma principal para recrutadores internacionais.
- Português: tradução natural, não literal, para mercado brasileiro.
- Espanhol: tradução revisada para visitantes LATAM.

### Regras de sincronização

- Alterar informações factuais em **todas** as línguas, não somente `/en`.
- Mesmos projetos, anos, responsabilidades e métricas em todos os idiomas.
- Slugs podem continuar em inglês para reduzir manutenção; preservar links compartilhados.
- Nome de tecnologia não deve variar artificialmente por idioma.
- Se tradução de case novo ainda não estiver disponível, não mostrar página com strings misturadas ou quebradas; usar fallback planejado e claramente indicado.

### Fonte de verdade

Centralizar campos como `experienceYears`, `roles`, `dates`, `verifiedMetrics`, `projects`, `resumeLinks` e `socialLinks` num modelo de conteúdo único; manter copy localizada por idioma.

---

## 12. Modelo de dados sugerido para o projeto

Exemplo conceitual em TypeScript; adaptar à stack existente após inspeção do repositório.

```ts
type Locale = 'en' | 'pt' | 'es';
type ProjectStatus = 'production' | 'proof-of-concept' | 'private';

type LocalizedText = Record<Locale, string>;

type Evidence = {
  label: string;
  source?: string; // interno, não necessariamente público
  verified: boolean;
};

type PortfolioProject = {
  slug: string;
  organization: string;
  category: 'fintech' | 'enterprise' | 'ai' | 'modernization';
  period: string;
  role: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  stack: string[];
  title: LocalizedText;
  summary: LocalizedText;
  challenge?: LocalizedText;
  responsibilities?: LocalizedText[];
  decisions?: LocalizedText[];
  outcomes?: LocalizedText[];
  evidence: Evidence[];
  image?: { src: string; alt: LocalizedText; isConceptual?: boolean };
  architectureDiagram?: string;
};
```

**Princípios:**

- Separar conteúdo editorial, métricas e renderização.
- Não duplicar dados de empresa/cargo em vários componentes.
- Não hardcodar valores divergentes em EN/PT/ES.
- Permitir esconder metadados privados e publicar apenas materiais autorizados.
- Manter informações não verificadas fora do site público até aprovação.

---

## 13. Plano de implementação por fases

### Fase 0 — Auditoria de dados e conteúdo (P0)

- [ ] Confirmar informações de escala da Penzack (1M+ vs 2M+).
- [ ] Remover ou verificar as métricas de 60% de performance e três migrações.
- [ ] Validar datas e cargos contra o histórico profissional fornecido.
- [ ] Confirmar papel individual e status técnico de cada projeto novo.
- [ ] Inventariar screenshots, diagramas e links publicáveis.
- [ ] Validar o PDF atual em `/resume.pdf`.

**Entrega:** planilha ou objeto de conteúdo com claims `verified/unverified` e fontes.

### Fase 1 — Alinhamento editorial imediato (P0)

- [ ] Atualizar Hero, About e posição profissional.
- [ ] Atualizar números e rótulos do Engineering Impact.
- [ ] Atualizar Work History com datas, cargos e James Moto Shop.
- [ ] Atualizar CTA de currículo e PDFs.
- [ ] Sincronizar dados essenciais em EN/PT/ES.

**Entrega:** site coerente com LinkedIn e CVs, mesmo antes dos novos cases.

### Fase 2 — Nova vitrine de projetos (P1)

- [ ] Criar/ajustar modelo de dados e componente de Project Card.
- [ ] Criar pages `/work/facil-crm`, `/work/james-moto-shop`, `/work/tactia-build`, `/work/tactia-ai`.
- [ ] Revisar conteúdo dos cases Penzack, Elint e Desencoder.
- [ ] Reordenar 3 destaques da homepage.
- [ ] Atualizar `/work` com inventário completo, links e imagens autorizadas.

**Entrega:** 7 cases publicados com responsabilidades e tecnologias claras.

### Fase 3 — Profundidade técnica e autoridade (P1/P2)

- [ ] Substituir “What I'm exploring” por Engineering in Practice.
- [ ] Criar Technical Leadership & Ownership.
- [ ] Reorganizar a seção de competências.
- [ ] Adicionar diagramas de arquitetura e provas visuais aos cases.
- [ ] Revisar Writing & Open Source e links individuais.

**Entrega:** narrativa de engenharia sustentada por casos concretos.

### Fase 4 — Qualidade e lançamento (P2)

- [ ] Revisar metadata, OG, canonicals, hreflang e sitemap.
- [ ] Executar verificações mobile, Lighthouse e acessibilidade.
- [ ] Validar SEO das páginas de case.
- [ ] Verificar todas as rotas EN/PT/ES e PDFs.
- [ ] Conferir formulário/CTA, links sociais, focus e keyboard navigation.
- [ ] Fazer revisão editorial final para termos, claims e typo.

**Entrega:** portfólio pronto para ser enviado em candidaturas.

---

## 14. Checklist de aceite final

### Conteúdo

- [ ] Posicionamento principal é Senior Software Engineer / Full Stack & AI Engineering.
- [ ] Hero e About usam 8+ anos e descrevem claramente React/Node.js/IA.
- [ ] A Penzack aparece com escala e cargo corretos.
- [ ] James Moto Shop aparece com Tech Lead, 2 devs + 1 designer e período informado.
- [ ] Elint Tech, Desencoder e Independent aparecem com datas consistentes.
- [ ] Fácil CRM apresenta multiagentes e Go para integrações legadas, sem invenções.
- [ ] Tactia AI está marcada como POC onde adequado.
- [ ] Não há métricas de performance ou migrações sem validação.
- [ ] Cada projeto diferencia contribuição individual de trabalho do time.

### Usabilidade

- [ ] As três featured projects têm CTA funcional.
- [ ] A listagem `/work` contém todos os cases pretendidos.
- [ ] Header, navegação, contatos e downloads funcionam em mobile e desktop.
- [ ] Os dois currículos estão disponíveis e atualizados.
- [ ] Todas as páginas têm título, resumo e links para voltar/navegar.

### Qualidade técnica

- [ ] Navegação por teclado e foco visível.
- [ ] Nenhum dado sensível aparece em imagens/diagramas.
- [ ] URLs publicadas/antigas não quebraram.
- [ ] EN/PT/ES estão consistentes e com metadata localizada.
- [ ] Sem erros de console ou componentes quebrados.
- [ ] Performance testada em mobile; resultados medidos documentados.

---

## 15. Materiais e decisões pendentes

Antes da produção final dos cases, levantar:

1. **Penzack:** escala atual comprovada; antes/depois de Web Vitals (se disponível); autorização de imagens; escopo exato de arquitetura e SEO.
2. **Fácil CRM:** stack real do frontend e da orquestração, se aplicável; modelo de integração via Go; estado de produção; prints autorizados.
3. **James Moto Shop:** nome/cargo a exibir, autorização de screenshot, esquema real do ERP, métricas do funil disponíveis.
4. **Tactia Build:** quais clientes/casos podem ser citados publicamente, funcionalidades efetivamente entregues e imagens adequadas.
5. **Tactia AI:** quais componentes estão apenas em POC e quais foram implantados; exemplos de testes e diagramas seguros.
6. **Writing:** URL individual de cada texto existente ou decisão de ocultar o item.
7. **Resumes:** exports finais aprovados para versões Full Stack/AI e Frontend.

Qualquer ausência de evidência deve resultar em **copy qualitativa precisa**, não bloqueio do projeto inteiro.

---

## 16. Brief operacional para o agente implementador

> **Objetivo:** refatorar o portfólio existente de Wesley Leandro para posicioná-lo como Senior Software Engineer especializado em Full Stack & AI Engineering, com provas concretas de experiência, sem alterar radicalmente a identidade visual já existente.
>
> **Faça primeiro:** inspecione a estrutura de rotas, componentes, conteúdo localizado, metadados, assets e PDFs do repositório. Verifique como são geradas as páginas `/en`, `/pt`, `/es`, `/work` e `/writing` e preserve as rotas em produção.
>
> **Implemente:** o novo Hero, métricas auditáveis, três featured case studies, Engineering in Practice, Technical Leadership, About/Stack, timeline completa, Writing revisado e Contact. Adicione as páginas de projetos e o suporte a dois currículos, reutilizando componentes e dados localizados.
>
> **Não invente:** benchmarks, screenshot de produto, métricas de Core Web Vitals, arquitetura específica não validada, roles, cargos, datas, resultados ou tecnologias. Use copy provisória qualitativa se necessário.
>
> **Qualidade:** tipagem forte, componentes acessíveis, responsividade real, SEO/localização consistentes, sem regressões de rotas existentes. Faça build, lint, testes existentes e uma verificação visual em mobile e desktop. Entregue um resumo do que foi alterado, o que depende de evidência e quais URLs foram publicadas.

---

## 17. Fontes e base de referência

### Site público consultado

- Homepage EN: https://wesleyleandro.com/en
- Homepage PT: https://wesleyleandro.com/pt
- Homepage ES: https://wesleyleandro.com/es
- Case Penzack: https://wesleyleandro.com/en/work/penzack
- Case Elint: https://wesleyleandro.com/en/work/elint
- Case Desencoder: https://wesleyleandro.com/en/work/desencoder
- Página de escrita: https://wesleyleandro.com/en/writing

**Limitação da auditoria:** o acesso web recuperou integralmente o texto da homepage; as rotas secundárias não abriram diretamente durante a conferência atual, embora resultados de busca tenham fornecido trechos dos cases existentes. O implementador deve inspecioná-las no repositório e no navegador antes de realizar mudanças estruturais.

### Base profissional informada na conversa

- CV Senior Software Engineer — versão Full Stack/AI atualizada no Google Docs.
- CV Senior Frontend Engineer — versão React/Next.js atualizada no Google Docs.
- Posicionamento do About/Headline do LinkedIn definido nas mensagens anteriores.
- Detalhes adicionais de Penzack, James Moto Shop, Fácil CRM, Tactia e Tactia Build fornecidos pelo usuário.

**Observação final:** este documento é um roteiro de implementação e conteúdo. Não afirma que as mudanças já foram publicadas no site.
