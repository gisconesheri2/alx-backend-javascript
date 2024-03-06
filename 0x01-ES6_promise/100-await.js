import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};

  try {
    const photoResp = await uploadPhoto();
    const userResp = await createUser();

    obj.photo = photoResp;
    obj.user = userResp;
  } catch (e) {
    obj.photo = null;
    obj.user = null;
  }

  return obj;
}
