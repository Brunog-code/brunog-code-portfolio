export const projectsData = [
  {
    id: "100",
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
    id: "101",
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
];
