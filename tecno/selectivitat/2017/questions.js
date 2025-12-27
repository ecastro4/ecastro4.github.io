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
            
            \\]
            \\[
            \\text{JMax} =  \\text{ds} - \\text{di}^{'} = 21 - (-20) = 41 \\; \\text{µm}
            \\]
            \\[
            \\text{Jmin} =  \\text{di} - \\text{ds}^{'} = 0 - (-7) = 7 \\; \\text{µm}            
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
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un tren d'alta velocitat ha transportat durant un any 3,2 milions de passatgers. El tren està format per 8 vagons i té una capacitat nominal total de 405 passatgers. Si el tren fa 28 trajectes diaris, quin ha estat el percentatge d’ocupació mitjana del tren?`,
        options: [
            { text: "9,7 %", value: "a" },
            { text: "77,3 %", value: "b" },
            { text: "37 %", value: "c" },
            { text: "39,1 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            405 \\, \\cdot \\; 28 \\, \\cdot \\; 365 = 4139100 \\, \\text{passatgers}
            \\]
            \\[
            \\frac{3200000}{4139100} = 77{,}3 \\%
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En un any, 2,931 milions de vehicles van passar la inspecció tècnica de vehicles (ITV) a Catalunya. El 82 % dels vehicles van superar la revisió sense defectes o amb defectes lleus, i els altres tenien defectes greus o molt greus que els van obligar a passar una segona revisió un cop reparats. Aquesta segona revisió va ser superada pel 85 % dels vehicles. Quants vehicles no van superar la ITV?`,
        options: [
            { text: "79137 vehicles", value: "a" },
            { text: "377761 vehicles", value: "b" },
            { text: "2042907 vehicles", value: "c" },
            { text: "483615 vehicles", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            0{,}18 \\, \\cdot \\; 2931000 = 527580 \\; \\text{vehicles}
            \\]
            \\[
            0{,}15 \\, \\cdot \\; 527580 = 79137 \\; \\text{vehicles}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Una resistència de 4,7 Ω està feta de fil de constantà de 0,61 mm de diàmetre i una resistivitat de 0,49 μΩ·m. Quina és la longitud del fil de constantà utilitzat?`,
        options: [
            { text: "9,592 m", value: "a" },
            { text: "1,121 m", value: "b" },
            { text: "2,803 m", value: "c" },
            { text: "3,569 m", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            A = \\pi r^2 = \\pi (3{,}05 \\cdot 10^{-4})^2 = 2{,}922 \\cdot 10^{-7}
            \\]
            \\[
            L = \\frac{R\\cdot A}{\\rho} = \\frac{4{,}7 \\cdot 2{,}922\\cdot 10^{−7}}{0{,}49 \\cdot 10^{-6}} = 2{,}803 \\; \\text{m}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "organitzacio",
        text: `Un estudi sobre el transport d’una mercaderia conclou que el cost del transport marítim és de 0,87 €/km, el del transport per carretera és d’1,69 €/km i el del transport ferroviari és d'1,03 €/km. En el cas del transport marítim, la velocitat mitjana és de 33 km/h i la distància que cal recórrer és de 1 760 km; en el del transport per carretera, la velocitat mitjana és de 35 km/h i la distància és de 1 050 km; en el del transport ferroviari, la velocitat mitjana és de 50 km/h i la distància és de 1 160 km. Quin dels tres transports és més ràpid i quin és més econòmic?`,
        options: [
            { text: "El més ràpid és el transport per carretera i el més econòmic és el ferroviari", value: "a" },
            { text: "El més ràpid és el transport per carretera i el més econòmic és el marítim", value: "b" },
            { text: "El transport ferroviari és el més ràpid i també el més econòmic", value: "c" },
            { text: "El més ràpid és el transport ferroviari i el més econòmic és el marítim", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            t_{marítim} = \\frac{1760}{33} = 53,3 \\, \\text{h}
            \\]
            \\[
            C_{marítim} = 1760 \\cdot 0,87 = 1531,2 \\, \\text{&#8364}
            \\]
            \\[
            t_{carretera} = \\frac{1050}{35} = 30 \\, \\text{h}
            \\]
            \\[
            C_{carretera} = 1050 \\cdot 1,69 = 1774,5 \\, \\text{&#8364}
            \\]
            \\[
            t_{ferroviari} = \\frac{1160}{50} = 23,2 \\, \\text{h}
            \\]
            \\[
            C_{ferroviari} = 1160 \\cdot 1,03 = 1194,8 \\, \\text{&#8364}
            \\]
            \\[
            \\text{Més ràpid: transport ferroviari}
            \\]
            \\[
            \\text{Més econòmic: transport ferroviari}
            \\]
            <br><br>

            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `La velocitat de sincronisme d’un motor asíncron, que està connectat a una xarxa de tensió U = 230 V i freqüència f = 50 Hz, és de 750 min<sup>–1</sup>. Quina serà la velocitat de sincronisme si es connecta a una xarxa de tensió U = 120 V i freqüència f = 60 Hz?`,
        options: [
            { text: "900 min<sup>–1</sup>", value: "a" },
            { text: "552 min<sup>–1</sup>", value: "b" },
            { text: "750 min<sup>–1</sup>", value: "c" },
            { text: "391 min<sup>–1</sup>", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            {n_{s}} = \\frac{120 \\cdot \\text{&#402}}{\\text{p}} \\; \\text{&#8594} \\; \\text{p} = \\frac{120 cdot \\text{&#402}}{{n_{s}}}
            \\]
            \\[
            p = \\frac{120 \\cdot 50 \\, \\text{Hz}}{750 \\; \\text{min}^{-1}} \\, = 8 \\, pols
            \\]
            \\[
            {n_{s}} = \\frac{120 \\cdot 60 \\, \\text{Hz}}{8} = 900 \\; \\text{min}^{-1}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El límit elàstic d'un aliatge d'alumini és σ<sub>e</sub> = 85 MPa. Si una peça cilíndrica d'aquest material està sotmesa a una força de tracció de 1 400 N, quin és el diàmetre mínim que ha de tenir la secció perquè no es produeixi deformació plàstica?`,
        options: [
            { text: "3,24 mm", value: "a" },
            { text: "16,47 mm", value: "b" },
            { text: "4,58 mm", value: "c" },
            { text: "2,29 mm", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[	
            {σ_{e}} = \\frac{\\text{F}}{\\text{A}} \\; \\text{&#8594} \\; \\text{A} = \\frac{\\text{F}}{{σ_{e}}}            
            \\]
            \\[
            \\text{A} = \\frac{\\text{F}}{{σ_{e}}} = \\frac{1400}{85} = 16{,}47 \\; \\text{mm}^2
            \\]
            \\[
            A = \\frac{\\pi \\cdot \\text{d}^2}{4} \\; \\text{&#8594} \\; \\text{d} = \\sqrt{\\frac{\\text{A} \\cdot 4}{\\pi}}
            \\]
            \\[
            d = \\sqrt{\\frac{16{,}47 \\cdot 4}{\\pi}} = 4{,}58 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Dues terminals d'un aeroport estan comunicades per un tren autònom que en un trajecte pot transportar fins a tres-centes persones. El temps del trajecte és de 3 min i 15 s; i el temps d'espera entre dos trajectes és de 45 s de les 5.30 h a les 23.30 h, i d'1 min i 15 s de les 23.30 h a les 5.30 h. Quin és el nombre màxim de viatgers que pot transportar un tren durant tot un dia?`,
        options: [
            { text: "105 000", value: "a" },
            { text: "96 000", value: "b" },
            { text: "108 000", value: "c" },
            { text: "101 647", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            \\text{Temps per trajecte:}\\; 3 \\; \\text{min} \\; 15 \\; \\text{s} = 195 \\; \\text{s}   
            \\]
            \\[
            \\text{Cicle dia:}\\; 195 \\; \\text{s} + 45 \\; \\text{s}  = 240 \\; \\text{s} = 4 \\; \\text{min}
            \\]
            \\[
            \\text{Cicle nit:}\\; 195 \\; \\text{s} + 75 \\; \\text{s}  = 270 \\; \\text{s} = 4,5 \\; \\text{min}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; dia
            \\]
            \\[
            \\text{Temps funcionant:}\\; 18 \\; \\text{h} = 18 \\; \\cdot \\; 60 = 1080 \\; \\text{s}
            \\]
            \\[
            \\frac{1080}{4} = 270 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; nit
            \\]
            \\[
            \\text{Temps funcionant:}\\; 6 \\; \\text{h} = 6 \\; \\cdot \\; 60 = 360 \\; \\text{s}
            \\]
            \\[
            \\frac{360}{4,5} = 80 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\text{Viatges totals:}\\; 270 + 80 = 350 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\textbf{Total viatgers:}\\; 350 \\; \\cdot \\; 300 = 105000 \\; \\text{viatgers}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En un circuit elèctric, es connecten en paral·lel dues resistències de 30 Ω cadascuna i toleràncies de ± 2 % i ± 5 %, respectivament. Entre quins valors es troba la resistència equivalent?`,
        options: [
            { text: "57,90 Ω i 62,10 Ω", value: "a" },
            { text: "14,47 Ω i 15,52 Ω", value: "b" },
            { text: "14,25 Ω i 15,75 Ω", value: "c" },
            { text: "57 Ω i 63 Ω", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[	
            R_{1_{min}} = 30 - 2\\; \\% = 30(100 - 2)\\; \\% = 30 \\; \\cdot \\; 98 \\;\\% = 30 \\; \\cdot \\; 0{,}98 = 29{,}4 \\; \\text{Ω}
            \\]
            \\[
            R_{1_{max}} = 30 + 2\\; \\% = 30(100 + 2)\\; \\% = 30 \\; \\cdot \\; 102 \\;\\% = 30 \\; \\cdot \\; 1{,}02 = 30{,}6 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{min}} = 30 - 5\\; \\% = 30(100 - 5)\\; \\% = 30 \\; \\cdot \\; 95 \\;\\% = 30 \\; \\cdot \\; 0{,}95 = 28{,}5 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{max}} = 30 + 5\\; \\% = 30(100 + 5)\\; \\% = 30 \\; \\cdot \\; 105 \\;\\% = 30 \\; \\cdot \\; 1{,}05 = 31{,}5 \\; \\text{Ω}
            \\]
            \\[

            \\]
            \\[
            R_{min} = \\frac{R_{1_{min}} \\cdot R_{2_{min}}}{R_{1_{min}} + R_{2_{min}}} = \\frac{29,4 \\cdot 28,5}{29,4 + 28,5} = 14,47 \\; \\Omega
            \\]
            \\[
            R_{max} = \\frac{R_{1_{max}} \\cdot R_{2_{max}}}{R_{1_{max}} + R_{2_{max}}} = \\frac{30,6 \\cdot 31,5}{30,6 + 31,5} = 15,52 \\; \\Omega
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un cotxe té un motor de combustió V6 amb sis cilindres. La cilindrada és de 2 792 cm<sup>3</sup> i la cursa dels cilindres és de 90 mm. Quant fa el diàmetre dels cilindres?`,
        options: [
            { text: "70,32 mm", value: "a" },
            { text: "40,57 mm", value: "b" },
            { text: "198,74 mm", value: "c" },
            { text: "81,14 mm", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            {V_{Cilindre}} = \\frac{C_{total}}{N_{cilindres}} = \\frac{2792}{6} = 465,33 \\; \\text{cm}^{3}
            \\]
            \\[
            V = \\frac{\\pi \\cdot D^{2}}{4} \\cdot C \\; \\text{&#8594} \\; D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}}
            \\]
            \\[
            D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}} = \\sqrt{\\frac{465,33 \\cdot 4}{\\pi \\cdot 9}} = 8,114 \\; \\text{cm} = 81{,}14 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `En un gran premi de Fórmula 1, un vehicle ha tingut un consum mitjà de combustible per volta c<sub>m</sub> = 2,9 kg. El combustible utilitzat té una densitat ρ = 0,75 kg/L. Si el circuit té una longitud d = 5,543 km, quin ha estat el consum del vehicle en L/(100 km)?`,
        options: [
            { text: "75 L/(100 km)", value: "a" },
            { text: "52,32 L/(100 km)", value: "b" },
            { text: "254,9 L/(100 km)", value: "c" },
            { text: "69,76 L/(100 km)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            V = \\frac{m}{\\rho} = \\frac{2,9}{0,75} = 3,57 \\; \\text{L/Volta}
            \\]
            \\[
            C_{1\\; \\text{km}} = \\frac{V}{d} = \\frac{3,87 \\; \\text{L/Volta}}{5,543 \\; \\text{km}} = 0,698 \\; \\text{L/km}
            \\]
            \\[
            C_{100\\; \\text{km}} = 0,698 \\; \\cdot \\; 100 = 69,8 \\; \\text{L/100 km}
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
               <img src="https://ecastro4.github.io/tecno/selectivitat/2017/Ex1/imatgePregunta.png" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
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
