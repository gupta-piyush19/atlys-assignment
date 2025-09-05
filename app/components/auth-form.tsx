import React, { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { Arrow } from "./icons";

interface AuthFormProps {
  type: "signin" | "signup";
  onSuccess: () => void;
  onSwitchType: (type: "signin" | "signup") => void;
}

export default function AuthForm({
  type,
  onSuccess,
  onSwitchType,
}: AuthFormProps) {
  const { signIn, signUp } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let result;
    if (type === "signin") {
      result = await signIn(formData.email, formData.password);
    } else {
      result = await signUp(formData.email, formData.password);
    }

    onSuccess();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchType = () => {
    onSwitchType(type === "signin" ? "signup" : "signin");
  };

  return (
    <div className='w-[498px] bg-gray-2 rounded-4xl p-3 mt-44'>
      <div className='form bg-white rounded-4xl pt-8 px-12 pb-12'>
        <div className='text-center mb-16'>
          <div className='w-14 h-14 bg-gray-1 rounded-full flex items-center justify-center mx-auto mb-4'>
            <Arrow size={24} />
          </div>
          <h2 className='text-xl font-bold mb-1'>
            {type === "signin"
              ? "Sign in to continue"
              : "Create an account to continue"}
          </h2>
          <p className='text-gray-3 text-sm'>
            {type === "signin"
              ? "Sign in to access all the features on this app"
              : "Create an account to access all the features on this app"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-semibold mb-2'>
              Email or username
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Enter your email or username'
              className='w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 bg-gray-4 text-gray-900  placeholder-gray-3 text-sm'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-semibold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Enter your password'
              className='w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 bg-gray-4 text-gray-900  placeholder-gray-3 text-sm'
              required
            />
          </div>

          {type === "signup" && (
            <div>
              <label
                htmlFor='repeatPassword'
                className='block text-sm font-semibold mb-2'
              >
                Repeat Password
              </label>
              <input
                type='password'
                name='repeatPassword'
                id='repeatPassword'
                value={formData.repeatPassword}
                onChange={handleInputChange}
                placeholder='Enter your password again'
                className='w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 bg-gray-4 text-gray-900  placeholder-gray-3 text-sm'
                required
              />
            </div>
          )}

          <button
            type='submit'
            className='w-full bg-brand hover:bg-brand/80 text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer'
          >
            {type === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      <div className='mt-4 mb-2 text-center flex items-center justify-center gap-2 text-sm'>
        <span className='font-medium'>
          {type === "signin"
            ? "Do not have and account?"
            : "Already have an account?"}
        </span>
        <button
          onClick={handleSwitchType}
          className='text-brand hover:text-brand/80 font-semibold cursor-pointer'
        >
          {type === "signin" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
}
