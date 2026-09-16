/* Contenido de los bloques 3 a 9. Se inserta tras la diapositiva de objetivos de cada bloque. */
const EXTRA = {

/* ───────────────────────── BLOQUE 3 ───────────────────────── */
3:[
{type:'tabs', label:'3.2 Una ECU abierta, por dentro',
  kicker:'Bloque 3 · Vista general', title:'Una ECU abierta, por dentro',
  lead:'Solo necesitamos localizar cuatro conceptos. La disposición real cambia según la unidad.',
  rule:'La fotografía o el manual del protocolo confirman la identificación; la apariencia visual solo orienta. No identificamos un componente solo por ser el chip más grande.',
  items:[
    {t:'Microprocesador',img:'placa-micro', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png',cap:'Placa de ECU abierta con el microprocesador señalado',d:'Cálculo y control. Ejecuta el programa de la ECU, procesa las señales de sensores, realiza cálculos de par, inyección, encendido y protección, gestiona órdenes hacia actuadores y controla comunicaciones y diagnóstico. En determinadas arquitecturas integra memoria Flash y una zona usada como EEPROM emulada: no siempre hay chips separados. No es un almacén de mapas: su función principal es ejecutar y controlar.'},
    {t:'Flash externa',img:'placa-flash', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png',cap:'Placa de ECU abierta con el chip de memoria Flash señalado',d:'Programa y calibración. Chip independiente de mayor capacidad. Suele almacenar el programa principal y una parte importante de la calibración: mapas, limitadores, estrategias. Mantiene la información sin alimentación y puede dividirse en áreas o sectores; la herramienta accede a toda o a una zona, según protocolo.'},
    {t:'EEPROM externa',img:'placa-eeprom', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png',cap:'Placa de ECU abierta con el chip EEPROM señalado',d:'Datos persistentes. Chip pequeño con datos que deben conservarse sin alimentación: configuraciones, codificaciones, identificación, adaptaciones, contadores e información relacionada con el inmovilizador. La importancia de una memoria no se mide solo por su tamaño.'},
    {t:'Conector',img:'placa-conector', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png',cap:'Conector de la ECU visto desde la placa',d:'Entrada de alimentaciones (positivo permanente y bajo contacto), masas (tierra) y líneas de comunicación. El número de conector, la orientación y el pinout exacto los indica el manual del protocolo.'},
    {t:'Otros circuitos',img:'placa-otros', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_161e05e6-3150-479a-9841-cd8e029b8127.png',cap:'Vista general de la placa: etapas de potencia y componentes discretos',d:'Condensadores, diodos, transistores, MOSFET, drivers, osciladores, transceptores… quedan fuera de esta iniciación. No se enseña reparación de placas.'}
  ]},

{type:'cards', label:'3.3 Las memorias de la ECU',
  kicker:'Bloque 3 · Flash y EEPROM', title:'Las tres memorias que nos interesan',
  cards:[
    {t:'Flash',s:'Mayor capacidad',p:'Programa, calibración y mapas. Mantiene la información sin alimentación; puede ser interna o externa y dividirse en áreas o sectores.'},
    {t:'EEPROM',s:'Poca capacidad · datos persistentes',p:'Configuraciones y datos particulares: codificaciones, identificación, adaptaciones, contadores, información de inmovilizador. Pequeña, pero puede ser decisiva.'},
    {t:'Emulada',s:'Zona dentro de otra memoria',p:'Se gestiona para comportarse como una EEPROM sin chip físico separado. Puede aparecer como Emulated EEPROM, Internal EEPROM o Data Flash.'}
  ],
  foot:'<b>Advertencia.</b> “Habitual” no significa “siempre”. El protocolo exacto indica qué memorias existen y qué contenido puede leer o escribir.'},

{type:'cols', label:'3.3b Calibración, Flash completa y backup',
  kicker:'Bloque 3 · Flash y EEPROM', title:'Calibración ≠ Flash completa ≠ backup',
  cols:[
    {h:'Flash y la repro',items:['Lectura de calibración = zona necesaria para modificar mapas.','Lectura Flash completa = contenido más amplio.','Backup completo = puede incluir Flash, EEPROM y otras áreas.','El tamaño del archivo ayuda a orientarse, pero no demuestra por sí solo qué memoria o qué zonas contiene.']},
    {h:'EEPROM, reparación y clonación',items:['Una ECU puede tener software y calibración correctos y no funcionar en otro vehículo si faltan datos particulares.','Copiar solo la zona de mapas no suele bastar para una clonación.','No toda la información del inmovilizador está siempre en una EEPROM externa: puede estar en otras áreas o repartida entre unidades.']}
  ]},

{type:'tabs', label:'3.4 Interna, externa y emulada',
  kicker:'Bloque 3 · Arquitectura', title:'Interna, externa y emulada',
  lead:'El hecho de no ver un chip no significa que la memoria no exista.',
  rule:'No se determina el contenido de una ECU contando chips. Se consulta la arquitectura y el protocolo.',
  items:[
    {t:'Externa',img:'mem-externa', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_601d20d6-1be4-40b6-b24d-ebff62ea1bc4.png',cap:'Chip de memoria separado del microprocesador, en primer plano',d:'Componente independiente soldado en la placa. Puede identificarse con la documentación adecuada y aparece físicamente separado del microprocesador.'},
    {t:'Interna',img:'mem-interna', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_601d20d6-1be4-40b6-b24d-ebff62ea1bc4.png',cap:'Microprocesador sin chip de memoria visible alrededor',d:'Integrada dentro del microprocesador. No veremos un chip independiente aunque la herramienta muestre “Internal Flash” o “Internal EEPROM”. El protocolo accede a las áreas internas a través del microprocesador.'},
    {t:'Emulada',img:'mem-emulada', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_3fea4806-0e74-484e-9076-3f5fe43107b7.png',cap:'Pantalla de la herramienta mostrando una memoria “Emulated EEPROM” o “Data Flash”',d:'Zona de otra memoria gestionada para comportarse como una EEPROM: conserva datos persistentes sin chip físico separado. Reduce componentes y aprovecha memoria integrada. Puede aparecer como Emulated EEPROM, Internal EEPROM o Data Flash; los nombres dependen del fabricante y del protocolo.'}
  ]},

{type:'rows', label:'3.5 Operación mostrada → qué puede significar',
  kicker:'Bloque 3 · Memorias y tipos de lectura', title:'Operación mostrada → qué puede significar',
  lead:'No nos quedamos con el nombre comercial de la operación. Toca cada fila para ver qué debemos preguntar.',
  head:['Operación','Qué puede significar','Qué debemos preguntar'],
  rows:[['Map / Calibration','Zona de calibración.','¿Es lectura real o virtual?'],['Internal Flash','Flash integrada en el microprocesador.','¿Completa o parcial?'],['External Flash','Chip Flash separado.','¿Qué sectores incluye?'],['EEPROM','Datos persistentes.','¿Interna, externa o emulada?'],['Full Backup','Conjunto de áreas.','¿Qué memorias enumera exactamente?']],
  boxes:[{h:'Ejemplo de decisión',t:'Modificar mapas → puede bastar la calibración. Restaurar una ECU → puede requerir una Flash más completa. Clonación → software y datos particulares. Recuperación → qué áreas permite escribir el protocolo.'},{h:'Regla',t:'Antes de prometer una clonación o recuperación, se verifica el contenido real del backup.',dark:true}]},

{type:'tabs', label:'3.6 Tres riesgos al manipular una ECU',
  kicker:'Bloque 3 · Seguridad', title:'Tres riesgos al manipular una ECU',
  lead:'Descarga electrostática, polaridad invertida y cortocircuito.',
  rule:'Que una ECU siga funcionando después de tocarla no demuestra que la manipulación haya sido correcta.',
  items:[
    {t:'Descarga ESD',img:'riesgo-esd', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_0188ce0e-13c5-47c4-836e-f06d8849063f.png',cap:'Técnico con pulsera antiestática manipulando una ECU sobre alfombrilla ESD',d:'Una persona puede acumular carga eléctrica y descargarla al tocar la placa. La descarga puede ser imperceptible y aun así superar lo que soporta un componente. Prevención: superficie adecuada, descargarse antes de tocar la placa, protección ESD cuando corresponda, manipular la ECU por zonas seguras, evitar ropa que acumule carga y no tocar pines sin necesidad.'},
    {t:'Polaridad invertida',img:'riesgo-polaridad', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_4eb7f01a-0f17-4e3c-9dc7-0628334dec50.png',cap:'Fuente de alimentación de banco con los cables positivo y masa marcados',d:'La ECU debe recibir positivo y masa en los pines exactos y en la secuencia indicada. Invertir polaridad o alimentar un pin equivocado puede dañar la unidad de inmediato. Prevención: confirmar conector y orientación, leer el pinout completo, diferenciar permanente, contacto y señales, comprobar positivos y masas, configurar tensión y limitación de corriente, conectar sin alimentación.'},
    {t:'Cortocircuito',img:'riesgo-corto', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_6291cdc6-c83d-4700-b009-a6122c3fc2a2.png',cap:'Sondas y cables sobre una placa de ECU, con puntas próximas',d:'Camino de resistencia muy baja entre puntos que no deberían estar unidos: corriente elevada, calentamiento y daños en pistas, conectores o componentes. Causas: puntas que se tocan, hilos sueltos, pinout incorrecto, conector desplazado, sonda que resbala, herramienta metálica sobre la placa. Una fuente limitada puede reducir daños, pero no convierte una conexión incorrecta en segura.'}
  ]},

{type:'check', label:'3.7 Antes de alimentar',
  kicker:'Bloque 3 · Seguridad práctica', title:'Antes de alimentar',
  lead:'Marca cada comprobación. La ECU debe recibir positivo y masa (tierra) en los pines exactos y en la secuencia indicada.',
  items:['Confirmar el número de conector y la orientación.','Leer el pinout completo del protocolo.','Diferenciar alimentación permanente, contacto y otras señales.','Comprobar positivos y masas (todas las indicadas).','Configurar la tensión y la limitación de corriente adecuadas.','Conexiones sin alimentación; activarla solo cuando lo indique el manual.'],
  done:'Listo para alimentar según el manual', pending:'Todavía no se alimenta',
  side:[{h:'Masa de potencia',t:'Preparada para el retorno de corrientes mayores relacionadas con alimentación y etapas de potencia.'},{h:'Masa de señal',t:'Referencia eléctrica de sensores y circuitos sensibles. Una caída de tensión en esta referencia puede alterar el valor interpretado.'},{h:'Error frecuente',t:'Confiar en el color del cable o en un pinout parecido. Siempre se utiliza el esquema específico del protocolo, con todos los pines de masa indicados. No unimos pines “porque parecen masa”.',dark:true}]},

{type:'quiz', label:'3.8 Evaluación',
  kicker:'Bloque 3 · Evaluación rápida', title:'Seis preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.',
  items:[{q:'¿Qué ejecuta el programa?',a:'El microprocesador.'},{q:'¿Dónde suelen estar mapas y programa?',a:'En memoria Flash.'},{q:'¿Qué suele guardar una EEPROM?',a:'Datos pequeños, persistentes y particulares.'},{q:'¿Qué es memoria emulada?',a:'Una zona de otra memoria que se comporta como EEPROM.'},{q:'¿Memoria interna se ve como chip?',a:'No necesariamente; puede estar dentro del microprocesador.'},{q:'¿Cómo se evita un corto?',a:'Conexión sin tensión, pinout exacto, aislamiento y revisión.'}]},

{type:'close', label:'3.9 Cierre del bloque',
  kicker:'Bloque 3 · Cierre', title:'Lo que debe quedar claro',
  ideas:['El microprocesador ejecuta; las memorias conservan el programa, las calibraciones y los datos particulares.','Antes de acceder a ellas debemos identificar la arquitectura.','Hay que proteger la unidad frente a estática, polaridad incorrecta y cortocircuitos.'],
  conc:{h:'Lo siguiente',t:'Ya sabemos qué información puede contener una ECU y dónde se encuentra. El siguiente paso será conocer las herramientas con las que vamos a acceder a esas memorias: FLEX y KESS3.'}}
],

/* ───────────────────────── BLOQUE 4 ───────────────────────── */
4:[
{type:'cols', label:'4.2 La herramienta es un sistema completo',
  kicker:'Bloque 4 · Concepto', title:'La herramienta es un sistema completo',
  chain:['Portátil y software','Interfaz FLEX / KESS3','Cableado OBD · Bench · Boot','ECU / TCU del vehículo'],
  chainNote:'Más alimentación estable y procedimiento.',
  cols:[
    {h:'Elementos comunes',items:['Portátil y software de gestión','Interfaz física de programación','Cables OBD, Bench y Boot','Adaptadores, sondas y accesorios específicos','Alimentación estable para vehículo o ECU','Lista de vehículos y base de protocolos','Manuales de conexión y soporte técnico']},
    {h:'Comprar la interfaz no es suficiente',quote:'Para trabajar necesitamos software actualizado, una licencia adecuada, el cable correcto, una fuente estable y un procedimiento compatible con la unidad.',note:{h:'Regla',t:'Si falta cualquiera de estos elementos, la operación no está preparada.',dark:true}}
  ]},

{type:'flow', label:'4.3 El flujo de trabajo en 7 pasos',
  kicker:'Bloque 4 · Flujo básico, común a ambas plataformas', title:'El flujo de trabajo en 7 pasos',
  lead:'Toca cada paso. Solo al final conectamos la herramienta.',
  items:[
    {t:'Buscar',d:'Buscar el vehículo o la ECU en la lista oficial de la plataforma. La lista puede consultarse antes de aceptar el trabajo.'},
    {t:'Confirmar ECU',d:'Revisar la variante exacta: fabricante, familia, hardware y software. Que coincida con la unidad real, no solo con el modelo.'},
    {t:'Leer manual',d:'Abrir el manual del protocolo: cable, adaptador, pinout, secuencia, advertencias, prerequisitos y tiempos.'},
    {t:'Conectar',d:'Conectar exactamente como indica el manual, con alimentación estable y sin improvisar accesorios.'},
    {t:'Identificar',d:'Comprobar que la identificación electrónica corresponde a la unidad y al protocolo seleccionados. Guardar el registro.'},
    {t:'Leer / Escribir',d:'Ejecutar únicamente la operación autorizada por el protocolo, observando tensión y mensajes.'},
    {t:'Verificar',d:'Esperar la confirmación final, comprobar el archivo obtenido o escrito y registrar el resultado.'}
  ]},

{type:'photo', label:'4.4 FLEX',
  kicker:'Bloque 4 · FLEX', title:'FLEX · Magicmotorsport',
  img:'flex', remote:'https://electronicacar.es/wp-content/uploads/2026/08/Ecrepro.jpg', cap:'Interfaz FLEX con Flexbox y cables sobre el banco de trabajo',
  body:['Programador de ECU y TCU para calibración y reparación, con modos OBD, Bench y Boot y una lista de vehículos en actualización continua.'],
  bullets:['Interfaz FLEX y Flexbox para determinadas conexiones y funciones','Software FLEX, cables y adaptadores según protocolo','Cuenta y plataforma Helpdesk','Lista oficial de vehículos y servicios: filtra por vehículo, modelo, motor y fabricante de ECU'],
  note:{h:'Cómo se empieza en FLEX',t:'Buscamos el vehículo o la ECU. Después revisamos la variante, el modo de conexión, las memorias disponibles y las instrucciones del protocolo. Solo entonces conectamos la herramienta. La cobertura cambia con las actualizaciones: se verifica antes de aceptar el trabajo.'}},

{type:'fields', label:'4.5 La pantalla de protocolo',
  kicker:'Bloque 4 · Leer la pantalla de protocolo', title:'Los 7 campos que hay que comprobar',
  lead:'Pantalla simulada, ficticia y genérica: no reproduce la interfaz de ninguna marca. Toca cada campo para ver qué hay que mirar.',
  items:[
    {k:'Vehículo / ECU',v:'Berlina 2.0 diésel · ECU familia D17-XX (ficticio)',d:'Que coincida con la unidad real, no solo con el modelo. La variante exacta manda.'},
    {k:'Modo',v:'OBD / Bench',d:'OBD, Bench, Boot u otra variante indicada por el protocolo. No se elige por preferencia.'},
    {k:'Operaciones',v:'ID · Lectura · Escritura',d:'Identificación, lectura, escritura, backup, unlock o recuperación: solo lo que declara el protocolo.'},
    {k:'Memorias',v:'Int. Flash · EEPROM emulada',d:'Flash interna/externa, EEPROM o memoria emulada, según protocolo. Qué se lee exactamente.'},
    {k:'Checksum',v:'Corrección automática: sí',d:'Qué corrección o verificación declara el protocolo. Nunca se asume que se corrige siempre igual.'},
    {k:'Cableado',v:'Cable A-12 + adaptador B (ficticio)',d:'Cable, adaptador, pinout y secuencia exactos. Un accesorio parecido no es el accesorio correcto.'},
    {k:'Notas',v:'Ver secuencia de contacto · tensión estable',d:'Advertencias, prerequisitos, tiempos y pasos especiales. Se leen completas antes de conectar.'}
  ],
  side:{h:'Nunca debemos suponer',items:['Que “Read” significa backup completo','Que “Full” incluye siempre las mismas memorias','Que un protocolo anterior sirve para otra variante','Que el checksum se corrige siempre igual','Que una ECU similar usa idéntico pinout']},
  foot:'La pantalla del protocolo no se lee para confirmar lo que queremos hacer, sino para descubrir exactamente qué permite hacer la herramienta.'},

{type:'photo', label:'4.6 KESS3', flip:true,
  kicker:'Bloque 4 · KESS3', title:'KESS3 · Alientech',
  img:'kess3', remote:'https://electronicacar.es/wp-content/uploads/2026/08/Ecrepro-1.jpg', cap:'Interfaz KESS3 con cable OBD y cableado Bench sobre el banco',
  body:['Trabaja mediante Alientech Suite: modos OBD, Bench y Boot, listas de vehículos, procedimientos guiados y configuración modular.'],
  bullets:['Selección: marca, modelo, motor, ECU y variante','Funciones: identificación, lectura, escritura y adicionales','Conexión y accesorios: los que indica Suite para el procedimiento','Configuración: categoría y activación necesarias','Archivo: tipo de lectura y contenido realmente obtenido'],
  note:{h:'Regla',t:'Una función visible en el ecosistema no significa que esté disponible para todas las unidades. Siempre se confirma en la Vehicle List y en el protocolo concreto. ECM Titanium, DataLogger o DynoDrive no son la función básica de programación de KESS3.',dark:true}},

{type:'cols', label:'4.7 Master y Slave',
  kicker:'Bloque 4 · Master y Slave', title:'Master y Slave: quién controla el archivo',
  chain:['Slave: lectura cifrada','Master: archivo editable','Slave: recibe el archivo preparado'],
  cols:[
    {h:'Master',items:['Trabaja con archivos editables o descifrados según plataforma','Gestiona la modificación con el software o proveedor elegido','Autonomía sobre el flujo del archivo','Puede crear o gestionar una red de herramientas Slave']},
    {h:'Slave',items:['Trabaja vinculado a un Master','El archivo se gestiona cifrado dentro de la red','Envía la lectura al Master y recibe el archivo preparado','Reduce la necesidad de editar mapas, pero crea dependencia operativa y comercial']}
  ],
  foot:'<b>Elección profesional.</b> Slave no significa una herramienta inferior para leer o escribir. La diferencia principal está en el control y la gestión del archivo.'},

{type:'table', label:'4.8 FLEX y KESS3, lado a lado',
  kicker:'Bloque 4 · Comparación', title:'FLEX y KESS3, lado a lado',
  head:['Aspecto','FLEX','KESS3'],
  rows:[['Fabricante','Magicmotorsport','Alientech'],['Gestión','Software FLEX + Helpdesk','Alientech Suite'],['Unidades','ECU y TCU; otras según cobertura','ECU y TCU; otras según cobertura'],['Modos','OBD, Bench y Boot','OBD, Bench y Boot'],['Master / Slave','Sí','Sí'],['Lista de vehículos','Oficial y actualizable','Vehicle List oficial'],['Manuales','Por protocolo','Procedimientos guiados'],['Configuración','Paquetes y licencias según necesidad','Activaciones modulares por categoría']],
  boxes:[{h:'Conclusión',t:'No existe una herramienta mejor para todas las unidades. Se elige comparando cobertura real, modo de trabajo, operaciones, soporte, coste, licencias y experiencia del taller.',dark:true}]},

{type:'order', label:'4.9 Ordena los 6 pasos de selección',
  kicker:'Bloque 4 · Ejercicio', title:'Ordena los 6 pasos de selección',
  lead:'Toca los pasos en el orden correcto, del primero al último.',
  items:['Tipo de vehículo','Marca y modelo','Motor','ECU exacta','HW / SW','Modo y operación'], pool:[2,5,0,3,1,4],
  ok:'Orden correcto: de lo general a la unidad concreta.', ko:'Hay pasos fuera de lugar: revisa la secuencia.',
  foot:'<b>Contraejemplo.</b> Elegir primero la herramienta favorita y después buscar un protocolo que parezca compatible. La selección no se basa en costumbre, publicidad o rapidez: se basa en la unidad concreta y en la operación necesaria.'},

{type:'check', label:'4.10 Checklist de preparación',
  kicker:'Bloque 4 · Preparación antes de conectar', title:'La preparación termina antes de pulsar Read o Write',
  items:['Diagnosis previa y registro de DTC.','Comprobación del estado mecánico.','Batería y estabilizador (fuente reguladora de tensión) adecuados.','Portátil conectado, sin suspensión ni actualizaciones pendientes.','Herramienta, software y licencias actualizados.','ECU y protocolo confirmados.','Cableado y polaridad verificados.','Carpeta de trabajo y nombre del archivo preparados.','Plan de recuperación conocido antes de escribir.'],
  done:'Preparación completa', pending:'Preparación incompleta',
  side:[{h:'Mensaje',t:'Si todavía tenemos dudas sobre la unidad, la alimentación o el cableado, la operación no comienza.',dark:true}]},

{type:'match', label:'4.11 Errores frecuentes',
  kicker:'Bloque 4 · Errores frecuentes', title:'Empareja cada error con su consecuencia',
  lead:'Toca un error a la izquierda y su consecuencia a la derecha.', lh:'Error', rh:'Consecuencia',
  pairs:[['Seleccionar solo por modelo y motor','Protocolo equivocado.'],['No leer el manual completo','Secuencia o conexión incorrecta.'],['Confundir lectura virtual con backup','Falsa sensación de recuperación.'],['Trabajar sin estabilizador','Interrupción por caída de tensión.'],['Usar un pinout similar','Riesgo de cortocircuito o daño.'],['Sobrescribir el original','Pérdida del punto de retorno.'],['Repetir tras un error sin analizar','Agravamiento de la incidencia.'],['Prometer clonación sin verificar memorias','Trabajo incompleto o unidad no operativa.']], shuffle:[2,5,0,7,3,1,6,4],
  foot:'La interfaz avisa de muchos riesgos, pero no puede comprobar por nosotros que el vehículo esté sano, que el cable esté en buen estado o que hayamos seleccionado la unidad correcta.'},

{type:'quiz', label:'4.12 Evaluación',
  kicker:'Bloque 4 · Evaluación rápida', title:'Seis preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.',
  items:[{q:'¿Qué se consulta primero?',a:'La ECU y el protocolo exactos.'},{q:'¿Master y Slave?',a:'Difieren principalmente en gestión y control del archivo.'},{q:'¿FLEX y KESS3 usan los mismos cables?',a:'No. Cada plataforma y protocolo tiene accesorios propios.'},{q:'¿OBD es siempre la mejor opción?',a:'No. Depende de la unidad y operación.'},{q:'¿Read significa backup completo?',a:'No. Hay que revisar memorias y tipo de lectura.'},{q:'¿Qué hacer ante un fallo?',a:'Mantener alimentación, registrar y analizar antes de repetir.'}]},

{type:'close', label:'4.13 Cierre del bloque',
  kicker:'Bloque 4 · Cierre', title:'Cinco ideas definitivas',
  ideas:['La herramienta forma parte de un sistema completo.','La lista de vehículos se consulta antes de aceptar el trabajo.','Master y Slave describen el control del archivo, no la calidad del hardware.','FLEX y KESS3 se comparan por protocolo concreto, no por opiniones generales.','El procedimiento y la alimentación son tan importantes como la interfaz.'],
  conc:{h:'Lo siguiente',t:'Ya conocemos las herramientas y sabemos cómo consultar sus protocolos. Ahora vamos a estudiar con detalle los tres modos principales de conexión: OBD, Bench y Boot. Fuentes oficiales: magicmotorsport.com/en/flex · alientech-tools.com/en/kess3'}}
],

/* ───────────────────────── BLOQUE 5 ───────────────────────── */
5:[
{type:'table', label:'5.2 Tres rutas de acceso',
  kicker:'Bloque 5 · Visión general', title:'Tres rutas de acceso',
  head:['','OBD','Bench','Boot'],
  rows:[['Estado de la ECU','Instalada · cerrada','Desmontada · cerrada normalmente','Desmontada · abierta'],['Se desmonta','No','Sí','Sí'],['Se abre','No','Normalmente no','Sí'],['Conexión','Puerto de diagnosis','Conector de la ECU','Conector y placa'],['Acceso','Según protocolo','Directo a la unidad','Profundo según protocolo'],['Riesgo físico','Bajo','Medio','Alto']],
  boxes:[{h:'La escala de riesgo es orientativa',t:'Una escritura OBD con alimentación inestable también puede dejar la ECU sin comunicación. El riesgo bajo no existe: existe el riesgo controlado.',dark:true}]},

{type:'photo', label:'5.3 OBD',
  kicker:'Bloque 5 · OBD', title:'OBD: conexión mediante el vehículo',
  img:'obd', remote:'https://electronicacar.es/wp-content/uploads/2025/11/curso-pass-thru.jpg', cap:'Interfaz conectada al puerto OBD del vehículo, con el portátil y el estabilizador de tensión',
  body:['La herramienta se conecta al puerto de diagnosis y comunica con la ECU a través de la red del vehículo. La unidad permanece instalada y cerrada.'],
  bullets:['Ventajas: no se desmonta la ECU, menos manipulación física, suele ser el procedimiento más rápido.','Limitaciones: puede ofrecer lectura virtual o parcial, depende de la batería y de la red, puede requerir desbloqueo previo, no siempre permite backup o recuperación profunda.'],
  note:{h:'OBD describe el punto de conexión, no la cantidad de información obtenida',t:'Caso: la lectura finaliza correctamente, pero el archivo procede del servidor. Disponemos de un original compatible para calibración, no necesariamente de una copia exacta de todos los datos de la ECU.'}},

{type:'flow', label:'5.4 Preparación y secuencia OBD',
  kicker:'Bloque 5 · Secuencia OBD', title:'Preparación y secuencia OBD',
  lead:'Primero se prepara el vehículo: luces y climatización apagadas, consumidores desconectados, portátil sin suspensión, estabilizador conectado y batería comprobada. Después, seis pasos en orden.',
  items:[
    {t:'Diagnosis',d:'Realizar diagnosis previa y guardar los DTC. Comprobar batería y sistema de carga: el estado inicial debe quedar registrado antes de tocar nada.'},
    {t:'Estabilizador',d:'Conectar un estabilizador (fuente reguladora de tensión) adecuado. La estabilidad eléctrica forma parte del procedimiento.'},
    {t:'Protocolo',d:'Confirmar el protocolo y el tipo de lectura. Mantener llaves y mandos según el manual.'},
    {t:'Identificar',d:'Realizar la identificación de la ECU y guardar captura o registro. Confirmar que corresponde con el protocolo.'},
    {t:'Leer / Escribir',d:'Seguir exactamente las indicaciones de contacto. La principal protección en OBD es controlar todo el vehículo: tensión, consumidores, contacto y comunicaciones.'},
    {t:'Verificar',d:'Esperar la confirmación final antes de desconectar. Comprobar el archivo obtenido: ¿real, virtual o parcial? ¿Qué tenemos para recuperar si una escritura se interrumpe?'}
  ],
  foot:'<b>Prohibido durante la operación.</b> No abrir puertas ni activar consumidores si el manual lo prohíbe · No mover el conector ni el cable USB · Mantener alimentación e Internet cuando sean necesarios · Esperar la confirmación final antes de desconectar.'},

{type:'photo', label:'5.5 Bench', flip:true,
  kicker:'Bloque 5 · Bench', title:'Bench: conexión directa a la ECU',
  img:'bench', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_4eb7f01a-0f17-4e3c-9dc7-0628334dec50.png', cap:'ECU cerrada sobre la mesa conectada por su conector al mazo Bench y a la fuente estabilizada',
  body:['La ECU se desmonta y la herramienta se conecta directamente a su conector. En un Bench convencional la carcasa permanece cerrada. Bench traslada la responsabilidad al cableado que prepara el técnico.'],
  bullets:['Confirmar referencia y orientación del conector','Preparar todas las conexiones sin alimentación y revisar cada pin dos veces','Aislar cables no utilizados; fijar la ECU y el mazo','Aplicar alimentación siguiendo la secuencia y comprobar identificación antes de leer o escribir'],
  note:{h:'El pinout exacto lo da FLEX o KESS3',t:'No existen conexiones universales: este material no proporciona pinouts genéricos. Familias de pines por categoría: positivo permanente, positivo bajo contacto, masas, CAN/comunicación y señales especiales.',dark:true}},

{type:'cols', label:'5.5b Bench: ventajas y riesgos',
  kicker:'Bloque 5 · Bench', title:'Bench: ventajas y riesgos',
  cols:[
    {h:'Ventajas',items:['Comunicación directa con la unidad','No depende de toda la red del vehículo','Puede ofrecer más acceso que OBD','Evita abrir la ECU cuando el protocolo lo permite']},
    {h:'Riesgos',items:['Localizar y desmontar la ECU','Un pinout incorrecto puede dañar la unidad','Controlar positivos, contacto y masas','Señales o adaptadores específicos según protocolo']}
  ]},

{type:'rows', label:'5.6 Bench: síntoma → comprobación',
  kicker:'Bloque 5 · Bench · Fallos y comprobación', title:'Síntoma → comprobación inicial',
  lead:'Las comprobaciones están ocultas: responde primero y toca después.',
  head:['Síntoma','Comprobación inicial'],
  rows:[['No comunica','Alimentación, masas, contacto, red y protocolo.'],['Consumo anormal','Desconectar según seguridad y revisar pinout.'],['Identificación incoherente','Confirmar ECU, variante y conexión.'],['La lectura se interrumpe','Mantener tensión y registrar el mensaje.'],['Archivo inesperado','Revisar memorias y operación seleccionada.'],['La ECU se calienta','Detener y revisar inmediatamente la conexión.']],
  boxes:[{h:'Multímetro',t:'Para verificar continuidad, tensión y ausencia de uniones no deseadas, siempre sin improvisar ni medir sobre puntos que el procedimiento no contempla.'},{h:'Regla',t:'Si la ECU no identifica, no avanzamos a la escritura para “probar”. Primero resolvemos la causa de comunicación.',dark:true}]},

{type:'photo', label:'5.7 Boot',
  kicker:'Bloque 5 · Boot', title:'Boot: acceso con la ECU abierta',
  img:'boot', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_0188ce0e-13c5-47c4-836e-f06d8849063f.png', cap:'ECU abierta sobre alfombrilla ESD con adaptador y sondas fijadas sobre la placa',
  body:['La ECU se desmonta y se abre. La herramienta utiliza el conector y uno o varios puntos de la placa para iniciar el microprocesador en el modo indicado por el protocolo. Mayor acceso, mayor precisión física exigida.'],
  bullets:['Ventajas: acceso profundo a memorias, backup completo en unidades compatibles, recuperación o clonación según protocolo, trabaja cuando otros modos no están disponibles.','Riesgos: daño al abrir la carcasa, electricidad estática, sonda en punto incorrecto, cortocircuito, daño en pistas y pérdida de estanqueidad al cerrar.'],
  note:{h:'Regla',t:'Una fotografía parecida no confirma un punto Boot. La referencia exacta de la ECU y el manual del protocolo son obligatorios. Este material no muestra puntos Boot concretos.',dark:true}},

{type:'flow', label:'5.7b Boot en tres fases',
  kicker:'Bloque 5 · Boot', title:'Secuencia Boot en tres fases',
  items:[
    {t:'Antes de abrir',d:'Confirmar que el protocolo exige apertura. Revisar fotografías y documentación completas. Preparar herramientas de apertura adecuadas. Trabajar con protección ESD. Planificar el sellado posterior.'},
    {t:'Antes de alimentar',d:'Identificar conector, orientación y puntos exactos. Colocar adaptador o sondas sin tensión. Evitar apoyos metálicos sobre la placa. Fijar sondas para que no se desplacen. Revisar separación entre puntos cercanos.'},
    {t:'Durante la operación',d:'No tocar la placa. No mover sondas. No modificar la tensión. No retirar el punto Boot antes de que el software lo indique. Guardar por separado cada memoria leída.'}
  ]},

{type:'cols', label:'5.8 Apertura, cierre y estanqueidad',
  kicker:'Bloque 5 · Boot · Apertura, cierre y estanqueidad', title:'El trabajo no termina al finalizar la escritura',
  cols:[
    {h:'Apertura',items:['No introducir la herramienta más de lo necesario','Evitar pistas, componentes y conectores internos','Aplicar calor solo cuando el procedimiento y la carcasa lo permitan','No deformar la tapa ni la base','Documentar el estado previo de la unidad']},
    {h:'Cierre y estanqueidad (sellado)',items:['Eliminar restos que impidan el asentamiento','Utilizar un sellado adecuado para la aplicación','Mantener libres respiraderos y zonas funcionales','Comprobar que la tapa no presiona componentes','Respetar tiempos de curado antes de montar']},
    {h:'Qué registra la orden de trabajo',items:['Modo utilizado','Estado inicial de la carcasa','Memorias leídas','Archivo escrito','Material de sellado y comprobación final']}
  ],
  foot:'<b>Responsabilidad.</b> Una programación correcta con una carcasa mal sellada puede provocar una avería posterior por humedad.'},

{type:'table', label:'5.9 Comparación de riesgos',
  kicker:'Bloque 5 · Comparación', title:'Comparación de riesgos',
  head:['Criterio','OBD','Bench','Boot'],
  rows:[['Desmontaje','No','Sí','Sí'],['Apertura','No','No normalmente','Sí'],['Dependencia de red del vehículo','Alta','Baja','Baja'],['Riesgo de pinout','Bajo','Alto','Alto'],['Riesgo físico de placa','Muy bajo','Bajo','Alto'],['Acceso potencial','Según protocolo','Amplio según protocolo','Profundo según protocolo'],['Recuperación','Limitada según unidad','Frecuente según unidad','Frecuente según unidad']],
  boxes:[{h:'Conclusión',t:'No existe un modo “más profesional”. El profesional es quien utiliza el modo necesario con el menor riesgo razonable.',dark:true}]},

{type:'decision', label:'5.10 ¿Qué modo utilizamos?',
  kicker:'Bloque 5 · Árbol de decisión', title:'¿Qué modo utilizamos?',
  lead:'Responde las preguntas en orden. Se propone el modo menos invasivo que autoriza el protocolo.',
  foot:'<b>Por qué no se decide.</b> Rapidez únicamente · Costumbre · Preferencia por una herramienta · Apariencia similar de la ECU · Suposición de que más acceso siempre es mejor.'},

{type:'check', label:'5.11 Qué hacer si una operación falla', ordered:true,
  kicker:'Bloque 5 · Seguridad', title:'Qué hacer si una operación falla',
  lead:'Protocolo bloqueante: cada paso se confirma en orden. No se avanza saltando pasos.',
  items:['No desconectar','Mantener la tensión','Registrar el mensaje (foto)','Anotar fase, porcentaje y memoria','Consultar protocolo y documentación','Contactar soporte · valorar recuperación'],
  done:'Estado conservado, información registrada, soporte informado', pending:'Protocolo en curso',
  side:[{h:'Información útil para soporte',items:['Vehículo y VIN','ECU, HW y SW','Herramienta y versión del software','Modo de conexión','Archivo utilizado','Tensión y momento exacto de la interrupción','Mensaje o captura del error']},{h:'Regla',t:'La rapidez de recuperación depende más de la calidad de la información conservada que del número de intentos realizados.',dark:true}]},

{type:'quiz', label:'5.12 Evaluación',
  kicker:'Bloque 5 · Evaluación rápida', title:'Siete preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.',
  items:[{q:'¿Qué modo deja la ECU instalada?',a:'OBD.'},{q:'¿Bench obliga a abrir?',a:'Normalmente no.'},{q:'¿Boot trabaja sobre placa?',a:'Sí, según puntos indicados.'},{q:'¿OBD siempre lee el contenido real?',a:'No; puede ser virtual o parcial.'},{q:'¿Qué riesgo domina en Bench?',a:'Pinout, polaridad y alimentación.'},{q:'¿Qué riesgo adicional tiene Boot?',a:'Apertura, ESD, sondas y estanqueidad.'},{q:'¿Qué hacer ante un fallo?',a:'Mantener tensión, registrar y analizar.'}]},

{type:'close', label:'5.13 Cierre del bloque',
  kicker:'Bloque 5 · Cierre', title:'Cinco ideas definitivas',
  ideas:['OBD es menos invasivo, no necesariamente más completo.','Bench conecta directamente sin abrir normalmente.','Boot permite acceso profundo, pero aumenta el riesgo.','El protocolo exacto determina conexión y operaciones.','Toda escritura necesita alimentación estable y plan de recuperación.'],
  conc:{h:'Lo siguiente',t:'Ya sabemos cómo acceder a la ECU. Ahora debemos entender qué tipo de información obtenemos: identificación, lectura real, lectura virtual, lectura parcial y backup completo.'}}
],

/* ───────────────────────── BLOQUE 6 ───────────────────────── */
6:[
{type:'rows', label:'6.2 Del acceso al archivo',
  kicker:'Bloque 6 · Mapa general', title:'Del acceso al archivo',
  chain:['Identificar: quién es la ECU','Leer: real, virtual o parcial','Respaldar: conservar para trabajar y recuperar'],
  lead:'Cinco preguntas de confirmación. Toca cada una para ver la respuesta.',
  head:['Pregunta','Respuesta'],
  rows:[['¿Quién es la ECU?','Familia, referencia, HW, SW y variante.'],['¿Cómo accedemos?','OBD, Bench o Boot según protocolo.'],['¿Qué operación existe?','Identificación, lectura, backup, escritura o recuperación.'],['¿Qué archivo obtendremos?','Real, virtual, parcial o conjunto de memorias.'],['¿Para qué lo necesitamos?','Calibrar, archivar, comparar, recuperar o clonar.']],
  boxes:[{h:'Dos ejes distintos',t:'OBD, Bench y Boot describen la ruta de acceso. Real, virtual, parcial y backup describen el origen o alcance de la información.'},{h:'Límite',t:'Una identificación correcta no es un backup: describe la unidad, pero no conserva por sí sola el contenido de sus memorias.',dark:true}]},

{type:'cards', label:'6.3 Real · Virtual · Parcial · Backup',
  kicker:'Bloque 6 · Los cuatro orígenes', title:'Real · Virtual · Parcial · Backup',
  cards:[
    {t:'Real',s:'Memoria de la ECU',p:'La herramienta obtiene datos presentes en la ECU. <b>Sirve</b> para reflejar el contenido accesible, conservar modificaciones previas y comparar. <b>No garantiza</b> que sea completa ni que pueda escribirse en otra ECU.'},
    {t:'Virtual',s:'Servidor',p:'Se identifica la ECU y se descarga un original compatible. <b>Sirve</b> cuando OBD no ofrece lectura física y para calibrar. <b>No garantiza</b> conservar modificaciones previas ni ser copia del estado actual. Virtual no significa falso.'},
    {t:'Parcial',s:'Zona limitada',p:'Solo una parte del contenido accesible, por ejemplo la zona de calibración. <b>Sirve</b> para la operación prevista. <b>No garantiza</b> respaldo para clonación o recuperación profunda: ¿qué quedaría fuera?'},
    {t:'Backup',s:'Conjunto de memorias',p:'Lo que herramienta y protocolo consideran necesario para reproducir o recuperar el estado accesible. <b>Sirve</b> para restaurar, recuperar o clonar. <b>No garantiza</b> acceso a cada bit: no es el archivo más grande, es el conjunto correcto.'}
  ]},

{type:'classify', label:'6.4 Clasifica los cuatro archivos',
  kicker:'Bloque 6 · Ejercicio', title:'Clasifica los cuatro archivos simulados',
  lead:'Asigna a cada archivo su clase. Atención: dos archivos comparten tamaño.',
  opts:['Real','Virtual','Parcial','Backup'],
  items:[
    {name:'A_ident_servidor.bin',meta:'Obtenido tras identificar la ECU · descargado del servidor · 4 MB',ok:'Virtual',fb:'Procede del servidor tras la identificación: original compatible, no copia del estado actual.'},
    {name:'B_lectura_bench.bin',meta:'Leído directamente de la unidad por Bench · 4 MB',ok:'Real',fb:'Los datos proceden de la ECU. Mismo tamaño que A, pero origen distinto: por eso el tamaño no clasifica.'},
    {name:'C_zona_calibracion.bin',meta:'Zona de mapas seleccionada por el protocolo · 1,5 MB',ok:'Parcial',fb:'Solo una zona definida. Válido para calibrar; insuficiente como respaldo profundo.'},
    {name:'D_conjunto_completo',meta:'flash.bin + eeprom.bin + informe de identificación · varios archivos asociados',ok:'Backup',fb:'Conjunto de memorias previsto por el protocolo, con su asociación.'}
  ]},

{type:'rows', label:'6.5 Qué archivo entrega la herramienta',
  kicker:'Bloque 6 · Qué archivo entrega la herramienta', title:'Resultado → formato → uso → ¿es respaldo?',
  lead:'La última columna está oculta: responde primero y toca después.',
  head:['Resultado','Formato','Uso','¿Es respaldo?'],
  rows:[['Identificación','Texto, informe o registro','Documentar y seleccionar','No.'],['Lectura real','Uno o varios binarios','Calibrar, comparar, conservar','Depende del alcance.'],['Lectura virtual','Original del servidor','Calibración compatible','No del estado actual.'],['Lectura parcial','Binario limitado','Operación concreta','Normalmente insuficiente.'],['Backup','Conjunto de archivos o proyecto','Restaurar, recuperar o clonar según protocolo','Sí, dentro de su alcance.']],
  boxes:[{h:'Regla',t:'El nombre de un botón no sustituye la documentación. FLEX y KESS3 pueden presentar operaciones y archivos de manera diferente según protocolo y versión.',dark:true}]},

{type:'table', label:'6.6 Qué queda fuera del archivo virtual',
  kicker:'Bloque 6 · Memorias y tipo de lectura', title:'Qué queda fuera del archivo virtual',
  lead:'El tipo de memoria es una característica electrónica; el tipo de lectura describe cómo y cuánto de esa memoria obtenemos.',
  head:['Memoria','Contenido típico','Lectura posible','Importancia'],
  rows:[['Flash','Programa y calibraciones','Completa o parcial según protocolo','Base habitual de la repro.'],['EEPROM','Configuración y datos persistentes','Separada, integrada o no disponible','Puede ser crítica en clonación.'],['Emulada','Zona persistente dentro de otra memoria','Incluida o tratada por el protocolo','No confundir con una EEPROM física.']],
  boxes:[{h:'Ejemplo conceptual',t:'Archivo A: zona de calibración de la Flash leída por OBD. Archivo B: datos particulares de la EEPROM obtenidos en Boot. Archivo C (backup): agrupa A, B y otros datos previstos por el protocolo.'},{h:'Archivo virtual',t:'Original compatible para la Flash, sin los datos particulares de B. La EEPROM queda fuera.',dark:true}]},

{type:'choose', label:'6.7 Tamaño de archivo',
  kicker:'Bloque 6 · Verificador de tamaño', title:'Tamaño de archivo: útil, pero no suficiente',
  lead:'Cinco observaciones. Decide qué se puede concluir de cada una y comprueba.',
  items:[
    {obs:'Dos archivos tienen el mismo tamaño',a:'Son la misma versión',b:'Pueden ser versiones o unidades diferentes'},
    {obs:'Un archivo es más pequeño',a:'Está dañado',b:'Puede ser parcial, comprimido o procesado'},
    {obs:'Un archivo es más grande',a:'Contiene más información útil',b:'Puede contener relleno, cabecera o más zonas'},
    {obs:'El tamaño coincide con una memoria',a:'Confirma el origen',b:'No confirma por sí solo origen ni compatibilidad'},
    {obs:'La extensión es distinta',a:'Es otro tipo de archivo',b:'Puede ser solo una convención de la herramienta'}
  ],
  foot:'<b>Conclusión constante:</b> el tamaño no confirma origen ni compatibilidad. Comprobaciones mínimas: ECU, HW y SW identificados · modo y operación utilizados · memoria o zona indicada por el protocolo · tamaño esperado · fecha, vehículo y herramienta · original, modificado o backup claramente diferenciados.'},

{type:'flow', label:'6.8 ¿Qué necesitamos hacer?',
  kicker:'Bloque 6 · Cómo elegir la lectura necesaria', title:'¿Qué necesitamos hacer?',
  lead:'Selecciona la finalidad y obtén el resultado mínimo razonable.', dlabel:'Resultado mínimo razonable',
  items:[{t:'Calibrar',d:'Archivo compatible y autorizado por el protocolo.'},{t:'Conservar el estado',d:'Lectura real con alcance documentado.'},{t:'Comparar',d:'Lectura real de la misma zona y versión.'},{t:'Recuperar',d:'Datos y modo de recuperación indicados por el protocolo.'},{t:'Clonar',d:'Memorias y datos específicos exigidos por el protocolo.'},{t:'Archivar',d:'Identificación, originales, modificados y registro.'}],
  foot:'<b>Decisión profesional.</b> No pedimos “la lectura más completa” por costumbre. Obtenemos el contenido que necesita el trabajo, más el respaldo razonable que permita el procedimiento.'},

{type:'cols', label:'6.9 Flujo de trabajo con archivos',
  kicker:'Bloque 6 · Flujo de trabajo, integridad y validación', title:'Flujo de trabajo con archivos',
  cols:[
    {h:'Antes de leer',items:['Guardar identificación completa','Confirmar modo, protocolo y operación','Definir si buscamos calibrar, respaldar o recuperar','Preparar alimentación y conexión']},
    {h:'Después de leer',items:['Leer el mensaje final de la herramienta','Comprobar cantidad, nombres y tamaños','No renombrar perdiendo la relación entre memorias','Guardar una copia original sin modificar','Registrar versión de software y condiciones']},
    {h:'Antes de escribir',items:['Confirmar que el archivo pertenece a la ECU y operación','Diferenciar original, modificado y backup','Verificar que existe un plan de recuperación','No usar un archivo por similitud de nombre o tamaño']}
  ],
  foot:'La operación no termina al llegar al 100 %: termina cuando el archivo queda verificado, identificado y conservado.'},

{type:'cols', label:'6.9b Checksum y validación',
  kicker:'Bloque 6 · Integridad', title:'Checksum, sin profundizar',
  cols:[
    {h:'Qué es',items:['Mecanismo de comprobación matemática para detectar cambios o incoherencias en determinadas zonas','La herramienta o el software puede corregirlo según el protocolo','No todos los archivos usan el mismo sistema','Un checksum correcto no garantiza contenido adecuado','Nunca corregir manualmente sin conocer el procedimiento']},
    {h:'Validación práctica',items:['La identificación coincide','Origen del archivo conocido','Tamaño y memoria esperados','El software informa archivo válido','Se conserva el original sin modificar']}
  ],
  foot:'<b>Mensaje.</b> La integridad técnica y la compatibilidad son controles distintos: un archivo puede estar íntegro y ser incorrecto para esa ECU.'},

{type:'nomen', label:'6.10 Generador de nomenclatura',
  kicker:'Bloque 6 · Nomenclatura y trazabilidad', title:'Generador de nomenclatura',
  lead:'Completa los campos y observa el nombre componerse. El campo herramienta es opcional.',
  folders:['01_IDENTIFICACION','02_ORIGINALES','03_MODIFICADOS','04_BACKUP','05_INFORMES_Y_DTC'],
  foot:'<b>Norma de seguridad.</b> Nunca sobrescribir el archivo original. Se trabaja siempre sobre una copia y se conserva la procedencia de cada versión.'},

{type:'rows', label:'6.11 Errores frecuentes',
  kicker:'Bloque 6 · Errores frecuentes', title:'Error → consecuencia → respuesta correcta',
  lead:'La respuesta correcta está oculta: toca cada fila.',
  head:['Error','Consecuencia','Respuesta correcta'],
  rows:[['Llamar backup a una lectura virtual','Falsa sensación de recuperación','Etiquetar como original de servidor.'],['Confundir real con completa','Faltan memorias críticas','Consultar alcance del protocolo.'],['Mezclar archivos de varios vehículos','Riesgo de escritura incorrecta','Separar órdenes y usar identificación.'],['Renombrar sin conservar relación','Se pierde el conjunto del backup','Mantener estructura y metadatos.'],['Elegir por tamaño','Compatibilidad no confirmada','Verificar HW, SW, memoria y origen.'],['Modificar el único original','Se pierde referencia limpia','Duplicar y proteger el original.']],
  boxes:[{h:'Caso · 4 MB',t:'Se obtiene por OBD un archivo virtual de 4 MB y por Bench una lectura real de 4 MB. El tamaño coincide, pero el origen y la finalidad son distintos. Dos archivos iguales en tamaño no son equivalentes hasta demostrarlo mediante identificación, origen y contenido.',dark:true}]},

{type:'table', label:'6.12 Dos ejes que no deben confundirse',
  kicker:'Bloque 6 · Matriz transversal', title:'Dos ejes que no deben confundirse',
  lead:'Modo de conexión (cómo llego a la ECU) frente a tipo de lectura (qué información obtengo). La combinación exacta la decide el protocolo de cada ECU.',
  head:['Modo ↓ · Tipo →','Real','Virtual','Parcial','Backup'],
  rows:[['OBD','Posible según protocolo','Frecuente: original del servidor','Posible: zona de calibración','No siempre disponible'],['Bench','Frecuente: acceso directo','Menos habitual','Posible según zona','Amplio según protocolo'],['Boot','Frecuente: acceso profundo','No aplica normalmente','Posible por memoria','Frecuente en unidades compatibles']],
  boxes:[{h:'La confusión típica',t:'Creer que “leer por Bench” garantiza un backup, o que “OBD” significa archivo virtual. Ninguna de las dos cosas es cierta: el modo es la ruta; el tipo de lectura es el contenido.',dark:true}]},

{type:'quiz', label:'6.13 Evaluación',
  kicker:'Bloque 6 · Evaluación rápida', title:'Ocho preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.', n:4,
  items:[{q:'¿Identificación es un backup?',a:'No; describe la unidad.'},{q:'¿Qué caracteriza una lectura real?',a:'Los datos proceden de la ECU.'},{q:'¿De dónde sale una virtual?',a:'De servidor o base de datos.'},{q:'¿Real significa completa?',a:'No; puede ser parcial.'},{q:'¿Una parcial puede servir para repro?',a:'Sí, si el protocolo lo prevé.'},{q:'¿Qué es un backup completo?',a:'El conjunto previsto para su finalidad.'},{q:'¿El tamaño confirma compatibilidad?',a:'No.'},{q:'¿Qué se conserva sin modificar?',a:'El original y todos los datos asociados.'}]},

{type:'close', label:'6.14 Cierre del bloque',
  kicker:'Bloque 6 · Cierre', title:'Cinco ideas definitivas',
  ideas:['Acceso y tipo de lectura son conceptos diferentes.','Real indica procedencia, no alcance total.','Virtual es compatible, pero no copia el estado actual.','Parcial puede ser válida sin ser un respaldo completo.','Todo archivo necesita identidad, origen, finalidad y trazabilidad.'],
  conc:{h:'Lo siguiente',t:'Ya sabemos cómo acceder y qué tipo de archivo obtenemos. Ahora aplicaremos un método completo de trabajo: preparación, lectura, modificación, escritura, verificación y entrega.'}}
],

/* ───────────────────────── BLOQUE 7 ───────────────────────── */
7:[
{type:'flow', label:'7.2 Seis fases más la verificación',
  kicker:'Bloque 7 · Vista general del proceso', title:'Seis fases más la verificación',
  lead:'Toca cada fase para ver su pregunta de control.', dlabel:'Pregunta de control',
  items:[{t:'Recepción',d:'¿Qué solicita el cliente y cuál es el estado del vehículo?'},{t:'Diagnosis',d:'¿Existen averías (fallas) que condicionan el trabajo?'},{t:'Identificar',d:'¿ECU, HW, SW y protocolo coinciden?'},{t:'Respaldar',d:'¿Qué tendremos si debemos volver atrás?'},{t:'Preparar',d:'¿El archivo es correcto, compatible y trazable?'},{t:'Escribir',d:'¿Alimentación y conexión son estables?'},{t:'Verificación',d:'¿El vehículo funciona y no aparecen incidencias nuevas?'}],
  foot:'Una escritura completada al 100 % no compensa una diagnosis o un archivo incorrectos.'},

{type:'rows', label:'7.3 Recepción y orden de trabajo',
  kicker:'Bloque 7 · Recepción', title:'La orden de trabajo',
  lead:'Lo que no se documenta al recibir el vehículo puede convertirse en una discusión al entregarlo. Información mínima: vehículo, matrícula o VIN y kilometraje · motorización, transmisión y modificaciones conocidas · objetivo del cliente · síntomas previos · trabajos anteriores sobre ECU, motor o anticontaminación · autorización y alcance.',
  head:['Registrar','Motivo'], open:true,
  rows:[['Estado visual','Distinguir daños previos.'],['Testigos encendidos','No atribuirlos automáticamente a la repro.'],['Nivel de combustible y temperatura','Preparar prueba y diagnosis.'],['Accesorios o alarmas','Prevenir consumos e interferencias.'],['Archivo o trabajo previo','Evitar asumir que la ECU está original.']],
  boxes:[{h:'Límite profesional',t:'El trabajo debe respetar siempre homologación, emisiones, seguridad, propiedad del vehículo y normativa aplicable.',dark:true}]},

{type:'check', label:'7.4 Diagnosis inicial',
  kicker:'Bloque 7 · Diagnosis y estado inicial', title:'Seis comprobaciones y cinco motivos para detener',
  items:['Lectura completa de DTC y guardado del informe.','Arranque, ralentí y comportamiento básico.','Tensión de batería y capacidad del sistema de estabilización.','Temperaturas, presiones y valores relevantes según el trabajo.','Estado de comunicaciones y módulos implicados.','Prueba previa cuando sea segura y necesaria.'],
  done:'Diagnosis inicial completa', pending:'Diagnosis en curso',
  side:[{h:'Motivos para detener',items:['Batería defectuosa o tensión inestable','Avería mecánica activa que impide evaluar el resultado','ECU sin identificar o comunicación intermitente','Referencias incoherentes con el protocolo','Solicitud del cliente incompatible con un trabajo seguro o legal']},{h:'Mensaje',t:'La reprogramación no repara una avería mecánica. Primero se identifica el problema y después se decide si procede intervenir.',dark:true}]},

{type:'rows', label:'7.5 Identificación, modo y operación',
  kicker:'Bloque 7 · Identificación, modo y operación', title:'Decisión → comprobación',
  lead:'Las comprobaciones están ocultas: responde primero. Recuerda los dos ejes del Bloque 6: modo de conexión ≠ tipo de lectura.',
  head:['Decisión','Comprobación'],
  rows:[['ECU correcta','Familia y referencia física o lógica.'],['Versión correcta','HW, SW, actualización y variante.'],['Modo correcto','OBD, Bench o Boot autorizado.'],['Operación correcta','Identificación, lectura real, virtual, parcial o backup.'],['Herramienta preparada','FLEX o KESS3, cable, protocolo y versión.'],['Plan de recuperación','Modo y datos disponibles si la escritura falla.']],
  boxes:[{h:'Secuencia recomendada',t:'Identificar antes de desmontar cuando sea posible · Comparar la identificación con la documentación del protocolo · Confirmar qué archivo se obtendrá · Guardar capturas o informe de identificación · No cambiar de protocolo para “probar” una escritura.'},{h:'Pregunta para el aula',t:'¿Qué dato demostraría que el archivo pertenece exactamente a esta unidad y no solo a una ECU de aspecto parecido?',dark:true}]},

{type:'table', label:'7.6 Lectura y estrategia de respaldo',
  kicker:'Bloque 7 · Lectura y estrategia de respaldo', title:'Resultado → qué conserva → uso',
  head:['Resultado','Qué conserva','Uso'],
  rows:[['Identificación','Datos de la unidad','Trazabilidad y selección.'],['Lectura real','Contenido accesible actual','Calibrar y comparar.'],['Original virtual','Archivo compatible de servidor','Base de calibración.'],['Lectura parcial','Zona definida','Operación concreta.'],['Backup','Conjunto previsto por protocolo','Recuperación o clonación autorizada.']],
  boxes:[{h:'Método de respaldo · seis puntos',t:'Conservar la identificación antes de leer · Anotar modo, tensión, herramienta y versión · Verificar tamaño y número de archivos · Guardar el original sin modificar · Mantener unidos los archivos de un backup · Duplicar el respaldo en una ubicación segura.'},{h:'Criterio de suficiencia',t:'El respaldo suficiente lo determina el objetivo y el protocolo. Una lectura válida para calibración puede no ser suficiente para recuperación.',dark:true}]},

{type:'check', label:'7.7 Cadena de custodia del archivo',
  kicker:'Bloque 7 · Preparación y control de archivos', title:'Cadena de custodia del archivo',
  chain:['Original: protegido, sin cambios','Copia de trabajo: preparar calibración','Modificado: validado para escribir','Backup: conjunto independiente para recuperación'],
  lead:'Seis comprobaciones antes de escribir.',
  items:['HW y SW compatibles.','Tamaño y formato esperados.','Zona o memoria correcta.','Checksum gestionado por el software o herramienta.','Nombre, fecha, vehículo y autor identificables.','Objetivo técnico documentado.'],
  done:'Archivo apto para escribir', pending:'Archivo pendiente de comprobación',
  side:[{h:'Regla',t:'Nunca se trabaja sobre el único original, y nunca se elige un archivo solo porque el nombre o el tamaño parecen correctos.',dark:true}]},

{type:'check', label:'7.8 Seis áreas antes de pulsar Escribir',
  kicker:'Bloque 7 · Preparación física de la escritura', title:'Seis áreas antes de pulsar Escribir',
  items:['Vehículo: consumidores apagados, contacto y llaves según manual.','Alimentación: estabilizador adecuado y tensión dentro del rango indicado.','Portátil: cargador conectado, suspensión y actualizaciones desactivadas.','Conexión: cable USB, OBD, Bench o sondas firmes y sin tensión mecánica.','Entorno: sin movimientos, interrupciones ni manipulación accidental.','Software: protocolo, archivo, Internet y licencia preparados.'],
  done:'Escribir habilitado', pending:'Escribir deshabilitado',
  side:[{h:'Briefing antes de pulsar Escribir',items:['¿Quién controla el contacto?','¿Quién vigila la tensión?','¿Qué mensajes deben anotarse?','¿Qué está prohibido tocar?','¿Qué plan se seguirá ante un error?']},{h:'Regla',t:'No iniciar si existe una sola duda sobre archivo, alimentación, pinout, identificación o procedimiento.',dark:true}]},

{type:'progress', label:'7.9 Simulación de escritura', target:100,
  kicker:'Bloque 7 · Escritura segura', title:'Simulación de escritura',
  lead:'Inicia la simulación y observa las fases. Al llegar al 100 % la herramienta ha terminado, pero el trabajo no.',
  phases:['Identificación','Borrado','Escritura','Verificación','Cierre'],
  endmsg:'<b>100 % no significa trabajo terminado.</b> La herramienta terminó; aún falta la finalización inmediata y demostrar que el vehículo está correcto.',
  side:[{h:'Prohibido durante la operación',items:['Leer y obedecer cada mensaje de contacto','No abrir puertas ni activar consumidores','No mover cables, ECU, adaptadores ni sondas','Mantener alimentación e Internet cuando se requieran','No cerrar el programa ni usar intensivamente el portátil','Esperar la confirmación final antes de desconectar']},{h:'Qué observa el técnico',items:['Tensión estable','Progreso y fase de la operación','Mensajes de la herramienta','Ruidos o activaciones normales del vehículo']}]},

{type:'rows', label:'7.10 Cuando la herramienta confirma éxito',
  kicker:'Bloque 7 · Finalización inmediata', title:'Cuando la herramienta confirma éxito',
  lead:'Seguir la secuencia final de contacto · Esperar los tiempos indicados · Desactivar alimentación antes de retirar conexiones Bench o Boot · Reconectar la ECU con el contacto quitado · Comprobar conectores, cierres y estanqueidad · Guardar registro de la operación y archivo escrito.',
  head:['No hacer','Por qué'],
  rows:[['Desconectar al llegar al 100 %','Puede faltar una fase de cierre.'],['Arrancar sin revisar conexiones','Puede generar fallos o daños.'],['Borrar todos los DTC sin guardarlos','Se pierde información de diagnóstico.'],['Entregar sin prueba','No se confirma el resultado real.'],['Sobrescribir los archivos','Se pierde trazabilidad.']],
  boxes:[{h:'Regla',t:'Éxito de escritura significa que la herramienta terminó; aún falta demostrar que el vehículo está correcto.',dark:true}]},

{type:'check', label:'7.11 Verificación y diagnosis final',
  kicker:'Bloque 7 · Verificación y diagnosis final', title:'Comparador antes / después',
  lead:'Secuencia: identificar de nuevo la ECU · leer DTC antes de borrar y distinguir códigos temporales por pérdida de comunicación · borrar solo cuando proceda · arrancar y observar ralentí, testigos y parámetros · repetir diagnosis después de la prueba.',
  items:['Comunicación con todos los módulos.','Testigos y DTC.','Arranque y ralentí.','Temperaturas y presiones relevantes.','Comportamiento solicitado.','Ausencia de síntomas nuevos.'],
  done:'Resultado verificado', pending:'Verificación en curso',
  side:[{h:'Criterio de aceptación',t:'El resultado se acepta cuando cumple el objetivo acordado sin introducir anomalías y queda respaldado por diagnosis y prueba.',dark:true}]},

{type:'table', label:'7.12 Prueba dinámica responsable',
  kicker:'Bloque 7 · Prueba dinámica responsable', title:'La prueba no es una competición',
  head:['Fase','Objetivo','Precaución'],
  rows:[['Calentamiento','Alcanzar condiciones normales','No exigir carga en frío.'],['Carga progresiva','Observar respuesta y estabilidad','Evitar una prueba brusca inicial.'],['Control de parámetros','Detectar desviaciones','Registrar sin distraer al conductor.'],['Repetición','Confirmar consistencia','No insistir ante una anomalía.'],['Retorno y diagnosis','Comprobar DTC y estado final','Guardar el informe.']],
  boxes:[{h:'Condiciones',t:'Lugar autorizado y condiciones seguras · Respetar tráfico, temperatura, neumáticos y frenos · No buscar prestaciones máximas.'},{h:'Interrupción inmediata',t:'Si aparece ruido, humo, testigo o comportamiento anormal, la prueba se interrumpe. La prueba valida la calidad del trabajo; no debe crear un riesgo para el vehículo, el técnico ni terceros.',dark:true}]},

{type:'cols', label:'7.13 Gestión de una interrupción',
  kicker:'Bloque 7 · Gestión de una interrupción', title:'Recuperar no significa repetir',
  cols:[
    {h:'Actuación inmediata',items:['No desconectar por impulso','Mantener estable la alimentación','Conservar la conexión y el estado de contacto','Fotografiar el mensaje y anotar porcentaje, fase y memoria','No repetir con otro archivo o protocolo sin analizar','Consultar el procedimiento de recuperación y soporte']},
    {h:'Información necesaria',items:['Vehículo, ECU, HW y SW','Modo, protocolo y versión de herramienta','Archivo leído y archivo escrito','Tensión y momento exacto del fallo','Estado de identificación y comunicación posterior']}
  ],
  foot:'Recuperar significa conservar el estado, entender la fase fallida y aplicar el modo previsto.'},

{type:'cols', label:'7.14 Entrega profesional',
  kicker:'Bloque 7 · Entrega, informe y seguimiento', title:'Entrega profesional',
  cols:[
    {h:'Explicar al cliente',items:['Trabajo realizado y objetivo alcanzado','Incidencias encontradas y solucionadas','Condiciones de uso, mantenimiento y combustible cuando sean relevantes','Limitaciones y elementos que no se han modificado','Recomendación de revisión o seguimiento']},
    {h:'Conservar internamente',items:['Orden de trabajo y autorización','Diagnosis inicial y final','Identificación de la ECU','Originales, modificados y backup','Herramienta, protocolo, fecha y técnico','Resultado de la prueba y observaciones']}
  ],
  foot:'<b>Mensaje.</b> La entrega profesional convierte una intervención técnica en un servicio demostrable y repetible.'},

{type:'gates', label:'7.15 Las tres puertas de calidad',
  kicker:'Bloque 7 · Componente central', title:'Las tres puertas de calidad',
  lead:'Cada puerta solo se abre cuando se marcan todas sus condiciones. Si no se supera, no se avanza.',
  gates:[{t:'Vehículo apto',antes:'leer o escribir',conds:['Diagnosis correcta','Estado mecánico correcto','Tensión correcta']},{t:'Archivo apto',antes:'escribir',conds:['Identidad confirmada','Origen confirmado','Compatibilidad confirmada','Respaldo confirmado']},{t:'Resultado apto',antes:'entregar',conds:['Diagnosis final correcta','Prueba superada','Documentación completa','Objetivo verificado']}],
  foot:'<b>Si una puerta no se supera:</b> se detiene el avance, se documenta el motivo, se corrige la causa o se informa al cliente. No se compensa una comprobación fallida con experiencia o prisa. La mejor protección no es una herramienta concreta: es un proceso con puntos de decisión.'},

{type:'table', label:'7.16 Guion de la demostración completa',
  kicker:'Bloque 7 · Demostración práctica completa', title:'Guion de la demostración completa',
  head:['Tramo','Acción','Qué debe observar el grupo'],
  rows:[['1','Recepción y objetivo','Detectar información ausente.'],['2','Diagnosis e identificación','Interpretar DTC, HW y SW.'],['3','Lectura y archivo','Clasificar real, virtual o backup.'],['4','Preparación para escritura','Aplicar checklist.'],['5','Simulación de escritura','Vigilar tensión y secuencia.'],['6','Verificación','Comparar estado inicial y final.'],['7','Incidencia simulada','Decidir sin desconectar.']],
  boxes:[{h:'Cinco roles asignables',t:'Técnico de diagnosis · Responsable de alimentación · Responsable de archivos · Observador de procedimiento · Responsable de informe final.'},{h:'Cierre del ejercicio',t:'Cada grupo debe justificar por qué el vehículo, el archivo y el resultado han superado sus tres puertas de calidad.',dark:true}]},

{type:'quiz', label:'7.17 Evaluación',
  kicker:'Bloque 7 · Evaluación rápida', title:'Siete preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.', n:4,
  items:[{q:'¿Qué se hace antes de leer?',a:'Recepción, diagnosis e identificación.'},{q:'¿Cuándo se conserva el original?',a:'Inmediatamente y sin modificar.'},{q:'¿Qué valida el archivo?',a:'Identidad, origen, formato y compatibilidad.'},{q:'¿Qué controla una escritura?',a:'Tensión, conexión, secuencia y entorno.'},{q:'¿100 % significa trabajo terminado?',a:'No; falta verificar.'},{q:'¿Qué hacer ante interrupción?',a:'Mantener estado, registrar y analizar.'},{q:'¿Qué permite entregar?',a:'Diagnosis, prueba e informe correctos.'}]},

{type:'close', label:'7.18 Cierre del bloque',
  kicker:'Bloque 7 · Cierre', title:'Cinco ideas definitivas',
  ideas:['Diagnosticar antes de modificar.','Respaldar antes de arriesgar.','Validar antes de escribir.','Verificar antes de entregar.','Documentar durante todo el proceso.'],
  conc:{h:'Lo siguiente',t:'Ya disponemos de un método completo. A continuación veremos cómo se transforma una calibración, qué límites técnicos existen y por qué una modificación debe validarse, sin profundizar todavía en edición de mapas.'}}
],

/* ───────────────────────── BLOQUE 8 ───────────────────────── */
8:[
{type:'flow', label:'8.2 Qué es una calibración',
  kicker:'Bloque 8 · Concepto, sin valores ni recetas', title:'Qué es una calibración',
  lead:'Conjunto de datos y parámetros que la estrategia de control utiliza para transformar entradas y condiciones en objetivos y órdenes para los actuadores. El flujo general, sin entrar en edición:',
  items:[{t:'Archivo original',d:'Punto de partida protegido: se conserva sin cambios junto a la identificación de la unidad.'},{t:'Identificar estructuras',d:'Reconocer qué funciones, mapas y limitadores intervienen en el objetivo, con documentación y definición adecuadas.'},{t:'Modificar calibración',d:'Aplicar cambios mínimos y justificados sobre una copia de trabajo, una variable cada vez cuando sea posible.'},{t:'Validar coherencia',d:'Comprobar que objetivos, limitadores, modelos y protecciones siguen siendo coherentes entre sí.'},{t:'Archivo final',d:'Versión validada, con checksum gestionado y vinculada a la identificación, lista para el procedimiento del Bloque 7.'}],
  foot:'<b>Lo que no es:</b> un único mapa de potencia · una subida general de todos los valores · un archivo intercambiable entre versiones parecidas · una garantía de resultado porque el checksum sea correcto. La calibración define cómo decide la ECU; el programa define cómo puede decidir.'},

{type:'mapsvg', label:'8.3 Anatomía de un mapa',
  kicker:'Bloque 8 · El concepto de mapa, esquema sin valores', title:'Anatomía de un mapa',
  lead:'Representación visual de una tabla 2D. Ningún dato mostrado es real.',
  items:[{t:'Eje X',d:'Una condición de entrada, por ejemplo régimen.'},{t:'Eje Y',d:'Otra condición, por ejemplo carga o demanda.'},{t:'Valor resultante',d:'Resultado u objetivo para cada zona de la tabla.'},{t:'Unidad',d:'Significado físico o lógico de cada dato.'},{t:'Escalado',d:'Conversión entre el valor almacenado y el valor interpretable.'}],
  foot:'<b>Advertencia.</b> Una forma visual parecida no identifica un mapa. La función se demuestra mediante documentación, definición, unidades, referencias cruzadas y comportamiento.'},

{type:'match', label:'8.4 Clasificador',
  kicker:'Bloque 8 · Clasificador', title:'Mapa, curva, constante, interruptor y limitador',
  lead:'Empareja cada elemento con su descripción conceptual y ejemplo genérico.', lh:'Elemento', rh:'Descripción conceptual',
  pairs:[['Mapa','Valores que cambian según uno o varios ejes: objetivo según régimen y carga.'],['Curva','Valores relacionados con un eje: corrección según temperatura.'],['Constante','Valor único utilizado por una función: umbral o coeficiente.'],['Interruptor','Activa o selecciona una estrategia: selección de modo.'],['Limitador','Impide superar una condición definida: techo de par o presión.']], shuffle:[3,0,4,1,2],
  foot:'<b>Regla.</b> Antes de modificar un dato hay que saber qué representa, cuándo se utiliza y con qué otras funciones se relaciona.'},

{type:'chain', label:'8.5 La cadena de par',
  kicker:'Bloque 8 · La cadena de par, ejemplo didáctico sin valores reales', title:'La cadena de par, explicada por encima',
  steps:['Demanda del conductor','Limitadores y condiciones','Objetivo de par','Aire y combustible','Actuadores y control'],
  lead:'Elevar una petición no cambia el resultado si otro limitador manda. Mueve la petición y observa el objetivo resultante con un limitador ilustrativo fijado en 60.',
  side:[{h:'Relaciones típicas',items:['Demanda del pedal y condiciones de conducción','Limitadores por motor, transmisión, temperatura o protección','Modelo de par calculado o estimado','Objetivos de aire y combustible','Control de turbo, mariposa, inyección u otros actuadores']},{h:'Mensaje',t:'La potencia es el resultado de una estrategia coherente, no de un único número. Elevar varios límites sin entender el sistema puede eliminar protecciones necesarias.',dark:true}]},

{type:'rows', label:'8.6 Coherencia entre mapas',
  kicker:'Bloque 8 · Coherencia entre mapas', title:'Si se modifica → también debe comprobarse',
  lead:'Las comprobaciones están ocultas: responde primero.',
  head:['Si se modifica','También debe comprobarse'],
  rows:[['Objetivo de par','Limitadores, modelo de par y transmisión.'],['Presión de sobrealimentación','Caudal, temperatura, control y límites del turbo.'],['Cantidad de combustible','Aire disponible, combustión, temperatura y emisiones.'],['Avance de inyección','Combustión, ruido, presión y temperatura.'],['Respuesta de pedal','Control de tracción, caja y progresividad.']],
  boxes:[{h:'Coherencia no significa subir todo',t:'Los objetivos deben ser alcanzables · Los limitadores deben proteger, no solo permitir · Los modelos internos deben seguir representando el motor · Las transiciones deben ser progresivas · Las condiciones extremas necesitan márgenes.'},{h:'Regla',t:'Una calibración correcta conserva la lógica del sistema y modifica únicamente lo necesario para el objetivo acordado.',dark:true}]},

{type:'table', label:'8.7 Límites técnicos',
  kicker:'Bloque 8 · Límites técnicos del vehículo', title:'El límite lo decide el componente más comprometido',
  lead:'Motor: temperatura, presión y combustión. Transmisión: par admisible, protecciones y uso. Vehículo: refrigeración, frenos, tracción, neumáticos y chasis.',
  head:['Grupo','Preguntas del calibrador'],
  rows:[['Motor','¿Presiones, temperaturas y combustión permanecen dentro de margen?'],['Turbo y admisión','¿Caudal, velocidad, eficiencia y temperatura son aceptables?'],['Inyección','¿Caudal, presión, tiempo y capacidad son suficientes?'],['Transmisión','¿Embrague, caja y diferencial admiten el par y el uso?'],['Refrigeración','¿El sistema controla la temperatura repetidamente?'],['Vehículo','¿Frenos, neumáticos y chasis son adecuados?']],
  boxes:[{h:'Mensaje',t:'El límite no lo decide el archivo: lo decide el componente más comprometido dentro del uso real del vehículo.',dark:true}]},

{type:'cards', label:'8.8 Por qué no usamos porcentajes universales', n:4,
  kicker:'Bloque 8 · Factores que cambian una calibración', title:'Por qué no usamos porcentajes universales',
  cards:[{t:'Motor y hardware',p:'Capacidad de aire, combustible, refrigeración y resistencia.'},{t:'Versión de software',p:'Estructuras y estrategias diferentes.'},{t:'Combustible',p:'Octanaje, cetano, composición y calidad.'},{t:'Clima y altitud',p:'Densidad del aire y margen térmico.'},{t:'Transmisión',p:'Límite de par y estrategia de cambio.'},{t:'Uso',p:'Calle, carga, remolque, circuito o competición.'},{t:'Estado mecánico',p:'Desgaste, fugas, sensores y mantenimiento.'},{t:'Regla',p:'La modificación se fundamenta en objetivos medibles y límites conocidos, no en una cifra repetida para todos los vehículos.',dark:true}],
  foot:'Un aumento porcentual aplicado sin contexto ignora unidades, rangos, modelos internos, limitadores, condiciones de activación y capacidad física. El mismo porcentaje puede ser irrelevante en un mapa y excesivo en otro.'},

{type:'table', label:'8.9 Flujo de una modificación',
  kicker:'Bloque 8 · Flujo de una modificación', title:'Nueve pasos: acción → control',
  head:['Nº','Acción','Control'],
  rows:[['1','Conservar original e identificación','Trazabilidad.'],['2','Definir objetivo y estado mecánico','Viabilidad.'],['3','Abrir con definición adecuada','Versión correcta.'],['4','Localizar funciones relacionadas','Coherencia.'],['5','Aplicar cambios sobre copia','Original protegido.'],['6','Revisar diferencias','Solo cambios previstos.'],['7','Gestionar checksum','Integridad.'],['8','Escribir con el procedimiento del Bloque 7','Procedimiento seguro.'],['9','Validar con datos y prueba','Resultado demostrado.']],
  boxes:[{h:'Principio',t:'Editar es solo una fase. Sin identificación, medición y validación, un archivo modificado no constituye una calibración profesional.',dark:true}]},

{type:'rows', label:'8.10 Checksum y validación',
  kicker:'Bloque 8 · Checksum y validación, sin fórmulas ni corrección manual', title:'Checksum correcto ≠ calibración validada',
  lead:'El checksum comprueba matemáticamente determinadas zonas del archivo; el software o la herramienta puede verificarlo o corregirlo según el protocolo. Significa integridad matemática, nada más. Toca cada pregunta.',
  head:['¿Lo demuestra el checksum?','Respuesta'],
  rows:[['¿Que el mapa localizado sea el correcto?','No lo demuestra.'],['¿Que los valores sean seguros?','No lo demuestra.'],['¿Que la versión pertenezca al vehículo?','No lo demuestra.'],['¿Que el motor alcance el objetivo?','No lo demuestra.'],['¿Que no existan limitadores incoherentes?','No lo demuestra.']],
  boxes:[{h:'La validación real',t:'Diagnosis antes y después · Registros de parámetros relevantes · Control de temperaturas, presiones y correcciones · Prueba repetible y progresiva · Banco de potencia e instrumentación cuando el objetivo lo exija.'},{h:'Mensaje',t:'Checksum correcto significa integridad matemática; validación significa que el sistema funciona correctamente en la realidad.',dark:true}]},

{type:'match', label:'8.11 Riesgos de una edición sin criterio',
  kicker:'Bloque 8 · Riesgos de una edición sin criterio', title:'Empareja cada error con su posible consecuencia', lh:'Error', rh:'Posible consecuencia',
  pairs:[['Mapa mal identificado','Cambio sin efecto o función alterada.'],['Unidad o escalado incorrectos','Valor físico muy distinto al esperado.'],['Limitadores incoherentes','Oscilaciones, intervención o resultado irregular.'],['Protecciones elevadas sin necesidad','Pérdida de margen frente a una avería.'],['Modelo de par incorrecto','Gestión deficiente de motor o transmisión.'],['Archivo de otra versión','No arranque, fallo de comunicación o comportamiento incorrecto.'],['Sin validación','Problema oculto hasta condiciones exigentes.']], shuffle:[4,1,6,0,5,2,3],
  foot:'<b>Criterio profesional.</b> Cambios mínimos y justificados · Una variable cada vez · Comparación precisa con el original · Datos antes de conclusiones · Retroceder si el resultado no es coherente. Si no podemos explicar qué cambia, por qué cambia y cómo se validará, no debemos escribirlo.'},

{type:'cols', label:'8.12 Alcance de esta iniciación',
  kicker:'Bloque 8 · Alcance de esta iniciación', title:'Qué cubre este bloque y qué queda fuera',
  chain:['Este bloque: conceptos, vocabulario y criterio','Formación avanzada: direcciones, damos, drivers y mapas','Validación: banco, instrumentación y ensayo'],
  cols:[
    {h:'Con qué debemos salir',items:['Qué significa mapa, eje, valor, unidad y limitador','Que las funciones están relacionadas','Que existen límites mecánicos, térmicos y legales','Que checksum y validación no son lo mismo','Que no existen recetas universales']},
    {h:'Queda para formación avanzada',items:['Localización manual de mapas','Creación y uso de damos o drivers','Interpretación de estrategias específicas','Cálculo de objetivos y límites','Ensayo con banco e instrumentación avanzada']}
  ],
  foot:'<b>Argumento definitivo.</b> El objetivo de este bloque no es enseñar a modificar, sino enseñar a reconocer cuándo una modificación necesita conocimientos y validaciones que superan una iniciación.'},

{type:'quiz', label:'8.13 Evaluación',
  kicker:'Bloque 8 · Evaluación rápida', title:'Siete preguntas antes de cerrar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.', n:4,
  items:[{q:'¿Qué es una calibración?',a:'Datos que parametrizan la estrategia.'},{q:'¿Qué necesita un mapa?',a:'Función, ejes, valores, unidades y escalado.'},{q:'¿Un mapa actúa solo?',a:'Normalmente no; se relaciona con otros.'},{q:'¿Checksum valida potencia y seguridad?',a:'No; solo integridad definida.'},{q:'¿Por qué no usar porcentajes fijos?',a:'Ignoran estrategia, unidades y límites.'},{q:'¿Qué demuestra una validación?',a:'Resultado real mediante datos y prueba.'},{q:'¿Cuándo no se debe escribir?',a:'Cuando el cambio no puede justificarse.'}]},

{type:'close', label:'8.14 Cierre del bloque',
  kicker:'Bloque 8 · Cierre', title:'Cinco ideas definitivas',
  ideas:['La calibración es un sistema de decisiones.','Un mapa necesita contexto y unidades.','Objetivos, limitadores y protecciones deben ser coherentes.','Checksum no sustituye validación.','Modificar exige conocer el límite del conjunto.'],
  conc:{h:'Lo siguiente',t:'Ya conocemos el proceso y entendemos qué se modifica de forma conceptual. La formación continúa con la demostración práctica.'}}
],

/* ───────────────────────── BLOQUE 9 ───────────────────────── */
9:[
{type:'rows', label:'9.2 Guion general de la demostración',
  kicker:'Bloque 9 · Guion general de la demostración', title:'Cinco hitos, con su pregunta al grupo',
  chain:['Preparar puesto','Diagnosis e identificación','Lectura OBD','Bench y Boot','Archivar y verificar'],
  lead:'Antes de cada hito, el grupo anticipa el siguiente control. Toca cada fila.',
  head:['Hito','Pregunta al grupo'],
  rows:[['Preparación','¿Qué falta antes de conectar?'],['Diagnosis','¿Existe una avería (falla) que impide continuar?'],['Identificación','¿Qué demuestra que el protocolo es correcto?'],['Lectura','¿El archivo será real, virtual, parcial o backup?'],['Bench / Boot','¿Qué cambia físicamente y qué riesgo aparece?']]},

{type:'tabs', label:'9.3 El puesto de trabajo en tres zonas',
  kicker:'Bloque 9 · Preparación del puesto', title:'El puesto de trabajo en tres zonas',
  lead:'Un puesto ordenado evita más errores que una corrección posterior hecha con prisa.',
  rule:'Antes de empezar: separar la zona de vehículo y la zona de ECU abierta · retirar líquidos y objetos metálicos · evitar cables en zonas de paso · preparar Internet y alimentación del portátil · nadie conecta por iniciativa propia.',
  items:[
    {t:'Zona vehículo',img:'puesto-vehiculo', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131728_c8a63abc-0751-41cd-a470-a2d0c51f089f.png',cap:'Vehículo o ECU didáctica con estabilizador y conexión OBD',d:'Estabilizador (fuente reguladora de tensión), conexión OBD, llaves y mandos según manual. El vehículo o la ECU didáctica debe ser una unidad conocida.'},
    {t:'Zona técnica',img:'puesto-tecnica', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_16a5972c-e009-4dca-bfe2-36a22f3aaf85.png',cap:'Mesa con portátil, FLEX o KESS3, cables y multímetro',d:'Portátil alimentado con FLEX o KESS3 actualizado, cables OBD y Bench específicos, multímetro para verificaciones previstas, orden de trabajo y carpeta de archivos.'},
    {t:'Zona ECU',img:'puesto-ecu', remote:'https://d8j0ntlcm91z4.cloudfront.net/user_3HOkvdzr5JF7NIsKEGEzCqDg7mK/hf_20260915_131604_0188ce0e-13c5-47c4-836e-f06d8849063f.png',cap:'Mesa con alfombrilla ESD, útiles de fijación y ECU preparada para Bench',d:'Mesa con protección ESD y útiles de fijación. Preparación Bench y demostración Boot. Siempre separada de la zona del vehículo.'}
  ]},

{type:'table', label:'9.4 Roles y palabras de control',
  kicker:'Bloque 9 · Roles y comunicación', title:'Roles y palabras de control',
  head:['Rol','Responsabilidad'],
  rows:[['Formador / operador','Seleccionar protocolo y ejecutar acciones.'],['Control de tensión','Vigilar alimentación y avisar sin manipular.'],['Responsable de contacto','Seguir únicamente instrucciones del operador.'],['Observador','Anotar mensajes, tiempos y decisiones.'],['Alumnos','Responder preguntas y respetar la zona segura.']],
  boxes:[{h:'“Preparado”',t:'Conexiones revisadas, aún sin alimentar.'},{h:'“Contacto”',t:'Solo la persona asignada actúa.'},{h:'“Mantener”',t:'Nadie toca vehículo, ECU ni cables.'},{h:'“Finalizado”',t:'La herramienta permite continuar o desconectar.',dark:true}],
  note:'Durante una lectura o escritura habla una sola persona y actúa una sola persona.'},

{type:'table', label:'9.5 Diagnosis e identificación inicial',
  kicker:'Bloque 9 · Diagnosis e identificación inicial', title:'Acción → qué se muestra',
  head:['Acción','Qué muestra'],
  rows:[['Guardar DTC','Estado previo demostrable.'],['Comprobar tensión','Condición mínima de estabilidad.'],['Leer VIN y vehículo','Trazabilidad del trabajo.'],['Identificar ECU','Familia, HW, SW y variante.'],['Seleccionar protocolo','Correspondencia con la unidad.'],['Definir operación','Qué archivo obtendremos.']],
  boxes:[{h:'Preguntas al grupo',t:'¿Identificación equivale a backup? · ¿Qué dato revisaríais dos veces? · ¿El vehículo presenta un DTC que obliga a detenerse? · ¿Qué plan existe si la ECU deja de comunicar?'},{h:'Criterio de avance',t:'Solo se continúa cuando estado inicial, identificación y protocolo son coherentes.',dark:true}]},

{type:'flow', label:'9.6 Demostración OBD supervisada',
  kicker:'Bloque 9 · Demostración OBD', title:'Demostración OBD supervisada',
  lead:'La secuencia y las prohibiciones proceden del Bloque 5.',
  items:[{t:'Estabilizador',d:'Conectar el estabilizador antes de iniciar la operación.'},{t:'Interfaz',d:'Conectar la interfaz al puerto de diagnosis.'},{t:'Selección',d:'Seleccionar vehículo, ECU y protocolo exactos; identificar y guardar captura.'},{t:'Lectura',d:'Mostrar qué tipo de lectura ofrece la herramienta e iniciar la lectura u obtención virtual autorizada.'},{t:'Verificación',d:'Esperar la confirmación final y verificar el archivo.'}],
  foot:'<b>Durante la operación:</b> no abrir puertas ni activar consumidores · no mover el conector · observar tensión y mensajes · explicar cada cambio de contacto. <b>Pregunta clave:</b> ¿el archivo procede de la ECU o del servidor, y qué utilidad tiene como respaldo?'},

{type:'table', label:'9.7 Resultado observado',
  kicker:'Bloque 9 · Lectura real, virtual o parcial', title:'Resultado observado → explicación',
  head:['Resultado','Explicación'],
  rows:[['Identificación','Describe la ECU; no conserva memoria.'],['Lectura real','Datos obtenidos directamente de la unidad.'],['Lectura virtual','Original compatible descargado del servidor.'],['Lectura parcial','Solo una zona o memoria definida.'],['Backup','Conjunto de datos previsto por el protocolo.']],
  boxes:[{h:'Comprobaciones visibles',t:'Mensaje final de la herramienta · Nombre y cantidad de archivos · Tamaño y extensión · Carpeta de destino · Identificación asociada.'},{h:'Ejercicio rápido',t:'Dos archivos del mismo tamaño, uno virtual y otro real: explica por qué no son equivalentes como respaldo. Describe origen y alcance del archivo antes de decir para qué sirve.',dark:true}]},

{type:'check', label:'9.8 Preparación Bench sin alimentar', ordered:true,
  kicker:'Bloque 9 · Preparación Bench sin alimentar', title:'Secuencia bloqueante: la alimentación llega al final',
  lead:'Confirma cada paso en orden. La alimentación no se habilita hasta revisar todas las conexiones dos veces.',
  items:['Confirmar la referencia exacta de la ECU','Abrir el manual del protocolo','Orientar el conector igual que en el esquema','Localizar positivos, contacto, masas y comunicación','Preparar cables con la fuente desactivada','Revisar cada conexión · primera vez','Revisar cada conexión · segunda vez','Fijar la ECU y el mazo para evitar movimientos'],
  done:'Aplicar alimentación según la secuencia', pending:'Alimentación bloqueada',
  side:[{h:'Participación del alumno',items:['Señalar categorías de conexión en el manual','Verificar continuidad cuando el procedimiento lo contemple','Detectar el cable ficticio colocado en orientación incorrecta: comparando cada conexión contra el esquema del protocolo, nunca de memoria ni por parecido']},{h:'Advertencia',t:'No se utilizan pinouts memorizados ni fotografías parecidas. Cada unidad requiere su documentación exacta.',dark:true}]},

{type:'cols', label:'9.9 Demostración Boot',
  kicker:'Bloque 9 · Boot, acción exclusiva del formador', title:'Demostración Boot',
  cols:[
    {h:'Qué se muestra · siete puntos',items:['Protección ESD y apertura segura ya preparada','Diferencia entre conector, adaptador y punto en placa','Identificación visual de orientación y referencia','Colocación de sondas sin alimentación','Fijación para evitar desplazamientos','Separación entre puntos para prevenir cortocircuitos','Secuencia de retirada y cierre']},
    {h:'Qué no harán los alumnos al inicio',items:['Improvisar puntos Boot','Sujetar sondas con la mano durante una operación','Medir puntos no indicados','Alimentar una ECU abierta sin supervisión']}
  ],
  foot:'Boot se demuestra primero como disciplina física: ESD, orientación, fijación y ausencia de cortocircuitos. Este material no muestra puntos Boot concretos: la referencia exacta de la ECU y el manual vigente son obligatorios.'},

{type:'rows', label:'9.10 Cortocircuito',
  kicker:'Bloque 9 · Concepto práctico', title:'Cortocircuito: situación → riesgo → prevención',
  lead:'Las prevenciones están ocultas: responde primero.',
  head:['Situación','Riesgo','Prevención'],
  rows:[['Positivo toca masa','Corriente elevada y daño','Conectar sin tensión y aislar.'],['Puente entre pines cercanos','Señales unidas','Puntas adecuadas y fijación.'],['Sonda se desplaza en placa','Contacto con otro punto','Soporte estable; no sujetar a mano.'],['Herramienta metálica sobre la ECU','Unión accidental','Mesa limpia y zona despejada.'],['Polaridad invertida','Daño inmediato','Revisar manual y medir antes.']],
  boxes:[{h:'Señales de alerta',t:'Consumo anormal · La fuente entra en limitación · Calentamiento inesperado · Olor o ruido anormal · La ECU deja de identificar.'},{h:'Actuación correcta',t:'Si el procedimiento y la seguridad lo permiten, retirar la alimentación de forma controlada y revisar la conexión. No insistir ni “probar otra vez” sin encontrar la causa.',dark:true}]},

{type:'cols', label:'9.11 La carpeta de la demostración',
  kicker:'Bloque 9 · Organización de archivos', title:'La carpeta de la demostración',
  chain:['01_IDENTIFICACION','02_DIAGNOSIS_INICIAL','03_ORIGINALES','04_LECTURAS_Y_BACKUP','05_INFORME_FINAL'],
  chainNote:'Patrón de nombre: Fecha_Vehículo_ECU_HW-SW_Modo_Operación_Estado.bin',
  cols:[
    {h:'Qué se muestra',items:['El original protegido','La diferencia entre archivo real y virtual','La asociación entre memorias de un backup','La captura de identificación','La copia de seguridad en otra ubicación']},
    {h:'Regla',items:['No cerrar la demostración hasta que los archivos puedan identificarse sin depender de quien los creó','Esta estructura es la de la demostración; la del Bloque 6 es la de archivo general. No se fusionan.']}
  ]},

{type:'progress', label:'9.12 Error simulado al 42 %', target:42,
  kicker:'Bloque 9 · Simulación de una interrupción', title:'Error simulado al 42 %',
  lead:'La ECU permanece conectada y la tensión es estable. Inicia la simulación y decide.',
  phases:['Identificación','Borrado','Escritura','Verificación','Cierre'],
  endmsg:'<b>Error simulado en el 42 %.</b> Operación interrumpida · tensión estable · ECU conectada. El grupo decide: qué no tocar, qué dato fotografiar, qué fase y memoria anotar, qué identificación y archivos conservar, dónde consultar la recuperación, cuándo contactar con soporte.',
  side:[{h:'Respuestas incorrectas y por qué',items:['Desconectar rápidamente: se pierde el estado que permite la recuperación.','Cambiar de protocolo sin analizar: puede escribir sobre zonas equivocadas.','Probar otro archivo al azar: añade un segundo problema al primero.','Apagar la fuente para “reiniciar”: puede convertir una incidencia recuperable en una avería más grave.']},{h:'Mensaje',t:'La recuperación empieza conservando el estado y la información, no repitiendo la operación.',dark:true}]},

{type:'table', label:'9.13 Cierre y verificación de la práctica',
  kicker:'Bloque 9 · Cierre y verificación de la práctica', title:'Control final → evidencia',
  head:['Control final','Evidencia'],
  rows:[['Herramienta finalizó','Mensaje o registro guardado.'],['ECU identifica','Nueva identificación coherente.'],['DTC revisados','Informe antes y después.'],['Archivos correctos','Origen, tamaño y carpeta verificados.'],['Conexiones retiradas','Orden correcto y alimentación desactivada.'],['Puesto seguro','ECU, vehículo y útiles revisados.']],
  boxes:[{h:'Ronda final de preguntas',t:'¿En qué momento existió mayor riesgo? · ¿Qué dato permitió elegir el protocolo? · ¿Qué archivo sirve como original de trabajo? · ¿Qué faltaría para escribir con seguridad? · ¿Cómo recuperaríamos si la ECU no identifica?'},{h:'Criterio de éxito',t:'La práctica es satisfactoria si el alumno puede explicar el proceso, anticipar riesgos y organizar la información, aunque no se haya escrito ninguna ECU.',dark:true}]},

{type:'quiz', label:'9.14 Evaluación',
  kicker:'Bloque 9 · Evaluación del curso', title:'Siete preguntas para terminar', lead:'Responde primero en voz alta. Toca cada tarjeta para ver la respuesta esperada.', n:4,
  items:[{q:'¿Qué se prepara primero?',a:'Puesto, alimentación, roles y documentos.'},{q:'¿Qué precede a la lectura?',a:'Diagnosis e identificación.'},{q:'¿Bench se conecta alimentado?',a:'No; se prepara sin tensión.'},{q:'¿Quién coloca Boot al inicio?',a:'El formador.'},{q:'¿Qué evita un cortocircuito?',a:'Orientación, aislamiento y fijación.'},{q:'¿Qué hacer ante error?',a:'Mantener estado, registrar y consultar.'},{q:'¿Qué termina la práctica?',a:'Verificación, archivos e informe.'}]}
]
};
