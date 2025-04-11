import { useState } from "react";
import LoginES from "./LoginES";
import NewUserES from "./RegisterES";
import ForgetPasswordES from "./ForgetPasswordES";
import VerifyOTPES from "./VerifyOTPES";
import ChangePasswordES from "./ChangePasswordES";
export interface ModalFormProps {
  handleCloseModal: any;
  loginLink: any;
}
const NewUserSignupES = ({ handleCloseModal, loginLink }: ModalFormProps) => {
  const [page, setPage] = useState<any>(0);
  const [changePasswordEmail, setChangePasswordEmail] = useState<any>();
  const [userID, setUserID] = useState<any>();

  const componentList = [
    <NewUserES page={page} setPage={setPage} />,
    <LoginES page={page} setPage={setPage} handleCloseModal={handleCloseModal} loginLink={loginLink}/>,
    <ForgetPasswordES
      page={page}
      setPage={setPage}
      setChangePasswordEmail={setChangePasswordEmail}
    />,
    <VerifyOTPES
      page={page}
      setPage={setPage}
      changePasswordEmail={changePasswordEmail}
      setUserID={setUserID}
    />,
    <ChangePasswordES setPage={setPage} userID={userID} />,
  ];
  return <div>{componentList[page]}</div>;
};

export default NewUserSignupES;
