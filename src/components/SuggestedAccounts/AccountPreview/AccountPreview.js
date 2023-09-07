import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from "~/components/Button/Button";
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5684c84be59a00ab582b72e84fa9442f.jpeg?x-expires=1694268000&x-signature=Pib%2FpIVCDTUIKY%2FjnaKryvFIkmM%3D' alt='' />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>pmvantam</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phạm Văn Tâm</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('lable')}>Follwers</span>
                    <strong className={cx('value')}>803.5M </strong>
                    <span className={cx('lable')}>Likes</span>

                </p>
            </div>
        </div>
    );
}

export default AccountPreview;