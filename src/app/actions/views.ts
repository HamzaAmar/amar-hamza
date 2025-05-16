import { unstable_noStore as noStore } from "next/cache";

import { SupabaseAdmin } from "@utils/supabase/client";

export async function incrementViews(slug: string) {
  noStore();
  try {
    const { error } = await SupabaseAdmin.rpc("increment-views", {
      page_slug: slug,
    });
    if (error) {
      throw error;
    }
  } catch (error: unknown) {
    throw error;
  }
}
