import React from 'react';
import Account from './Account';

const AccountList = () => {
  const accounts = [
    {
      id: 1,
      name: 'Account 1',
      image: 'path/to/image1.jpg',
      comments: ['Great account!', 'Lots of items.'],
    },
    {
      id: 2,
      name: 'Account 2',
      image: 'path/to/image2.jpg',
      comments: ['High level and rare items.'],
    },
    // Add more accounts as needed
  ];

  return (
    <div>
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
