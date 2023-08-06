import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  return (
    <div>
      Landing page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default LandingPage;
