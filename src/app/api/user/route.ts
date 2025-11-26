import { NextResponse } from "next/server";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
}

export async function GET() {
  const users: User[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      phone: "+91 98765 43210",
      city: "Lucknow",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      phone: "+91 98765 43211",
      city: "Varanasi",
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit.singh@example.com",
      phone: "+91 98765 43212",
      city: "Agra",
    },
  ];

  return NextResponse.json(users);
}
