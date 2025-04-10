import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

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
        <UserButton />
        <p className="text-gray-700">You are signed in!</p>
      </SignedIn>
    </div>
  );
}

export default Auth;
