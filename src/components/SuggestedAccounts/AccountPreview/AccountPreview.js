import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image/index-image';
import Button from '~/components/Button/index-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://images.pexels.com/photos/34274113/pexels-photo-34274113.jpeg"
                    slt="blabla"
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    Pham Thanh Hieu
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>C0bra</p>
                <div className={cx('analytics')}>
                    <p className={cx('value')}>
                        100M <span className={cx('label')}>Followers</span>
                    </p>
                    <p className={cx('value')}>
                        10B <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
