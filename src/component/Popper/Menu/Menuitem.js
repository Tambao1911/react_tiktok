import Button from "~/component/Button";

import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function Menuitem({ data }) {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default Menuitem;