import { useRouter } from "next/router";
import { GlobalProvider } from "../../context/GlobalContext";
import { Header, Footer, Seo } from "..";

export const Layout = ({ seo, header, footer, socials, children }) => {
  const { isPreview } = useRouter();
  return (
    <GlobalProvider globals={{ socials }}>
      <div>
        <Seo {...seo} />
        {/* <Header {...header.data} /> */}
        {children}
        <Footer {...footer.data} />

        {isPreview ? (
          <a
            className="fixed bottom-0 right-0 m-6 bg-white border-2 border-black shadow-lg btn btn-accent hover:bg-black hover:text-white"
            href="/api/exit-preview"
          >
            Exit Preview
          </a>
        ) : null}
      </div>
    </GlobalProvider>
  );
};
