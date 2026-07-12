import { useForm, SubmitHandler } from "react-hook-form";

export type ContactFormData = {
  name: string;
  division: string;
  email: string;
  phone: string;
  message: string;
};

export function useGetInTouch() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
    // TODO: Hook up to API — e.g. POST /api/contact
  };

  return { register, handleSubmit, onSubmit, errors };
}
