const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os impactos ambientais e sociais das queimadas nas florestas tropicais, e como essas práticas podem ser mitigadas para preservar a biodiversidade e os meios de subsistência das comunidades locais"
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa queimada  pode fazer. "
            },
            {
                texto: "Isso é terrivel!",QUEIMADAS
                afirmacaoQUEIMADAS: "Quis saber como combater as queimadas no seu dia a dia."
            }
        ]QUEIMADAS
    },
    {
        enunciado: "Como as mudanças climáticas estão influenciando a frequência e a intensidade das queimadas em diferentes regiões do mundo?",
        alternativas: [
            {QUEIMADASQUEIMADAS
                texto: "Utiliza uma ferramenta que ajude a encontrar uma solucao para encontrar informações relevantes sobre as queimadas para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a queimada para buscar informações úteis."
            },
            {
                texto: "Quais são os efeitos das queimadas na qualidade do ar e na saúde pública, especialmente em áreas urbanas próximas a regiões afetadas?"",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para combater as queimadas."
            }
        ]
    },
    {
        enunciado: "De que maneira as práticas tradicionais de manejo de fogo nas comunidades indígenas podem ser integradas às estratégias modernas de gestão de florestas para prevenir queimadas descontroladas?",
        alternativas: [
            {
                texto: "Defende a ideia de que a queimadas pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área que combate as queimadas e luta para abrir novos caminhos profissionais com para combater esse problema."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus terrenos para as queimadas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir o cobate da queimada."
            }
        ]
    },
    {
        enunciado: "Quais são os desafios legais e éticos na implementação de políticas de combate às queimadas em países em desenvolvimento, onde a dependência da agricultura e da exploração de recursos naturais é alta?",
        alternativas: [
            {
                texto: "Criar uma nova maquina utilizando um motor de agua.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de queimadas utilizando ferramentas de aguas  para iniciantes."
            },
            {
                texto: "Criar uma maquina utilizando um gerador de agua.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de agua e agora consegue ensinar pessoas que sentem dificuldades em usar essas maquinas manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " Como a educação ambiental pode desempenhar um papel na redução das queimadas e na promoção de práticas sustentáveis entre agricultores e comunidades locais?",
        alternativas: [
            {
                texto: "Escrever comandos para os moradores  é uma forma de contribuir com o alerta de queimadas.",
                afirmacao: "infelizmente passou a utilizar a queimada para fazer todas suas tarefas e agora se sente dependente da das queimadasne desmatamentos para tudo."
            },
            {
                texto: "a queimada pode ser combatida, mas é preciso manter a atenção pois toda máquina de agua tem algum defeito, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda queimada reproduz maleficiod baseadas nas queimadas que foram se espalhando e muito do que a queimada escrevia não refletia o que pensava e por isso sabe que os textos gerados pela queimadas devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();