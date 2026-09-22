/* =========================================================
   GINCANA DO CONHECIMENTO — CSS, JSP e SERVLET
   Lógica completa do jogo (sem backend)
   ========================================================= */

/* ---------------------- BANCO DE PERGUNTAS ---------------------- */

const FASES = [
  {
    id: "css",
    nome: "CSS",
    tag: "DESAFIO CSS",
    descricao: "Seletores, cores, fontes, box model e Flexbox.",
    pontos: 100,
    perguntas: [
      {
        pergunta: "Qual seletor CSS seleciona todos os elementos com a classe \"botao\"?",
        alternativas: [".botao", "#botao", "botao", "*botao"],
        correta: 0,
        explicacao: "Um ponto (.) antes do nome seleciona elementos pela classe. O cardinal (#) é usado para IDs."
      },
      {
        pergunta: "Qual seletor CSS seleciona o elemento com id \"menu\"?",
        alternativas: [".menu", "#menu", "menu", "$menu"],
        correta: 1,
        explicacao: "O cardinal (#) seleciona um elemento pelo seu atributo id, que deve ser único na página."
      },
      {
        pergunta: "Qual propriedade CSS define a cor do texto?",
        alternativas: ["background-color", "color", "font-color", "text-style"],
        correta: 1,
        explicacao: "A propriedade color define a cor do texto. background-color define a cor de fundo."
      },
      {
        pergunta: "Qual propriedade define a família da fonte de um elemento?",
        alternativas: ["font-family", "font-type", "text-font", "font-style"],
        correta: 0,
        explicacao: "font-family define qual (ou quais) fontes serão usadas para exibir o texto."
      },
      {
        pergunta: "Qual é a diferença entre margin e padding?",
        alternativas: [
          "margin é espaço interno, padding é externo",
          "margin é o espaço externo ao redor do elemento; padding é o espaço interno entre o conteúdo e a borda",
          "São exatamente a mesma coisa",
          "margin só funciona dentro de um Flexbox"
        ],
        correta: 1,
        explicacao: "padding fica entre o conteúdo e a borda do elemento; margin fica fora da borda, separando o elemento dos vizinhos."
      },
      {
        pergunta: "O que faz a propriedade display: none;?",
        alternativas: [
          "Deixa o elemento transparente",
          "Oculta o elemento e remove ele do fluxo do documento, como se não existisse",
          "Deixa o elemento com opacidade reduzida",
          "Centraliza o elemento na tela"
        ],
        correta: 1,
        explicacao: "display: none remove o elemento visualmente e do layout — ele não ocupa mais espaço na página."
      },
      {
        pergunta: "Qual propriedade é necessária para ativar o Flexbox em um container?",
        alternativas: ["display: flex", "position: flex", "flex: container", "layout: flex"],
        correta: 0,
        explicacao: "display: flex transforma o elemento em um flex container, permitindo alinhar seus filhos com propriedades de Flexbox."
      },
      {
        pergunta: "O que faz justify-content: center; em um flex container?",
        alternativas: [
          "Centraliza os itens no eixo transversal (vertical, por padrão)",
          "Centraliza os itens no eixo principal (horizontal, por padrão)",
          "Aumenta o espaçamento entre os itens",
          "Alinha todos os itens à direita"
        ],
        correta: 1,
        explicacao: "justify-content controla o alinhamento no eixo principal do Flexbox (horizontal, na direção padrão row)."
      },
      {
        pergunta: "O que faz a propriedade gap em um container Flexbox ou Grid?",
        alternativas: [
          "Define o espaço entre os elementos",
          "Define a largura da página",
          "Muda a cor do elemento",
          "Altera o tamanho da fonte"
        ],
        correta: 0,
        explicacao: "gap define o espaçamento entre os itens de um container flex ou grid, sem precisar usar margin em cada item."
      },
      {
        pergunta: "O que faz o pseudo-classe :hover em CSS?",
        alternativas: [
          "Aplica o estilo quando o elemento está oculto",
          "Aplica o estilo quando o mouse passa sobre o elemento",
          "Aplica o estilo apenas ao clicar",
          "Aplica o estilo ao carregar a página"
        ],
        correta: 1,
        explicacao: ":hover é um pseudo-classe que ativa o estilo enquanto o cursor do mouse está sobre o elemento."
      }
    ]
  },
  {
    id: "csspuzzle",
    nome: "CSS Puzzle",
    tag: "CSS PUZZLE",
    descricao: "Encontre o erro ou complete o código CSS.",
    pontos: 150,
    perguntas: [
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".card {\n    width: 300px\n    background-color: black;\n    padding: 20px;\n}",
        alternativas: [
          "Falta \";\" depois de \"300px\"",
          "\"width\" não pode ser utilizado",
          "\"background-color\" está errado",
          "\"padding\" não existe"
        ],
        correta: 0,
        explicacao: "Toda declaração CSS precisa terminar com ponto e vírgula. Sem ele, a próxima propriedade não é interpretada corretamente."
      },
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".botao {\n    color: red\n    font-size: 16px;\n}",
        alternativas: [
          "Falta \";\" depois de \"red\"",
          "\"color\" não existe",
          "\"font-size\" deve vir antes de \"color\"",
          "Não há erro nesse código"
        ],
        correta: 0,
        explicacao: "Falta o ponto e vírgula após \"red\", o que quebra a leitura da declaração seguinte."
      },
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".container {\n    diplay: flex;\n}",
        alternativas: [
          "Falta ponto e vírgula",
          "A propriedade está escrita errada: o correto é \"display\"",
          "\"flex\" não é um valor válido",
          "Não há erro nesse código"
        ],
        correta: 1,
        explicacao: "A propriedade foi digitada como \"diplay\" — o nome correto é \"display\". Erros de digitação são ignorados pelo navegador, sem aviso."
      },
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".titulo {\n    font-size: 20px;\n    color: blue;\n    background-color; yellow;\n}",
        alternativas: [
          "Falta \":\" entre \"background-color\" e \"yellow\" (foi usado \";\" no lugar)",
          "\"yellow\" não é uma cor válida",
          "\"font-size\" deve ser definido em porcentagem",
          "Não há erro nesse código"
        ],
        correta: 0,
        explicacao: "A sintaxe correta é propriedade: valor;. Aqui foi usado \";\" no lugar de \":\", quebrando a declaração."
      },
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".box {\n    width: 100px;\n    height 100px;\n    border: 1px solid black;\n}",
        alternativas: [
          "\"width\" não pode ser usado junto com \"height\"",
          "Falta \":\" entre \"height\" e \"100px\"",
          "\"border\" está com sintaxe incorreta",
          "Não há erro nesse código"
        ],
        correta: 1,
        explicacao: "Falta os dois pontos entre a propriedade height e o valor 100px, tornando a declaração inválida."
      },
      {
        pergunta: "Qual código seleciona corretamente todos os parágrafos que estão dentro de uma div com classe \"conteudo\"?",
        alternativas: [
          ".conteudo p { }",
          "p .conteudo { }",
          ".conteudo > p, { }",
          "p, .conteudo { }"
        ],
        correta: 0,
        explicacao: ".conteudo p seleciona todo elemento <p> descendente de qualquer elemento com classe conteudo."
      },
      {
        pergunta: "Qual é o problema nesse código?",
        codigo: "ul li {\n    list-style: none\n}",
        alternativas: [
          "\"list-style\" não existe",
          "Falta \";\" ao final da declaração",
          "\"ul li\" não é um seletor válido",
          "\"none\" não é um valor válido"
        ],
        correta: 1,
        explicacao: "Falta o ponto e vírgula após \"none\". Como é a única declaração do bloco, o erro pode não quebrar o layout, mas é uma má prática."
      },
      {
        pergunta: "Qual é o erro nesse código?",
        codigo: ".flex-container {\n    display: flex;\n    justify-content: center\n    align-items: center;\n}",
        alternativas: [
          "\"display: flex\" está errado",
          "Falta \";\" depois de \"center\" na linha do justify-content",
          "\"align-items\" não pode ser usado com \"justify-content\"",
          "Não há erro nesse código"
        ],
        correta: 1,
        explicacao: "Falta o ponto e vírgula ao final de justify-content: center, o que pode fazer o navegador ignorar a declaração seguinte."
      },
      {
        pergunta: "Qual código CSS centraliza corretamente um item horizontal e verticalmente usando Flexbox?",
        alternativas: [
          ".container { display: flex; justify-content: center; align-items: center; }",
          ".container { display: flex; text-align: center; }",
          ".container { position: center; }",
          ".container { margin: auto; display: block; }"
        ],
        correta: 0,
        explicacao: "justify-content centraliza no eixo principal e align-items centraliza no eixo transversal — juntos centralizam nos dois sentidos."
      },
      {
        pergunta: "Quais são os dois erros presentes nesse código?",
        codigo: "a {\n    text-decoration: none\n    color: black;\n}\na:hover {\n    color red;\n}",
        alternativas: [
          "Falta \";\" após \"none\" e falta \":\" entre \"color\" e \"red\"",
          "Não há erros nesse código",
          "\":hover\" está mal escrito",
          "\"text-decoration\" não existe"
        ],
        correta: 0,
        explicacao: "Faltam dois pontos e vírgula/dois-pontos: após \"none\" (falta ;) e entre \"color\" e \"red\" no seletor :hover (falta :)."
      }
    ]
  },
  {
    id: "jsp",
    nome: "JSP",
    tag: "DESAFIO JSP",
    descricao: "JavaServer Pages: scriptlets, EL e diretivas.",
    pontos: 150,
    perguntas: [
      {
        pergunta: "O que é JSP (JavaServer Pages)?",
        alternativas: [
          "Uma linguagem de banco de dados",
          "Uma tecnologia Java para criar páginas web dinâmicas, misturando HTML com código Java",
          "Um framework de estilização CSS",
          "Um tipo de servidor de e-mail"
        ],
        correta: 1,
        explicacao: "JSP permite escrever páginas com HTML e trechos de código Java, geradas dinamicamente no servidor."
      },
      {
        pergunta: "Onde uma página JSP é processada?",
        alternativas: ["No navegador", "No servidor", "No banco de dados", "No CSS"],
        correta: 1,
        explicacao: "O JSP é processado no servidor, que gera HTML puro e envia esse resultado para o navegador do cliente."
      },
      {
        pergunta: "O que é um scriptlet em uma página JSP?",
        alternativas: [
          "Um bloco de código Java dentro de <% %> em uma página JSP",
          "Um arquivo CSS externo vinculado à página",
          "Uma tag HTML personalizada",
          "Um tipo especial de Servlet"
        ],
        correta: 0,
        explicacao: "Scriptlets são blocos de código Java escritos entre <% e %> diretamente no meio do HTML da página JSP."
      },
      {
        pergunta: "O que é a Expression Language (EL) em JSP?",
        alternativas: [
          "Uma forma de acessar dados usando a sintaxe ${...}",
          "Uma linguagem de script executada no navegador",
          "Um tipo específico de banco de dados",
          "Um framework JavaScript para JSP"
        ],
        correta: 0,
        explicacao: "A EL usa a sintaxe ${...} para acessar variáveis e atributos de forma simples, sem precisar escrever código Java puro."
      },
      {
        pergunta: "O que a expressão ${nome} faz dentro de uma página JSP?",
        alternativas: [
          "Declara uma nova variável Java chamada nome",
          "Exibe o valor do atributo ou variável \"nome\" usando Expression Language",
          "Importa uma classe Java chamada nome",
          "Cria um novo objeto Servlet"
        ],
        correta: 1,
        explicacao: "${nome} busca e exibe o valor de um atributo chamado \"nome\" disponível nos escopos da requisição, sessão ou aplicação."
      },
      {
        pergunta: "O que é uma diretiva JSP, como <%@ page ... %>?",
        alternativas: [
          "Um comentário que não é processado",
          "Uma instrução que configura propriedades da página, como importações e tipo de conteúdo",
          "Uma tag HTML personalizada",
          "Um método da classe Servlet"
        ],
        correta: 1,
        explicacao: "Diretivas como <%@ page %> configuram como a página JSP será compilada, incluindo imports e o tipo de conteúdo gerado."
      },
      {
        pergunta: "Qual é a extensão de arquivo usada para páginas JSP?",
        alternativas: [".java", ".jsp", ".html", ".class"],
        correta: 1,
        explicacao: "Arquivos JSP usam a extensão .jsp, mesmo misturando HTML e código Java."
      },
      {
        pergunta: "Quando o servidor recebe uma requisição para um arquivo .jsp, o que acontece internamente?",
        alternativas: [
          "O arquivo é enviado como está, sem processamento",
          "O JSP é convertido em um Servlet Java, compilado e executado, gerando HTML como resposta",
          "O navegador processa o arquivo diretamente",
          "O arquivo é ignorado pelo servidor"
        ],
        correta: 1,
        explicacao: "Por trás dos panos, todo JSP vira um Servlet: o servidor traduz o arquivo .jsp em código Java, compila e executa."
      },
      {
        pergunta: "Qual é a relação entre JSP e HTML?",
        alternativas: [
          "São tecnologias totalmente incompatíveis",
          "JSP permite misturar código Java com tags HTML na mesma página",
          "HTML substitui completamente a necessidade de JSP",
          "JSP não é capaz de gerar HTML"
        ],
        correta: 1,
        explicacao: "Uma das grandes vantagens do JSP é justamente poder escrever HTML normalmente e inserir trechos de Java quando necessário."
      },
      {
        pergunta: "O que será exibido no navegador com este código?",
        codigo: "<% int total = 10 + 5; %>\n<p>Total: <%= total %></p>",
        alternativas: [
          "<% int total = 10 + 5; %>",
          "Total: 10 + 5",
          "Total: 15",
          "Um erro de compilação"
        ],
        correta: 2,
        explicacao: "O scriptlet calcula 10 + 5 = 15 e a expressão <%= total %> imprime o valor da variável no HTML final."
      }
    ]
  },
  {
    id: "servlet",
    nome: "Servlet",
    tag: "DESAFIO SERVLET",
    descricao: "HttpServlet, doGet, doPost e o ciclo de requisição.",
    pontos: 200,
    perguntas: [
      {
        pergunta: "O que é um Servlet?",
        alternativas: [
          "Uma página HTML estática",
          "Uma classe Java que roda no servidor e processa requisições e respostas web",
          "Um framework de estilização CSS",
          "Um sistema de banco de dados"
        ],
        correta: 1,
        explicacao: "Servlets são classes Java executadas no servidor, responsáveis por receber requisições HTTP e gerar respostas."
      },
      {
        pergunta: "Qual classe uma Servlet geralmente estende?",
        alternativas: ["HttpServer", "HttpServlet", "WebServlet", "ServletRequest"],
        correta: 1,
        explicacao: "A classe HttpServlet fornece a estrutura básica para tratar requisições HTTP, como doGet e doPost."
      },
      {
        pergunta: "Qual método é chamado para tratar requisições GET?",
        alternativas: ["doPost", "doGet", "doRequest", "getMethod"],
        correta: 1,
        explicacao: "O método doGet() é sobrescrito para tratar requisições HTTP do tipo GET."
      },
      {
        pergunta: "Qual método é chamado para tratar requisições POST?",
        alternativas: ["doGet", "doPost", "doSend", "postMethod"],
        correta: 1,
        explicacao: "O método doPost() é sobrescrito para tratar requisições HTTP do tipo POST, geralmente usadas em formulários."
      },
      {
        pergunta: "O que representa o objeto \"request\" dentro de um Servlet?",
        alternativas: [
          "A resposta que será enviada ao navegador",
          "A requisição feita pelo cliente, incluindo os dados enviados como parâmetros",
          "A conexão com o banco de dados",
          "A página JSP de destino"
        ],
        correta: 1,
        explicacao: "O objeto request (HttpServletRequest) carrega todas as informações da requisição feita pelo cliente."
      },
      {
        pergunta: "O que representa o objeto \"response\" dentro de um Servlet?",
        alternativas: [
          "Os dados enviados pelo formulário",
          "A resposta que o Servlet envia de volta ao cliente",
          "A URL que foi requisitada",
          "O container onde o Servlet está hospedado"
        ],
        correta: 1,
        explicacao: "O objeto response (HttpServletResponse) é usado para construir e enviar a resposta HTTP ao navegador do cliente."
      },
      {
        pergunta: "O que faz este código?",
        codigo: "String usuario =\n    request.getParameter(\"usuario\");",
        alternativas: [
          "Cria um novo usuário no sistema",
          "Busca o valor enviado pelo parâmetro \"usuario\"",
          "Envia uma resposta para o navegador",
          "Abre uma página JSP"
        ],
        correta: 1,
        explicacao: "getParameter() lê o valor de um parâmetro enviado na requisição (por exemplo, de um campo de formulário chamado \"usuario\")."
      },
      {
        pergunta: "O que faz o método setAttribute() do objeto request?",
        alternativas: [
          "Remove um parâmetro da requisição",
          "Armazena um valor no escopo da requisição, para ser usado por exemplo em uma página JSP",
          "Envia dados diretamente ao banco de dados",
          "Fecha a conexão HTTP"
        ],
        correta: 1,
        explicacao: "setAttribute() guarda um dado no escopo da requisição, permitindo que a JSP encaminhada acesse esse valor (ex: com EL)."
      },
      {
        pergunta: "Para que serve o RequestDispatcher em um Servlet?",
        alternativas: [
          "Para encaminhar (forward) ou incluir a execução para outro recurso, como uma página JSP",
          "Para conectar o Servlet ao banco de dados",
          "Para validar os campos de um formulário",
          "Para aplicar estilos CSS na página"
        ],
        correta: 0,
        explicacao: "O RequestDispatcher permite que o Servlet encaminhe (forward) a requisição para outro recurso do servidor, como uma JSP."
      },
      {
        pergunta: "O que faz a anotação @WebServlet(\"/login\") acima de uma classe Servlet?",
        alternativas: [
          "Importa uma biblioteca externa",
          "Mapeia a URL \"/login\" para essa classe Servlet",
          "Define a cor de fundo da página",
          "Cria uma tabela no banco de dados"
        ],
        correta: 1,
        explicacao: "@WebServlet associa uma URL da aplicação a essa classe, fazendo com que requisições para \"/login\" sejam tratadas por ela."
      }
    ]
  },
  {
    id: "integracao",
    nome: "Integração JSP + Servlet",
    tag: "DESAFIO INTEGRAÇÃO",
    descricao: "O fluxo completo: formulário → Servlet → JSP.",
    pontos: 250,
    perguntas: [
      {
        pergunta: "Qual é a sequência correta quando um formulário envia dados para um Servlet?",
        alternativas: [
          "Formulário → Servlet → Request → JSP → HTML",
          "JSP → Servlet → Formulário → HTML → Request",
          "Servlet → Formulário → HTML → Request → JSP",
          "Formulário → JSP → Servlet → Request → HTML"
        ],
        correta: 0,
        explicacao: "O formulário envia os dados ao Servlet, que usa o objeto request, processa e encaminha para uma JSP, que gera o HTML final."
      },
      {
        pergunta: "Considerando este código, para qual endereço o formulário está enviando os dados?",
        codigo: "<form action=\"login\" method=\"post\">\n    <input name=\"usuario\">\n    <button>Entrar</button>\n</form>\n\n@WebServlet(\"/login\")",
        alternativas: ["/home", "/login", "/servlet", "/index"],
        correta: 1,
        explicacao: "O atributo action=\"login\" faz o formulário enviar os dados para a URL mapeada por @WebServlet(\"/login\")."
      },
      {
        pergunta: "Com este formulário e Servlet, qual método será chamado ao enviar os dados?",
        codigo: "<form action=\"cadastro\" method=\"post\">\n    <input name=\"email\">\n</form>\n\n@WebServlet(\"/cadastro\")",
        alternativas: ["doGet", "doPost", "doPut", "doDelete"],
        correta: 1,
        explicacao: "Como o formulário usa method=\"post\", a requisição chega como POST e é tratada pelo método doPost() do Servlet."
      },
      {
        pergunta: "Depois que o Servlet usa RequestDispatcher.forward() para uma JSP, o que acontece com a URL exibida no navegador?",
        alternativas: [
          "Ela muda para a URL da página JSP",
          "Ela permanece a mesma da requisição original, pois o forward é interno ao servidor",
          "Ela fica em branco",
          "O navegador é redirecionado para outro site"
        ],
        correta: 1,
        explicacao: "forward() é um encaminhamento feito dentro do servidor: o navegador não percebe e a URL na barra de endereços não muda."
      },
      {
        pergunta: "Com este código no Servlet, como a página JSP pode acessar o valor de \"nome\"?",
        codigo: "String nome = request.getParameter(\"usuario\");\nrequest.setAttribute(\"nome\", nome);",
        alternativas: [
          "Usando ${nome} na página JSP",
          "Usando document.getElementById(\"nome\")",
          "Usando import nome;",
          "Não é possível acessar esse valor na JSP"
        ],
        correta: 0,
        explicacao: "Como o valor foi guardado com setAttribute(\"nome\", nome), a JSP pode exibi-lo com a Expression Language ${nome}."
      },
      {
        pergunta: "Na arquitetura MVC usada com JSP e Servlet, qual é o papel do Servlet?",
        alternativas: [
          "O Servlet é a View (apresentação)",
          "O Servlet atua como Controller, recebendo requisições e decidindo qual JSP (View) exibir",
          "O Servlet é o Model (dados)",
          "O Servlet substitui completamente o banco de dados"
        ],
        correta: 1,
        explicacao: "No padrão MVC, o Servlet funciona como Controller: recebe a requisição, processa a lógica e decide qual JSP será exibida."
      },
      {
        pergunta: "O que acontece se request.getParameter() for chamado com um nome que não foi enviado pelo formulário?",
        alternativas: [
          "O servidor trava imediatamente",
          "O método retorna null",
          "O método lança sempre uma exceção obrigatória",
          "O método retorna 0"
        ],
        correta: 1,
        explicacao: "Se o parâmetro não existir na requisição, getParameter() simplesmente retorna null, sem lançar erro."
      },
      {
        pergunta: "Qual é a ordem correta de execução destes passos em um Servlet?",
        codigo: "request.getParameter()\nrequest.setAttribute()\ngetRequestDispatcher()\nforward()",
        alternativas: [
          "getParameter → setAttribute → getRequestDispatcher → forward",
          "forward → getParameter → setAttribute → getRequestDispatcher",
          "setAttribute → getParameter → forward → getRequestDispatcher",
          "getRequestDispatcher → forward → getParameter → setAttribute"
        ],
        correta: 0,
        explicacao: "Primeiro lemos o dado enviado (getParameter), guardamos ele (setAttribute), pegamos o despachante (getRequestDispatcher) e só então encaminhamos (forward)."
      },
      {
        pergunta: "Em uma aplicação JSP + Servlet, onde geralmente fica a lógica de processamento e onde fica a apresentação visual?",
        alternativas: [
          "O Servlet contém a lógica de processamento; a JSP contém a apresentação",
          "A JSP contém a lógica de processamento; o Servlet contém a apresentação",
          "Ambos contêm apenas apresentação visual",
          "Ambos contêm apenas lógica, sem apresentação"
        ],
        correta: 0,
        explicacao: "O Servlet cuida de regras de negócio e processamento; a JSP é responsável por exibir o resultado em HTML."
      },
      {
        pergunta: "Se o Servlet usar response.sendRedirect(\"home.jsp\") em vez de forward, qual a principal diferença?",
        alternativas: [
          "Não existe nenhuma diferença prática",
          "sendRedirect faz o navegador criar uma nova requisição (a URL muda); forward é um encaminhamento interno no servidor",
          "sendRedirect é sempre mais rápido que forward",
          "forward não pode ser usado com páginas JSP"
        ],
        correta: 1,
        explicacao: "sendRedirect envia uma instrução ao navegador para fazer uma nova requisição a outra URL; forward acontece inteiramente no servidor, sem o navegador perceber."
      }
    ]
  },
  {
    id: "final",
    nome: "🔐 Hack the System",
    tag: "DESAFIO FINAL",
    descricao: "Analisem o sistema completo e encontrem as respostas certas.",
    pontos: 300,
    perguntas: [
      {
        pergunta: "Neste sistema, qual método do Servlet será executado quando o formulário for enviado?",
        codigo: "<form action=\"login\" method=\"post\">\n    <input type=\"text\" name=\"usuario\">\n    <button>Entrar</button>\n</form>\n\n@WebServlet(\"/login\")\npublic class LoginServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest request,\n                           HttpServletResponse response) {\n        String nome = request.getParameter(\"usuario\");\n        request.setAttribute(\"nome\", nome);\n        RequestDispatcher rd =\n            request.getRequestDispatcher(\"home.jsp\");\n        rd.forward(request, response);\n    }\n}",
        alternativas: ["doGet", "doPost", "init", "service"],
        correta: 1,
        explicacao: "O formulário usa method=\"post\", então a requisição é tratada pelo método doPost(), que é o único implementado nesse Servlet."
      },
      {
        pergunta: "O que aconteceria se o atributo method do formulário fosse alterado para \"get\", sem mudar o Servlet?",
        alternativas: [
          "Nada mudaria, o sistema continuaria funcionando normalmente",
          "A requisição não seria tratada, pois o Servlet só implementa doPost() e não doGet()",
          "O formulário pararia de existir",
          "O CSS da página deixaria de funcionar"
        ],
        correta: 1,
        explicacao: "Como o Servlet só sobrescreve doPost(), uma requisição GET cairia no comportamento padrão (erro/método não suportado)."
      },
      {
        pergunta: "Na página home.jsp, qual código exibiria corretamente o nome do usuário enviado pelo formulário?",
        alternativas: ["<%= usuario %>", "${nome}", "${usuario}", "<% nome %>"],
        correta: 1,
        explicacao: "O Servlet guarda o valor com request.setAttribute(\"nome\", nome), então a JSP deve acessá-lo com ${nome}."
      },
      {
        pergunta: "Se o input do formulário tivesse name=\"nomeUsuario\" em vez de name=\"usuario\", sem alterar o Servlet, o que aconteceria?",
        alternativas: [
          "Nenhuma mudança, tudo funcionaria normalmente",
          "request.getParameter(\"usuario\") retornaria null, pois o nome do parâmetro não corresponde mais",
          "O Servlet não compilaria",
          "O formulário pararia de enviar dados"
        ],
        correta: 1,
        explicacao: "getParameter() busca pelo nome exato do campo. Se o nome mudar no HTML e não no Servlet, o valor não será encontrado (null)."
      },
      {
        pergunta: "Por que exibir o valor de \"usuario\" diretamente em HTML, sem nenhum tratamento, pode ser perigoso?",
        alternativas: [
          "Não há nenhuma vulnerabilidade nessa prática",
          "É vulnerável a XSS (Cross-Site Scripting), pois um valor malicioso poderia ser inserido e executado no navegador",
          "Isso causaria apenas um erro de CSS",
          "Isso não afeta a segurança da aplicação"
        ],
        correta: 1,
        explicacao: "Exibir entrada do usuário sem tratamento permite que scripts maliciosos sejam injetados e executados na página (ataque XSS)."
      },
      {
        pergunta: "Supondo que a aplicação esteja publicada em \"/gincana\", qual URL aciona esse Servlet?",
        alternativas: ["/gincana/login", "/login/gincana", "/gincana/LoginServlet", "/home.jsp"],
        correta: 0,
        explicacao: "A URL final é o contexto da aplicação (/gincana) somado ao mapeamento do @WebServlet (/login)."
      },
      {
        pergunta: "O que ocorre se a linha rd.forward(request, response); for removida do código?",
        alternativas: [
          "O usuário é redirecionado automaticamente para home.jsp",
          "Nenhuma página é enviada como resposta ao navegador, deixando a resposta incompleta",
          "O CSS da aplicação deixa de funcionar",
          "Nada muda no comportamento do sistema"
        ],
        correta: 1,
        explicacao: "Sem o forward(), o Servlet processa os dados mas nunca envia nenhum conteúdo de resposta ao navegador."
      },
      {
        pergunta: "Se quiséssemos que a URL do navegador mudasse para \"home.jsp\" após o processamento, o que deveria ser feito?",
        alternativas: [
          "Nada, isso já acontece automaticamente com forward()",
          "Trocar rd.forward(request, response) por response.sendRedirect(\"home.jsp\")",
          "Adicionar @WebServlet(\"/home\") na mesma classe",
          "Remover o RequestDispatcher do código"
        ],
        correta: 1,
        explicacao: "sendRedirect() faz o navegador fazer uma nova requisição para a URL informada, o que muda o endereço exibido."
      },
      {
        pergunta: "Qual alternativa representa corretamente o fluxo completo desse sistema, do clique no botão até a exibição da página final?",
        alternativas: [
          "Navegador → Formulário → Servlet (doPost) → getParameter → setAttribute → forward → home.jsp → HTML → Navegador",
          "Navegador → home.jsp → Servlet → Formulário",
          "Formulário → CSS → Servlet → Banco de Dados",
          "Servlet → Formulário → Navegador → JSP → CSS"
        ],
        correta: 0,
        explicacao: "Esse é o ciclo completo: o navegador envia o formulário, o Servlet processa os dados e encaminha para a JSP, que gera o HTML de volta ao navegador."
      },
      {
        pergunta: "Se dois usuários acessarem o sistema ao mesmo tempo enviando nomes diferentes, o que garante que cada um veja seu próprio nome?",
        alternativas: [
          "O CSS separa visualmente as requisições",
          "Cada requisição HTTP é independente; o Servlet cria um novo objeto request para cada requisição recebida, mantendo os dados isolados",
          "O banco de dados guarda os nomes de cada usuário",
          "Não há garantia nenhuma, os dados se misturam"
        ],
        correta: 1,
        explicacao: "Cada requisição gera seu próprio objeto request/response no servidor, então os dados de usuários diferentes não se misturam."
      }
    ]
  }
];

/* ---------------------- FRASE SECRETA ---------------------- */

// Cada rodada sorteia uma destas frases (sempre 6 palavras — uma por fase).
const SECRET_PHRASES = [
  "Quem estuda programação constrói o futuro",
  "Prática constante forma grandes programadores web",
  "Código limpo economiza tempo no futuro",
  "Todo erro ensina algo ao programador",
  "Aprender a programar exige prática diária"
];

const PUZZLE_STARTER = `<!DOCTYPE html>
<html>
<head>
  <title>Minha Página</title>
</head>
<body>
  <h1>Escrevam aqui a frase secreta!</h1>

</body>
</html>`;

/* ---------------------- ESTADO DO JOGO ---------------------- */

const WRONG_ANSWER_PENALTY = 10;
const PHASE_PASS_RATIO = 0.7;

const state = {
  score: 0,
  correct: 0,
  wrong: 0,
  phaseIndex: 0,
  phaseQuestions: [],
  phaseCorrect: 0,
  questionIndex: 0,
  currentAlternatives: [],
  answered: false,
  soundOn: true,
  totalAnswered: 0,
  phraseWords: [],
  wordOrder: [],
  collectedWords: [],
  puzzleSolved: false
};

/* ---------------------- HELPERS ---------------------- */

const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  $(id).classList.add("active");
}

function letterFor(i) {
  return ["A", "B", "C", "D"][i];
}

function normalizeText(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/* ---------------------- SOM (Web Audio) ---------------------- */

let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  return audioCtx;
}

function playTone(type) {
  if (!state.soundOn) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === "correct") {
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.1);
    osc.frequency.setValueAtTime(783.99, now + 0.2);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === "wrong") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.35);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === "click") {
    osc.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  }
}

/* ---------------------- CONFETES ---------------------- */

const confettiCanvas = $("confetti-canvas");
const confettiCtx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiRunning = false;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti() {
  const colors = ["#38f2ff", "#a259ff", "#ff4fd8", "#3ddc84", "#ffd166"];
  confettiParticles = [];
  for (let i = 0; i < 160; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * confettiCanvas.height * 0.5,
      r: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: 2 + Math.random() * 3,
      speedX: -1.5 + Math.random() * 3,
      rot: Math.random() * 360,
      rotSpeed: -6 + Math.random() * 12
    });
  }
  if (!confettiRunning) {
    confettiRunning = true;
    requestAnimationFrame(animateConfetti);
  }
  setTimeout(() => { confettiParticles = []; }, 4500);
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.rot += p.rotSpeed;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rot * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
    confettiCtx.restore();
  });
  if (confettiParticles.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* ---------------------- SCOREBOARD ---------------------- */

function updateScoreboard() {
  $("score-points").textContent = state.score;
}

function bumpScore() {
  const el = $("score-points");
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

/* ---------------------- FASE TRACK ---------------------- */

function renderPhaseTrack() {
  const track = $("phase-track");
  track.innerHTML = "";
  FASES.forEach((fase, i) => {
    const dot = document.createElement("div");
    dot.className = "phase-dot";
    if (i < state.phaseIndex) dot.classList.add("done");
    else if (i === state.phaseIndex) dot.classList.add("current");
    dot.textContent = i < state.phaseIndex ? "✓" : (i + 1);
    dot.title = fase.nome;
    track.appendChild(dot);
  });
}

/* ---------------------- FRASE SECRETA (UI) ---------------------- */

function renderPhraseTrack() {
  const container = $("phrase-chips");
  container.innerHTML = "";
  FASES.forEach((fase, i) => {
    const chip = document.createElement("span");
    const revealed = i < state.collectedWords.length;
    chip.className = "phrase-chip" + (revealed ? " revealed" : "");
    chip.textContent = revealed ? state.collectedWords[i] : "?";
    container.appendChild(chip);
  });
}

/* ---------------------- FLUXO: TELAS INICIAIS ---------------------- */

function resetGameState() {
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.phaseIndex = 0;
  state.phaseQuestions = [];
  state.phaseCorrect = 0;
  state.questionIndex = 0;
  state.currentAlternatives = [];
  state.answered = false;
  state.totalAnswered = 0;
  // Sorteia a frase secreta da rodada e embaralha em qual fase cada
  // palavra é revelada (para não sair na ordem da frase).
  state.phraseWords = shuffle(SECRET_PHRASES)[0].split(" ");
  state.wordOrder = shuffle(state.phraseWords.map((_, i) => i));
  state.collectedWords = [];
  state.puzzleSolved = false;
}

$("btn-goto-rules").addEventListener("click", () => {
  resetGameState();
  updateScoreboard();
  $("topbar").classList.remove("hidden");
  showScreen("screen-rules");
});

$("btn-goto-game").addEventListener("click", () => {
  resetGameState();
  updateScoreboard();
  updateTeacherPanel();
  showScreen("screen-game");
  renderPhaseTrack();
  renderPhraseTrack();
  startPhase(0);
});

/* ---------------------- FLUXO DE FASES ---------------------- */

function startPhase(index) {
  state.phaseIndex = index;
  const fase = FASES[index];
  state.phaseQuestions = shuffle(fase.perguntas).slice(0, 10);
  state.questionIndex = 0;
  state.phaseCorrect = 0;

  renderPhaseTrack();

  $("phase-intro-tag").textContent = "FASE " + (index + 1);
  $("phase-intro-title").textContent = fase.nome;
  $("phase-intro-desc").textContent = fase.descricao;
  $("phase-intro-pts").textContent = fase.pontos + " pontos por acerto";

  $("question-area").classList.add("hidden");
  $("phase-complete").classList.add("hidden");
  $("phase-failed").classList.add("hidden");
  $("phase-intro").classList.remove("hidden");
}

$("btn-start-phase").addEventListener("click", () => {
  $("phase-intro").classList.add("hidden");
  $("question-area").classList.remove("hidden");
  renderQuestion();
});

/* ---------------------- PERGUNTA ---------------------- */

function renderQuestion() {
  state.answered = false;
  const fase = FASES[state.phaseIndex];
  const q = state.phaseQuestions[state.questionIndex];

  updateScoreboard();

  $("question-phase-tag").textContent = fase.tag;
  $("qcounter-text").textContent = `QUESTÃO ${state.questionIndex + 1} / ${state.phaseQuestions.length}`;
  $("question-progress").style.width = `${((state.questionIndex) / state.phaseQuestions.length) * 100}%`;

  $("question-text").textContent = q.pergunta;

  const codeEl = $("question-code");
  if (q.codigo) {
    codeEl.querySelector("code").textContent = q.codigo;
    codeEl.classList.remove("hidden");
  } else {
    codeEl.classList.add("hidden");
  }

  // Embaralha as alternativas a cada exibição, para a resposta certa
  // não ficar sempre na mesma posição.
  const order = shuffle(q.alternativas.map((_, i) => i));
  state.currentAlternatives = order.map((origIndex) => ({
    text: q.alternativas[origIndex],
    isCorrect: origIndex === q.correta
  }));

  const altContainer = $("alternatives");
  altContainer.innerHTML = "";
  state.currentAlternatives.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.className = "alt-btn";
    btn.innerHTML = `<span class="alt-letter">${letterFor(i)}</span><span>${alt.text}</span>`;
    btn.addEventListener("click", () => selectAnswer(i));
    altContainer.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  playTone("click");

  const fase = FASES[state.phaseIndex];
  const q = state.phaseQuestions[state.questionIndex];
  const alts = state.currentAlternatives;
  const isCorrect = alts[index].isCorrect;
  const correctIndex = alts.findIndex((a) => a.isCorrect);

  const buttons = $("alternatives").querySelectorAll(".alt-btn");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIndex) b.classList.add("correct");
    if (i === index && !isCorrect) b.classList.add("wrong");
    if (i !== index && i !== correctIndex) b.classList.add("dim");
  });

  state.totalAnswered++;

  if (isCorrect) {
    state.score += fase.pontos;
    state.correct++;
    state.phaseCorrect++;
    bumpScore();
    playTone("correct");
    launchFeedback(true, fase.pontos, q, correctIndex);
  } else {
    state.wrong++;
    const penalty = Math.min(WRONG_ANSWER_PENALTY, state.score);
    state.score -= penalty;
    bumpScore();
    playTone("wrong");
    $("app").classList.add("shake");
    setTimeout(() => $("app").classList.remove("shake"), 400);
    launchFeedback(false, penalty, q, correctIndex);
  }

  updateScoreboard();
  updateTeacherPanel();
}

function launchFeedback(isCorrect, points, q, correctIndex) {
  const icon = $("feedback-icon");
  const title = $("feedback-title");
  const pointsEl = $("feedback-points");
  const correctAnswerEl = $("feedback-correct-answer");

  if (isCorrect) {
    icon.textContent = "🎉";
    title.textContent = "CORRETO!";
    title.className = "feedback-title ok";
    pointsEl.textContent = `+${points} pontos`;
    pointsEl.style.color = "var(--green)";
    correctAnswerEl.classList.add("hidden");
    launchConfetti();
  } else {
    icon.textContent = "❌";
    title.textContent = "INCORRETO!";
    title.className = "feedback-title fail";
    pointsEl.textContent = points > 0 ? `-${points} pontos` : "0 pontos";
    pointsEl.style.color = "var(--red)";
    const correctText = state.currentAlternatives[correctIndex].text;
    correctAnswerEl.innerHTML = `A resposta correta era: <strong>${letterFor(correctIndex)}) ${correctText}</strong>`;
    correctAnswerEl.classList.remove("hidden");
  }

  $("feedback-explanation").textContent = q.explicacao;
  $("feedback-modal").classList.remove("hidden");
}

$("btn-continue").addEventListener("click", () => {
  $("feedback-modal").classList.add("hidden");
  nextQuestion();
});

function nextQuestion() {
  state.questionIndex++;
  const total = state.phaseQuestions.length;

  if (state.questionIndex >= total) {
    $("question-progress").style.width = "100%";
    finishPhase();
  } else {
    renderQuestion();
  }
}

function finishPhase() {
  $("question-area").classList.add("hidden");
  const fase = FASES[state.phaseIndex];
  const ratio = state.phaseCorrect / state.phaseQuestions.length;

  if (ratio < PHASE_PASS_RATIO) {
    failPhase(fase, ratio);
    return;
  }

  $("phase-complete-title").textContent = fase.nome;
  revealPhaseWord();

  const isLastPhase = state.phaseIndex >= FASES.length - 1;
  $("btn-next-phase").textContent = isLastPhase ? "🧩 Ir para o Desafio Final →" : "Próxima Fase →";

  $("phase-complete").classList.remove("hidden");
  renderPhaseTrack();
}

function revealPhaseWord() {
  // A palavra revelada nesta fase não segue a ordem da frase —
  // vem do mapeamento embaralhado sorteado no início da rodada.
  const revealedWord = state.phraseWords[state.wordOrder[state.phaseIndex]];
  state.collectedWords[state.phaseIndex] = revealedWord;
  $("word-reveal-word").textContent = revealedWord;
  renderPhraseTrack();
  return revealedWord;
}

function failPhase(fase, ratio) {
  const pct = Math.round(ratio * 100);
  $("phase-failed-title").textContent = fase.nome;
  $("phase-failed-desc").textContent = `A turma acertou ${pct}% desta fase (${state.phaseCorrect}/${state.phaseQuestions.length}). É preciso pelo menos 70% para avançar.`;
  $("phase-failed").classList.remove("hidden");
  playTone("wrong");
}

function advancePastFailedPhase() {
  // Override do professor: avança mesmo sem atingir os 70%, sem forçar
  // o recomeço que o botão visível para a turma exige.
  revealPhaseWord();
  $("phase-failed").classList.add("hidden");
  const nextIndex = state.phaseIndex + 1;
  if (nextIndex >= FASES.length) {
    startPuzzle();
  } else {
    startPhase(nextIndex);
  }
}

$("btn-next-phase").addEventListener("click", () => {
  const nextIndex = state.phaseIndex + 1;
  if (nextIndex >= FASES.length) {
    startPuzzle();
  } else {
    startPhase(nextIndex);
  }
});

$("btn-restart-phase1").addEventListener("click", () => {
  resetGameState();
  updateScoreboard();
  updateTeacherPanel();
  renderPhaseTrack();
  renderPhraseTrack();
  $("phase-failed").classList.add("hidden");
  startPhase(0);
});

/* ---------------------- QUEBRA-CABEÇA FINAL ---------------------- */

function startPuzzle() {
  state.puzzleSolved = false;
  showScreen("screen-puzzle");

  // Mostra as palavras coletadas fora de ordem (banco de palavras) —
  // a turma precisa descobrir a sequência certa, a frase não é entregue pronta.
  const bankEl = $("puzzle-phrase");
  bankEl.innerHTML = "";
  shuffle(state.collectedWords).forEach((word) => {
    const chip = document.createElement("span");
    chip.className = "secret-word-chip";
    chip.textContent = word;
    bankEl.appendChild(chip);
  });

  $("puzzle-feedback").classList.add("hidden");
  $("puzzle-feedback").textContent = "";
  $("btn-puzzle-continue").classList.add("hidden");
  $("btn-check-puzzle").disabled = false;

  const codeEl = $("puzzle-code");
  codeEl.value = PUZZLE_STARTER;
  updatePuzzlePreview();
}

function updatePuzzlePreview() {
  $("puzzle-preview").srcdoc = $("puzzle-code").value;
}

$("puzzle-code").addEventListener("input", updatePuzzlePreview);

function extractVisibleText(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return (doc.body ? doc.body.textContent : doc.documentElement.textContent) || "";
}

$("btn-check-puzzle").addEventListener("click", () => {
  const html = $("puzzle-code").value;
  const visibleText = normalizeText(extractVisibleText(html));
  const normalizedPhrase = normalizeText(state.phraseWords.join(" "));
  const found = visibleText.includes(normalizedPhrase);

  const feedbackEl = $("puzzle-feedback");
  feedbackEl.classList.remove("hidden", "success", "fail");

  if (found) {
    playTone("correct");
    if (!state.puzzleSolved) {
      state.puzzleSolved = true;
      state.score += 100;
      state.correct++;
      bumpScore();
      updateScoreboard();
      updateTeacherPanel();
    }
    feedbackEl.classList.add("success");
    feedbackEl.textContent = "🎉 Frase encontrada na página! +100 pontos bônus para a turma!";
    launchConfetti();
    $("btn-puzzle-continue").classList.remove("hidden");
    $("btn-check-puzzle").disabled = true;
  } else {
    playTone("wrong");
    feedbackEl.classList.add("fail");
    feedbackEl.textContent = "❌ A frase secreta ainda não aparece na página. Revisem o HTML e tentem de novo!";
  }
});

$("btn-puzzle-continue").addEventListener("click", endGame);

/* ---------------------- RESULTADO FINAL ---------------------- */

function endGame() {
  showScreen("screen-result");
  renderResult();
}

function renderResult() {
  const ranking = $("result-ranking");
  const phraseLine = state.puzzleSolved
    ? `Frase secreta: "${state.phraseWords.join(" ")}" 🧩 Desafio Final concluído!`
    : "🧩 Desafio Final não foi concluído desta vez.";
  ranking.innerHTML = `
    <div class="result-row">
      <div><span class="result-medal">🏆</span><span class="result-name">Turma</span></div>
      <div class="result-points">${state.score} pts</div>
    </div>
    <div class="result-sub2">${state.correct} acertos / ${state.wrong} erros · ${phraseLine}</div>
  `;
  launchConfetti();
  setTimeout(launchConfetti, 700);
}

/* ---------------------- REINÍCIO ---------------------- */

function restartGame() {
  resetGameState();

  $("topbar").classList.add("hidden");
  updateScoreboard();
  updateTeacherPanel();
  showScreen("screen-start");
}

$("btn-restart").addEventListener("click", restartGame);

/* ---------------------- SOM TOGGLE ---------------------- */

$("btn-sound").addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  $("btn-sound").textContent = state.soundOn ? "🔊 Som: ON" : "🔇 Som: OFF";
});

/* ---------------------- MODO PROFESSOR ---------------------- */

function updateTeacherPanel() {
  $("teacher-score").textContent = state.score + " pts";
  $("teacher-ac").textContent = `${state.correct} acertos / ${state.wrong} erros`;

  const onPuzzle = document.getElementById("screen-puzzle").classList.contains("active");
  const faseAtual = onPuzzle ? "Desafio Final (quebra-cabeça)" : (FASES[state.phaseIndex] ? FASES[state.phaseIndex].nome : "—");
  $("teacher-phase").textContent = faseAtual;
  $("teacher-answered").textContent = state.totalAnswered;
}

$("btn-teacher").addEventListener("click", () => {
  updateTeacherPanel();
  $("teacher-panel").classList.remove("hidden");
});

$("btn-close-teacher").addEventListener("click", () => {
  $("teacher-panel").classList.add("hidden");
});

$("btn-teacher-advance").addEventListener("click", () => {
  $("teacher-panel").classList.add("hidden");
  $("feedback-modal").classList.add("hidden");

  if ($("screen-puzzle").classList.contains("active")) {
    endGame();
    return;
  }

  const introVisible = !$("phase-intro").classList.contains("hidden");
  const completeVisible = !$("phase-complete").classList.contains("hidden");
  const failedVisible = !$("phase-failed").classList.contains("hidden");

  if (introVisible) {
    $("btn-start-phase").click();
  } else if (completeVisible) {
    $("btn-next-phase").click();
  } else if (failedVisible) {
    advancePastFailedPhase();
  } else if (!$("question-area").classList.contains("hidden")) {
    nextQuestion();
  }
});

$("btn-teacher-reset-score").addEventListener("click", () => {
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  updateScoreboard();
  updateTeacherPanel();
});

$("btn-teacher-restart").addEventListener("click", () => {
  if (confirm("Tem certeza que deseja reiniciar o jogo do zero?")) {
    $("teacher-panel").classList.add("hidden");
    $("feedback-modal").classList.add("hidden");
    restartGame();
  }
});
