import Dexie from 'dexie';

export const db = new Dexie('ZServicesDB');

db.version(2).stores({
  records: '++id, serviceName, ip, url, description, tagIds, ssh1String, ssh1User, ssh1Password, ssh2String, ssh2User, ssh2Password, html1String, html1User, html1Password, html2String, html2User, html2Password, note, createdAt, modifiedAt',
  tags: '++id, name',
  config: 'id'
});

export const seedData = async () => {
  const records = [
    {
      serviceName: 'Serveur de Production',
      ip: '192.168.1.10',
      url: 'https://prod.services.local',
      description: 'Serveur principal hébergeant l\'application web en production.',
      ssh1User: 'admin',
      ssh1Password: 'password123',
      ssh2User: 'root',
      ssh2Password: 'rootpassword',
      html1User: 'webadmin',
      html1Password: 'webpass',
      html2User: 'admin',
      html2Password: 'adminpass',
      note: 'Infrastructure critique',
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      tagIds: [1]
    },
    {
      serviceName: 'Environnement de Staging',
      ip: '192.168.1.20',
      url: 'https://staging.services.local',
      description: 'Environnement de test pour les nouvelles fonctionnalités.',
      ssh1User: 'staging_user',
      ssh1Password: 'staging_pass',
      ssh2User: 'staging_user',
      ssh2Password: 'staging_pass',
      html1User: 'staging_admin',
      html1Password: 'staging_pass',
      html2User: 'staging_admin',
      html2Password: 'staging_pass',
      note: 'Environnement de test',
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      tagIds: [2]
    },
    {
      serviceName: 'Base de données de Test',
      ip: '192.168.1.30',
      url: 'db.test.local',
      description: 'Instance PostgreSQL pour les tests de charge.',
      ssh1User: 'db_user',
      ssh1Password: 'db_pass',
      ssh2User: 'db_user',
      ssh2Password: 'db_pass',
      html1User: 'db_admin',
      html1Password: 'db_pass',
      html2User: 'db_admin',
      html2Password: 'db_pass',
      note: 'Base de données',
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      tagIds: [3]
    }
  ];

  await db.records.clear();
  for (const r of records) {
    await db.records.add(r);
  }
  console.log('Base de données peuplée !');
};
