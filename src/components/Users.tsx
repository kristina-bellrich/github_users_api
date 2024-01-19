import {IUser} from '../data/data';

import {MdPeople} from 'react-icons/md';
import {IoMdPerson} from 'react-icons/io';
import {FC} from 'react';

interface IUserProps {
    users: IUser;
}
 const thousand = 'k';
const Users: FC<IUserProps> = ({users}) => {
    const numberOfFollowers = (followers: number | undefined) => {
        if (typeof followers === 'number' && followers > 1000) {
            return (followers / 1000).toFixed(1) + thousand;
        }
        return followers;
    };

    return (
        <div className='user'>
            <img
                className='img'
                src={users.avatar_url && users.avatar_url}
                alt='avatar'
            />
            <p className='name'>{users.name && users.name}</p>
            <p className='login'>{users.login && users.login}</p>
            <div className='flex-row'>
                <MdPeople fill='#808080' size={30}></MdPeople>
                <p>
                    {numberOfFollowers(users.followers && users.followers)}{' '}
                    follower
                </p>
                <IoMdPerson fill='#808080' size={25}></IoMdPerson>
                <p>{users.followers && users.following} followers</p>
            </div>
        </div>
    );
};
export {Users};
