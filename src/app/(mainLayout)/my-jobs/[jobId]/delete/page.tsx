import { deleteJobPost } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2Icon, ArrowLeftIcon } from "lucide-react";

import Link from "next/link";
import React from "react";

type Params = Promise<{ jobId: string }>;

const DeleteJobPage = async ({ params }: { params: Params }) => {
  const { jobId } = await params;
  return (
    <Card className="max-w-lg mx-auto w-full">
      <CardHeader>
        <CardTitle>Are you absolutely sure?</CardTitle>
        <CardDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <Link
          href={`/my-jobs`}
          className={buttonVariants({ variant: "outline" })}
        >
          <ArrowLeftIcon className="size-4" />
          Cancel
        </Link>
        <form
          action={async () => {
            "use server";
            await deleteJobPost(jobId);
          }}
        >
          <SubmitButton
            text="Delete Job"
            variant="destructive"
            icon={<Trash2Icon className="size-4" />}
          />
        </form>
      </CardFooter>
    </Card>
  );
};

export default DeleteJobPage;