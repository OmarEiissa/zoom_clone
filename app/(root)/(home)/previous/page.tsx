import CallList from "@/components/CallList";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white  pt-3 xl:pb-2 xl:pt-[1.25rem] px-1 sm:px-10">
      <h1 className="text-3xl font-bold">Previous</h1>

      <CallList type="ended" />
    </section>
  );
};

export default Previous;
