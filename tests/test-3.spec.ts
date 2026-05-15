import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ayaansh0404.github.io/creations/code/codeAdvanced.html');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).click();
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).fill('<button></button>');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Type your HTML/CSS/JS here...' }).press('ArrowLeft');
});