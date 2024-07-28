import Link from "next/link";

interface CoderaveLogoProps {
  fill: string;
  width?: string;
  height?: string;
}

export default function CoderaveLogo({ fill, width, height }: CoderaveLogoProps) {
  return (
    <Link href="/" className="inline-flex" aria-label="Coderave">
      <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 1024C653.385 1024 781.385 966.693 874.039 874.039L693.019 693.019C646.692 739.346 582.692 768 512 768C370.615 768 256 653.385 256 512H0C0 794.77 229.23 1024 512 1024Z" fill={fill} />
        <path d="M10.9862 406C22.2618 352.439 41.9095 301.961 68.4965 256H512C408.423 256 319.212 317.513 278.908 406H10.9862Z" fill={fill} />
        <path d="M512 0C370.595 0 242.579 57.3235 149.923 150H874L874.039 149.961C781.385 57.3075 653.385 0 512 0Z" fill={fill} />
        <path d="M587 512C587 553.421 553.421 587 512 587C470.579 587 437 553.421 437 512C437 470.579 470.579 437 512 437C553.421 437 587 470.579 587 512Z" fill={fill} />
      </svg>
    </Link>
  );
}
