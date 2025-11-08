import { useState } from "react"
import { type DialogProps } from "./dialog-types";
export const Dialog = ({ title, description, onCancel, onComplete, disabled, children }: DialogProps) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const handleClose = () => {
        setDialogOpen(false)
        onCancel?.();
    }
    const handleComplete = () => {
        setDialogOpen(false)
        onComplete?.();
    }

    return (
        <>
            <span
                onClick={() => setDialogOpen(!dialogOpen)}>
                {children}
            </span>
            {
                    <div className={`p-5 text-white min-w-md absolute top-1/2 left-1/2 rounded-xl bg-slate-950/30 inline-block z-50 -translate-x-1/2 transition-all duration-200
                    ${dialogOpen ? 'opacity-100 scale-100 -translate-y-1/2' : 'opacity-0 scale-90 pointer-events-none -translate-y-60'}`}>
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-semibold">{title}</span>
                            <span className="text-gray-400 text-md ">{description}</span>
                        </div>
                        <div className="flex justify-end px-2 py-1 gap-2">
                            <button onClick={handleClose} className="px-2 py-1 rounded-md text-white bg-red-700 opacity-80 hover:opacity-100 cursor-pointer">Cancel</button>
                            <button disabled={disabled} onClick={handleComplete} className="bg-green-700 text-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 cursor-pointer disabled:bg-gray-700">Continue</button>
                        </div>
                    </div>
            }
        </>
    )
}