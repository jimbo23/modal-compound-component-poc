import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";
import { CONFIG } from "./config";

export const App = () => (
  <div className="flex h-full w-screen flex-col items-center gap-4 overflow-x-hidden bg-slate-600 p-6 text-white">
    <h1 className="text-4xl font-bold text-slate-200">
      Hello Compound Components
    </h1>
    <table className="text-left">
      <thead className="bg-gray-700">
        <tr>
          <th className="px-6 py-3">
            <span className="rounded-md bg-stone-800 px-1 py-0.5 italic">
              Trigger
            </span>
          </th>
          <th className="px-6 py-3">
            <span className="rounded-md bg-stone-800 px-1 py-0.5 italic">
              Code Snippets
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(CONFIG).map((key) => {
          const obj = CONFIG[key as keyof typeof CONFIG];
          return (
            <tr className="bg-gray-800" key={key}>
              <th className="px-6 py-4">{obj.comp}</th>
              <td className="px-6 py-4">
                <SyntaxHighlighter
                  showLineNumbers
                  wrapLines
                  lineProps={(lineNumber) => ({
                    style: {
                      display: "block",
                      backgroundColor: (obj.lineNumbers as number[]).includes(
                        lineNumber,
                      )
                        ? "#123123"
                        : "",
                    },
                  })}
                  language="typescript"
                  style={styles}
                >
                  {obj.snippet}
                </SyntaxHighlighter>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
