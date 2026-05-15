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


  return (
    <div className="container-fluid">
      <div className="row toolbar">
        <div>
          <button onClick={run}>▶ RUN</button>
        </div>
       
      </div>

      <div className="row">
        <textarea ref={htmlRef} className="col" placeholder="HTML" />
        <textarea ref={cssRef} className="col" placeholder="CSS" />
        <textarea ref={jsRef} className="col" placeholder="JS" />
      </div>

      <iframe ref={iframeRef} title="output" />
    </div>
  );
}