const fs = require('fs');

// Ruta al archivo JSON
const jsonFilePath = './assets/profesiones/profesiones-bot.json';
const filePath = 'https://kiwi-prod-content.s3.eu-central-1.amazonaws.com/fbbbae80-7e86-11ea-b5ce-f1ae4d5a5c31/bot/profesiones/';

// Leer y parsear el archivo JSON
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    console.log(`
        INSERT INTO cms_dlo_bots 
        (guid, type, author_guid, name, name_at, gender, is_public, avatar, avatar_path, avatar_happy, avatar_unhappy, color, created_at, updated_at) 
        VALUES 
        (UUID(), '${jsonData.type}', 'Xf22d2e0-c453-11e9-b38f-7b555c1bc2cb', '${jsonData.name}', '${jsonData.name_at}', 
        '${jsonData.gender}', 1, 
        '${filePath}${jsonData.avatar}', 
        '${jsonData.avatar_path}', 
        '${filePath}${jsonData.avatar_happy}', 
        '${filePath}${jsonData.avatar_unhappy}', 
        '${jsonData.color}', NOW(), NULL);`);
  } catch (parseError) {
    console.error('Error al parsear el JSON:', parseError);
  }
});