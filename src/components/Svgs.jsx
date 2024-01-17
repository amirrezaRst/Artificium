export const LogoSvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%" viewBox="0 0 37 37" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})` }}
        >
            <g filter="url(#filter0_dd_622_164)">
                <path d="M23.8518 7.08959L28.3171 16.023C28.886 17.161 28.0587 18.5 26.7867 18.5H23.8518M23.8518 7.08959L22.5304 4.44613C21.8999 3.18462 20.1001 3.18462 19.4696 4.44613L13.6828 16.023C13.114 17.161 13.9413 18.5 15.2133 18.5H18.1482M23.8518 7.08959L21 9.9422M18.1482 18.5H23.8518M18.1482 18.5L15.2965 15.6474M23.8518 18.5L18.1482 12.7948M21 9.9422L28.272 17.2163M21 9.9422L18.1482 12.7948M13.728 17.2163L15.2965 15.6474M15.2965 15.6474L18.1482 12.7948"
                    stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter id="filter0_dd_622_164" x="-1" y="-1" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_622_164" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_622_164" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_622_164" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_622_164" result="effect2_dropShadow_622_164" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_622_164" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export const SearchSvg = () => {
    return (
        <svg fill="#686B6E" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4" space="preserve">
            <g>
                <g>
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"/>
                </g>
            </g>
        </svg>
    )
}

export const WalletSvg = () => {
    return (
        <svg fill="none" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z" stroke="#686B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const CirclePlusSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
            <path d="M10 6.66667V10M10 10V13.3333M10 10H13.3333M10 10H6.66667M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#363A3D" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export const GearSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.90136 6.7469C5.96492 6.20624 4.76749 6.52709 4.22684 7.46353L4.1851 7.53583C3.64424 8.47263 3.96521 9.67051 4.902 10.2114L5.1448 10.3515C5.71742 10.6821 6 11.3388 6 12C6 12.6612 5.71742 13.3179 5.1448 13.6485L4.902 13.7886C3.96521 14.3295 3.64424 15.5274 4.1851 16.4642L4.22684 16.5365C4.7675 17.4729 5.96492 17.7938 6.90136 17.2531L7.14546 17.1122C7.71803 16.7816 8.42331 16.863 8.9953 17.1946C9.56711 17.526 10 18.1005 10 18.7614V19.0427C10 20.1237 10.8763 21 11.9573 21H12.0427C13.1237 21 14 20.1237 14 19.0427V18.7614C14 18.1005 14.4329 17.5261 15.0047 17.1946C15.5767 16.863 16.282 16.7816 16.8545 17.1122L17.0986 17.2531C18.0351 17.7938 19.2325 17.4729 19.7732 16.5365L19.8149 16.4642C20.3558 15.5274 20.0348 14.3295 19.098 13.7886L18.8552 13.6485C18.2826 13.3179 18 12.6612 18 12C18 11.3388 18.2826 10.6821 18.8552 10.3515L19.098 10.2114C20.0348 9.6705 20.3558 8.47262 19.8149 7.53581L19.7732 7.46353C19.2325 6.52709 18.0351 6.20623 17.0986 6.74689L16.8545 6.88783C16.282 7.2184 15.5767 7.13699 15.0047 6.80541C14.4329 6.47395 14 5.89952 14 5.23859V4.95728C14 3.8763 13.1237 3 12.0427 3L11.9573 3C10.8763 3 10 3.8763 10 4.95727V5.23858C10 5.89952 9.56711 6.47395 8.9953 6.80542C8.42331 7.13699 7.71803 7.2184 7.14546 6.88783L6.90136 6.7469Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const ShareSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" className="inline" viewBox="0 0 20 20" fill="none">
            <path d="M12.0225 13.7136C11.7965 14.0894 11.6666 14.5295 11.6666 15C11.6666 16.3807 12.7859 17.5 14.1666 17.5C15.5473 17.5 16.6666 16.3807 16.6666 15C16.6666 13.6193 15.5473 12.5 14.1666 12.5C13.2564 12.5 12.4597 12.9865 12.0225 13.7136ZM12.0225 13.7136L7.97731 11.2864M7.97731 11.2864C8.20329 10.9106 8.33325 10.4705 8.33325 10C8.33325 9.52952 8.20329 9.0894 7.97731 8.71357M7.97731 11.2864C7.5401 12.0135 6.74348 12.5 5.83325 12.5C4.45254 12.5 3.33325 11.3807 3.33325 10C3.33325 8.61929 4.45254 7.5 5.83325 7.5C6.74348 7.5 7.5401 7.98645 7.97731 8.71357M7.97731 8.71357L12.0225 6.28643M12.0225 6.28643C12.4597 7.01355 13.2564 7.5 14.1666 7.5C15.5473 7.5 16.6666 6.38071 16.6666 5C16.6666 3.61929 15.5473 2.5 14.1666 2.5C12.7859 2.5 11.6666 3.61929 11.6666 5C11.6666 5.47048 11.7965 5.9106 12.0225 6.28643Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const PenSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20" fill="none">
            <path d="M16.6666 15.8333H10.4166M3.33325 13.2101V15.6667C3.33325 15.7587 3.40787 15.8333 3.49992 15.8333H5.95652C6.00073 15.8333 6.04312 15.8158 6.07438 15.7845L14.8821 6.97683C14.9472 6.91174 14.9472 6.80621 14.8821 6.74112L12.4255 4.28452C12.3604 4.21943 12.2548 4.21943 12.1898 4.28452L3.38207 13.0922C3.35081 13.1235 3.33325 13.1659 3.33325 13.2101Z" stroke="#CDCECF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const ChatSvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%" viewBox="0 0 38 38" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})` }}
        >
            <g filter="url(#filter0_dd_622_169)">
                <path d="M21 18.5C25.1421 18.5 28.5 15.1421 28.5 11C28.5 6.85786 25.1421 3.5 21 3.5C16.8579 3.5 13.5 6.85786 13.5 11V18.5H21Z"
                    stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter id="filter0_dd_622_169" x="-1" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_622_169" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.419608 0 0 0 0 0.431373 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_622_169" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_622_169" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.419608 0 0 0 0 0.431373 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_622_169" result="effect2_dropShadow_622_169" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_622_169" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export const LibrarySvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})` }}
        >
            <g filter="url(#filter0_dd_622_172)">
                <path d="M26.8333 7.25H21.6499C21.2547 7.25 20.8966 7.01727 20.7361 6.65614L20.0741 5.16667M26.8333 7.25V7.25C27.7538 7.25 28.5 7.99619 28.5 8.91667V16.5C28.5 17.6046 27.6046 18.5 26.5 18.5H15.5C14.3954 18.5 13.5 17.6046 13.5 16.5V5.5C13.5 4.39543 14.3954 3.5 15.5 3.5H18.6835C19.0786 3.5 19.4368 3.73273 19.5973 4.09386L20.0741 5.16667M26.8333 7.25V6.16667C26.8333 5.61438 26.3856 5.16667 25.8333 5.16667H20.0741"
                    stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter id="filter0_dd_622_172" x="-1" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_622_172" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.419608 0 0 0 0 0.431373 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_622_172" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_622_172" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.419608 0 0 0 0 0.431373 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_622_172" result="effect2_dropShadow_622_172" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_622_172" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}


export const Square = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30 30" fill="none">
            <g filter="url(#filter0_dd_644_295)">
                <rect x="13.5" y="3.5" width="15" height="15" rx="3" stroke="#b6f09ccc" stroke-width="1.5" stroke-linecap="round" />
            </g>
            <defs>
                <filter id="filter0_dd_644_295" x="-1" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_644_295" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_644_295" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_644_295" />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_644_295" result="effect2_dropShadow_644_295" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_644_295" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}