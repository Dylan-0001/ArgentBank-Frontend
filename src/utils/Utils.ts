import { isTokenValid } from "./TokenUtils";

export const isEmpty = (value: { trim?: any; } | null | undefined)=>{
    return(
        value === undefined || value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
};

export function hasValidToken() {
    const token = localStorage.getItem("token");
    return !!token && isTokenValid(token);
}