import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components as generalComponents } from "../slices/general";
import { components as blogComponents } from "../slices/blog";
import state from "../.slicemachine/libraries-state.json";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone
          slices={slices}
          components={{ ...generalComponents, ...blogComponents }}
        />
      )}
      state={state}
    />
  );
};

export function getServerSideProps() {
  if (process.env.NODE_ENV === "production") {
    return {
      // notFound: true,
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

export default SliceSimulatorPage;
