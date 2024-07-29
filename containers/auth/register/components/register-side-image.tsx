import Image from "next/image";

export const RegisterSideImage = () => {
  return (
    <div className="md:hidden">
      <Image
        alt="Authentication"
        loading="lazy"
        width="1280"
        height="843"
        decoding="async"
        data-nimg="1"
        className="block dark:hidden"
        //   srcSet="/_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=3840&amp;q=75 2x"
        src="/_next/image?url=%2Fexamples%2Fauthentication-light.png&amp;w=3840&amp;q=75"
      />
      <Image
        alt="Authentication"
        loading="lazy"
        width="1280"
        height="843"
        decoding="async"
        data-nimg="1"
        className="hidden dark:block"
        //   srcSet="/_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=3840&amp;q=75 2x"
        src="/_next/image?url=%2Fexamples%2Fauthentication-dark.png&amp;w=3840&amp;q=75"
      />
    </div>
  );
};
