import React, { useRef } from "react";
import "./codeBeginner.css";

export default function CodeBeginner() {
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();
  const iframeRef = useRef();

  const run = () => {
    const html = htmlRef.current.value;
    const css = `<style>${cssRef.current.value}</style>`;
    const js = `<script>${jsRef.current.value}<\/script>`;

    iframeRef.current.srcdoc = html + css + js;
  };

  const saveFile = () => {
    const html = htmlRef.current.value;
    const css = `<style>${cssRef.current.value}</style>`;
    const js = `<script>${jsRef.current.value}<\/script>`;

    const a = document.createElement("a");
    a.href =
      "data:text/html;charset=utf-8," +
      encodeURIComponent(html + css + js);
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
        htmlRef.current.value = event.target.result;
      };

      reader.readAsText(file);
    };

    input.click();
  };

  return (
    <div className="container-fluid bbl">

      <div className="row toolbar">
        <div className="col-4">
          <button onClick={run}>▶ RUN</button>
        </div>

        <div className="col-4">
          <button onClick={saveFile}>💾 SAVE</button>
        </div>

        <div className="col-4">
          <button onClick={openFile}>📂 OPEN</button>
        </div>
      </div>

      <div className="row">
        <textarea ref={htmlRef} className="col" placeholder="html" />
        <textarea ref={cssRef} className="col" placeholder="css" />
        <textarea ref={jsRef} className="col" placeholder="javascript" />
      </div>

      <div className="row">
        <iframe ref={iframeRef} title="output" />
      </div>

    </div>
  );
}