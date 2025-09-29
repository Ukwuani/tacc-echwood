import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export const paystack_public_key = () => {
  return process.env.NEXT_PAYSTACK ?? "pk_live_bb2c5448dd78614571df9bbc73615b332368a24d"
}