import { linkResolver, createClient } from "../../prismic";

export default async (req, res) => {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client, linkResolver });
};

const setPreviewData = async ({ req, res }) => {
  if (req.query.token) {
    const { token: ref } = req.query;
    res.setPreviewData({ ref });
  }
};

const redirectToPreviewURL = async ({ req, res, client, linkResolver }) => {
  if (isPrismicNextQuery(req.query)) {
    const { documentId, token } = req.query;
    const previewUrl = await client.resolvePreviewURL({
      linkResolver,
      defaultURL: "/",
      documentID: documentId,
      previewToken: token,
    });

    res.redirect(previewUrl);
  }

  res.redirect("/");
};

const isPrismicNextQuery = (query) =>
  typeof query.documentId === "string" && typeof query.token === "string";
