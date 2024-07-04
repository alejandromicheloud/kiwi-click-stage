
# Recetario para crear nuevos Stages en Kiwi

## Kiwi Authoring Tool
```https://kiwi.oneclick.es```

## Backoffice Kiwi
```https://backoffice.kiwi.oneclick.es```

# Pasos para dar alta un nuevo stage

## 1. Crear una capeta vacía llamada `bots` y añadir dentro los archivos de los bots nuevos.

## 2. Crear una carpeta con los assets nuevos del stage, por ejemplo `alandalus`

## 3. Subir los assets nuevos a la dependencia desde Backoffice

De esta manera estarán en AWS/S3 accesibles desde url pública

URL de dependencia ```https://backoffice.kiwi.oneclick.es/content/fbbbae80-7e86-11ea-b5ce-f1ae4d5a5c31```

## 4. Insertar información en base de datos
Añadir los ficheros JSON para bot y mapa en la carpeta assets para poder ejecutar los scripts que generan sentencias SQL.
```
node 0-bot.js
```
```
node 1-stage.js
```
Insertar nuevos registros en la DB de Kiwi.

Validarlo desde el Authoring Tool