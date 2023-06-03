import bglogin from "../assets/bglogin.png";
import cross from "../assets/cross.png";
import vector from "../assets/Vector.png";
import petal from "../assets/petals 1.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Inputs = {
  email: string;
  password: string;
};

const Loginpage: React.FC = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    setDatas(data);
    toast.success(`login success ${data.email}`, {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      navigate("/home");
    }, 6000);
  };

  console.log("datas", JSON.stringify(datas));

  return (
    <>
      <ToastContainer />
      <div className=" flex  flex-wrap	 justify-between align-center">
        <div>
          <div className="ms-10 ">
            <img src={cross} className="relative top-10 left-10" />
            <img src={bglogin} />
            <div className="relative bottom-80 left-10 text-white ">
              <p className="font-semibold text-4xl ">100% Uptime😎 </p>
              <p className="text-[#bfbfbf] text-2xl leading-8">
                Zero Infrastructure
                <br /> Management
              </p>
             
              <div className="flex gap-2 mt-40">
                <img src={vector} />
                <span>aesthisia.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2  mt-10 h-[30rem]">
          <img src={petal} className="h-[49px] relative left-[45%]" />
          <h3 className="text-center text-2xl font-bold">
            Welcome <span className="text-[#08A593]">Back!</span>
          </h3>
          <p className="text-center text-sm text-[#667085]">
            glad to see you,again!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10 mt-10 items-center"
          >
            <input
              className="border-2 rounded ps-5 border-[1px solid #464660] w-[360px] h-[49px]"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 relative bottom-[2rem] right-[7rem]">
                Email is required
              </span>
            )}

            <input
              className="border-2 rounded ps-5 border-[1px solid #464660] w-[360px] h-[49px]"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <span className="relative cursor-pointer font-Inter bottom-9 left-20 text-[ #667085]">
              Forgot your password
            </span>
            {errors.password && (
              <span className="text-red-500 relative bottom-[6rem] right-[6rem]">
                password is required
              </span>
            )}

            <input
              type="submit"
              className="text-white bg-black text-xl shadow-lg shadow-black-500/50 cursor-pointer   w-[360px] h-[53px] rounded-xl"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
