import React from 'react';
import Link from 'next/link';
import InputField from '../inputField/inputField';
import ButtonCustom from '../Button/ButtonCustom'; // Asegúrate de importar ButtonCustom correctamente con la letra "B" en mayúscula

export default function SignupForm({
  firstname,
  lastname,
  email,
  password,
  height,
  weight,
  targetWeight,
  handleFirstname,
  handleLastname,
  handleEmail,
  handlePassword,
  handleHeight,
  handleWeight,
  handleTargetWeight,
  handleClick,
}) {
  return (
    <form className="flex flex-col justify-center items-center gap-3 p-4">
      <p className="md:text-5xl text-center">Signup</p>
      <InputField
        label="First name"
        type="text"
        id="firstname"
        placeholder="John"
        value={firstname}
        onChange={handleFirstname}
      />
      <InputField
        label="Last name"
        type="text"
        id="lastname"
        placeholder="Doe"
        value={lastname}
        onChange={handleLastname}
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        placeholder="email@canaryfit.com"
        value={email}
        onChange={handleEmail}
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        placeholder="*******"
        value={password}
        onChange={handlePassword}
      />
         <div className="flex flex-row space-x-4 justify-center">
                <div className="flex flex-col ">
                  <label htmlFor="height" className="text-center md:text-lg">
                    Height:
                  </label>
                  <input
                    type="number"
                    id="height"
                    className="flex self-center rounded-md w-40"
                    placeholder="175"
                    required
                    onChange={handleHeight}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="weight" class="text-center md:text-lg">
                    Weight:
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="flex self-center rounded-md w-40"
                    placeholder="80"
                    required
                    onChange={handleWeight}
                  />
                </div>
              </div>
              <label htmlFor="weightTarget" class="text-center md:text-lg">
                Weight target:
              </label>
              <input
                type="number"
                id="weightTarget"
                className="flex self-center rounded-md w-40"
                placeholder="73"
                required
                onChange={handleTargetWeight}
              />
              <p className="md:text-lg mt-2">
                Have you got account?
                <Link href="/login" className="md:text-green-500">
                  {'    '}Log in
                </Link>
              </p>
      <ButtonCustom onClick={handleClick} text="Submit" />
    </form>
  );
}
