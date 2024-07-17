interface BoxNoteProps {
  list?: string[];
}
export default function BoxNote({ list }: BoxNoteProps) {
  return (
    <>
      <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
        <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
        <div>
          {list
            ? list.map((item, index) => {
                return (
                  <li key={index} className="text-md max-lg:text-sm">
                    {item}
                  </li>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
