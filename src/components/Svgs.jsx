export const LogoSvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 37 37" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})`, textAlign: "center" }}
        >
            <path
                d="M13.4221 5.30751L18.7806 16.0276C19.4632 17.3932 18.4704 19 16.9441 19H13.4221M13.4221 5.30751L11.8365 2.13535C11.0798 0.621548 8.92018 0.62155 8.1635 2.13535L1.21942 16.0276C0.536808 17.3932 1.52955 19 3.05592 19H6.57789M13.4221 5.30751L10 8.73064M6.57789 19H13.4221M6.57789 19L3.15577 15.5769M13.4221 19L6.57789 12.1538M10 8.73064L18.7264 17.4596M10 8.73064L6.57789 12.1538M1.27361 17.4596L3.15577 15.5769M3.15577 15.5769L6.57789 12.1538"
                stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style={{ width: "100%", height: "100%" }}
            />
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
            <path
                d="M12.0225 13.7136C11.7965 14.0894 11.6666 14.5295 11.6666 15C11.6666 16.3807 12.7859 17.5 14.1666 17.5C15.5473 17.5 16.6666 16.3807 16.6666 15C16.6666 13.6193 15.5473 12.5 14.1666 12.5C13.2564 12.5 12.4597 12.9865 12.0225 13.7136ZM12.0225 13.7136L7.97731 11.2864M7.97731 11.2864C8.20329 10.9106 8.33325 10.4705 8.33325 10C8.33325 9.52952 8.20329 9.0894 7.97731 8.71357M7.97731 11.2864C7.5401 12.0135 6.74348 12.5 5.83325 12.5C4.45254 12.5 3.33325 11.3807 3.33325 10C3.33325 8.61929 4.45254 7.5 5.83325 7.5C6.74348 7.5 7.5401 7.98645 7.97731 8.71357M7.97731 8.71357L12.0225 6.28643M12.0225 6.28643C12.4597 7.01355 13.2564 7.5 14.1666 7.5C15.5473 7.5 16.6666 6.38071 16.6666 5C16.6666 3.61929 15.5473 2.5 14.1666 2.5C12.7859 2.5 11.6666 3.61929 11.6666 5C11.6666 5.47048 11.7965 5.9106 12.0225 6.28643Z"
                stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const PenSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 20 20" fill="none">
            <path
                d="M16.6666 15.8333H10.4166M3.33325 13.2101V15.6667C3.33325 15.7587 3.40787 15.8333 3.49992 15.8333H5.95652C6.00073 15.8333 6.04312 15.8158 6.07438 15.7845L14.8821 6.97683C14.9472 6.91174 14.9472 6.80621 14.8821 6.74112L12.4255 4.28452C12.3604 4.21943 12.2548 4.21943 12.1898 4.28452L3.38207 13.0922C3.35081 13.1235 3.33325 13.1659 3.33325 13.2101Z"
                stroke="#79797a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const ChatSvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 37 37" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})` }}
        >
            <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21H12Z"
                stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const LibrarySvg = ({ active }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 37 37" fill="none"
            style={{ filter: `drop-shadow(0px 4px 6px ${active ? "rgba(182, 240, 156, 0.6)" : "rgba(104, 107, 110, 0.6)"})` }}
        >
            <path
                d="M19 7.5H12.6499C12.2547 7.5 11.8966 7.26727 11.7361 6.90614L10.8889 5M19 7.5V7.5C20.1046 7.5 21 8.39543 21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9.35013C9.74532 3 10.1034 3.23273 10.2639 3.59386L10.8889 5M19 7.5V6C19 5.44772 18.5523 5 18 5H10.8889"
                stroke={active ? "#B6F09C" : "#9b9c9e"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}


export const Square = () => {
    return (
        // <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 30 30" fill="none">
        //     <g filter="url(#filter0_dd_644_295)">
        //         <rect x="13.5" y="3.5" width="15" height="15" rx="3" stroke="#b6f09ccc" stroke-width="1.5" stroke-linecap="round" />
        //     </g>
        //     <defs>
        //         <filter id="filter0_dd_644_295" x="-1" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        //             <feFlood flood-opacity="0" result="BackgroundImageFix" />
        //             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        //             <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_644_295" />
        //             <feOffset dy="4" />
        //             <feGaussianBlur stdDeviation="3" />
        //             <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
        //             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_644_295" />
        //             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        //             <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_644_295" />
        //             <feOffset dy="10" />
        //             <feGaussianBlur stdDeviation="7.5" />
        //             <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0" />
        //             <feBlend mode="normal" in2="effect1_dropShadow_644_295" result="effect2_dropShadow_644_295" />
        //             <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_644_295" result="shape" />
        //         </filter>
        //     </defs>
        // </svg>

        <svg version="1.1" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" space="preserve">
            {/* <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata> */}
            <g><g><g><path fill="#b6f09ccc" d="M187,10H69c-32.6,0-59,26.4-59,59v118.1c0,32.5,26.4,58.9,59,58.9h118.1c32.5,0,58.9-26.4,58.9-59V69C246,36.4,219.6,10,187,10z M231.3,187c0,24.5-19.8,44.3-44.3,44.3H69c-24.5,0-44.3-19.8-44.3-44.3V69c0-24.5,19.8-44.3,44.3-44.3H187c24.5,0,44.3,19.8,44.3,44.3L231.3,187L231.3,187z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
        </svg>
    )
}


export const MenuSvg = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#fff" fill-rule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
        </svg>
    )
}

export const MicSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
            <path
                d="M1 8V9C1 12.3137 3.68629 15 7 15M13 8V9C13 12.3137 10.3137 15 7 15M7 15V19M7 19H11M7 19H3M7 12C5.34315 12 4 10.6569 4 9V4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4V9C10 10.6569 8.65685 12 7 12Z"
                stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const SendSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z"
                stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const LinkSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M7.22183 14.7279L12.7019 9.24784C13.3853 8.56443 14.4934 8.56443 15.1768 9.24784V9.24784C15.8602 9.93126 15.8602 11.0393 15.1768 11.7227L9.6967 17.2028C8.32986 18.5696 6.11379 18.5696 4.74695 17.2028V17.2028V17.2028C3.38012 15.836 3.38012 13.6199 4.74695 12.253L11.2877 5.71231C13.3379 3.66206 16.6621 3.66206 18.7123 5.71231V5.71231C20.7626 7.76256 20.7626 11.0867 18.7123 13.1369L12.1716 19.6777"
                stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const HomeChatSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21H12Z"
                stroke="#B6F09C" stroke-width="1.5" stroke-linecap="round"
            />
        </svg>
    )
}


export const HomeDevelopSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path
                d="M6.99985 8L3.70696 11.2929C3.31643 11.6834 3.31643 12.3166 3.70696 12.7071L6.99985 16M16.9998 8L20.2927 11.2929C20.6833 11.6834 20.6833 12.3166 20.2927 12.7071L16.9998 16M13.9998 6L9.99985 18"
                stroke="#82DBF7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}


export const HomePenSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path
                d="M13 7L4.58579 15.4142C4.21071 15.7893 4 16.298 4 16.8284V18C4 19.1046 4.89543 20 6 20H7.17157C7.70201 20 8.21071 19.7893 8.58579 19.4142L17 11M13 7L14.5858 5.41421C15.3668 4.63317 16.6332 4.63317 17.4142 5.41421L18.5858 6.58579C19.3668 7.36684 19.3668 8.63317 18.5858 9.41421L17 11M13 7L17 11"
                stroke="#BD9AF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const HomeBulbSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path
                d="M8.57143 16V17.5714C8.57143 19.465 10.1065 21 12 21V21C13.8935 21 15.4286 19.465 15.4286 17.5714V16M8.57143 16V15.3508C8.57143 14.7092 8.2476 14.1213 7.79785 13.6636C6.68829 12.5345 6 10.9617 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222C18 10.9617 17.3117 12.5345 16.2022 13.6636C15.7524 14.1213 15.4286 14.7092 15.4286 15.3508V16M8.57143 16H15.4286"
                stroke="#FFD147" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}


export const ArrowRightSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path d="M14 8L10 4M14 8L10 12M14 8L2 8"
                stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
    )
}

export const XmarkSvg = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L20 20M20 4L4 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}