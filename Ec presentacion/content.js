/* Contenido del curso. Cada objeto es una diapositiva.
   img: nombre de archivo en assets/img/ (jpg). cap: pie de foto / descripción de la foto necesaria. */

const BLOCKS = [
  {n:1,title:'Historia y método'},
  {n:2,title:'Funcionamiento y tipos de ECU'},
  {n:3,title:'Componentes electrónicos'},
  {n:4,title:'Herramientas FLEX y KESS3'},
  {n:5,title:'Modos de conexión: OBD, Bench y Boot'},
  {n:6,title:'Tipos de lectura y archivos de ECU'},
  {n:7,title:'Proceso profesional de reprogramación'},
  {n:8,title:'Introducción a la calibración de ECU'},
  {n:9,title:'Demostración práctica'}
];

const SLIDES = [

/* ───────────────────────── PORTADA ───────────────────────── */
{type:'cover', block:0, label:'Portada',
  img:'portada', remote:'https://electronicacar.es/wp-content/uploads/2023/04/DSC_7634.webp', cap:'Banco de trabajo del taller: ECU sobre la mesa, herramienta conectada y pantalla con protocolo abierto',
  title:'Curso de iniciación a la reprogramación de centralitas',
  sub:'Centralita (computadora / módulo de control) · Herramientas FLEX y KESS3 · Conexión por OBD, Bench y Boot',
  meta:['Formación presencial','8 horas','Paraguay']},

{type:'agenda', block:0, label:'Agenda',
  kicker:'Agenda de la jornada', title:'Nueve bloques, de la historia a la práctica',
  lead:'Un recorrido que empieza por entender el vehículo y termina con una lectura real, ordenada y segura. La jornada incluye dos pausas.',
  img:'agenda', remote:'https://electronicacar.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-3.45.56-AM-3-1.jpeg', cap:'Sala de formación con alumnos, proyector y ECU en el puesto del formador',
  items:[[1,'Historia y método'],[2,'Funcionamiento y tipos de ECU'],[3,'Componentes electrónicos'],[4,'Herramientas FLEX y KESS3'],['p','Pausa'],[5,'Modos de conexión: OBD, Bench y Boot'],[6,'Tipos de lectura y archivos de ECU'],['p','Pausa'],[7,'Proceso profesional de reprogramación'],[8,'Introducción a la calibración de ECU'],[9,'Demostración práctica']]},

/* ───────────────────────── BLOQUE 1 ───────────────────────── */
{type:'section', block:1, label:'Bloque 1',
  img:'b1-portada', cap:'Gaspar Esquerda, retrato de estudio sobre fondo negro',
  lead:'La reprogramación profesional nace de la experiencia, del diagnóstico y de un método de trabajo, no de limitarse a utilizar una herramienta.'},

{type:'objectives', block:1, label:'1.1 Qué vamos a aprender',
  kicker:'Bloque 1 · Apertura', title:'Qué vamos a aprender',
  lead:'El curso no enseña a pulsar botones de manera automática. Trabajar con una ECU implica responsabilidad desde el primer minuto.',
  claim:{h:'La idea que debe quedar fijada',t:'Aprenderemos a utilizar herramientas, pero el verdadero contenido será aprender a tomar decisiones antes, durante y después de cada operación.'},
  lists:[
    {h:'Lo que necesitamos saber antes de conectar',items:['Qué unidad estamos identificando','Qué información podemos leer','Qué modo de conexión necesitamos','Qué riesgos existen durante una programación']},
    {h:'Dónde nos centraremos',items:['FLEX y KESS3: cómo consultar sus protocolos','Cómo trabajar mediante OBD, Bench y Boot','Objetivo final: una primera lectura con un procedimiento ordenado, profesional y seguro']}
  ]},

{type:'timeline', block:1, label:'1.2 Del año 2000 a Tenerife',
  kicker:'Bloque 1 · Origen y evolución', title:'Del año 2000 a Tenerife',
  lead:'El conocimiento se construyó progresivamente, trabajando con diferentes vehículos y tecnologías.',
  items:[
    {y:'2000',short:'Inicio en las reprogramaciones',t:'Inicio en las reprogramaciones',img:'tl-2000', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_ec3e222b-bb5b-4c21-a9ca-89fb63e75189.png',cap:'Vehículos de la primera etapa: Citroën Saxo, BMW y los primeros TDI',d:'Primeros contactos con vehículos como el Citroën Saxo y diferentes modelos de BMW; después llegaron los motores TDI, decisivos en la evolución de la reprogramación diésel. Sin plataformas guiadas ni cobertura de protocolos: había que estudiar, probar, medir y comprender cómo reaccionaba el vehículo.'},
    {y:'2000–2009',short:'Desarrollo en competición',t:'La competición como escuela',img:'tl-competicion', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131727_efdee74f-1455-4c82-9416-4351ad62a320.png',cap:'Vehículo de competición en boxes con el equipo técnico',d:'Turismos, fórmulas, rally, karting y motociclismo. La competición obligó a convertir la experiencia en procedimiento: el rendimiento solo tiene valor cuando está controlado. Fiabilidad, repetibilidad y diagnóstico con método.'},
    {y:'2009',short:'Creación de ElectronicaCar en Lleida',t:'Creación de ElectronicaCar en Lleida',img:'tl-lleida', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131727_6e243c2c-d0a0-4e42-953b-5a0af58639ad.png',cap:'Primeras instalaciones de ElectronicaCar en Lleida',d:'Nace la empresa para aplicar al vehículo de calle el método aprendido: diagnosticar, comprender el sistema y realizar intervenciones controladas. Se especializa en electrónica avanzada, diagnosis, programación, reprogramación y clonación de unidades, con apoyo a talleres.'},
    {y:'2019',short:'Traslado de la sede a Tenerife',t:'Traslado a Tenerife, Islas Canarias',img:'tl-tenerife', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_7011b776-9413-4cb3-97c4-488bb9ddd7d0.png',cap:'Instalaciones actuales en La Laguna, Tenerife',d:'Nueva etapa desde la que la empresa continúa desarrollando sus servicios técnicos, la actividad de reprogramación y la formación para profesionales.'}
  ]},

{type:'tabs', block:1, label:'1.3 La competición',
  kicker:'Bloque 1 · Competición', title:'La competición como escuela técnica',
  lead:'No basta con conseguir más potencia: el vehículo debe ser rápido, fiable, controlable y capaz de repetir su rendimiento durante toda la prueba.',
  rule:'Cuando aparece un problema durante una carrera, el tiempo para localizar la causa es muy limitado. Eso obliga a trabajar con método: observar, medir, analizar y decidir.',
  items:[
    {t:'Turismos',img:'disc-turismos', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_890a85ed-eeda-4504-bdd8-6b515d1192c0.png',cap:'Turismo de competición en circuito (Copa Cupra / 24 Horas de Montmeló)',d:'24 Horas de Montmeló en el entorno de SEAT Sport y la Copa Cupra; también Copa Clio y Copa Mini Challenge. Enseñó a evaluar cada modificación junto con temperaturas, combustible, transmisión, condiciones de pista y piloto: todo forma parte del mismo sistema.'},
    {t:'Fórmulas',img:'disc-formulas', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131727_4fdaafd4-5716-4b95-92aa-cceaf3281eef.png',cap:'Fórmula Renault del RACC en parrilla o en boxes',d:'Responsable de los Fórmula Renault del RACC. En una fórmula de promoción, el control del vehículo, la igualdad técnica, la puesta a punto y la fiabilidad son especialmente importantes.'},
    {t:'Rally',img:'disc-rally', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_750eff20-a188-4533-9fa3-dbc98465365b.png',cap:'Mitsubishi de rally en tramo de tierra o asfalto',d:'Rally con Mitsubishi: condiciones y necesidades técnicas muy distintas a las del circuito, que amplían el criterio del técnico.'},
    {t:'Karting',img:'disc-karting', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_89409941-35ab-46da-95c9-9de67aaf368d.png',cap:'Kart de competición en pista',d:'Disciplina con exigencias propias dentro de la trayectoria: condiciones muy distintas que refuerzan el método, observar, medir, analizar y decidir con tiempo limitado.'},
    {t:'Motociclismo',img:'disc-moto', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_16ced06a-1f6e-48a7-b7f0-64ea56e4064a.png',cap:'Honda CBR del equipo Monlau Competició en las 24 Horas de Montmeló',d:'24 Horas de Montmeló con una Honda CBR del equipo Monlau Competició; en paralelo, piloto con su propia motocicleta hasta 2009. Aporta la doble visión técnico-piloto: convertir sensaciones en comprobaciones, datos y decisiones.'}
  ]},

{type:'cards', block:1, label:'1.4 Lo que enseña la competición',
  kicker:'Bloque 1 · Competición', title:'Rendimiento solo tiene valor cuando está controlado',
  cards:[
    {k:'01',t:'Más temperatura no es más potencia',p:'Una ganancia de potencia que provoca temperaturas excesivas no es una mejora.'},
    {k:'02',t:'Si no repite, no es fiable',p:'Una calibración que funciona una vez pero no repite su comportamiento no es fiable.'},
    {k:'03',t:'Suponer cuesta tiempo',p:'Un diagnóstico basado en suposiciones consume tiempo y aumenta el riesgo.'},
    {k:'04',t:'Adaptar al uso real',p:'La modificación debe adaptarse al motor, a la transmisión (caja de cambios) y al uso real del vehículo.'}
  ],
  foot:'<b>Idea definitiva.</b> Este principio se mantiene al trabajar con cualquier vehículo de un cliente.'},

{type:'eco', block:1, label:'1.5 Empresa y ecosistema',
  kicker:'Bloque 1 · Empresa', title:'Nacimiento de ElectronicaCar y ecosistema actual',
  years:[
    {y:'2009',t:'Creación en Lleida',d:'El paso de una trayectoria técnica personal a un proyecto empresarial: aplicar al vehículo de calle el método aprendido. Diagnosticar, comprender el sistema y realizar intervenciones controladas.'},
    {y:'2019',t:'Traslado a Tenerife',d:'Nueva etapa desde las Islas Canarias: servicios técnicos, actividad de reprogramación y formación para profesionales.'}
  ],
  brands:[
    {t:'ElectronicaCar',d:'Marca matriz: electrónica del automóvil, diagnóstico avanzado y resolución de averías (fallas) complejas.'},
    {t:'ECRepro',d:'División especializada en centralitas: identificación, lectura, programación, optimización, recuperación de software y clonación de módulos compatibles.'},
    {t:'Coach Taller',d:'Formación, mentoría y consultoría: mejorar conocimientos, procedimientos, organización y capacidad para resolver vehículos actuales.'}
  ],
  motto:'Resolver hoy. <span>Transferir conocimiento para mañana.</span>'},

{type:'rules', block:1, label:'1.6 Las cinco reglas',
  kicker:'Bloque 1 · Método', title:'Las cinco reglas fundamentales',
  lead:'Acompañan todo el curso. Toca cada tarjeta para ver qué ocurre si la regla se salta.',
  items:[
    {t:'Diagnosticar antes de programar',f:'Conocer el estado real del vehículo antes de intervenir.',b:'Una reprogramación no repara un inyector defectuoso, un turbo dañado, una fuga de admisión ni una falta de presión de combustible: la avería (falla) sigue ahí.'},
    {t:'Consultar siempre el protocolo',f:'La experiencia previa no sustituye la consulta del protocolo correspondiente.',b:'Dos centralitas aparentemente iguales pueden utilizar versiones de hardware, software o protecciones diferentes: trabajar “de memoria” selecciona mal.'},
    {t:'Garantizar una alimentación estable',f:'La estabilidad eléctrica forma parte del procedimiento, no es un accesorio opcional.',b:'Una caída de tensión durante la escritura puede interrumpir la programación y dejar la ECU sin comunicación.'},
    {t:'Conservar siempre el archivo original',f:'El original es el punto de partida, la referencia y una posible vía de recuperación.',b:'Sobrescribir o confundir el original con el modificado elimina el punto de retorno del trabajo.'},
    {t:'Ante un error, no improvisar',f:'Mantener la alimentación, registrar el mensaje y analizar la causa.',b:'Desconectar o repetir sin criterio puede convertir una incidencia recuperable en una avería más grave.'}
  ],
  syn:'<b>Síntesis:</b> diagnóstico, protocolo, alimentación, original y control ante los errores.'},

{type:'close', block:1, label:'1.7 Cierre del bloque',
  kicker:'Bloque 1 · Cierre', title:'Antes de seguir, una pregunta para el aula',
  q:'¿Cuántos habéis realizado alguna lectura o escritura de una centralita? ¿Qué herramienta utilizasteis y mediante qué modo de conexión: OBD, Bench o Boot?',
  ideas:['La historia es una evolución técnica: del año 2000 a la competición y de ahí a la empresa.','La competición convirtió el conocimiento en método: fiabilidad, repetibilidad y diagnóstico.','ElectronicaCar, ECRepro y Coach Taller tienen funciones distintas y un mismo origen.','Las cinco reglas acompañan cada operación del curso.'],
  conc:{h:'Conclusión del bloque 1',t:'La reprogramación profesional no comienza con una herramienta, sino con la comprensión del vehículo. La experiencia iniciada alrededor del año 2000, desarrollada en competición y organizada desde 2009 a través de ElectronicaCar conduce a una forma concreta de trabajar: diagnosticar, verificar, proteger la información y actuar con método.'}},

/* ───────────────────────── BLOQUE 2 ───────────────────────── */
{type:'section', block:2, label:'Bloque 2',
  img:'b2-portada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_56ad352e-5071-4ddd-ad71-adf13b50eab2.png', cap:'ECU de motor con su conector, sobre fondo oscuro, iluminación lateral',
  lead:'Antes de conectar FLEX o KESS3 hay que entender sobre qué vamos a trabajar y qué consecuencias tiene cada operación. Comprender antes de leer o escribir.'},

{type:'objectives', block:2, label:'2.1 Objetivos',
  kicker:'Bloque 2 · Objetivos', title:'Funcionamiento y tipos de ECU',
  lead:'La ECU es el centro de decisión del motor. Reprogramar significa intervenir sobre la información que utiliza para tomar decisiones.',
  claim:{h:'Argumento central',t:'Primero debemos comprender la función de la ECU e identificarla correctamente. Solo después se elige un protocolo.'},
  lists:[
    {h:'Objetivos de aprendizaje',items:['Explicar qué es una ECU con palabras sencillas','Entender la relación entre sensores, procesamiento y actuadores','Diferenciar software, calibración y datos particulares','Comprender que reprogramar no es solo aumentar potencia','Reconocer las principales unidades y familias de ECU','Identificar correctamente una unidad antes de elegir protocolo']}
  ]},

{type:'photo', block:2, label:'2.2 Qué es una ECU',
  kicker:'Bloque 2 · Concepto', title:'¿Qué es una ECU?',
  img:'ecu-en-mano', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_ff04731a-ffb5-4add-957d-b56dc06ebf8c.png', cap:'ECU de motor sostenida en la mano, conector visible, en el taller',
  body:[
    'ECU significa <strong>Electronic Control Unit</strong>: unidad electrónica de control. En el taller la llamamos centralita (computadora / módulo de control), aunque un vehículo contiene muchas unidades diferentes.',
  ],
  quote:'La ECU recibe señales de sensores, procesa esa información siguiendo un programa, controla actuadores y comprueba si el resultado obtenido es coherente.',
  bullets:['No trabaja con un único valor fijo: modifica continuamente sus decisiones según las condiciones.','Motor frío o caliente, ralentí o carga, altitud, aceleración, temperatura elevada o avería (falla) detectada.'],
  note:{h:'Cómo explicárselo a un cliente',t:'“La ECU es el ordenador que controla el motor utilizando la información que recibe de sus sensores.”'}},

{type:'cycle', block:2, label:'2.3 Ciclo de control',
  kicker:'Bloque 2 · Ciclo de control', title:'Recibir, calcular, actuar y comprobar',
  lead:'Un ciclo continuo. Toca cada nodo para ver su contenido.',
  items:[
    {t:'Sensores',sub:'Entradas',d:'Los ojos y los oídos de la ECU: sensor de cigüeñal y árbol de levas, temperatura de refrigerante y aire, caudalímetro (medidor de flujo de aire) y presión de colector, presión de combustible, pedal y mariposa (acelerador), sonda lambda (sensor de oxígeno) y sensor de detonación.'},
    {t:'ECU',sub:'Procesamiento',d:'Combina las entradas con su programa, sus calibraciones y sus límites de protección. Calcula cuánto combustible utilizar, cuándo inyectarlo, qué presión solicitar y qué par puede permitir.'},
    {t:'Actuadores',sub:'Salidas',d:'Ejecutan las órdenes: inyectores, bobinas, mariposa, reguladores de presión, control del turbo, ventiladores, bombas y electroválvulas.'},
    {t:'Resultado real',sub:'Comprobación',d:'La ECU compara lo solicitado con lo que realmente miden los sensores. Si la diferencia es excesiva, intenta corregirla, limita el funcionamiento o registra una avería (falla).'}
  ],
  foot:'Los sensores informan y los actuadores ejecutan. La ECU decide y comprueba.'},

{type:'sim-turbo', block:2, label:'2.4 Solicitado frente a real',
  kicker:'Bloque 2 · Solicitado frente a real', title:'Presión de turbo: lo que la ECU pide y lo que mide',
  lead:'La ECU compara lo que solicita con lo que miden los sensores. Mueve la presión real y observa cómo lo interpreta.',
  note:{h:'Modificar una solicitud no garantiza que el vehículo pueda cumplirla',t:'Si el turbo, el circuito de vacío, la admisión o el sensor presentan un problema, aumentar la solicitud no corrige la causa.'},
  others:['Presión de combustible solicitada y real','Masa de aire calculada y medida','Posición de mariposa (acelerador) solicitada y real','Lambda objetivo y lambda medida','Par solicitado, permitido y calculado']},

{type:'sim-pedal', block:2, label:'2.5 Una aceleración',
  kicker:'Bloque 2 · Ejemplo completo', title:'Una aceleración: del pedal al par entregado',
  lead:'El pedal envía una señal eléctrica: una petición de par. La ECU comprueba si puede entregarlo. Activa condiciones y observa cómo se recorta el par permitido.',
  q:'¿El 100 % de pedal significa el 100 % del motor? ¿Por qué no?',
  concepts:['Petición del conductor','Par solicitado','Par permitido por limitadores','Par calculado internamente','Resultado real del motor']},

{type:'cards', block:2, label:'2.6 Software, calibración y datos',
  kicker:'Bloque 2 · Contenido de la ECU', title:'Tres capas de información que no deben confundirse',
  cards:[
    {t:'Software',s:'Instrucciones y estrategias',p:'Cómo interpretar señales, realizar cálculos, controlar actuadores, detectar determinadas averías y comunicarse con otras unidades.'},
    {t:'Calibración',s:'Valores, mapas y límites',p:'Peticiones de par, presiones, cantidades de combustible, tiempos, encendido, condiciones de protección y otros parámetros.'},
    {t:'Datos particulares',s:'Identificación, codificación y adaptaciones',p:'Identificación, configuraciones, codificaciones, adaptaciones, datos del inmovilizador, contadores e información vinculada al vehículo.'}
  ],
  foot:'<b>Comparación sencilla.</b> El software define la forma de trabajar; la calibración aporta los valores; los datos particulares vinculan o configuran la unidad para un vehículo concreto.'},

{type:'table', block:2, label:'2.7 Qué significa reprogramar',
  kicker:'Bloque 2 · Concepto', title:'¿Qué significa realmente reprogramar?',
  lead:'Reprogramar consiste en escribir información en la memoria de una unidad electrónica. El término no debe limitarse a una modificación de potencia.',
  head:['Operación','Finalidad'],
  rows:[['Optimización','Modificar de forma controlada determinadas calibraciones.'],['Restauración','Escribir información original o correcta para recuperar software.'],['Actualización','Instalar una versión diferente del programa o calibración.'],['Clonación','Transferir los datos necesarios a otra unidad compatible.'],['Codificación','Configurar funciones; no siempre implica mapas ni lectura completa.']],
  boxes:[{h:'Una lectura de calibración',t:'no equivale a un backup completo.'},{h:'Una lectura virtual',t:'no contiene necesariamente los datos particulares de esa ECU.'},{h:'Regla',t:'Leer y escribir un archivo no garantiza que el archivo sea correcto. Antes de programar se comprueban hardware, software, protocolo y operación permitida.',dark:true}]},

{type:'net', block:2, label:'2.8 Red del vehículo',
  kicker:'Bloque 2 · Tipos de unidades', title:'El vehículo es una red de unidades',
  lead:'La ECU de motor no debe analizarse completamente aislada. Toca cada unidad para ver su función y un síntoma típico.',
  items:[
    {k:'ECU / ECM',sub:'Motor',f:'Motor: inyección, encendido, aire, turbo y par.',s:'Una desviación entre lo solicitado y lo real termina en corrección, limitación o registro de avería.'},
    {k:'TCU / TCM',sub:'Cambio',f:'Transmisión (caja de cambios): marchas, presiones, embragues (clutch) y límites de par.',s:'Una limitación de par puede proceder de la transmisión, no de la ECU de motor.'},
    {k:'ABS / ESP',sub:'Frenado',f:'Frenado, estabilidad, tracción y velocidad de ruedas.',s:'Sus intervenciones de tracción o estabilidad condicionan el comportamiento percibido.'},
    {k:'BCM',sub:'Carrocería',f:'Carrocería, iluminación, cierre y confort.',s:'Fallos de iluminación, cierre o confort que no proceden del motor.'},
    {k:'SRS',sub:'Airbags',f:'Airbags, pretensores y sensores de impacto.',s:'Sistema de seguridad: nunca se manipula ni se improvisa sobre él.'},
    {k:'Gateway',sub:'Comunicación',f:'Comunicación entre diferentes redes y unidades.',s:'Una ausencia de comunicación puede originarse en la Gateway.'},
    {k:'BMS / VCU',sub:'Híbrido / EV',f:'Batería y coordinación de la propulsión híbrida o eléctrica.',s:'En híbridos y eléctricos coordina y puede limitar la entrega de propulsión.'}
  ],
  foot:'Una limitación de par puede proceder de la transmisión. Una falta de arranque puede relacionarse con el inmovilizador. Una ausencia de comunicación puede originarse en la Gateway.'},

{type:'families', block:2, label:'2.9 Familias de ECU',
  kicker:'Bloque 2 · Familias', title:'Familias habituales de ECU de motor',
  lead:'No hay que memorizarlas todas: el objetivo es reconocer la familia y buscar la variante correcta.',
  head:['Fabricante / aplicación','Familias habituales','Orientación'],
  rows:[['Bosch diésel','EDC15 · EDC16 · EDC17 · MD1','Evolución de generaciones diésel.'],['Bosch gasolina','ME7 · MED17 · MG1','Gestión de motores gasolina.'],['Continental / Siemens / Vitesco','SID · SIMOS · PCR','Múltiples aplicaciones y fabricantes.'],['Delphi','DCM y otras familias','Diésel y otras aplicaciones.'],['Marelli','MJD y otras familias','Amplia presencia según fabricante.'],['Denso','Diferentes generaciones','La referencia exacta es esencial.'],['Valeo','Diferentes aplicaciones','La cobertura depende de unidad y protocolo.']],
  evo:[['EDC15','Generación anterior, muy presente en los primeros TDI y otros diésel.'],['EDC16','Mayor integración y control de par; muy extendida en common rail.'],['EDC17','Procesadores y protecciones más avanzados; múltiples variantes.'],['MD1','Nueva generación con mayor complejidad y protecciones modernas.']],
  caution:'Una familia no determina por sí sola el año, el protocolo ni el modo de conexión. Saber que una ECU es EDC17 no basta: necesitamos la variante exacta, hardware, software y operaciones disponibles.'},

{type:'case', block:2, label:'2.10 Identificación y caso práctico',
  kicker:'Bloque 2 · Identificación', title:'Identificación correcta y caso práctico',
  steps:['Vehículo','Etiqueta de la ECU','Identificación electrónica','Protocolo','Operación permitida'],
  rule:'El vehículo nos orienta; la identificación de la ECU confirma el trabajo.',
  img:'etiqueta-ecu', remote:'https://electronicacar.es/wp-content/uploads/2025/11/curso-diagnosis-vag.jpg', cap:'Primer plano de la etiqueta de una ECU Bosch EDC17 con referencias de hardware y software',
  car:'Volkswagen Golf · 2.0 TDI · año 2011',
  ask:'¿Bastan estos tres datos para seleccionar un protocolo con seguridad? Marca qué información falta antes de revelar la respuesta.',
  chips:[{t:'Marca y modelo',given:true},{t:'Motor 2.0 TDI',given:true},{t:'Año 2011',given:true},{t:'Fabricante de la ECU'},{t:'Familia exacta de la ECU'},{t:'Referencia de hardware'},{t:'Referencia y versión de software'},{t:'Modo disponible según protocolo'},{t:'Operaciones permitidas'}],
  answer:'Faltan seis datos: fabricante de la ECU, familia exacta (por ejemplo EDC17C46, solo como formato), referencia de hardware, referencia y versión de software, modo disponible según protocolo y operaciones permitidas. Dentro de un mismo modelo puede haber diferentes fabricantes, familias, variantes y modos de acceso.',
  err:'Error habitual: seleccionar la misma marca, modelo, motor y un año parecido, y asumir que la unidad es idéntica. La selección se confirma con la información real de la ECU y las instrucciones de la herramienta.'},

{type:'quiz', block:2, label:'2.11 Evaluación',
  kicker:'Bloque 2 · Evaluación rápida', title:'Cinco preguntas antes de cerrar',
  lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.',
  items:[{q:'¿Sensor y actuador?',a:'El sensor informa; el actuador ejecuta.'},{q:'¿Software y calibración?',a:'El software define el funcionamiento; la calibración aporta valores y límites.'},{q:'¿Lectura virtual = clonación?',a:'No. Puede no incluir datos particulares ni todas las memorias.'},{q:'¿EDC17 es una única ECU?',a:'No. Es una familia con numerosas variantes.'},{q:'¿Por qué comparar etiqueta e identificación?',a:'Para confirmar la unidad y detectar diferencias o actualizaciones.'}]},

{type:'close', block:2, label:'2.12 Cierre del bloque',
  kicker:'Bloque 2 · Cierre', title:'Cinco ideas que deben quedar claras',
  ideas:['La ECU recibe, calcula, actúa y comprueba.','Los sensores informan y los actuadores ejecutan.','Software, calibración y datos particulares no son lo mismo.','Reprogramar no significa únicamente aumentar potencia.','La unidad debe identificarse antes de seleccionar el protocolo.'],
  conc:{h:'Lo siguiente',t:'Ya sabemos qué hace una ECU y qué información contiene. El siguiente paso será abrir una unidad y reconocer dónde se almacena esa información: el microprocesador, la memoria Flash, la EEPROM y la memoria emulada.'}},

/* ───────────────────────── BLOQUE 3 ───────────────────────── */
{type:'section', block:3, label:'Bloque 3',
  img:'b3-portada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png', cap:'Placa de una ECU abierta, vista cenital, microprocesador y memorias visibles',
  lead:'No hace falta convertirse en reparador electrónico. Hay que reconocer dónde se procesa y almacena la información con la que trabaja una herramienta de programación.'},

{type:'objectives', block:3, label:'3.1 Objetivos',
  kicker:'Bloque 3 · Objetivos', title:'Componentes electrónicos básicos de una ECU',
  lead:'Reconocer antes de conectar.',
  claim:{h:'Límite del bloque',t:'No se explicarán condensadores, diodos, transistores, MOSFET, drivers, osciladores ni transceptores. Tampoco se enseñará reparación de placas.',dark:true},
  lists:[
    {h:'Objetivos',items:['Reconocer el microprocesador','Diferenciar memoria Flash y EEPROM','Comprender memoria interna, externa y emulada','Relacionar cada memoria con los tipos de lectura','Manipular una ECU evitando electricidad estática, polaridad incorrecta y cortocircuitos']},
    {h:'Contenido del bloque',items:['Vista general de una ECU abierta','Microprocesador','Flash y EEPROM','Memoria interna, externa y emulada','Conceptos prácticos de seguridad']}
  ]},

/* ───────────────────────── BLOQUE 4 ───────────────────────── */
{type:'section', block:4, label:'Bloque 4',
  img:'b4-portada', remote:'https://electronicacar.es/wp-content/uploads/2026/08/Ecrepro.jpg', cap:'FLEX y KESS3 sobre el banco de trabajo, con sus cables y el portátil',
  lead:'FLEX y KESS3 como sistemas profesionales de programación, no como máquinas que eliminan el riesgo. La herramienta ejecuta; el técnico decide.'},

{type:'objectives', block:4, label:'4.1 Objetivos',
  kicker:'Bloque 4 · Objetivos', title:'Herramientas FLEX y KESS3',
  lead:'La herramienta ejecuta; el técnico decide.',
  claim:{h:'Argumento central',t:'FLEX y KESS3 pueden realizar operaciones similares, pero la seguridad depende de elegir la ECU exacta, el protocolo correcto, el modo de conexión indicado y una alimentación estable.'},
  lists:[
    {h:'Objetivos',items:['Reconocer los elementos que forman cada sistema','Comprender el flujo de selección, identificación, lectura y escritura','Diferenciar OBD, Bench y Boot sin profundizar todavía','Entender Master y Slave','Consultar correctamente listas de vehículos y protocolos','Preparar una operación evitando errores básicos']},
    {h:'Contenido del bloque',items:['Concepto y elementos comunes','FLEX','KESS3','Master y Slave','Comparación y selección','Procedimiento guiado y demostración']}
  ]},

/* ───────────────────────── BLOQUE 5 ───────────────────────── */
{type:'section', block:5, label:'Bloque 5',
  img:'b5-portada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_4eb7f01a-0f17-4e3c-9dc7-0628334dec50.png', cap:'ECU conectada en Bench con el mazo de cables y la fuente de alimentación estabilizada',
  lead:'Tres rutas de acceso diferentes a una unidad electrónica. Elegir bien el modo reduce riesgos y permite obtener el contenido necesario.'},

{type:'objectives', block:5, label:'5.1 Objetivos',
  kicker:'Bloque 5 · Objetivos', title:'Modos de conexión: OBD, Bench y Boot',
  lead:'No elegimos OBD por ser cómodo, Bench por parecer más profesional ni Boot por ofrecer más acceso.',
  claim:{h:'Regla central',t:'Elegimos el modo que el protocolo indica para la ECU y la operación concreta.'},
  lists:[
    {h:'Objetivos',items:['Diferenciar claramente los tres modos','Comprender qué se desmonta y qué se abre','Conocer ventajas, limitaciones y riesgos','Preparar alimentación, cableado y entorno','Interpretar el modo indicado por FLEX o KESS3','Saber cómo actuar ante una interrupción']},
    {h:'Contenido del bloque',items:['Visión general y criterio de selección','OBD completo','Bench completo','Boot completo','Comparación y decisión','Demostración y evaluación']}
  ]},

/* ───────────────────────── BLOQUE 6 ───────────────────────── */
{type:'section', block:6, label:'Bloque 6',
  img:'b6-portada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_bb24adcb-145e-42af-afc7-16fed01dc73e.png', cap:'Pantalla del software con un archivo de ECU abierto y su carpeta de trabajo',
  lead:'Después de aprender OBD, Bench y Boot, hay que comprender qué información se obtiene en cada operación y para qué puede utilizarse. No todos los archivos representan lo mismo.'},

{type:'objectives', block:6, label:'6.1 Objetivos',
  kicker:'Bloque 6 · Objetivos', title:'Tipos de lectura y archivos de ECU',
  lead:'“Leer” no siempre significa copiar todo lo que contiene la ECU.',
  claim:{h:'Regla central',t:'Antes de trabajar debemos conocer el origen, el alcance y la finalidad del archivo.'},
  lists:[
    {h:'Objetivos',items:['Diferenciar identificación, lectura real, virtual y parcial','Entender qué significa backup completo según el protocolo','Reconocer que modo de conexión y tipo de lectura son conceptos distintos','Interpretar tamaño, origen y contenido esperado del archivo','Nombrar, verificar y conservar los archivos correctamente','Elegir la operación adecuada para calibración, respaldo o recuperación']},
    {h:'Contenido del bloque',items:['Mapa general e identificación','Lectura real, virtual y parcial','Backup, memorias y archivos','Criterio de elección y calidad','Demostración y evaluación']}
  ]},

/* ───────────────────────── BLOQUE 7 ───────────────────────── */
{type:'section', block:7, label:'Bloque 7',
  img:'b7-portada', remote:'https://electronicacar.es/wp-content/uploads/2026/04/CURSO-REPROS-POR-REFLASH-2.jpg', cap:'Técnico en el taller siguiendo el proceso: vehículo conectado por OBD, portátil y estabilizador de tensión',
  lead:'Del diagnóstico inicial a la verificación y entrega: una secuencia repetible, documentada y segura. Una reprogramación profesional es un proceso controlado, no solo una escritura.'},

{type:'objectives', block:7, label:'7.1 Objetivos',
  kicker:'Bloque 7 · Objetivos', title:'Proceso profesional de reprogramación',
  lead:'No se escribe hasta que vehículo, protocolo, respaldo y archivo han superado sus comprobaciones.',
  claim:{h:'Regla central',t:'Diagnosis, identificación, respaldo, validación, escritura controlada, verificación y entrega documentada.'},
  lists:[
    {h:'Objetivos',items:['Aplicar un flujo completo desde la recepción hasta la entrega','Determinar si el vehículo está en condiciones de ser intervenido','Conservar identificación, diagnosis y archivos originales','Validar la calibración antes de escribir','Controlar alimentación, conexión y entorno durante la operación','Verificar técnicamente el resultado y documentarlo','Responder correctamente ante una interrupción']},
    {h:'Contenido del bloque',items:['Recepción, diagnosis y decisión','Lectura, archivos y calibración','Escritura segura','Verificación, prueba y entrega','Incidencias, práctica y evaluación']}
  ]},

/* ───────────────────────── BLOQUE 8 ───────────────────────── */
{type:'section', block:8, label:'Bloque 8',
  img:'b8-portada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_1ebb4f60-288c-41a0-9b72-0753a5d95755.png', cap:'Pantalla de software de calibración con un mapa 3D, sin valores legibles',
  lead:'Vocabulario y criterio general, sin profundizar en edición de mapas. Modificar una calibración es coordinar objetivos, límites y protecciones.'},

{type:'objectives', block:8, label:'8.1 Objetivos',
  kicker:'Bloque 8 · Objetivos', title:'Introducción a la calibración de ECU',
  lead:'Modificar una calibración es coordinar objetivos, límites y protecciones.',
  claim:{h:'Límite didáctico, permanente en todo el bloque',t:'No se mostrarán direcciones, drivers, porcentajes ni recetas de potencia. La calibración avanzada requiere formación específica, medición e interpretación del sistema.',dark:true},
  lists:[
    {h:'Objetivos',items:['Comprender qué es una calibración dentro del software de una ECU','Reconocer mapa, eje, unidad, limitador y estrategia','Entender que varios mapas trabajan relacionados','Conocer los límites mecánicos, térmicos y legales','Diferenciar editar, corregir checksum y validar','Saber por qué no existen porcentajes universales']},
    {h:'Contenido del bloque',items:['Conceptos y estructura de un mapa','Relaciones, objetivos y límites','Flujo de modificación y validación','Evaluación']}
  ]},

/* ───────────────────────── BLOQUE 9 ───────────────────────── */
{type:'section', block:9, label:'Bloque 9',
  img:'b9-portada', remote:'https://electronicacar.es/wp-content/uploads/2025/05/ChatGPT-Image-9-may-2025-15_11_24.png', cap:'Demostración en el aula: alumnos alrededor del puesto de trabajo con la ECU y la herramienta',
  lead:'Del puesto de trabajo al archivo verificado. La práctica demuestra el método, no la velocidad de la herramienta.'},

{type:'objectives', block:9, label:'9.1 Objetivos',
  kicker:'Bloque 9 · Objetivos', title:'Demostración práctica',
  lead:'La práctica demuestra el método; no la velocidad de la herramienta.',
  claim:{h:'Aviso de apertura',t:'No se realiza una escritura real solo para completar el horario. Puede sustituirse por una simulación, un vídeo o una demostración previamente preparada.',dark:true},
  lists:[
    {h:'Objetivos',items:['Preparar correctamente vehículo, herramienta y entorno','Realizar diagnosis e identificación inicial','Mostrar una lectura OBD o una obtención virtual supervisada','Preparar Bench sin alimentar y revisar conexiones','Mostrar Boot únicamente en el puesto del formador','Clasificar y guardar los archivos obtenidos','Resolver una interrupción simulada sin desconectar']}
  ]},

{type:'final', block:9, label:'Cierre del curso',
  kicker:'Cierre del curso', title:'Convertir un método en hábitos visibles',
  big:'Preparar, comprobar, ejecutar, observar, conservar y verificar.',
  ideas:['Preparar antes de conectar.','Identificar antes de operar.','Conectar sin tensión.','No improvisar ante un fallo.','Verificar y archivar antes de terminar.'],
  fine:'<b>Nota de exactitud.</b> El contenido de esta presentación procede de la documentación facilitada por ElectrónicaCar. La cobertura, las memorias accesibles y los procedimientos cambian con cada actualización de FLEX o KESS3. Los pasos de contacto, tensiones, cables, desbloqueos, puntos de placa y métodos de recuperación dependen de la ECU y de la versión del protocolo; la documentación vigente dentro de FLEX o KESS3 prevalece sobre cualquier esquema general.'}
];
