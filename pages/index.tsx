import { signOut } from "next-auth/react";
import { download } from "@/lib/services/fileDownloader";

export default function App() {
  const downloadFile = async () => {
    download("c3f869e5-6161-4fc6-a28d-92420d112634");
  };

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <p className="flex justify-center">
          This is the home page of the Next.js app.
        </p>

        <button className="flex items-center justify-center p-4 mt-56 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
          onClick={() => downloadFile()}>
          ↓ Download File From API
        </button>

        <button className="flex items-center justify-center p-4 mt-56 text-white bg-red-500 rounded-lg hover:bg-red-600"
          onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </main >
  );
}
