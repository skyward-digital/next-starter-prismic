import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { linkResolver, createClient } from "../../prismic";

export default async (req, res) => {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client, linkResolver });
};
