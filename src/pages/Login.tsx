/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhFrom from "../components/from/PhFrom";
import PHInput from "../components/from/PHInput";

const Login = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin",
  //   },
  // });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("logging in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      disPatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in successfully", { id: tostId, duration: 1000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Invalid ID or password", { id: tostId, duration: 1000 });
    }
  };

  const defaultValues = {
    userId: "A-0001",
    password: "admin",
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PhFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID: " />

        <PHInput type="text" name="password" label="Password: " />
        <Button htmlType="submit">Login</Button>
      </PhFrom>
    </Row>
  );
};

export default Login;
