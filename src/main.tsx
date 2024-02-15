import ReactDOM from "react-dom/client";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { App } from "./app";
import "./index.css";

SyntaxHighlighter.registerLanguage("tsx", typescript);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
