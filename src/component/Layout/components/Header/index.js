import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import Button from '~/component/Button';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images';
import AccountItem from '~/component/AccountItem';
import Menu from '~/component/Popper/Menu';
import { UploadIcon } from '~/component/icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keynoard shortcuts"
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    // Handle Login
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:

        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View Profile",
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get Coins",
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: '/logout',
            separate: true,
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="TikTok" />
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content='UpLoad Video' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>


                    </>
                ) : (

                    <>
                        <Button text> Upload </Button>
                        <Button primary> Log In </Button>

                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image className={cx('user-avatar')} alt='Tâm Bảo' src='https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg' />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;