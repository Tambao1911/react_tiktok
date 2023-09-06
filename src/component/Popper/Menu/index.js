import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from '~/component/Popper'
import styles from './Menu.module.scss';
import Header from "./Header";
import Menuitem from "./Menuitem";
import { useState } from "react";

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <Menuitem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />

        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-proper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
