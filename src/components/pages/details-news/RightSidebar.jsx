const RightSidebar = () => {
  return (
    <aside
      className="
        col-span-12
        lg:col-span-2
      "
    >
      <div className="lg:sticky lg:top-28 space-y-4">
        <div className="border rounded-xl p-4 text-sm bg-white">
          <p className="font-semibold mb-2">Related</p>
          <ul className="space-y-2 text-neutral-600">
            <li className="hover:underline cursor-pointer">
              GST changes you should know
            </li>
            <li className="hover:underline cursor-pointer">
              Income tax filing tips
            </li>
            <li className="hover:underline cursor-pointer">
              Budget 2025 highlights
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
