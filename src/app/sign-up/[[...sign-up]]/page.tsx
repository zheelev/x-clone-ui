"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="h-screen flex items-center justify-between p-8">
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <svg width="320" height="320" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_7_5" fill="white">
            <path d="M8.17276 0L0 19H2.65781L6.44518 10.2561L17.4086 19H20L12.0266 0L8.63787 7.6263L10.6312 9.13841L12.0266 6.24567L15.5482 14.5952L7.50831 7.6263L10.6312 0H8.17276Z" />
            <path d="M9.03654 13.2803L6.44518 19H3.98671L7.10963 11.7682L9.03654 13.2803Z" />
          </mask>
          <path d="M0 19L-19.291 10.7021L-31.8934 40H0V19ZM8.17276 0V-21H-5.65455L-11.1183 -8.29795L8.17276 0ZM10.6312 0L30.065 7.958L41.9231 -21H10.6312V0ZM7.50831 7.6263L-11.9254 -0.331703L-17.6386 13.6201L-6.24633 23.4948L7.50831 7.6263ZM15.5482 14.5952L1.79353 30.4637L34.8975 6.4341L15.5482 14.5952ZM12.0266 6.24567L31.3759 -1.91538L13.3095 -44.7498L-6.88793 -2.87799L12.0266 6.24567ZM10.6312 9.13841L-2.06041 25.8693L18.3924 41.3843L29.5457 18.2621L10.6312 9.13841ZM8.63787 7.6263L-10.5529 -0.901009L-17.3085 14.3025L-4.05377 24.3572L8.63787 7.6263ZM12.0266 0L31.3906 -8.12618L12.5775 -52.9561L-7.16418 -8.52731L12.0266 0ZM20 19V40H51.5869L39.364 10.8738L20 19ZM17.4086 19L4.31454 35.4178L10.0598 40H17.4086V19ZM6.44518 10.2561L19.5393 -6.16176L-1.91677 -23.2741L-12.8248 1.90939L6.44518 10.2561ZM2.65781 19V40H16.4471L21.9278 27.3467L2.65781 19ZM6.44518 19V40H19.9857L25.5736 27.6663L6.44518 19ZM9.03654 13.2803L28.1649 21.9465L34.9664 6.93426L22.0008 -3.24028L9.03654 13.2803ZM7.10963 11.7682L20.0739 -4.75239L-1.36547 -21.5766L-12.1696 3.44282L7.10963 11.7682ZM3.98671 19L-15.2925 10.6746L-27.9561 40H3.98671V19ZM19.291 27.2979L27.4638 8.29795L-11.1183 -8.29795L-19.291 10.7021L19.291 27.2979ZM8.17276 21H10.6312V-21H8.17276V21ZM-8.80251 -7.958L-11.9254 -0.331703L26.942 15.5843L30.065 7.958L-8.80251 -7.958ZM-6.24633 23.4948L1.79353 30.4637L29.3028 -1.27336L21.2629 -8.24222L-6.24633 23.4948ZM34.8975 6.4341L31.3759 -1.91538L-7.32277 14.4067L-3.80117 22.7562L34.8975 6.4341ZM-6.88793 -2.87799L-8.28328 0.0147438L29.5457 18.2621L30.9411 15.3693L-6.88793 -2.87799ZM23.3229 -7.59247L21.3295 -9.10458L-4.05377 24.3572L-2.06041 25.8693L23.3229 -7.59247ZM27.8286 16.1536L31.2173 8.52731L-7.16418 -8.52731L-10.5529 -0.901009L27.8286 16.1536ZM-7.33744 8.12618L0.635981 27.1262L39.364 10.8738L31.3906 -8.12618L-7.33744 8.12618ZM20 -2H17.4086V40H20V-2ZM30.5027 2.58218L19.5393 -6.16176L-6.64891 26.6739L4.31454 35.4178L30.5027 2.58218ZM-12.8248 1.90939L-16.6122 10.6533L21.9278 27.3467L25.7152 18.6027L-12.8248 1.90939ZM2.65781 -2H0V40H2.65781V-2ZM25.5736 27.6663L28.1649 21.9465L-10.0919 4.61401L-12.6832 10.3337L25.5736 27.6663ZM22.0008 -3.24028L20.0739 -4.75239L-5.8546 28.2887L-3.92768 29.8008L22.0008 -3.24028ZM-12.1696 3.44282L-15.2925 10.6746L23.2659 27.3254L26.3889 20.0935L-12.1696 3.44282ZM3.98671 40H6.44518V-2H3.98671V40Z" fill="white" mask="url(#path-1-inside-1_7_5)" />
        </svg>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl xsm:text-4xl md:text-6xl font-bold">
          Happening now
        </h1>
        <h1 className="text-2xl ">Join today.</h1>
        <SignUp.Root>
          <SignUp.Step name="start" className="flex flex-col gap-4">
            <Clerk.Connection
              name="google"
              className="bg-white rounded-full p-2 text-black w-72 flex items-center justify-center gap-2 font-bold cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width={24} height={24}>
                <path
                  d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z"
                  fill="#34A853"
                ></path>
                <path
                  d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z"
                  fill="#4285F4"
                ></path>
              </svg>
              Sign up with Google
            </Clerk.Connection>
            <Clerk.Connection
              name="google"
              className="bg-white rounded-full p-2 text-black w-72 flex items-center justify-center gap-2 font-bold cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width={24} height={24}>
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
              </svg>
              Sign up with Apple
            </Clerk.Connection>
            <div className="flex flex-col gap-4">
              Sign up with Credentials
              <Clerk.Field name="username" className="flex flex-col gap-2">
                <Clerk.Input
                  className="bg-white py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                  placeholder="Username"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <Clerk.Field name="emailAddress" className="flex flex-col gap-2">
                <Clerk.Input
                  className="bg-white py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                  placeholder="E-mail"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <Clerk.Field name="password" className="flex flex-col gap-2">
                <Clerk.Input
                  className="bg-white py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                  placeholder="Password"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <SignUp.Captcha />
              <SignUp.Action
                submit
                className="bg-blue-500 rounded-full p-2 text-white font-bold w-72 text-center cursor-pointer"
              >
                Sign up
              </SignUp.Action>
            </div>
          </SignUp.Step>
          <SignUp.Step name="continue" className="flex flex-col gap-4">
            <Clerk.Field name="username">
              <Clerk.Input placeholder="username" className="bg-white py-2 px-6 rounded-full text-black w-72 placeholder:text-sm" />
              <Clerk.FieldError className="text-red-300 text-sm" />
            </Clerk.Field>

            <SignUp.Action submit className="w-72 text-center text-blue-500 underline cursor-pointer">Continue</SignUp.Action>
          </SignUp.Step>
          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h1 className="text-sm mb-2">Check your e-mail</h1>
              <Clerk.Field name="code" className="flex flex-col gap-4">
                <Clerk.Input
                  placeholder="Verification code"
                  className="bg-white py-2 px-6 rounded-full text-black w-72 placeholder:text-sm"
                />
                <Clerk.FieldError className="text-red-300 text-sm" />
              </Clerk.Field>
              <SignUp.Action
                submit
                className="mt-2 underline text-blue-500 text-sm cursor-pointer">
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
          {/* OR SIGN UP */}
          <div className="w-72 flex items-center gap-4">
            <div className="h-px bg-gray-500 flex-grow"></div>
            <span className="text-gray-300">or</span>
            <div className="h-px bg-gray-500 flex-grow"></div>
          </div>
          <Link
            href="/sign-in"
            className="bg-blue-500 rounded-full p-2 text-white font-bold w-72 text-center"
          >
            Already have an account?
          </Link>
          <p className="w-72 text-xs">
            By signing up, you agree to the{" "}
            <span className="text-blue-500">Terms of Service</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>, including{" "}
            <span className="text-blue-500">Cookie Use</span>.
          </p>
        </SignUp.Root>
      </div>
    </div>
  );
};

export default SignUpPage;