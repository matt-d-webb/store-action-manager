import moment from "moment";

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
          return <Tile key={index} name={task.name} status={task.status} />;
        })}
    </div>
  );
}

const Tile = ({ name, status }) => {
  return (
    <li className="col-span-1 flex mb-3">
      <div className="relative z-0 flex-1 flex items-center justify-between border border-red-200 bg-white rounded-md truncate">
        <div className="bg-red-400 absolute left-0 inset-y-0 px-1 text-xs rounded-l-sm"></div>
        <div className="px-4 sm:px-6 py-2 sm:py-6 text-sm truncate rounded-l-md">
          <h3 className="font-red-hat-display text-xl mb-1">{name}</h3>
          { status === 0 && <Status color="bg-gray-100 text-red-400" text="Due Today" /> }
          { status === -1 && <Status color="bg-red-400 text-gray-100" text="Overdue" /> }
          { status === 2 && <Status color="bg-orange-400 text-gray-200" text="Due in 2 days" /> }
        </div>
      </div>
    </li>
  );
};

const Status = ({ color = "text-gray-100 bg-red-400", text = "Overdue" }) => {
  return (
    <span
      className={classNames(
        color,
        "inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {text}
    </span>
  );
};
