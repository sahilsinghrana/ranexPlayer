import Moon1 from "./moon1.webp";

import LogoBig from "../../components/Branding/LogoBig";
import {clsxWithMerge} from "../../utils/utils";

import {NavLink} from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <LogoBig />
      </div>
      <div className="p-3">
        <SectionWrapper className="justify-end">
          <h5 className="m-3 text-2xl tracking-wider text-center uppercase md:text-right opacity-80 sm:text-3xl">
            A gentle whisper of the <b>flute</b>,
            <br />
            Mystic <b>string</b> Igniting the sparks,
            <br />
            Thunderous rhythm of the <b>drums</b>,
            <br />
            Harmonized by the delicate dance of <b>piano</b> keys.
          </h5>
          <img
            src={Moon1}
            className="bg-red-900"
            alt="Dizi Means"
            height="350"
            width="350"
          />
        </SectionWrapper>

        <DataList>
          <DataListItem
            title="Dizi Player: Your Cosmic Music Companion"
            description="<b>Dizi</b>, meaning flute in ancient tongues, is more than just a
          music player; it`s your personal universe of sound. Crafting a
          celestial experience where your music becomes the stars."
          />
          <DataListItem
            title="Mission"
            description=" To liberate your music from physical constraints. With Dizi Player,
          your favorite tunes are always just a click away, no matter where you
          are. We believe that music is a fundamental part of human experience,
          and it deserves to be accessible and enjoyable for everyone."
          />

          <DataListItem
            title="How it Works"
            description="Simply upload your music to your preferred cloud storage (Google
          Drive, OneDrive, etc.) and let Dizi Player handle the rest. The
          intuitive interface guides you through a seamless setup, allowing you
          to enjoy your personal soundtrack from any device with a web browser."
          />

          <DataListItem
            title="Inspiration"
            description="The cosmos has always fascinated us with its infinite beauty and
          mystery. The moon, with its calming glow, serves as the perfect muse
          for our design reflecting the harmony and balance found in the
          universe."
          />
        </DataList>
      </div>

      <footer className="my-5">
        <ul className="flex items-center justify-center text-center">
          <li>
            <NavLink className="p-4 text-black bg-white rounded-md" to="/">
              Back to App
            </NavLink>
          </li>
        </ul>
      </footer>
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

function DataList({children}) {
  return <dl className="">{children}</dl>;
}

function DataListItem({title, description}) {
  return (
    <>
      <dt className="mt-2 text-2xl font-bold">{title}</dt>
      <dd
        className="pl-2"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></dd>
    </>
  );
}
