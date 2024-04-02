import supabase, { supabaseUrl } from "./supabase";

export const uploadFile = async ({ file, bucket, current, fieldName }) => {
  const fileName = `${String(Math.random()).replace(".", "")}-${String(
    file.name
  )
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll("_", "-")}`;

  if (current) {
    await supabase.storage.from(bucket).remove([current]);
  }

  const { error } = await supabase.storage.from(bucket).upload(fileName, file);

  if (error) throw new Error(error.message);

  const { data: strings, error: error2 } = await supabase
    .from("strings")
    .update({
      [fieldName]: `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`,
    })
    .eq("id", 1);

  if (error2) throw new Error(error2.message);
  return strings;
};
