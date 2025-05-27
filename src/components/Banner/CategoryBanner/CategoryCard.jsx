export default function CategoryCard({ icon, title }) {
  return (
    <>
      <div className="rounded-lg h-[128px] bg-[#ededed] flex-center flex-col gap-2">
        <img src={icon} alt="category icon" />
        <p className="text-black">{title}</p>
      </div>
    </>
  );
}
