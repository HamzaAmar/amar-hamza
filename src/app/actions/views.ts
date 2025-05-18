import { unstable_noStore as noStore } from "next/cache";

import { SupabaseAdmin } from "@utils/supabase/client";

export async function incrementViews(slug: string) {
  noStore();
  try {
    const { error } = await SupabaseAdmin.rpc("increment-views", {
      page_slug: slug,
    });
    if (error) {
      return {
        message: error.message,
        status: "error",
      };
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
        status: "error",
      };
    }
    return {
      message: "Something wen wrong when we try to send Mail",
      status: "error",
    };
  }
}
