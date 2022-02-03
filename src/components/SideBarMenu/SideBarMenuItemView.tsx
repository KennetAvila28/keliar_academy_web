import { NavLink } from "react-router-dom";
import { SideBarMenuItem } from "../../types";
import { classNames } from './../../utils/class';
import "./scss/SideBarMenuItemView.scss"
interface SideBarMenuItemViewProps {
    item: SideBarMenuItem,
    isOpen: boolean

}
export default function SideBarMenuItemView({ item, isOpen }: SideBarMenuItemViewProps){
    return <div className="SideBarMenuItemView">
        <NavLink to={item.url}>
            <div className={classNames('ItemContent', isOpen ? '' : 'Collapsed')}>
                <div className='icon'>
                    <item.icon size="32" />
                </div>
                <span className="label">{item.label}</span>
            </div>
        </NavLink>
    </div>
}