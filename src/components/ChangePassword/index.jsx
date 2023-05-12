import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Icons
import {
  HiOutlineKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "../../assets/icons/ReactIcon";
//Utils
import { validate } from "../../utils/validate";
import { notify } from "../../utils/toastify";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  //Styles
  const inputStyle =
    " border border-[#aaa8a8]  w-full py-2 px-4 placeholder:text-sm placeholder:text-[#777373]";
  const iconStyle =
    "w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-4";
  const labelStyle = "flex mb-4 text-[#3B3B3B]";
  const centerStyle = "absolute inset-y-0 end-0 grid w-10 place-content-center";

  const navigate = useNavigate();
  const [oldPass, setOldPass] = useState(false);
  const [pass, setPass] = useState(false);
  const [rePass, setRePass] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focuseHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You Changed Password Successfully", "success");
      navigate("/profile/course");
    } else {
      notify("Please try again", "error");
      setTouched({
        oldPassword: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  const oldPassVisi = () => {
    setOldPass(!oldPass);
  };
  const PassVisi = () => {
    setPass(!pass);
  };
  const RePassVisi = () => {
    setRePass(!rePass);
  };
  return (
    <div className="w-full px-0 md:px-10">
      <div className="w-full flex items-center justify-center">
        <HiOutlineKey size={26} />
        <span className="text-xl ml-2">Change Password</span>
      </div>
      <div className="mt-10 md:mt-24">
        <form className="grid gap-10" onSubmit={submitHandler}>
          <div>
            <label htmlFor="OldPassword" className={labelStyle}>
              Old Password
            </label>
            <div className="relative">
              <input
                type={!oldPass ? "password" : "text"}
                id="OldPassword"
                name="oldPassword"
                className={
                  (errors.oldPassword && touched.oldPassword
                    ? "border-red-500"
                    : "") + inputStyle
                }
                onChange={changeHandler}
                onFocus={focuseHandler}
              />

              <span className={centerStyle}>
                <button
                  onClick={oldPassVisi}
                  type="button"
                  className="rounded-full bg-transparent"
                >
                  {oldPass ? (
                    <AiOutlineEyeInvisible className={iconStyle} />
                  ) : (
                    <AiOutlineEye className={iconStyle} />
                  )}
                </button>
              </span>
            </div>
            {errors.oldPassword && touched.oldPassword && (
              <span className="text-red-500 text-sm mt-4 flex">
                {errors.oldPassword}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="NewPassword" className={labelStyle}>
              New Password
            </label>
            <div className="relative">
              <input
                type={!pass ? "password" : "text"}
                id="NewPassword"
                name="password"
                className={
                  (errors.password && touched.password
                    ? "border-red-500"
                    : "") + inputStyle
                }
                onChange={changeHandler}
                onFocus={focuseHandler}
              />

              <span className={centerStyle}>
                <button
                  onClick={PassVisi}
                  type="button"
                  className="rounded-full bg-transparent"
                >
                  {pass ? (
                    <AiOutlineEyeInvisible className={iconStyle} />
                  ) : (
                    <AiOutlineEye className={iconStyle} />
                  )}
                </button>
              </span>
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500 text-sm mt-4 flex">
                {errors.password}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="Reapet" className={labelStyle}>
              Reapet New Password
            </label>
            <div className="relative">
              <input
                type={!rePass ? "password" : "text"}
                id="Reapet"
                name="confirmPassword"
                className={
                  (errors.confirmPassword && touched.confirmPassword
                    ? "border-red-500"
                    : "") + inputStyle
                }
                onChange={changeHandler}
                onFocus={focuseHandler}
              />

              <span className={centerStyle}>
                <button
                  onClick={RePassVisi}
                  type="button"
                  className="rounded-full bg-transparent"
                >
                  {rePass ? (
                    <AiOutlineEyeInvisible className={iconStyle} />
                  ) : (
                    <AiOutlineEye className={iconStyle} />
                  )}
                </button>
              </span>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-red-500 text-sm mt-4 flex">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="gap-15 bg-secondary text-white py-3 px-8 w-fit"
          >
            Save Change
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ChangePassword;
