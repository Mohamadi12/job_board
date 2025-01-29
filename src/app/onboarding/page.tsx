import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import { requireUser } from "../utils/requireUser";

async function checkIfUserHasFinishedOnboarding(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted === true) {
    return redirect("/");
  }
  return user;
}

export default async function Onboarding() {
  const session = await requireUser();
  await checkIfUserHasFinishedOnboarding(session.id!);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
}
