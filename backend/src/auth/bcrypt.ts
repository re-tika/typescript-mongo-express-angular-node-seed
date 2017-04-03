import * as bcrypt from 'bcrypt'

const SALT_ROUNDS = 7;

export const doHash = (plaintextPassword: string): Promise<string> => {
  return bcrypt.hash(plaintextPassword, SALT_ROUNDS);
};

export const doCompare = (plaintextPassword, hash) => {
  return bcrypt.compare(plaintextPassword, hash);
};