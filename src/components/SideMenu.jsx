import './SideMenu.css'
import Button from "./Button";
import {func} from "prop-types";

export default function SideMenu({func}) {
    return (
        <div className={'side-menu'}>
            <ul>
                <h3>DO NOT THINK... JUST CHOOSE</h3>
                <li><Button className={'menu-element-left'} type={'button'} value={'LEFT'} func={func}/></li>
                <li><Button className={'menu-element-right'} type={'button'} value={'RIGHT'} func={func}/></li>
                <li><Button className={'menu-element-forward'} type={'button'} value={'STRAIT'} func={func}/></li>
                <li><Button className={'menu-element-back'} type={'button'} value={'BACK'} func={func}/></li>
            </ul>
        </div>
    )
}

SideMenu.propTypes = {
    func: func.isRequired,
}
