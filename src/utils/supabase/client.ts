// import { createClient } from '@supabase/supabase-js';

import { createClient } from "@supabase/supabase-js";

const URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SERVER_KEY: string = process.env.SUPABASE_SERVICE_KEY ?? "";

const SupabaseAdmin = createClient(URL, SERVER_KEY);

export { SupabaseAdmin };
