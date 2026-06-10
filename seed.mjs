import { db, seedData } from './src/db.js';

seedData().then(() => {
  console.log('Seeding complete');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
