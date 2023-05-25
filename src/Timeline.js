import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import moment from "moment";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Timeline({ selectedItem, setSelectedItem, data }) {
  const mapToText = (date) => {
    return {
      day: moment(date).format("ddd"),
      date: moment(date).format("DD")
    };
  };

  return (
    <div className="flex my-6 mx-auto px-1">
      <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
      <div className="flex gap-1">
        {data.map((d, index) => {
          return (
            <Tile
              {...{ ...mapToText(d.date) }}
              hasTasks={d?.tasks?.length > 0}
              index={index}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          );
        })}
      </div>
      <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
}

const Tile = ({ day, date, index, setSelectedItem, selectedItem, hasTasks }) => {
  const isActive = index === selectedItem;
  return (
    <div
      onClick={() => setSelectedItem(index)}
      className={classNames(
        isActive ? "border-red-500 bg-red-400" : "border-gray-100 bg-white",
        "w-14 border px-0 py-4 border-gray-100 rounded-md text-center"
      )}
    >
      <div className={classNames(isActive ? "text-white" : "text-black", "text-sm")}>{day}</div>
      <div className={classNames(isActive ? "text-white": "text-gray-600", "")}>{date}</div>
      { hasTasks && <div className="flex justify-center items-center mt-2">
        <svg
          className={classNames(isActive ? "fill-white" : "fill-red-400", "h-1.5 w-1.5 ")}
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
      </div> }
    </div>
  );
};
