import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faRightFromBracket,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button/index-button';
import { Wrapper as PopperWrapper } from '~/components/Popper/index-popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu/index-menu';
import { InboxIon, MessagesIcon, UploadIcon } from '~/components/Icons/index-icon';
import Image from '~/components/Image/index-image';

const cx = className.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'languages',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languages',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'languages',
                    code: 'de',
                    title: 'German',
                },
                {
                    type: 'languages',
                    code: 'it',
                    title: 'Italian',
                },
                {
                    type: 'languages',
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    type: 'languages',
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    type: 'languages',
                    code: 'pt',
                    title: 'Portuguese',
                },
                {
                    type: 'languages',
                    code: 'ru',
                    title: 'Russian',
                },
                {
                    type: 'languages',
                    code: 'es',
                    title: 'Spanish',
                },
                {
                    type: 'languages',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyborad Shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchReslut] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchReslut([]);
        }, 3000);
    }, []);

    // handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languages':
                //handle change language
                break;
            default:
                throw new Error('Có lỗi con mẹ nó rồi!');
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@c0bra',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </div>
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and video" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Clear tim kiem */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* Loading */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                {/* // Actions */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon width="28px" height="28px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon width="28px" height="28px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIon width="34px" height="34px" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="//assets.manutd.com/AssetPicker/images/0/0/22/86/1464035/7_Mason_Mount1751376357453.webp"
                                alt="C0bra"
                                fallback={images.noImage}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
