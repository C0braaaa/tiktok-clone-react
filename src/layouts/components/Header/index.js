import className from 'classnames/bind';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button/index-button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu/index-menu';
import { InboxIon, MessagesIcon, UploadIcon } from '~/components/Icons/index-icon';
import Image from '~/components/Image/index-image';
import Search from '../Search/index-search';
import { Link } from 'react-router-dom';
// routes config
import config from '~/config/index-config';

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
                    code: 'ar',
                    title: 'Arabic',
                },
                {
                    type: 'languages',
                    code: 'bn',
                    title: 'Bengali',
                },
                {
                    type: 'languages',
                    code: 'de',
                    title: 'German',
                },
                {
                    type: 'languages',
                    code: 'el',
                    title: 'Greek',
                },
                {
                    type: 'languages',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languages',
                    code: 'es',
                    title: 'Spanish',
                },
                {
                    type: 'languages',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'languages',
                    code: 'hi',
                    title: 'Hindi',
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
                    code: 'nl',
                    title: 'Dutch',
                },
                {
                    type: 'languages',
                    code: 'pl',
                    title: 'Polish',
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
                    code: 'sv',
                    title: 'Swedish',
                },
                {
                    type: 'languages',
                    code: 'th',
                    title: 'Thai',
                },
                {
                    type: 'languages',
                    code: 'tr',
                    title: 'Turkish',
                },
                {
                    type: 'languages',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'languages',
                    code: 'zh',
                    title: 'Chinese',
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
    const currentUser = true;

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
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </Link>

                {/* Search */}
                <Search />
                {/* // Actions */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video">
                                <Link to={config.routes.upload}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon width="28px" height="28px" />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon width="28px" height="28px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIon width="34px" height="34px" />
                                    <span className={cx('badge')}>36</span>
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
