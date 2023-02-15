<style>
	body {font-family: 'Fira Code', Consolas; font-size: 12px; line-height: 34px;}
	h1 {margin-top: 20px}
</style>

# Que es el asincronismo?

Los lenguajes de programacion son sincronicos, esto significa que tienen que ejecutarse:

	Tarea...	(ejecuntando)
	Tarea 2...	(esperando a que termine la Tarea 1 para ejecutar)
	Tarea 3 ...	(esperando a que la Tarea 1 termine para que la Tarea 2 ejecute y termine para ejecutar)


JavaScript es sincrono y no bloqueante, con un bucle de eventos (concurrencia) implementando con un unico hilo para sus interfaces de I/O.

+ [🪡] **Single-threaded:** Aun con multiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado hilo principal.

+ [🚫] **Bloqueante:** Una tarea que no devuelve el control hasta que se ha completado.

+ [✔️] **No bloqueante:** Una tarea se devuelve inmediatamente con independencia del resultado. Si se completo, se devuelve datos, si no, un error.

+ [⌛] **Sicrono:** Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

+ [⏱️] **Asincrono:** Las tareas se pueden realizar mas tarde, de lo que hace posible que una respuesta sea procesada por diferido.

+ [🫂] **Cocurrencia:** Utiliza un modelo de concurrencia basado en un "loop de eventos"

	+ [🔄️] **EventLoop:** Bucle de eventos es un patron de diseno que espera y distribuye eventos o mensajes de un programa.<br><br>

+ [☎️] **Callbacks:** Una funcion que se pasa como argumento de otra funcion y que sera invocada.

	+ [🙋] **Promesas (ES6):** Funcion no-bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca.

	+ [⏸️] **Async / Await (ES2017):** Permite estructurar una funcion asincrona sin bloqueo de manera similar a una fnucoin sincrona ordinaria.


# Event Loop

+ [🧠] **Memory Heap:** Los objetos son asignados a un monticulo (espacio grande en memoria no organizado).

+ [🔋] **Call Stack (pila):** Apila de forma organizada las instrucciones de nuestro programa.

+ [📋] **Task Queue:** Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya estan lsitas para pasar al *Stack (pila)*. ¡ El stack debe estar vacio !

+ [🤏] **MicroTask Queue:** Las promesas tienen otra forma de ejecutarse y una prioridad superior.

+ [🔎] **Web APIs:** JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. Node: fs, https.

> [📌] Conclusion: **Event Loop** es la tarea asignada para mover del **Task Queue** al **Stack**. Solo si el stack esta vacio.