import React from 'react';
import { menu } from "../../../constant/Menu";
import { AllMenuItem } from "../AllMenuItem";
export const MenuLeft = () => {
    return (
        <div className="all_left">
            <div className="all_menu_search">
                <i className="amm_s_ic"></i>
                <input type="text" placeholder="Search Menu" />
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">Social</div>
                {menu.slice(0, 6).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>

            <div className="all_menu_group">
                <div className="all_menu_group_header">Entertainment</div>
                {menu.slice(6, 9).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">Shopping</div>
                {menu.slice(9, 11).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">Personal</div>
                {menu.slice(11, 15).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">Personal</div>
                {menu.slice(15, 17).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">Community Recourses</div>
                {menu.slice(17, 21).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
            <div className="all_menu_group">
                <div className="all_menu_group_header">More from Meta</div>
                {menu.slice(21, 23).map(({ icon, name, description }, index) => (
                    <AllMenuItem
                        key={index}
                        icon={icon}
                        name={name}
                        description={description}
                    />
                ))}
            </div>
        </div>
    )
}
