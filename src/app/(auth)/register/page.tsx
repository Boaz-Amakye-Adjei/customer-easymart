"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];

  const increaseCurrentStep = () => {
    if (currentStep >= 3) return;
    setCurrentStep((curr) => curr + 1);
  };

  const decreaseCurrentStep = () => {
    if (currentStep == 1) return;
    setCurrentStep((curr) => curr - 1);
  };
  return (
    <section className="p-10 not-first:md:p-15 flex-1 flex justify-center bg-gray-200 md:bg-transparent">
      <div className="flex flex-col justify-center w-full border rounded-lg border-gray-200 px-5 bg-white">
        <div className="w-full flex justify-center gap-4">
          {steps.map((step) => (
            <button
              onClick={() => setCurrentStep(step)}
              key={step}
              className={`${
                currentStep == step
                  ? "bg-green-800 text-white"
                  : "bg-white text-black"
              } rounded-full size-[30px] border border-gray-400 grid place-content-center  text-sm`}
            >
              {step}
            </button>
          ))}
        </div>

        {currentStep == 1 && <Step1 />}
        {currentStep == 2 && <Step2 />}
        {currentStep == 3 && <Step3 />}

        <div className="flex gap-2 text-sm mt-6">
          {currentStep > 1 && (
            <button
              onClick={decreaseCurrentStep}
              className="py-4 md:py-2 rounded-md w-full border border-green-800 text-black"
            >
              Prev
            </button>
          )}

          {currentStep < 3 && (
            <button
              onClick={increaseCurrentStep}
              className="py-4 md:py-2 rounded-md w-full bg-green-500 text-white border border-green-800"
            >
              Next
            </button>
          )}

          {currentStep >= 3 && (
            <button className="py-4 md:py-2 rounded-md w-full bg-green-500 text-white border border-green-800">
              Register
            </button>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-4">
          Aleardy have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

function Step1() {
  return (
    <>
      <h1 className="font-bold text-4xl my-8">Personal Information</h1>

      <div className="space-y-4">
        <input
          placeholder="Name"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <input
          placeholder="Email"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <input
          placeholder="Gender"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
      </div>
    </>
  );
}

function Step2() {
  return (
    <>
      <h1 className="font-bold text-4xl my-8">Delivery Information</h1>

      <div className="space-y-4">
        <input
          placeholder="Hall / Hostel"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <input
          placeholder="Room Number"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <input
          placeholder="Phone Number"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
      </div>
    </>
  );
}

function Step3() {
  return (
    <>
      <h1 className="font-bold text-4xl my-8">Security</h1>

      <div className="space-y-4">
        <input
          placeholder="Password"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <input
          placeholder="Confirm Password"
          type="text"
          className="border border-gray-400 py-4 md:py-2 px-3 w-full rounded-md text-sm"
        />
        <div className="flex items-center gap-2">
          <input
            placeholder="Phone Number"
            type="Checkbox"
            className="border border-gray-400 py-2 px-3 w-fit rounded-md text-sm checked:bg-green-800"
          />
          <label className="text-sm text-gray-400">
            Agree to terms and conditions
          </label>
        </div>
      </div>
    </>
  );
}
