"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logo.jpg";
import { Card, CardContent } from "../ui/card";
import UserTypeSelection from "./UserTypeForm";
import CompanyForm from "./CompanyForm";

type UserSelectionType = "company" | "jobSeeker" | null;

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  const handleUserSelectionType = async (type: UserSelectionType) => {
    setUserType(type);
    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserSelectionType} />;

      case 2:
        return userType === "company" ? (
          <CompanyForm />
        ) : (
          <p>User is a job seeker</p>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-10">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-2xl"
        />
        <h1 className="text-4xl font-bold">
          Nana<span className="text-primary">Mohamadi</span>
        </h1>
      </div>

      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
};

export default OnboardingForm;
