import { useEffect, useState } from "react";
import "./dialog.css";

import { type DialogProps } from "./dialog-types";

export const Dialog = ({ title, description, onCancel, onComplete, disabled, children, variant }: DialogProps) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        onCancel?.();
    };

    const handleComplete = () => {
        setOpen(false);
        onComplete?.();
    };

    useEffect(() => {
        if (variant) {
            setTheme(variant);
            return;
        }

        const root = document.documentElement;
        const isDark =
            root.classList.contains("dark") ||
            root.dataset.theme === "dark" ||
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        setTheme(isDark ? "dark" : "light");
    }, [variant]);

    return (
        <>
            <span onClick={() => setOpen(!open)}>
                {children}
            </span>

            <div className={`m-dialog-overlay ${open ? "open" : ""}`}>
                <div className={`m-dialog-container ${open ? "open" : ""} ${theme === "dark" ? "m-dialog-dark" : "m-dialog-light"}`}>
                    <span
                        className="m-dialog-close"
                        onClick={() => setOpen(false)}
                    >
                        <svg viewBox="0 0 10 10" width="14" height="14" stroke={theme === "dark" ? "white" : "black"} strokeWidth="2">
                            <line x1="1" y1="1" x2="9" y2="9" />
                            <line x1="9" y1="1" x2="1" y2="9" />
                        </svg>
                    </span>

                    <div>
                        <div className="m-dialog-title">{title}</div>
                        <div className="m-desc">{description}</div>
                    </div>

                    <div className="m-dialog-actions">
                        <button
                            onClick={handleClose}
                            className={`m-btn ${theme === "dark" ? "m-btn-cancel-dark" : "m-btn-cancel-light"}`}
                        >
                            Cancel
                        </button>

                        <button
                            disabled={disabled}
                            onClick={handleComplete}
                            className={`m-btn ${theme === "dark" ? "m-btn-continue-dark" : "m-btn-continue-light"}`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
