import moment from "moment";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function List({ date, data }) {
  return (
    <div className="px-2">
      <h1 className="font-bold text-md mb-2">
        {moment(date).format("dddd, DD MMM")}
      </h1>
      <Tile></Tile>
      <Tile></Tile>
      <Tile></Tile>
    </div>
  );
}

const Tile = () => {
  return (
    <li className="col-span-1 flex mb-3">
      <div className="relative z-0 flex-1 flex items-center justify-between border border-red-200 bg-white rounded-md truncate">
        <div className="bg-red-400 absolute left-0 inset-y-0 px-1 text-xs rounded-l-sm"></div>
        <div className="px-4 sm:px-6 py-2 sm:py-6 text-sm truncate rounded-l-md">
          <h3 className="font-red-hat-display text-xl mb-1">New Salha Update</h3>
          <Status />
        </div>
      </div>
    </li>
  );
};

const Status = ({ color = "text-gray-100 bg-red-400", text = "Overdue" }) => {
    return (<span className={classNames(color, "inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium")}>
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
    { text }
  </span>)
}