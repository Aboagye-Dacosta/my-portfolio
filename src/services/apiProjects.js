import supabase, { supabaseUrl } from "./supabase";

//reading a single projects
export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("id", projectId)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

//read all projects
export async function getProjects(filter) {
  let query = supabase.from("projects").select();

  if (filter !== "all") {
    query = query.eq("type", filter);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export async function getExperiences() {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("type", "experience");

  if (error) throw new Error(error.message);

  return data;
}
export async function getRegular() {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("type", "regular");

  if (error) throw new Error(error.message);

  return data;
}
export async function getShowRegular() {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("type", "regular")
    .eq("show", true);

  if (error) throw new Error(error.message);

  return data;
}
export async function getShowExperiences() {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("type", "experience")
    .eq("show", true);

  if (error) throw new Error(error.message);

  return data;
}

export async function createProject({ project, id }) {
  let fileName = "";
  let image = project.image;

  if (typeof project.image === "object") {
    fileName = `project-${String(Math.random()).replace(".", "")}-${String(
      project.image.name
    )
      .replaceAll(" ", "-")
      .replace("/", "-")}`;

    const { error } = await supabase.storage
      .from("project_images")
      .upload(fileName, project.image);

    if (error) throw new Error(error.message);

    image = `${supabaseUrl}/storage/v1/object/public/project_images/${fileName}`;
  }

  const newProject = {
    ...project,
    image,
  };

  let query = supabase.from("projects");

  if (id) query = query.update(newProject).eq("id", id);
  else query = query.insert(newProject);

  const { error: error2, data } = await query.select();

  if (error2) throw new Error(error2.message);
  return data;
}

export async function deleteProject(id) {
  const { data, error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
