import { createClient, linkResolver } from "../../prismic";

export default async (req, res) => {
  const { token: ref } = req.query;

  const client = createClient({ req });

  const redirectUrl = await client.resolvePreviewURL({
    linkResolver,
    defaultURL: "/",
  });

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });

  res.redirect(redirectUrl);
  res.end();
};
