import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "x2rmi2s6",
  dataset: "production",
  apiVersion: "2021-09-29",
  useCdn: true,
});

// const builder = imageUrlBuilder(client);
const builder = imageUrlBuilder({
  projectId: "x2rmi2s6",
  dataset: "production",
});
// export const urlFor = (source) => builder.image(source);
export function urlFor(source) {
  return builder.image(source);
}
