import { useState } from "react";
import NewUser from "./Register";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import VerifyOTP from "./VerifyOTP";
import ChangePassword from "./ChangePassword";
export interface ModalFormProps {
  handleCloseModal: any;
  loginLink: any;
}
const NewUserSignup = ({ handleCloseModal, loginLink }: ModalFormProps) => {
  const [page, setPage] = useState<any>(0);
  const [changePasswordEmail, setChangePasswordEmail] = useState<any>();
  const [userID, setUserID] = useState<any>();

  const componentList = [
    <NewUser page={page} setPage={setPage} />,
    <Login page={page} setPage={setPage} handleCloseModal={handleCloseModal} loginLink={loginLink}/>,
    <ForgetPassword
      page={page}
      setPage={setPage}
      setChangePasswordEmail={setChangePasswordEmail}
    />,
    <VerifyOTP
      page={page}
      setPage={setPage}
      changePasswordEmail={changePasswordEmail}
      setUserID={setUserID}
    />,
    <ChangePassword setPage={setPage} userID={userID} />,
  ];
  return <div>{componentList[page]}</div>;
};

export default NewUserSignup;
