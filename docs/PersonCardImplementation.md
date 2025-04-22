# Implementação do PersonCard no GPTICAM Research Hub

## Visão Geral do Componente

O `PersonCard` é um componente fundamental utilizado para a exibição de informações básicas de pesquisadores e bolsistas no GPTICAM Research Hub. Este componente cria cartões interativos que mostram informações resumidas e permitem a navegação para páginas de perfil detalhadas.

## Estrutura do Componente

```tsx
interface PersonCardProps {
  id?: string;
  name: string;
  role: string;
  image?: string;
  area: string;
  email?: string;
  type?: "researcher" | "scholar";
}
```

O componente aceita as seguintes propriedades:
- `id` (opcional): Identificador único da pessoa
- `name`: Nome completo
- `role`: Cargo/função (ex: "Pesquisador Sênior", "Bolsista de Doutorado")
- `image` (opcional): URL da imagem do perfil
- `area`: Área de especialização
- `email` (opcional): Endereço de email
- `type`: Tipo de pessoa ("researcher" ou "scholar"), padrão é "researcher"

## Implementação Visual

O componente é renderizado como um cartão interativo que inclui:
1. Avatar com imagem de perfil ou iniciais como fallback
2. Nome completo como título do cartão
3. Cargo/função como descrição
4. Área de especialização
5. Email (quando disponível)

A implementação inclui funcionalidades como:
- Geração automática de iniciais a partir do nome
- Navegação para a página de perfil correspondente ao clicar no cartão
- Criação de ID amigável para URL a partir do nome se não for fornecido

## Navegação Integrada

O cartão utiliza o hook `useNavigate` do React Router para permitir a navegação programática:

```tsx
const basePath = type === "scholar" ? "/bolsistas/" : "/pesquisadores/";
// ...
onClick={() => navigate(`${basePath}${urlId}`)}
```

## Uso nas Páginas do Sistema

### 1. Página de Pesquisadores (`Researchers.tsx`)

Na página de pesquisadores, os cartões são organizados em um grid, mostrando um conjunto de pesquisadores com suas informações básicas. Cada cartão é clicável e leva à página de perfil detalhada do pesquisador.

### 2. Página de Bolsistas (`Scholars.tsx`)

Similar à página de pesquisadores, a página de bolsistas apresenta uma coleção de cartões em formato de grid, exibindo informações resumidas sobre cada bolsista. A navegação leva à página de perfil específica do bolsista selecionado.

### 3. Página Inicial (`Index.tsx`)

Na página inicial, os cartões são utilizados nas seções "Pesquisadores em Destaque" e "Bolsistas em Destaque", mostrando uma seleção limitada de membros para cada categoria.

## Páginas de Perfil Detalhados

Quando um usuário clica em um cartão, ele é direcionado para uma página de perfil detalhada:

### Perfil de Pesquisador (`ResearcherProfile.tsx`)

O perfil de pesquisador exibe informações detalhadas como:
- Informações pessoais e de contato
- Biografia
- Estatísticas (publicações, anos de experiência, projetos liderados)
- Tecnologias e habilidades
- Publicações acadêmicas
- Prêmios e reconhecimentos

### Perfil de Bolsista (`ScholarProfile.tsx`)

O perfil de bolsista mostra:
- Informações pessoais e de contato
- Biografia
- Informações acadêmicas (instituição, curso, período, orientador)
- Habilidades técnicas com visualização de proficiência
- Projetos de pesquisa e desenvolvimento

## Estilização e Design

O componente segue um padrão de design moderno com:
- Paleta de cores verde (#C9FF76, #BACD8E, #2D3B22, #1A2A12)
- Efeitos sutis de hover (sombra e escala)
- Animações suaves para melhorar a experiência do usuário
- Avatares com fallback baseado nas iniciais
- Layout responsivo que se adapta a diferentes tamanhos de tela

## Fluxo de Dados

O fluxo de dados entre as páginas segue o padrão:
1. Dados resumidos na página de listagem (Researchers/Scholars)
2. Navegação via clique no PersonCard
3. Recuperação de dados detalhados na página de perfil usando o ID da URL
4. Renderização das informações completas no perfil específico 