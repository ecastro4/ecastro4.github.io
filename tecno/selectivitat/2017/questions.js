const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `La velocitat de sincronisme n<sub>s</sub>, d’un motor asíncron de corrent altern, que està connectat a la xarxa de tensió U = 230 V i freqüència &#402 = 50 Hz, és n<sub>s</sub> = 600 min<sup>–1</sup>. Quants parells de pols té el motor?`,
        options: [
            { text: "2", value: "a" },
            { text: "4", value: "b" },
            { text: "5", value: "c" },
            { text: "10", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            600 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{seg}}  = 10 \\, \\frac{\\text{rev}}{\\text{seg}}
            \\]
            \\[	
            {n_{s}} = \\frac{\\text{&#402}}{\\text{p}} \\; \\text{&#8594} \\; \\text{p} = \\frac{\\text{&#402}}{{n_{s}}}
            \\]
            \\[
            p = \\frac{50 \\, \\text{Hz}}{10\\, \\frac{\\text{rev}}{\\text{seg}}} \\, = 5 \\, p
            \\]
            <br><br>
            `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Un dinamòmetre digital mostra el valor de la mesura amb cinc dígits i permet fer mesuraments entre 0 N i 10 000 N. La precisió és el valor més gran entre ± 0,1 % de la mesura i ± 5 N. Si la lectura del dinamòmetre és 3 500 N, el valor real de la mesura està comprès entre`,
        options: [
            { text: "3500 N i 3505 N", value: "a" },
            { text: "3496,5 N i 3503,5 N", value: "b" },
            { text: "3495 N i 3505 N", value: "c" },
            { text: "3497,5 N i 3502,5 N", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            0{,}1 \\, \\% = 0{,}001
            \\]
            \\[
            3500 \\, \\text{N} \\cdot 0{,}001 = 3{,}5 \\, \\text{N}
            \\]
            \\[
            3{,}5 \\, \\text{N} \\, \\text{<} \\, 5 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament mínim} = 3500 \\text{N} - 5 \\, \\text{N} = 3495 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament màxim} = 3500 \\text{N} + 5 \\, \\text{N} = 3505 \\, \\text{N}
            \\]
            \\[
            \\text{Interval} : [3495 \\, \\text{N} \\, {,} \\, 3505 \\, \\text{N}]
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "materials",
        text: `El <i>zamak</i> és un aliatge amb bones propietats mecàniques que s’utilitza en els sectors de l’automoció i de la construcció. Conté un 4 % d’alumini (Al), un 1 % de coure (Cu), un 0,05 % de magnesi (Mg) i la resta és zinc (Zn). En l’obtenció d’aquest aliatge, quina quantitat d’alumini cal per a aliar-lo amb 400 kg de zinc?`,
        options: [
            { text: "16 kg", value: "a" },
            { text: "4 kg ", value: "b" },
            { text: "421,3 kg ", value: "c" },
            { text: "16,85 kg", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{% de Zinc} = 100 - \\text{Al} -\\, \\text{Cu} -\\, \\text{Mg} = 100 - 4 - 1 - 0{,}05 = 94{,}95 \\%
            \\]
            \\[
            \\text{Massa total} = 400 \\, \\text{kg} \\cdot \\frac{94{,}95}{100} = 421{,}3 \\, \\text{kg}
            \\]
            \\[
            \\text{Al necessari} = 421{,}3 \\cdot \\frac{4}{100} = 16{,}85 \\, \\text{kg}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En l’ajust 25 H7/g6, la tolerància H7 del forat és (<sup>+ 21</sup><sub>0</sub>) μm i la g6 de l’eix és (<sup>- 7</sup><sub>- 20</sub>) μm.Quins són els jocs màxim i mínim?`,
        options: [
            { text: "El joc màxim és 41 μm i el mínim és 7 μm", value: "a" },
            { text: "El joc màxim és 21 μm i el mínim és 0 μm", value: "b" },
            { text: "El joc màxim és 41 μm i el mínim és 20 μm", value: "c" },
            { text: "El joc màxim és 20 μm i el mínim és 7 μm", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            0{,}1 \\, \\% = 0{,}001
            \\]
            \\[
            3500 \\, \\text{N} \\cdot 0{,}001 = 3{,}5 \\, \\text{N}
            \\]
            \\[
            3{,}5 \\, \\text{N} \\, \\text{<} \\, 5 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament mínim} = 3500 \\text{N} - 5 \\, \\text{N} = 3495 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament màxim} = 3500 \\text{N} + 5 \\, \\text{N} = 3505 \\, \\text{N}
            \\]
            \\[
            \\text{Interval} : [3495 \\, \\text{N} \\, {,} \\, 3505 \\, \\text{N}]
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `La fabricació d’una peça metàl·lica es duu a terme en dos processos. En primer lloc, la peça es mecanitza en una fresadora i, posteriorment, se’n millora l’acabat superficial mitjançant una rectificadora. Després de cada procés, es controla la qualitat de les peces i es desestimen les que no són correctes. Si les taxes de rebuig del fresatge i la rectificació són del 4 % i el 3 %, respectivament, quin percentatge de les peces inicials s’acaba produint correctament?`,
        options: [
            { text: "88 %", value: "a" },
            { text: "93,12 %", value: "b" },
            { text: "96 %", value: "c" },
            { text: "93 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Rebuig al fresatge:} \\, 4 \\, \\% \\; \\text{&#8594} \\; \\text{Peces bones:} \\, 96 \\%
            \\]
            \\[
            \\text{Rebuig a la rectificació:} \\, 3 \\, \\% \\; \\text{&#8594} \\; \\text{Peces bones:} \\, 97 \\%
            \\]
            \\[
            0,96 \\cdot 0,97 = 0,9312 = 93,12 \\, \\%
            \\]
            <br><br>
            `,
    },
{
        type: "exercicis",
        category: "energia",
        text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
               El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
               S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
               La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
               \\[
               P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
               \\]
               en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
               D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
               
               Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
               <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
               <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
               <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
               <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
               <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
];

