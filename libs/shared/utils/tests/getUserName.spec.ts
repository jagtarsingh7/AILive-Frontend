import { User } from '@auth0/auth0-react';
import { USER_METATDATA_KEY } from '../src/constants';
import { getUserName } from '../src/hooks/useGetUser';

describe('Get Username', () => {
  const mockUser: User = {
    name: 'abc@123.com',
    email: '123@abc.com',
    [USER_METATDATA_KEY]: {
      first_name: 'abc',
      last_name: '123',
    },
  };
  test('get user name with first last', () => {
    const name = getUserName(mockUser);
    expect(name).toEqual('abc 123');
  });
  test('get user name with first name only', () => {
    const user = { ...mockUser, [USER_METATDATA_KEY]: { first_name: 'abc' } };
    const name = getUserName(user);
    expect(name).toEqual('abc');
  });
  test('get user name with first name space', () => {
    const user = { ...mockUser, [USER_METATDATA_KEY]: { first_name: ' ' } };
    const name = getUserName(user);
    expect(name).toEqual('abc@123.com');
  });
  test('get user name with last name only', () => {
    const user = { ...mockUser, [USER_METATDATA_KEY]: { last_name: '123' } };
    const name = getUserName(user);
    expect(name).toEqual('123');
  });
  test('get user name with last name space', () => {
    const user = {
      ...mockUser,
      [USER_METATDATA_KEY]: { first_name: 'abc', last_name: ' ' },
    };
    const name = getUserName(user);
    expect(name).toEqual('abc');
  });
  test('get user name with no first last name', () => {
    const user: User = { name: 'abc@123.com', email: '123@abc.com' };
    const name = getUserName(user);
    expect(name).toEqual('abc@123.com');
  });
  test('get user name with no name', () => {
    const user: User = { email: '123@abc.com' };
    const name = getUserName(user);
    expect(name).toEqual('123@abc.com');
  });
});
