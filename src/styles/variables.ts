import { css } from "@emotion/react"

export const colors = {
    "purple": "#7450AC",
    "purple-dark": "#523480",
    "purple-light": "#A881E6",

    "gray-100": "#FBF9FE",
    "gray-200": "#AFABB6",
    "gray-300": "#252529",
    "gray-400": "#17171A",
    "gray-500": "#111112",
    
    "success": "#2F723D",
    "success-light": "#4E995E",

    "pink": "#DB5BBF",
    "pink-dark": "#251622",

    "orange": "#E07B67",
    "orange-dark": "#261A17",

    "yellow": "#BB9F3A",
    "yellow-dark": "#211E12",

    "green": "#8CAD51",
    "green-dark": "#1C2015",

    "blue": "#7B94CB",
    "blue-dark": "#1A1D23"
}

export const heading = {
    lg: css`
        font-size: 1.5rem;
        font-weight: bold;
    `,

    md: css`
        font-size: .875rem;
        font-weight: bold;
    `
}

export const text = {
    button: css`
        font-size: .875rem;
        line-height: 130%;
        font-weight: 600;
    `,

    tag: css`
        font-size: .75rem;
        line-height: 130%;
        font-weight: 600;
    `,

    body: css`
        font-size: .75rem;
        line-height: 130%;
        font-weight: 400;
    `
}

