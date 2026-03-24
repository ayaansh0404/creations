import React from "react";
import "./codeAdvanced.css";


export default function App() {
  const runCode = () => {
    const t = document.getElementById("t");
    const i = document.getElementById("i");
    i.srcdoc = t.value;
  };

  const saveFile = () => {
    const t = document.getElementById("t");
    const a = document.createElement("a");
    a.href = "data:text/html;charset=utf-8," + encodeURIComponent(t.value);
    a.download = "index.html";
    a.click();
  };

  const openFile = () => {
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("t").value = event.target.result;
      };
      reader.readAsText(file);
    };

    input.click();
  };

  return (
    <>
      <div className="toolbar p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <button onClick={runCode}>▶ RUN</button>
            </div>
            <div className="col-4">
              <button onClick={saveFile}>💾 SAVE</button>
            </div>
            <div className="col-4">
              <button onClick={openFile}>📂 OPEN</button>
            </div>
          </div>
        </div>
      </div>

      <div className="editor-container">
        <textarea id="t" placeholder="Type your HTML/CSS/JS here..."></textarea>
        <iframe id="i" title="output"></iframe>
      </div>
    </>
  );
}