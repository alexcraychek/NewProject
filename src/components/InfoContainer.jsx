import './InfoContainer.css'
import {string} from "prop-types";

export default function Info({message}) {
    return (
        <div className={'info-container'}>
            <h1 className={'info-message'}>{message}</h1>
        </div>
    )
}

Info.propTypes = {
    message: string.isRequired,
}