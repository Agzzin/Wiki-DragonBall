import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./routes/Routes";
import { ContextWikiProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ContextWikiProvider>
            <AppRoutes />
        </ContextWikiProvider>
    </StrictMode>
 
);
