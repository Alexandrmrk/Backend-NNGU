import jwt from 'jsonwebtoken';

export const createAuthToken = async (payload) => {
  try {
    const options = {
      algorithm: 'HS512',
      expiresIn: 10,
    };

    const token = await jwt.sign(payload, 'auth', options);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyAuthToken = (token) => {
  try {
    const data = jwt.verify(token, 'auth');

    return data;
  } catch (error) {
    return false;
  }
};
