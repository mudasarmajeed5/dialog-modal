export interface DialogProps{
    title: string;
    description?: string;
    onCancel?: () => void;
    onComplete?: () => void | Promise<void>;
    children: React.ReactNode; 
    variant? : 'light' | 'dark';
}
