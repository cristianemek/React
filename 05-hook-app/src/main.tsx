import { createRoot } from "react-dom/client";
import "./index.css";
import { Memorize } from "./06-memos/Memorize";

createRoot(document.getElementById("root")!).render(
    <Memorize />
);
