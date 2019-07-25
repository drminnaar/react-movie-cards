import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Common/Dropdown/Dropdown';
import { Icon } from '../Common/Icon/Icon';

const menuItems = [
    {
        id: 3,
        value: <Icon iconImg="/images/icons/threePerRow.svg" />
    },
    {
        id: 2,
        value: <Icon iconImg="/images/icons/twoPerRow.svg" />
    },
    {
        id: 1,
        value: <Icon iconImg="/images/icons/onePerRow.svg" />
    },
];

export const SwitchLayout = ({ onChangeHandler }) => (
    <div className="switch-layout">
        <Dropdown
            title='Switch Layout'
            onChange={onChangeHandler}
            menuItems={menuItems}
        />
    </div>
);

SwitchLayout.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
};
