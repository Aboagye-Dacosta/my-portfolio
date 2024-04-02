import supabase from "./supabase";

export const getStrings = async () => {
  const { data, error } = await supabase.from("strings").select().single();
  if (error) throw new Error(error.message);

  return data;
};


export const updateStrings = async (object) => {
  const { data, error } = await supabase
    .from("strings")
    .update(object)
    .eq("id", 1);

  if (error) throw new Error(error.message);

  return data;
};
