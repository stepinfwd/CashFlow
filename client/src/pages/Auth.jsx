import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignedOut>
        <SignUpButton
          mode={"modal"}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
        />

        <SignInButton
          mode={"modal"}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
        />
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col space-y-2">
          <UserButton />
          <p className="text-gray-700">You are signed in!</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md hover:border-gray-400 hover:shadow-sm transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </SignedIn>
    </div>
  );
}

export default Auth;
