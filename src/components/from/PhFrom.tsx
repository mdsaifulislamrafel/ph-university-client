import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TDefaultConfig;

type TDefaultConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

const PhFrom = ({ onSubmit, children, defaultValues, resolver }: TFormProps) => {
  const fromConfig: TDefaultConfig = {};
  if (defaultValues) {
    fromConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    fromConfig["resolver"] = resolver;
  }

  const methods = useForm(fromConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

export default PhFrom;
