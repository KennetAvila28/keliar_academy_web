import { useState } from "react"
import { SideBarMenuCard, SideBarMenuItem } from "../../types"
import { classNames } from './../../utils/class';
import { VscMenu } from 'react-icons/vsc'

import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";
import "./scss/SideBarMenu.scss"
interface SideBarMenuProps {
    items: Array<SideBarMenuItem>
    card: SideBarMenuCard
}
export const SideBarMenu = ({ items, card }: SideBarMenuProps) => {
    //hook to open state menu
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return <div className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
        <div className="menuButton">
            <button className="hamburguerIcon" onClick={handleClick}>
                <VscMenu />
            </button>

        </div>

        <SideBarMenuCardView card={card} isOpen={isOpen} />
        {
            items.map((item) =>
                (<SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />)
            )
        }
    </div>
}