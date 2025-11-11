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
        url: "https://camo.githubusercontent.com/c9fe85167d8b26aac15d6e433bc76c8370262f6084b829aff362478b19f09bcc/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f6865726f2e504e47",
      },
      {
        caption: "Opções de quartos",
        url: "https://camo.githubusercontent.com/259ffa39400faf784d7bab933ad21efe56ebc3ffd95c6b25519ace4c71a5c755/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f726f6f6d2d73656374696f6e2e504e47",
      },
      {
        caption: "Confirmar reserva",
        url: "https://camo.githubusercontent.com/8a5fd68a43ba6ad4e34948c8c7688bab56b0807174ef3b3699969f005494f897/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f636f6e6669726d2d7265736572766174696f6e2e504e47",
      },
      {
        caption: "Checkout Pro",
        url: "https://camo.githubusercontent.com/05be75ee936c4fc6e329959006be9bd9e1a105f39a83037307a3f6f872e449ba/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f636865636b6f75742d70726f2e504e47",
      },
      {
        caption: "Checkout Pro",
        url: "https://camo.githubusercontent.com/71b15fec5bb95c4f9461a5e3e6eee9d1b30f06488c6ec16d59566b239be683f7/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f726573657276612d652d706167616d656e746f2d6170726f7661646f2e504e47",
      },
      {
        caption: "Email confirmação",
        url: "http://camo.githubusercontent.com/3bb79ada9bf3d88fad90959bd1c2f4b46ec14db5c685819038943e921f02446f/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f656d61696c2d726573657276612d636f6e6669726d6164612e504e47",
      },
      {
        caption: "Minhas reservas",
        url: "https://camo.githubusercontent.com/4c09985be413c01f1551fec9c09bf583ee81ffbcd39baedba918275f72a2bfd4/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f726573657276612d636f6e6669726d6164612e504e47",
      },
      {
        caption: "Minhas reservas - pagamento pendente",
        url: "https://camo.githubusercontent.com/190248759b2f998135ee28ccde311082b22eb16c8fb318e4cb0a59c39c833b1e/68747470733a2f2f687772766b79696579766a6d7a6e6369766d6d742e73757061626173652e636f2f73746f726167652f76312f6f626a6563742f7075626c69632f696d616765732d686f74656c2f7072696e74732d6769746875622f62746e2d7067746f2d70656e64656e74652e504e47",
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
    thumbnail:
      "https://camo.githubusercontent.com/30f618a7a7821779b985eaea0581eb43d9460a5c33ddb3a8d9cfe64bf9c400bc/68747470733a2f2f692e696d6775722e636f6d2f6238496a72414b2e706e67",
    images: [
      {
        caption: "Hero",
        url: "https://camo.githubusercontent.com/30f618a7a7821779b985eaea0581eb43d9460a5c33ddb3a8d9cfe64bf9c400bc/68747470733a2f2f692e696d6775722e636f6d2f6238496a72414b2e706e67",
      },
      {
        caption: "Carrinho",
        url: "https://camo.githubusercontent.com/a0a68f512c1fd2e5f29fe51a575930c23d598a6f3081ac0551a478023a116f57/68747470733a2f2f692e696d6775722e636f6d2f3666486a4f656c2e706e67",
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
