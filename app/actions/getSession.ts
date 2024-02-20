// 2:42:30
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOptions);
}