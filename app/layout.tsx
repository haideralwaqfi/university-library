import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local"
import { Variable } from "lucide-react";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src:[
    {path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal'},
    {path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal'},
    {path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: '800', style: 'normal'},
    {path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal'},
  ]
});

const bebasNeue = localFont({
  src: [
    {path : "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal"}
    
  ],
  variable: "--bebas-neue"
})

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is an app for library",
};

const RootLayout = ({children}: {children: ReactNode}) => 
   (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )

  export default RootLayout;