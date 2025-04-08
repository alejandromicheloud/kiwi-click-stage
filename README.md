
# Recetario para crear nuevos Stages en Kiwi

## Kiwi Authoring Tool
```https://kiwi.oneclick.es```

## Backoffice Kiwi
```https://backoffice.kiwi.oneclick.es```

# Pasos para dar alta un nuevo stage, mapa de ejemplo: alandalus

### 0. Crear una carpeta nueva en assets/alandalus

### 1. Crear una capeta vacía llamada assets/`alandalus-bots-images` y añadir dentro los archivos de los bots nuevos.

### 2. Crear una carpeta con los assets nuevos del stage assets/`alandalus-map-images`

### 3. Subir los assets nuevos a la dependencia desde Backoffice

De esta manera estarán en AWS/S3 accesibles desde url pública

URL de dependencia ```https://backoffice.kiwi.oneclick.es/content/fbbbae80-7e86-11ea-b5ce-f1ae4d5a5c31```

- Los bots se deben subir en ./bot/`ninia/ninia-*.png`
- El mapa se debe subir en ./stages/`alandalus/alandalus_bg.png`
- Los hotspots se deben subir en ./stages/`alandalus/hotspots/zone*.png`

### 4. Insertar información en base de datos
Añadir los ficheros JSON para bot y mapa en la carpeta assets para poder ejecutar los scripts que generan sentencias SQL.
```
node 0-bot.js
```
```
node 1-stage.js
```
Insertar nuevos registros en la DB de Kiwi.


## Validación
Para validarlo es necesario acceder a Authoring Tool y crear un DLO de tipo `Learning map` con el nuevo stage.
Se pueden añadir actividades y previsualizar.

### Authoring tool
- `https://kiwi.oneclick.es/`