import { Stagehand } from '@browserbasehq/stagehand';
process.loadEnvFile('.env.local');

export async function createStagehand() {
  const stagehand = new Stagehand({
    env: 'LOCAL',
    model: {
      modelName: 'google/gemini-3.1-flash-lite-preview',
      apiKey: process.env.GEMINI_API_KEY,
    },
    localBrowserLaunchOptions: {
      executablePath: '/usr/bin/google-chrome',
      headless: false,
      args: ['--incognito', '--user-data-dir=/home/josuee/.config/chrome-profile'],
      preserveUserDataDir: false,
    },
  });

  await stagehand.init();
  return stagehand;
}
