import config from '~/config/index-config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons/index-icon';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon width="24px" height="24px" />}
                    activeIcon={<FollowingActiveIcon width="24px" height="24px" />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <SuggestedAccounts label="Suggested accounts" labelSee="See all" />
                <SuggestedAccounts label="Following accounts" labelSee="See more" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
