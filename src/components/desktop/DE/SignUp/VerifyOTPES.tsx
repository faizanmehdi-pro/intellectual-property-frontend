import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import VerificationInput from "react-verification-input";
import { FormGroup } from "reactstrap";
import { verifyOTP } from "../../../../apis/verifyOTP";
import { forgetPassword } from "../../../../apis/forgetPassword";
import "../DESetup.scss";

export interface ModalFormProps {
  page: any;
  setPage: any;
  changePasswordEmail: any;
  setUserID: any;
}

const VerifyOTPES = ({
  page,
  setPage,
  changePasswordEmail,
  setUserID,
}: ModalFormProps) => {
  const [state, setState] = useState({
    code: "",
    email: "",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation(verifyOTP, {
    onSuccess: (data) => {
      setPage(page + 1);
      setUserID(data?.user_id);
    },

    onError: (error: any) => {
      toast.error(error?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleClick = () => {
    mutate({
      code: Number(state.code),
      email: changePasswordEmail,
    });
  };

  const getCode = async () => {
    try {
      let result = await forgetPassword({ email: changePasswordEmail });
      if (result.message === "Mail sent successfully") {
        toast.success("El código ha sido reenviado con éxito");
      }
    } catch (error) {
      return error;
    }
  };

  const changeHandler = (data: any) => {
    setState((prev) => {
      return {
        ...prev,
        code: data,
      };
    });
  };

  return (
    <div className="verify-otp">
      <h3>Ingrese el código de verificación</h3>
      <FormGroup className="form-group">
        <div className="input">
          <VerificationInput
            placeholder=""
            length={6}
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
            }}
            containerProps={{
              id: "input-container",
            }}
            onChange={changeHandler}
          />
        </div>
      </FormGroup>
      <button className="verify-button" onClick={handleClick}>
        Verificar
      </button>
      <h4 onClick={getCode}>Reenviar codigo</h4>
    </div>
  );
};

export default VerifyOTPES;
