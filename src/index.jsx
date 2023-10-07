import { createRoot } from "react-dom/client"
import App from './App';
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme.js"

const root = createRoot(document.getElementById("root"))
root.render(
        <App />
)
