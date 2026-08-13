type CountryFlagProps = {
  code: string;
  className?: string;
};

export default function CountryFlag({ code, className = "" }: CountryFlagProps) {
  const lower = code.toLowerCase();

  return (
    <img
      src={`https://flagcdn.com/w40/${lower}.png`}
      srcSet={`https://flagcdn.com/w80/${lower}.png 2x`}
      alt=""
      width={20}
      height={14}
      loading="lazy"
      className={`inline-block h-3.5 w-5 shrink-0 rounded-[2px] object-cover ${className}`}
    />
  );
}
