import moment from "moment";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function List({ date, data }) {
  const record = data.find((d) => d.date === date);
  return (
    <div className="px-2">
      <h1 className="font-bold text-md mb-2">
        {moment(date).format("dddd, DD MMM")}
      </h1>
      {record &&
        record.tasks?.map((task, index) => {
          return (
            <Tile
              key={index}
              id={task.id}
              name={task.name}
              status={task.status}
              complete={task.complete}
            />
          );
        })}
    </div>
  );
}

const Tile = ({ id, name, status, complete = false }) => {
  return (
    <Link to={`/tasks/${id}`} className="col-span-1 flex mb-3">
      <div
        className={classNames(
          complete && "border-green-500",
          status === 2 && !complete && "border-orange-400 bg-white",
          status === -1 && !complete && "border-red-200 bg-white",
          status === 0 && !complete && "border-gray-200 bg-white",
          "relative z-0 flex-1 flex items-center justify-between border rounded-md truncate"
        )}
      >
        <div
          className={classNames(
            complete && "bg-green-500",
            status === 2 && !complete && "bg-orange-400",
            status === -1 && !complete && "bg-red-400",
            status === 0 && !complete && "bg-gray-200",
            "absolute left-0 inset-y-0 px-1 text-xs rounded-l-sm"
          )}
        ></div>
        <div className="px-4 sm:px-6 py-2 sm:py-6 text-sm truncate rounded-l-md">
          <h3 className="font-red-hat-display text-xl mb-1">{name}</h3>
          {complete && (
            <Status color="bg-green-500 text-white font-bold" text="Done" />
          )}
          {status === 0 && !complete && (
            <Status color="bg-gray-100 text-red-400" text="Due Today" />
          )}
          {status === -1 && !complete && (
            <Status color="bg-red-400 text-gray-100" text="Overdue" />
          )}
          {status === 2 && !complete && (
            <Status color="bg-orange-400 text-gray-200" text="Due in 2 days" />
          )}
        </div>
      </div>
    </Link>
  );
};

const Status = ({ color = "text-gray-100 bg-red-400", text = "Overdue" }) => {
  return (
    <span
      className={classNames(
        color,
        "inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-thin"
      )}
    >
      {text === "Done" ? (
<></>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {text}
    </span>
  );
};
