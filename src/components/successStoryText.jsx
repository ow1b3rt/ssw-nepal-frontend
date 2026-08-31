export default function SuccessStoryText({
  name,
  batch,
  description,
}) {
  return (
    <section className="flex flex-col pt-6">
      <h2 className="mb-1 text-[44px] font-black leading-none tracking-[-1.5px] text-[#df1f26] md:text-[52px]">
        {name}
      </h2>

      {batch && (
        <h3 className="mb-8 text-[18px] font-bold text-[#4b4b4b]">
          {batch}
        </h3>
      )}

      <p className="text-[17px] leading-[1.42] text-[#4b4b4b]">
        {description}
      </p>
    </section>
  );
}