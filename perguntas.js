export const perguntas = [
    {
        enunciado: "O problema central é a escolha entre a flexibilidade e o controle versus a complexidade e o custo de gerenciar múltiplos pods em Kubernetes.",
        alternativas: [
            {
                texto: "Adotar uma arquitetura com muitos pods independentes, promovendo a escalabilidade, flexibilidade e resiliência, aproveitando o isolamento entre os pods e a capacidade de escalar automaticamente.",
                afirmacao: [
                    "A utilização de múltiplos pods traz escalabilidade e resiliência para aplicações. Cada pod pode ser escalado e gerido de forma independente, garantindo maior flexibilidade no gerenciamento de cargas de trabalho. No entanto, a complexidade de gestão e a sobrecarga de rede podem ser desafios. A chave está em balancear a quantidade de pods e a necessidade de automação para não gerar uma sobrecarga operacional.",
                    "A adoção de pods pode resultar em uma arquitetura mais ágil e flexível, mas exige uma estratégia eficaz de monitoramento e gestão para evitar problemas como 'overhead' de rede ou falhas na comunicação entre pods."
                ],
                proxima: 1,
            },
            {
                texto: "Optar por um número reduzido de pods, focando na simplicidade e controle, mas sacrificando a escalabilidade e a resiliência em favor de uma gestão mais fácil e custos operacionais mais baixos.",
                afirmacao: [
                    "Optar por poucos pods pode reduzir a complexidade, mas limita a capacidade de escalar a aplicação rapidamente em resposta a picos de demanda. Além disso, pode tornar a aplicação mais suscetível a falhas, já que não há a mesma redundância e flexibilidade proporcionada por múltiplos pods."
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "Considerando que a segurança e o desempenho são cruciais em ambientes de produção, qual a abordagem ideal ao usar pods para maximizar a segurança sem prejudicar a performance do sistema?",
        alternativas: [
            {
                texto: "Utilizar políticas rigorosas de segurança, como redes isoladas para cada pod, controles de acesso e políticas de segurança de pods, enquanto balanceia a performance com a configuração de recursos adequados para cada pod.",
                afirmacao: [
                    "A segurança pode ser maximizada ao aplicar políticas de rede e segurança, mas isso pode gerar sobrecarga de rede e processamento adicional. No entanto, garantir que cada pod tenha os recursos necessários para operar de forma eficiente sem sobrecarregar o sistema é fundamental para equilibrar segurança e desempenho.",
                    "Com a configuração correta de recursos e políticas de segurança, é possível garantir que os pods operem de forma eficiente sem comprometer a segurança do sistema."
                ],
                proxima: 3,
            },
            {
                texto: "Reduzir ao máximo a segurança em favor da performance, permitindo pods mais simples e rápidos, mas sem controle rigoroso de acesso ou segmentação de rede.",
                afirmacao: [
                    "Embora a performance seja otimizada, isso pode aumentar a vulnerabilidade do sistema a ataques e falhas de segurança. Sem uma gestão adequada, a exposição de dados sensíveis e a possibilidade de escalonamento de privilégios podem ser grandes riscos em uma arquitetura com poucos controles."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Como você abordaria a estratégia de escalabilidade de pods em um ambiente de alta demanda e tráfego imprevisível?",
        alternativas: [
            {
                texto: "Implementar uma estratégia de autoescalabilidade, onde o número de pods aumenta ou diminui automaticamente com base na carga, para garantir que os recursos sejam alocados de forma eficiente.",
                afirmacao: [
                    "A escalabilidade automática é uma solução poderosa para lidar com picos inesperados de tráfego. No entanto, ela precisa ser bem configurada para garantir que o sistema não se torne ineficiente ou caro, consumindo recursos desnecessários. Monitoramento constante e ajustes dinâmicos são essenciais."
                ],
                proxima: 5,
            },
            {
                texto: "Utilizar escalabilidade manual, onde a quantidade de pods é ajustada manualmente de acordo com a previsão de demanda, para ter maior controle sobre os recursos e evitar custos inesperados.",
                afirmacao: [
                    "Embora o controle manual ofereça maior previsibilidade e controle de custos, ele não é eficiente em ambientes de tráfego imprevisível, onde a resposta imediata à carga pode ser crucial para manter a performance."
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado: "Quais são as possíveis consequências de um gerenciamento inadequado de pods em um cluster Kubernetes?",
        alternativas: [
            {
                texto: "Falhas nos pods podem afetar toda a aplicação, com impactos como indisponibilidade, erros de comunicação e perda de dados, resultando em uma experiência do usuário prejudicada e potencial dano à reputação da empresa.",
                afirmacao: [
                    "O gerenciamento inadequado de pods pode causar falhas graves, afetando diretamente a disponibilidade do sistema. Além disso, o isolamento de pods falhos pode ser comprometido, causando falhas em cascata e aumentando o risco de erros críticos."
                ],
                proxima: 7,
            },
            {
                texto: "O uso incorreto de pods pode resultar em uma sobrecarga de rede e consumo excessivo de recursos, levando a custos operacionais mais elevados e redução da eficiência do sistema.",
                afirmacao: [
                    "Sem uma correta alocação de recursos e balanceamento de carga, o uso excessivo de pods pode resultar em desperdício de recursos e custos mais altos, impactando a eficiência operacional e a capacidade de resposta do sistema."
                ],
                proxima: 8,
            }
        ]
    },
    {
        enunciado: "Ao usar múltiplos pods em um sistema de produção, qual seria a melhor forma de monitorar o desempenho e evitar possíveis falhas?",
        alternativas: [
            {
                texto: "Adotar ferramentas de monitoramento integradas com o Kubernetes, como Prometheus e Grafana, para acompanhar o desempenho de cada pod, além de configurar alertas para identificar problemas antes que se tornem críticos.",
                afirmacao: [
                    "O monitoramento contínuo é fundamental para detectar problemas de desempenho antes que se tornem falhas críticas. Ferramentas como Prometheus e Grafana permitem visualizar métricas em tempo real e ajustar a infraestrutura de forma proativa."
                ],
                proxima: 9,
            },
            {
                texto: "Confiar apenas no monitoramento básico do Kubernetes para verificar o status dos pods, sem implementar ferramentas externas ou alertas personalizados.",
                afirmacao: [
                    "Embora o Kubernetes forneça algumas métricas de monitoramento, depender apenas disso pode resultar em uma visão limitada do sistema, deixando passar problemas de desempenho ou falhas que não são imediatamente visíveis no painel padrão."
                ],
                proxima: 10,
            }
        ]
    }
]
