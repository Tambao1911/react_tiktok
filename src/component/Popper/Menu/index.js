import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/component/Popper'
import styles from './Menu.module.scss';
import Menuitem from "./Menuitem";

const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => (
            <Menuitem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-proper')}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
