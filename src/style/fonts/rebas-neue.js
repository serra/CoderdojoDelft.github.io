
export function rebasNeue(weight = 'normal', style = 'normal') {
    return `
        @font-face {
            font-family: 'Bebas Neue W01 Regular';
            src: url('/font/rebas-neue/3d9ec9a9-76a2-4cfe-b376-76e7340c3b50.eot?#iefix');
            src: url('/font/rebas-neue/3d9ec9a9-76a2-4cfe-b376-76e7340c3b50.eot?#iefix') format('eot'), url('/font/rebas-neue/e0d6f852-5401-4bbf-9672-47a50c5c87c6.woff2') format('woff2'), url('/font/rebas-neue/7fedd582-6ae3-4850-be2f-4acae2e74fa5.woff') format('woff'), url('/font/rebas-neue/d6e08ef3-40db-4ac3-82df-f062f55a72f5.ttf') format('truetype');
            font-weight: ${weight};
            font-style: ${style};
        }`;
}
