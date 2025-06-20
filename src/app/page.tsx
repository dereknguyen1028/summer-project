import { supabase } from "~/lib/supabase";
import HomeClient from "../components/HomeClient";

export default async function HomePage() {
  const { data: sigma, error } = await supabase.from("sigma").select("*");
  return <HomeClient sigma={sigma ?? []} />;
}
