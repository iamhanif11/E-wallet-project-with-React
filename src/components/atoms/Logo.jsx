import { Link } from "react-router";


/**
 * 
 * @param {Object} props
 * @param {String} props.textColor //ubah warna text
 * @param {String} props.className //kustomisasi style
 * @returns {JSX.Element}
 */
function Logo ({textColor, className = ""}){
    return(
        <Link to="/" className={`flex items-center cursor-pointer gap-2 ${className}`}>
        <img
          src="../public/money_wallet.png"
          alt="icon-logo"
          className="w-8"
        />
        <p className={`font-nunito-sans ${textColor} font-medium`}>E-Wallet</p>
      </Link>

    )
}

export default Logo