const fs = require('fs');

// Ruta al archivo JSON
const jsonFilePath = './assets/alandalus/Alandalus-map.json';
const relativeFilePath = 'https://kiwi-prod-content.s3.eu-central-1.amazonaws.com/fbbbae80-7e86-11ea-b5ce-f1ae4d5a5c31/alandalus/';

// Leer y parsear el archivo JSON
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const timestamp = Date.now(); // Obtiene el timestamp actual
  
    // Inserción para cms_dlo_stages
    const award = jsonData.award;
    const stageSQL = `
                        INSERT INTO \`cms_dlo_stages\` 
                        (\`guid\`, \`name\`, \`background\`, \`award_guid\`, \`award_src\`, \`award_srcSuccess\`, \`award_width\`, \`award_height\`, \`award_coords\`, \`created_at\`) 
                        VALUES 
                        ('${jsonData.guid}', '${jsonData.name}', 
                        '${relativeFilePath}${jsonData.background}', 
                        '${award.guid}-${timestamp}', 
                        '${relativeFilePath}${award.src}', 
                        '${relativeFilePath}${award.srcSuccess}', 
                        '${award.width}', 
                        '${award.height}', 
                        '{"x": "${award.coords.x}","y": "${award.coords.y}"}', 
                        NOW());`;
    console.log(stageSQL);
  
    // Inserciones para cms_dlo_stage_hotspots
    jsonData.hotspots.forEach(hotspot => {
      const uniqueGuid = `${hotspot.guid}-${timestamp}`; // Añade el timestamp al guid para hacerlo único
      const hotspotSQL = `
                INSERT INTO \`cms_dlo_stage_hotspots\` 
                (\`guid\`, \`stage_guid\`, \`name\`, \`src\`, \`srcDisabled\`, \`coords\`, \`width\`, \`height\`, \`created_at\`) 
                VALUES 
                ('${uniqueGuid}', 
                '${jsonData.guid}', 
                '${hotspot.guid}', 
                '${relativeFilePath}${hotspot.src}', 
                '${relativeFilePath}${hotspot.srcDisabled}', 
                '{"x": "${hotspot.coords.x}","y": "${hotspot.coords.y}"}', 
                '${hotspot.width}', 
                '${hotspot.height}', 
                NOW());`;
      console.log(hotspotSQL);
    });
  } catch (parseError) {
    console.error('Error al parsear el JSON:', parseError);
  }
});


