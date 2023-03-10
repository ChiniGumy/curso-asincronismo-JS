<style>
	body {font-family: 'Fira Code', Consolas; font-size: 12px; line-height: 34px; text-align: justify;}
	h1:first-of-type {margin-top: 30px}
	h1 {margin-top: 60px}
</style>

# Que es el asincronismo?

Los lenguajes de programacion son sincronicos, esto significa que tienen que ejecutarse:

	Tarea...	(ejecuntando)
	Tarea 2...	(esperando a que termine la Tarea 1 para ejecutar)
	Tarea 3 ...	(esperando a que la Tarea 1 termine para que la Tarea 2 ejecute y termine para ejecutar)


JavaScript es sincrono y no bloqueante, con un bucle de eventos (concurrencia) implementando con un unico hilo para sus interfaces de I/O.

+ [πͺ‘] **Single-threaded:** Aun con multiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado hilo principal.

+ [π«] **Bloqueante:** Una tarea que no devuelve el control hasta que se ha completado.

+ [βοΈ] **No bloqueante:** Una tarea se devuelve inmediatamente con independencia del resultado. Si se completo, se devuelve datos, si no, un error.

+ [β] **Sicrono:** Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

+ [β±οΈ] **Asincrono:** Las tareas se pueden realizar mas tarde, de lo que hace posible que una respuesta sea procesada por diferido.

+ [π«] **Cocurrencia:** Utiliza un modelo de concurrencia basado en un "loop de eventos"

	+ [ποΈ] **EventLoop:** Bucle de eventos es un patron de diseno que espera y distribuye eventos o mensajes de un programa.<br><br>

+ [βοΈ] **Callbacks:** Una funcion que se pasa como argumento de otra funcion y que sera invocada.

	+ [π] **Promesas (ES6):** Funcion no-bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca.

	+ [βΈοΈ] **Async / Await (ES2017):** Permite estructurar una funcion asincrona sin bloqueo de manera similar a una fnucoin sincrona ordinaria.


# Event Loop

+ [π§ ] **Memory Heap:** Los objetos son asignados a un monticulo (espacio grande en memoria no organizado).

+ [π] **Call Stack (pila):** Apila de forma organizada las instrucciones de nuestro programa.

+ [π] **Task Queue:** Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya estan lsitas para pasar al *Stack (pila)*. Β‘ El stack debe estar vacio !

+ [π€] **MicroTask Queue:** Las promesas tienen otra forma de ejecutarse y una prioridad superior.

+ [π] **Web APIs:** JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. Node: fs, https.

> [π] Conclusion: **Event Loop** es la tarea asignada para mover del **Task Queue** al **Stack**. Solo si el stack esta vacio.

# XMLHTTPRequest

+ [π²] **XMLHttpRequest:** es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).

+ [πͺ] **Existen 5 estados en un llamado XMLHttpRequest:**

	+ **0** β Se ha inicializado.
	+ **1** β Loading (cargando).
	+ **2** β Se ha cargado.
	+ **3** β Procesamiento si existe alguna descarga.
	+ **4** β Completado.

+ [π«] **MΓ©todos y propiedades:**

	+ **xmlhttp.open()** β Prepara la peticiΓ³n para ser enviada tomando tres parΓ‘metros: prΓ³tocolo, url, asΓ­ncrono (true).

	+ **xmlhttp.readyState** β Retorna el estado de la peticiΓ³n.
	
	+ **xmlhttp.onreadystatechange** β Un eventHandler que es llamado cuando la propiedad readyState cambia.
	
	+ **xmlhttp.status** β Retorna el estado de la respuesta de la peticiΓ³n. (200,400,500)
	
	+ **xmlhttp.send()** β EnvΓ­a la peticiΓ³n.


+ [π¬] **CaracterΓ­sticas del protocolo http:**

	**Verbos:** Los verbos indican acciones que estΓ‘n asociadas a peticiones y recursos, es decir, sirven para la manipulaciΓ³n de recursos cliente/servidor. Los Verbos http son:

	+ **GET** β Solicita un recurso.
	
	+ **HEAD** β Solicita un recurso pero sin retornar informaciΓ³n, la estructura de esta peticiΓ³n es igual que get tanto en su headers como estatus. Es ΓΊtil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
	
	+ **POST** β Sirve para la creaciΓ³n de recursos en el servidor.
	
	+ **PUT** β Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga ΓΊtil de la peticiΓ³n.
	
	+ **PATCH** β Actualiza parcialmente un recurso.
	
	+ **DELETE** β Elimina un recurso.

+ [π­] **Los cΓ³digos de estados del servidor:**

	El cΓ³digo de estado (status codes) sirve para describir el estado de la peticiΓ³n hecha al servidor.
	
	+ **1xx** β Indican que la peticiΓ³n fue recibida por el servidor, pero estΓ‘ siendo procesada por el servidor.
	
	+ **2xx** β Indican que la peticiΓ³n fue recibida, aceptada y procesada correctamente.
	
	+ **3xx** β Indican que hay que tomar acciones adicionales para completar la solicitud.
	
	+ **4xx** β Indican errores del lado del cliente que hizo mal una solicitud.
	
	+ **5xx** β Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecuciΓ³n en el servidor.

+ [π§] **Los cΓ³digos mΓ‘s comunes a la hora de interactuar con una API son:**

	+ **200** β OK β Indica que todo estΓ‘ correcto.
	
	+ **201** β Created β Todo estΓ‘ correcto cuando se hizo una solicitud POST, el recurso se creΓ³ y se guardΓ³ correctamente.
	
	+ **204** β No Content β Indica que la solicitud se completΓ³ correctamente pero no devolviΓ³ informaciΓ³n. Este es comΓΊn cuando se hacen peticiones con el verbo DELETE.
	
	+ **400** β Bad Request β Indica que algo estΓ‘ mal en la peticiΓ³n (no encontrΓ³ algo).
	
	+ **401** β Unauthorized β Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
	
	+ **403** β Forbidden β Indica que no tenemos acceso a ese recurso aunque se estΓ© autenticado.
	
	+ **404** β Not Found β Indica que no existe el recurso que se estΓ‘ intentando acceder.
	
	+ **500** β Internal Server Error β Indica que algo fallΓ³, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.

# Promise


+ [πͺ] **Un callback** devuelve una funciΓ³n en los parΓ‘metros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de cΓ³digo y serΓ­a engorroso, por eso nacen las promesas, Γ©stas optimizan y permiten leer mejor el cΓ³digo con pocas lineas.

+ [π«±πΌβπ«²πΎ] **Las promesas son asΓ­ncronas**, por lo que el cΓ³digo continuarΓ‘ su ejecuciΓ³n normalmente y luego dirΓ‘ si la promesa se resolviΓ³ o se rechazΓ³. Por lo que varias promesas pueden llegar a entrar en ejecuciΓ³n al mismo tiempo.

+ [β] **Las promesas pueden suceder:**

	+ Ahora
	+ En el futuro
	+ Nunca


+ [π οΈ] **Para crear una promesa:**

	+ Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un ΓΊnico parΓ‘metro que es una funciΓ³n, la cuΓ‘l a su vez, recibe otros dos parΓ‘metros: resolve y reject.

		+ El parΓ‘metro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
		+ El parΓ‘metro reject, se usa en el que caso de que no funcione.