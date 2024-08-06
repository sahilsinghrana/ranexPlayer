import LogoBig from "../../components/Branding/LogoBig";
import {clsxWithMerge} from "../../utils/utils";

function AboutPage() {
  return (
    <div>
      <LogoBig />
      <SectionWrapper className="justify-end">
        <h5 className="opacity-80 text-right tracking-wider uppercase p-3 text-2xl sm:text-3xl">
          A gentle whisper of the <b>flute</b>,
          <br />
          Mystic <b>string</b> Igniting the sparks,
          <br />
          Thunderous rhythm of the <b>drums</b>,
          <br />
          Harmonized by the delicate dance of <b>piano</b> keys,
        </h5>
        <img
          src=""
          className="bg-red-900"
          alt="Dizi Means"
          height="350"
          width="350"
        />
      </SectionWrapper>

      <SectionWrapper>
        <img
          src=""
          className="bg-red-900"
          alt="Dizi Means"
          height="350"
          width="350"
        />
        <h5 className="uppercase text-2xl opacity-80 p-3">
          DiZi allows the users to upload their songs over their own cloud
          storage and play them anywhere across multiple devices.
        </h5>
      </SectionWrapper>
    </div>
  );
}

export default AboutPage;

function SectionWrapper({children, className}) {
  return (
    <div
      className={clsxWithMerge(
        "flex sm:flex-row flex-col items-center w-full my-3 sm:my-6",
        className
      )}
    >
      {children}
    </div>
  );
}
