export interface DialogProps{
    title: string;
    description?: string;
    disabled ?: boolean;
    onCancel?: () => void;
    onComplete?: () => void;
    children: React.ReactNode; 
    variant? : 'light' | 'dark'
}
