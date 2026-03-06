type TCategoryProject = "Fullstack" | "Front-end" | "Back-end";

export type TTechs =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js"
  | "Tailwind"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Prisma ORM"
  | "React Native"
  | "Git"
  | "GitHub"
  | "Docker"
  | "n8n";

export interface IProjectsData {
  id: string;
  date: string;
  category: TCategoryProject;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: Array<{
    caption: string;
    url: string;
  }>;
  video?: string;
  repo: string;
  link: string;
  github: string;
  slug: string
  techs: TTechs[];
  deploy: {
    frontend?: string;
    backend?: string;
    n8n?: string;
  };
  content: string[];
  highlights: string[];
}

export const projectsData: IProjectsData[] = [
  {
    id: "100",
    date: "11/09/2025",
    category: "Front-end",
    title: "Dev Shop",
    subtitle:
      "Mini e-commerce que simula uma loja online, com carrinho de compras gerenciado por useContext, consumindo api ViaCep para localizar endereço no carrinho.",
    thumbnail: "https://i.imgur.com/b8IjrAK.png",
    images: [
      {
        caption: "Hero",
        url: "https://i.imgur.com/b8IjrAK.png",
      },
      {
        caption: "Carrinho",
        url: "https://i.imgur.com/6fHjOel.png",
      },
    ],
    link: "https://mini-ecommerce-frontend-three.vercel.app/",
    repo: "mini-ecommerce-frontend",
    github: "https://github.com/Brunog-code/mini-ecommerce-frontend",
    slug: "mini-ecommerce",
    techs: ["React", "TypeScript", "Tailwind"],
    deploy: {
      frontend: "Vercel.com",
      backend: "",
    },
    content: [
      "O Dev Shop é um mini e-commerce desenvolvido com foco em simular uma loja online moderna, com páginas de listagem de produtos e carrinho de compras, oferecendo uma experiência fluida e responsiva.",
      "A aplicação foi desenvolvida com React, TypeScript e Tailwind CSS, priorizando a componentização e o gerenciamento de estado para controle do carrinho de compras, com persistência de dados via localStorage.",
      "Para o gerenciamento global do carrinho, foi implementado o Context API em conjunto com o hook useReducer, garantindo uma estrutura escalável, performática e de fácil manutenção.",
      "Na página Home, o usuário pode visualizar produtos com imagem, título, descrição e preço, além de aplicar filtros por categoria. Todo o layout foi planejado para funcionar bem em desktops e dispositivos móveis.",
      "No carrinho de compras, é possível visualizar os itens adicionados, calcular subtotal, total e frete com base no CEP informado, consumindo a API do ViaCEP para busca automática de endereço.",
      "O sistema também oferece seleção de tipo de envio (PAC ou SEDEX) e simula um usuário logado, permitindo testar o fluxo completo sem autenticação real. O projeto é uma demonstração de boas práticas em front-end, com foco em UX e integração com APIs externas.",
    ],
    highlights: [
      "🛒 Carrinho de compras global gerenciado com Context API e useReducer.",
      "💾 Persistência dos itens do carrinho via localStorage.",
      "📦 Listagem dinâmica de produtos com filtros por categoria.",
      "📍 Cálculo de frete e endereço automático com a API ViaCEP.",
      "🚚 Opções de envio: escolha entre PAC e SEDEX.",
      "💰 Cálculo automático de subtotal e total do carrinho.",
      "🧩 Interface responsiva e moderna com Tailwind CSS.",
      "⚛️ Componentização e boas práticas com React e TypeScript.",
      "👤 Simulação de usuário logado para testar o fluxo completo sem autenticação real.",
    ],
  },
  {
    id: "101",
    date: "28/10/2025",
    category: "Fullstack",
    title: "Mia - Encanto da serra Hotel",
    subtitle:
      "Site completo de um hotel fictício, com sistema de reserva e pagamento online, consumindo API do mercado pago.",
    thumbnail:
      "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/hero.PNG",
    images: [
      {
        caption: "Hero",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/hero.PNG",
      },
      {
        caption: "Opções de quartos",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/room-section.PNG",
      },
      {
        caption: "Confirmar reserva",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/confirm-reservation.PNG",
      },
      {
        caption: "Checkout Pro",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/checkout-pro.PNG",
      },
      {
        caption: "Checkout Pro",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/reserva-e-pagamento-aprovado.PNG",
      },
      {
        caption: "Email confirmação",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/email-reserva-confirmada.PNG",
      },
      {
        caption: "Minhas reservas",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/reserva-confirmada.PNG",
      },
      {
        caption: "Minhas reservas - pagamento pendente",
        url: "https://hwrvkyieyvjmzncivmmt.supabase.co/storage/v1/object/public/images-hotel/prints-github/btn-pgto-pendente.PNG",
      },
    ],
    video: "https://www.youtube.com/watch?v=JsoISZGQEOM",
    repo: "mia-encanto-da-serra-hotel",
    link: "https://mia-encanto-da-serra-hotel.vercel.app/",
    github: "https://github.com/Brunog-code/mia-encanto-da-serra-hotel",
    slug: "mia-encanto-da-serra",
    techs: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
    ],
    deploy: {
      frontend: "Vercel.com",
      backend: "Render.com",
    },
    content: [
      "O Mia – Encanto da Serra Hotel é um sistema completo de reservas online desenvolvido para simular o funcionamento real de um hotel, com autenticação de usuários, controle de reservas e integração com sistema de pagamento automatizado via Mercado Pago.",
      "O projeto foi construído com uma stack full-stack em JavaScript/TypeScript, utilizando React, Node.js, PostgreSQL, Prisma ORM e Tailwind CSS, com foco em escalabilidade, segurança e boas práticas de arquitetura.",
      "Entre as principais funcionalidades, o sistema permite que o usuário crie, visualize e gerencie reservas, com verificação em tempo real da disponibilidade de quartos e prevenção de overbooking. Um CronJob automatizado cancela reservas não pagas em até 24 horas, liberando o quarto automaticamente.",
      "O fluxo de pagamento é totalmente integrado à API do Mercado Pago, utilizando o modelo Checkout Pro. Quando o usuário finaliza a reserva, ele é redirecionado para uma página segura de pagamento. Após a transação, o Mercado Pago envia uma notificação via webhook para o backend, informando o status do pagamento.",
      "Esses webhooks permitem que o sistema confirme automaticamente as reservas pagas, marque os quartos como ocupados e envie e-mails de confirmação em tempo real, sem necessidade de intervenção manual. Esse processo garante que as transações sejam seguras, rastreáveis e totalmente sincronizadas com o banco de dados.",
      "⚠️ Como este é um projeto acadêmico, em produção o Checkout Pro foi desativado. No ambiente online, foi implementado um endpoint simulando a confirmação de pagamento para fins de demonstração, de modo que o fluxo completo possa ser testado sem necessidade de transações reais. Há imagens e vídeos demonstrando o funcionamento real do pagamento automatizado via Mercado Pago em ambiente de desenvolvimento (sandbox).",
      "O backend foi hospedado na Render, e o frontend na Vercel, garantindo disponibilidade e performance. O sistema também conta com autenticação via JWT, recuperação de senha por e-mail (SendGrid) e validação de dados com Zod, tudo integrado em uma interface moderna e responsiva.",
    ],
    highlights: [
      "🔐 Autenticação JWT e recuperação de senha via e-mail (SendGrid).",
      "💳 Pagamentos integrados com a API do Mercado Pago (Checkout Pro) e confirmação automática via Webhooks.",
      "⚙️ CronJob para cancelamento automático de reservas não pagas em até 24 horas.",
      "🏨 Validação em tempo real da disponibilidade de quartos, prevenindo overbooking.",
      "🧾 CRUD completo de reservas: criar, visualizar, editar e excluir reservas.",
      "🛠️ Backend desenvolvido com Node.js, Prisma ORM e PostgreSQL.",
      "🖥️ Frontend moderno com React, TypeScript e Tailwind CSS.",
      "🧩 Validação de dados com Zod para segurança e integridade.",
      "📱 Layout totalmente responsivo, otimizado para desktop e mobile.",
    ],
  },
  {
    id: "102",
    date: "13/01/2026",
    category: "Fullstack",
    title: "Agropet Dev",
    subtitle:
      "E-commerce full-stack de uma agropecuária fictícia, com autenticação social, carrinho performático, pagamentos integrados via Stripe e chat com agente de IA desenvolvido com n8n.",
    thumbnail:
      "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/hero.png",
    images: [
      {
        caption: "Pagina inicial",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/hero.png",
      },
      {
        caption: "Pagina inicial - Mobile",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/mobile-hero.png",
      },
      {
        caption: "Principais categorias",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/principais-categorias.png",
      },
      {
        caption: "Carrinho - drawer",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/carrinho-drawer.png",
      },
      {
        caption: "Chat com agente de IA",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/agente%20de%20ia%20chat.png",
      },

      {
        caption: "Página carrinho",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/page-carrinho.png",
      },
      {
        caption: "Checkout Stripe",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/cehckout%20stripe.png",
      },
      {
        caption: "n8n workflow",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/workflow.png",
      },
      {
        caption: "redeﬁnição de senha",
        url: "https://wcpvdrfhvnarjagqwhho.supabase.co/storage/v1/object/public/images-agropet/imagens-agropet/prints-doc/redefinicao.png",
      },
    ],
    video: "https://www.youtube.com/watch?v=tkUVgq111Gg",
    link: "https://agropetdev-ecommerce.vercel.app/",
    repo: "agropetdev-ecommerce",
    github: "https://github.com/Brunog-code/agropetdev-ecommerce",
    slug: "agropet-dev",
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Prisma ORM",
      "n8n",
    ],
    deploy: {
      frontend: "Vercel.com",
      backend: "Vercel.com",
      n8n: "Oracle VPS",
    },
    content: [
      "O AgroPetDev é um sistema completo de e-commerce para uma agropecuária fictícia, desenvolvido em Next.js com arquitetura full-stack, unificando frontend e backend em uma única aplicação moderna, performática e escalável.",
      "A plataforma oferece um fluxo de compra completo, incluindo navegação por produtos, gerenciamento de carrinho, checkout integrado e confirmação automática de pedidos, proporcionando uma experiência fluida tanto em desktop quanto em dispositivos móveis.",
      "O sistema de pagamentos é totalmente integrado à API do Stripe, garantindo segurança e confiabilidade nas transações. Após o pagamento, webhooks do Stripe notificam o backend em tempo real, permitindo a confirmação automática dos pedidos no banco de dados somente após a validação do pagamento.",
      "Para evitar pedidos inconsistentes, foi implementado um CronJob que monitora compras pendentes. Caso o pagamento não seja confirmado em até 24 horas, o pedido é automaticamente cancelado, mantendo a integridade dos dados e do estoque.",
      "O gerenciamento de estado do carrinho de compras é feito com Zustand, garantindo alta performance, persistência dos dados e uma arquitetura mais simples e eficiente em comparação a abordagens tradicionais.",
      "O projeto conta ainda com um chat integrado com agente de Inteligência Artificial, utilizando fluxos personalizados no n8n. Esse agente é capaz de responder dúvidas sobre produtos, pedidos e informações gerais, oferecendo suporte automatizado em tempo real aos usuários.",
      "A autenticação e segurança da aplicação são gerenciadas pela biblioteca Better Auth, com suporte a login social via Google (OAuth 2.0), autenticação por e-mail e senha, além de um fluxo completo de recuperação de senha com envio de e-mails transacionais via Nodemailer.",
      "Toda a aplicação utiliza validação de dados com Zod, garantindo que apenas informações válidas sejam processadas em formulários, APIs e fluxos críticos do sistema. O deploy do frontend e backend é realizado na Vercel, enquanto o n8n é hospedado em uma VPS Oracle Cloud.",
    ],

    highlights: [
      "💳 Pagamentos integrados com a API do Stripe e confirmação automática via Webhooks.",
      "⚡ Confirmação de pedidos em tempo real após validação do pagamento.",
      "⏱️ CronJob para cancelamento automático de pedidos não pagos em até 24 horas.",
      "🛒 Gerenciamento de carrinho performático com Zustand e persistência de dados.",
      "🤖 Chat com agente de IA integrado via n8n, com fluxos de automação personalizados.",
      "🔐 Sistema completo de autenticação com Better Auth (OAuth Google, e-mail e senha).",
      "📧 Recuperação de senha via e-mail com tokens seguros e Nodemailer.",
      "🧩 Validação de dados em toda a aplicação utilizando Zod.",
      "🚀 Arquitetura Full-Stack com Next.js (Frontend + Backend integrados).",
      "🎨 Design moderno com Tailwind CSS e shadcn/ui, focado em componentes reutilizáveis.",
    ],
  },
  {
    id: "103",
    date: "06/03/2026",
    category: "Fullstack",
    title: "Stack Chat",
    subtitle:
      "Aplicativo de chat em tempo real desenvolvido com React Native e Expo, permitindo comunicação instantânea entre usuários através de WebSockets com Socket.IO.",

    thumbnail:
      "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772831630/thumbnail-1_nx5bzx.png",

    images: [
      {
        caption: "Login",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829784/thumbnail-2_fayuxr.png",
      },
      {
        caption: "Registrar",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829783/register_l1q0nl.png",
      },
      {
        caption: "Home",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829783/home_aynzw8.png",
      },
      {
        caption: "Sala de chat",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829783/chat_flbovh.png",
      },
      {
        caption: "Buscar grupo",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829783/search_rvv7ky.png",
      },
      {
        caption: "Perfil",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772829783/perfil_nvkrtt.png",
      },
      {
        caption: "Alterar nome",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772830334/change-name_jed1mo.png",
      },
      {
        caption: "Protótipo no Figma",
        url: "https://res.cloudinary.com/dcxpgtvqf/image/upload/v1772830477/figma_afacje.png",
      },
    ],

    video: "",
    repo: "stack-chat-react-native",
    link: "https://github.com/Brunog-code/stack-chat-react-native/releases/download/v1.0.0/stack-chat-v1.0.0.zip",
    github: "https://github.com/Brunog-code/stack-chat-react-native",
    slug: "stack-chat",
    techs: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Prisma ORM",
      "Docker",
    ],

    deploy: {
      frontend: "Expo",
      backend: "Oracle VPS",
    },

    content: [
      "Stack Chat é um aplicativo mobile de chat em tempo real desenvolvido com React Native e Expo, com foco em explorar comunicação instantânea entre usuários utilizando WebSockets.",
      "A aplicação permite que usuários conversem em tempo real por meio de uma arquitetura cliente-servidor utilizando Socket.IO, garantindo baixa latência e sincronização imediata das mensagens.",
      "O frontend mobile foi construído com React Native utilizando TypeScript, priorizando componentização, organização de código e uma interface fluida para navegação entre chats e envio de mensagens.",
      "A sessão do usuário é persistida no dispositivo utilizando AsyncStorage, permitindo manter o usuário autenticado entre reinicializações do aplicativo e evitando a necessidade de login a cada abertura do app.",
      "O backend foi desenvolvido com Node.js e Socket.IO, sendo responsável por gerenciar conexões WebSocket, autenticação via JWT e distribuição de mensagens entre usuários conectados.",
      "A aplicação utiliza dois protocolos de comunicação: requisições HTTP para operações como autenticação, registro e busca de dados, e WebSockets para comunicação em tempo real, responsável pelo envio e recebimento instantâneo das mensagens.",
      "A persistência de dados é realizada com MongoDB utilizando Prisma ORM, permitindo armazenar usuários, grupos e mensagens de forma escalável para aplicações de chat.",
      "O projeto também utiliza Docker para padronizar o ambiente do servidor e facilitar o deploy em uma VPS, garantindo consistência entre desenvolvimento e produção.",
    ],

    highlights: [
      "💬 Chat em tempo real utilizando WebSockets com Socket.IO.",
      "📱 Aplicação mobile construída com React Native e Expo.",
      "⚡ Envio e recebimento instantâneo de mensagens.",
      "🔐 Autenticação segura utilizando JWT.",
      "🗄️ Persistência de dados com MongoDB e Prisma ORM.",
      "🐳 Backend containerizado com Docker.",
      "🧠 Arquitetura cliente-servidor separando app mobile e backend Node.js.",
      "🚀 Deploy do servidor em VPS para comunicação em tempo real.",
    ],
  }

];
