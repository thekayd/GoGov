import { redirect } from "next/navigation";

import { createClient } from "@/supabase/server";
import { AuthService } from "@/supabase/AuthService";

export default async function PrivatePage() {
  // const res = await AuthService.getUser();
  // if (res.err) {
  //   redirect("/auth");
  // }

  // return <p>Hello {res.val.user?.email}</p>;
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
