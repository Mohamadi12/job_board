import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Github from "../../../public/icons/github";
import Google from "../../../public/icons/google";
import { auth, signIn } from "@/app/utils/auth";
import SubmitButton from "../general/SubmitButton";
import { redirect } from "next/navigation";

const LoginForm = async() => {
    const session = await auth()

    if(session?.user){
        return redirect('/')
    }
    
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>
            Login with your Google or Github account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <form
              action={async () => {
                "use server";
                await signIn("github", {
                  redirectTo: "/",
                });
              }}
            >
              {/* <Button variant="outline" className="w-full">
                <Github />
                Login with Github
              </Button> */}
              <SubmitButton
                width="w-full"
                variant="outline"
                text="Login with Github"
                icon={<Github />}
              />
            </form>
            <form action={async () => {
                "use server";
                await signIn("google", {
                  redirectTo: "/",
                });
              }}>
              {/* <Button variant="outline" className="w-full">
                <Google />
                Login with Google
              </Button> */}
              <SubmitButton
                width="w-full"
                variant="outline"
                text="Login with Google"
                icon={<Google />}
              />
            </form>
          </div>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-muted-foreground text-balance">
        By Clicking continue, you agree to our terms and service and privacy
        policy.
      </div>
    </div>
  );
};

export default LoginForm;
