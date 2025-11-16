import { useEffect, useState } from "react"
import { type DialogProps } from "./dialog-types";

export const Dialog = ({ title, description, onCancel, onComplete, disabled, children, variant }: DialogProps) => {

    const [theme, setTheme] = useState<"light" | "dark">('light');
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleClose = () => {
        setDialogOpen(false)
        onCancel?.();
    }
    const handleComplete = () => {
        setDialogOpen(false)
        onComplete?.();
    }
    const styles = theme === "dark" ? {
        bg: "linear-gradient(145deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
        text: "white",
        description: "#929292",
    } :
        {
            bg: "white",
            text: "#171717",
            description: "#929292",
        }
    const buttleSaveStyle = theme === 'dark' ? "bg-white text-black" : "bg-black text-white"
    const buttonCancelStyle = theme === "dark" ? 'text-white border' : 'text-black border'
    useEffect(() => {
        if (variant) {
            setTheme(variant);
            return;
        }
        const root = document.documentElement;
        const isDark = root.classList.contains("dark") || root.dataset.theme == "dark" || window.matchMedia("(prefer-color-scheme:dark)").matches;
        setTheme(isDark ? "dark" : "light")
    }, [variant])

    return (
        <>
            <span
                onClick={() => setDialogOpen(!dialogOpen)}>
                {children}
            </span>
            {
                <div style={{ background: styles.bg }} className={`p-5 min-w-md absolute top-1/2 left-1/2 rounded-xl inline-block z-50 -translate-x-1/2 transition-all duration-200
                    ${dialogOpen ? 'opacity-100 scale-100 -translate-y-1/2' : 'opacity-0 scale-90 pointer-events-none -translate-y-60'}`}>
                    <div className="flex flex-col gap-2">
                        <span onClick={() => setDialogOpen(false)} className="absolute right-3 top-3">
                            <svg viewBox="0 0 10 10" width="0.75em" height="0.75em" stroke={`${theme == 'dark' ? 'white' : 'black'}`} stroke-width="2">
                                <line x1="1" y1="1" x2="9" y2="9" />
                                <line x1="9" y1="1" x2="1" y2="9" />
                            </svg>
                        </span>
                        <span style={{ color: styles.text }} className="text-xl font-semibold">{title}</span>
                        <span style={{ color: styles.description }} className="text-sm mb-3">{description}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button onClick={handleClose} className={`px-3 py-1 rounded-md cursor-pointer ${buttonCancelStyle}`}>Cancel</button>
                        <button disabled={disabled} onClick={handleComplete} className={`px-3 py-1 rounded-md cursor-pointer ${buttleSaveStyle} text-sm outline opacity-80 disabled:bg-gray-700 transition-all`}>Continue</button>
                    </div>
                </div>
            }
        </>
    )
}