/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhFrom from "../components/from/PhFrom";

const Login = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin",
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const tostId = toast.loading("logging in");

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   disPatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged in successfully", { id: tostId, duration: 1000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   toast.error("Invalid ID or password", { id: tostId, duration: 1000 });
    // }
  };

  return (
    <PhFrom onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </PhFrom>
  );
};

export default Login;
