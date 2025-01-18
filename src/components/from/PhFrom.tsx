import { useForm } from "react-hook-form";

const PhFrom = ({ onsubmit, children }) => {
  const { handleSubmit } = useForm();
  return <form onSubmit={handleSubmit(onsubmit)}>
    {children}
  </form>;
};

export default PhFrom;
