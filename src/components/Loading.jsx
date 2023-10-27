const arr = new Array(8).fill(0);

export default function Loading() {
  return (
    <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {arr.map((_, i) => (
        <li
          key={i}
          className="h-[420px] max-w-[300px] border border-neutral-100 bg-neutral-100"
        >
          <div className="w-[300px]"></div>
        </li>
      ))}
    </ul>
  );
}
