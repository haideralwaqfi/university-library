import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";

function page() {
  return (
    <AuthForm
      type="SING_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
}

export default page;
