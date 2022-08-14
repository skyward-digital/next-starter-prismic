/**
 * Get all the properties needed by our Layout component
 */
export const getLayoutProps = async ({ client }) => {
  return {
    // defaultSeo: await client.getSingle("defaultSeo"),
    header: await client.getSingle("header"),
    footer: await client.getSingle("footer"),
    // socials: await client.getSingle("socials"),
  };
};
