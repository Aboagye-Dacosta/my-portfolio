import supabase, { supabaseUrl } from "./supabase";

export async function getUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  console.log("got here ----");

  const { data: { user } = {}, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return user;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateUserEmailAndUsername({ email, username }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    data: {
      username,
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updateUserPassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updateAvatar({ file, current }) {
  if (current) {
    const path = current.split("/").at(-1);
    const { error: error1 } = await supabase.storage
      .from("avatar")
      .remove([path]);

    if (error1) throw new Error(error1.message);
  }

  const fileName = `avatar-${String(Math.random()).replace(".", "")}-${file.name
    .replaceAll("/", "-")
    .replaceAll(" ", "-")}`;
  const { error: error2 } = await supabase.storage
    .from("avatar")
    .upload(fileName, file);

  if (error2) throw new Error(error2.message);

  //upload the image url to the user
  const { error, data } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });
  if (error) throw new Error(error.message);

  return data;
}
