"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// interface Props<T extends FieldValues>{}

function AuthForm({ type, schema, defaultValues, onSubmit }: Props) {
  return <div>AuthForm -- {type}</div>;
}

export default AuthForm;
