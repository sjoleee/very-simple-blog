import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
