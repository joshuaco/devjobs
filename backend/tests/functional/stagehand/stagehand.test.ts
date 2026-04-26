import { createStagehand } from './setup.ts';
import { describe, expect, afterAll, test, beforeAll } from 'vitest';

type StagehandInstance = Awaited<ReturnType<typeof createStagehand>>;
type StagehandPage = ReturnType<StagehandInstance['context']['pages']>[number];

let stagehand: StagehandInstance;
let page: StagehandPage;

describe('Job search', { timeout: 60_000 }, () => {
  beforeAll(async () => {
    stagehand = await createStagehand();
    const [initialPage] = stagehand.context.pages();

    if (!initialPage) {
      throw new Error('Stagehand did not create a browser page');
    }

    page = initialPage;
    await page.goto('http://localhost:5173');
  });

  test('shows the first job title after opening jobs page', async () => {
    await stagehand.act('Click the "Empleos" button in the navbar');

    await stagehand.act('Wait until the jobs list is visible');

    const { extraction } = await stagehand.extract(
      'Extract the visible title of the first job card. Return only the title text.'
    );

    expect(extraction).toBeDefined();
    expect(extraction).toBe('Desarrollador de Software Senior');
  });

  test('input a job query and extract the results', async () => {
    await stagehand.act("Input 'analista' into the search input");
    await stagehand.act('Click the search button');

    await stagehand.act('Wait until the jobs list is visible');

    const { extraction } = await stagehand.extract(
      'Extract the visible titles of the jobs listed in the results. Return only the title text.'
    );

    expect(extraction).toBeDefined();
    expect(extraction).toContain('Analista de Datos');
    expect(extraction).toContain('Business Intelligence Analyst');
  });

  test('shows an empty state when no jobs match the query', async () => {
    await page.goto('http://localhost:5173');
    await stagehand.act('Click the "Empleos" button in the navbar');

    await stagehand.act("Input 'zzzzzzzz' into the search input");
    await stagehand.act('Click the search button');

    await stagehand.act('Wait until the empty jobs state is visible');

    const { extraction } = await stagehand.extract(
      'Extract the visible message shown when there are no job results. Return only the message text.'
    );

    expect(extraction).toBeDefined();
    expect(extraction).toContain('No');
  });

  test('opens the first job detail page', async () => {
    await page.goto('http://localhost:5173');
    await stagehand.act('Click the "Empleos" button in the navbar');

    await stagehand.act('Wait until the jobs list is visible');
    await stagehand.act('Click the first job card in the jobs list');

    await stagehand.act('Wait until the job detail page is visible');

    const { extraction } = await stagehand.extract(
      'Extract the visible job description from the job detail page. Return only the description text.'
    );

    expect(extraction).toBeDefined();
  });
});

afterAll(async () => {
  await stagehand.close();
});
