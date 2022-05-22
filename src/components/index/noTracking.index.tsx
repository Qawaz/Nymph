import { FunctionComponent } from "react";

const NoTrackingSection: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="py-20">
          <h1 className="text-white font-bold text-5xl text-center mb-8">
            No Tracking
          </h1>
        </div>
      </section>
      <style jsx>
        {`
          section {
            background: #041037;
          }
        `}
      </style>
    </>
  );
};

export default NoTrackingSection;
