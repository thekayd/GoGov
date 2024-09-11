import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}

export { cn };
