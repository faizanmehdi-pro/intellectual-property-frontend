import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const signup = async (credentials: any) => {
  const { firstName, lastName, email, password, group, profession, motive } = credentials;

  // Combine first name and last name to create the 'name' field
  const name = firstName + ' ' + lastName;

  // Update the data object with the 'name' field
  let result = await api.post('sign_up/', {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    name: name,
    group: group,
    profession: profession,
    motive: motive
  });

  return result.data;
};

