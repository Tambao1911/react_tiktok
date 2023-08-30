import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://anhgaisexy.com/wp-content/uploads/2021/05/20210423-le-phuong-anh-24-600x846.jpg" alt="Hoaa" />
            <div className={cx('info')} >
                <h4 className={cx('name')}>
                    <span>Phạm Văn Tâm</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phamvantam</span>
            </div>
        </div>
    );
}

export default AccountItem;