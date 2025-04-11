import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const register = async (credentials: any) => { 

  if (!credentials) {
    return null;
}
let professionType;
if (credentials.profession === 1) {
    professionType = "Student";
} else if (credentials.profession === 2) {
    professionType = "Lawyer";
} else if (credentials.profession === 3) {
  professionType = "History Researcher";
} else if (credentials.profession === 4) {
  professionType = credentials.differentProfession;
} else {
    professionType = "Other";
}


let motiveType;
if (credentials.motive === 1) {
    motiveType = "Professional";
} else if (credentials.motive === 2) {
    motiveType = "School";
} else if (credentials.motive === 3) {
  motiveType = "Curiosity";
} else if (credentials.motive === 4) {
  motiveType = credentials.differentMotive;
}else {
    motiveType = "Other";
}

  let result = await api.post('sign_up/', {
    email: credentials.email,
    password: credentials.password,
    name: credentials.name,
    profession: professionType,
    motive: motiveType
  });
  return result.data;
};

