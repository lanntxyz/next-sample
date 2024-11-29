import { MouseEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  function handleLoginClick(e: MouseEvent): void {
    signIn("github", { callbackUrl: '/', redirect: false });
  }

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <p className="flex justify-center">
          You must login for this page
        </p>

        <button className="bg-gray-500 hover:bg-gray-400 text-white rounded-lg p-2"
          onClick={(e) => handleLoginClick(e)}>
          Sign in with GitHub
        </button>
      </div>
    </main>
  );
}
