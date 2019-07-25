import React from 'react';
import PropTypes from 'prop-types';

export class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            isMenuVisible: false,
            selectedItem: '',
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
        this.clickOutsideHandler = this.clickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.clickOutsideHandler, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.clickOutsideHandler, true);
    }

    clickOutsideHandler(e) {
        if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
            this.closeMenu();
        }
    }

    closeMenu() {
        this.setState({
            isMenuVisible: false,
        });
    }

    toggleMenu() {
        this.setState(prevState => {
            this.setState({
                isMenuVisible: !prevState.isMenuVisible,
            });
        });
    }

    onSelectMenuItem(item) {
        const { onChange } = this.props;

        this.setState({
            selectedItem: item.id,
        });
        this.closeMenu();

        if (typeof onChange === 'function') {
            this.props.onChange(item);
        }
    }

    isMenuItemSelected(itemId) {
        return itemId === this.state.selectedItem;
    }

    showMenu() {
        const { menuItems } = this.props;

        return (
            <div className="dropdown-menu">
                {menuItems.map(item => (
                    <a
                        key={item.id}
                        onClick={() => this.onSelectMenuItem(item)}
                        className={`dropdown-item ${this.isMenuItemSelected(item.id) && 'dropdown-item-selected'}`}
                        aria-selected={this.isMenuItemSelected(item.id)}
                    >
                        {item.value}
                    </a>
                ))}
            </div>
        );
    }

    render() {
        const { isMenuVisible } = this.state;
        const { title } = this.props;

        return (
            <div className="dropdown" ref={node => this.dropdownRef = node}>
                <a
                    onClick={this.toggleMenu}
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {title}
                </a>
                {isMenuVisible && this.showMenu()}
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};
