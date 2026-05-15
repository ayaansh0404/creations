import { test, expect } from '@playwright/test';
export default function CodeAdvanced() {

  const runCode = () => {
    const code = document.getElementById("c").value;
    const preview = document.getElementById("p");
    preview.srcdoc = code;
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>

     <a href="#t"><button id="i" onClick={runCode}>
        Run
      </button></a>
      <button onClick={test('test', async ({ page }) => {
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
});}>
        button tag</button>

      <textarea placeholder="type HTML/CSS/JS here"
        id="c"
        style={{ height: "100vh", width: "100vw" }}
      ></textarea>
<a href="#i"><button id="t">go to code</button></a>
      <iframe
        id="p"
        style={{ height: "100vh", width: "100vw", border: "none" }}
      ></iframe>

    </div>
  );
}