import {string} from "prop-types";
import './Button.css'

export default function Button({type, className, value, func}) {
    return <input type={type} className={className} value={value} onClick={func}/>
}

Button.propTypes = {
    type: string.isRequired,
    className: string.isRequired,
    value: string.isRequired,
}