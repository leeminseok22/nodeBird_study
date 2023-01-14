import React from 'react';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{nickname: 'zero'},{nickname: 'one'},{nickname: 'two'}];
  const followingList = [{nickname: 'zero'},{nickname: 'one'},{nickname: 'two'}];
  return (
  <>
    <AppLayout>
      <NicknameEditForm/>
      <FollowList header="following" data={followingList} />
      <FollowList header="follower" data={followerList} />
    </AppLayout>
  </>
  )
};

export default Profile;