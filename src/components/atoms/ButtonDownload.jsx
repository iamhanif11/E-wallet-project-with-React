/**
 * 
 * @param {Object} props
 * @param {string} props.icon // ganti src gambar
 * @param {string} props.text // masukkan teks
 * @param {string} props.altText // memberikan alt-text dari Image
 * @param {string} props.imgSize // edit ukuran gambar
 * @param {string} props.invertOnHover // memberikan efek inver saat hover agar terbaca
 * @param {string} props.variant // memberikan variant style button
 * @returns {JSX.Element}
 */

function ButtonDownload({icon, text, altText,imgSize, invertOnHover,variant}){
    const colorVariant= {
        primary: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700',
        secondary: 'bg-white text-blue-600 border-white hover:bg-gray-100',
        outline: 'bg-transparant border-white text-white hover:bg-white hover:text-blue-600',
        outlineBlue: 'bg-transparant border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-white',
        red: 'bg-transparant border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-white'
    }

    return (
        <button className= {`group border flex justify-center items-center gap-2 flex-1 p-2  rounded-md cursor-pointer ${colorVariant[variant]}`}>
            <img 
            src={icon} 
            alt={altText} 
            className={`${imgSize} ${invertOnHover ? "group-hover:invert" : ""}`}
            />

            <p className="font-montserrat font-light">{text}</p>
        </button>      
    )
}

export default ButtonDownload