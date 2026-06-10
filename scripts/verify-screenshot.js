import { chromium } from 'playwright';

async function takeScreenshot(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').split('.')[0].substring(2, 10);
  // The user asked for yymmdd.hhmm
  // new Date().toISOString() is YYYY-MM-DDTHH:mm:ss.sssZ
  // Example: 2026-06-10T10:00:00.000Z
  // We want 260610.1000
  const now = new Date();
  const year = now.getFullYear().toString().substring(2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timestampStr = `${year}${month}${day}.${hours}${minutes}`;

  const screenshotPath = `./copie-d-ecran/${timestampStr}.png`;
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to: ${screenshotPath}`);
  
  await browser.close();
}

const url = process.argv[2] || 'http://localhost:5173';
takeScreenshot(url).catch(console.error);
