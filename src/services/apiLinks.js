import supabase from "./supabase";

export const getSocialLinks = async () => {
  const { data, error } = await supabase.from("links").select();
  if (error) throw new Error(error.message);

  return data;
};

export const createLink = async ({ link, title }) => {
  const { data, error } = await supabase
    .from("links")
    .insert({ link, title })
    .select();

  if (error) throw new Error(error.message);

  return data;
};

export const updateLink = async ({ object, id }) => {
  const { data, error } = await supabase
    .from("links")
    .update(object)
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};

export const deleteLink = async (id) => {
  const { data, error } = await supabase.from("links").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
};
