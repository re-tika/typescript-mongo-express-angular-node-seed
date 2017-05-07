export interface User {
  id?: {
    key: string;
    version: string;
  };
  email: string;
  password: {
    hash: string;
    algorithm: HashingAlgorithm;
  }
}

type HashingAlgorithm = 'bcrypt'