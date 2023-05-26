import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchByTaskId } from "./api/query";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TaskView() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const getTask = async () => {
      if (taskId) {
        const task = await fetchByTaskId(taskId);
        if (task) {
          setTask(task);
        }
      }
    };
    getTask();
  }, [taskId]);

  const goFigma = () => {
    window.location = "https://www.figma.com/proto/kU8IFCbYO8hTrUlGeEKyuK/SAM?type=design&node-id=42-854&scaling=scale-down&page-id=0%3A1&starting-point-node-id=42%3A854";
  }

  return (
    <div className="px-2">
      <h1 className="my-2 text-2xl font-bold text-gray-900">{task?.name}</h1>
      <div className="mb-4 font-thin">{task?.details}</div>
      <div className="mb-6">
        {task?.status === 0 && (
          <Status color="bg-gray-100 text-red-400" text="Due Today" />
        )}
        {task?.status === -1 && (
          <Status color="bg-red-400 text-gray-100" text="Overdue" />
        )}
        {task?.status === 2 && (
          <Status color="bg-orange-400 text-gray-100" text="Due in 2 days" />
        )}
      </div>

      <div>
        <div className="font-bold mb-2">Attachments</div>
        <div className="">
          <Link to={`/tasks/pdf/${task?.id}`}>
            <svg
              width="127"
              height="129"
              viewBox="0 0 127 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="126.667" height="129" rx="3" fill="#F4F4F4" />
              <path
                d="M78 59.0602V77.9069C78 79.0107 77.5259 80.0693 76.682 80.8497C75.8381 81.6302 74.6935 82.0687 73.5 82.0687H52.5C51.3065 82.0687 50.1619 81.6302 49.318 80.8497C48.4741 80.0693 48 79.0107 48 77.9069V50.1618C48 49.058 48.4741 47.9994 49.318 47.219C50.1619 46.4385 51.3065 46 52.5 46H63.4687C64.2641 46.0001 63.316 46.2923 63.8784 46.8124L77.1216 59.0602C77.6839 59.5804 77.9999 58.3246 78 59.0602Z"
                fill="#EB5757"
                stroke="#EB5757"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M63.9375 46C63.9375 49.9715 63.9375 56.1697 63.9375 56.1697C63.9375 56.889 64.2494 57.5788 64.8046 58.0874C65.3598 58.596 66.1128 58.8817 66.898 58.8817H78"
                fill="#F9A2A2"
              />
              <path
                d="M63.9375 46C63.9375 49.9715 63.9375 56.1697 63.9375 56.1697C63.9375 56.889 64.2494 57.5788 64.8046 58.0874C65.3598 58.596 66.1128 58.8817 66.898 58.8817H78L63.9375 46Z"
                stroke="#F9A2A2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M65.7872 71.7547C65.7872 72.0534 65.7152 72.3334 65.5712 72.5947C65.4325 72.856 65.2112 73.0667 64.9072 73.2267C64.6085 73.3867 64.2299 73.4667 63.7712 73.4667H62.8352V75.6107H61.7152V70.0267H63.7712C64.2032 70.0267 64.5712 70.1014 64.8752 70.2507C65.1792 70.4 65.4059 70.6054 65.5552 70.8667C65.7099 71.128 65.7872 71.424 65.7872 71.7547ZM63.7232 72.5627C64.0325 72.5627 64.2619 72.4934 64.4112 72.3547C64.5605 72.2107 64.6352 72.0107 64.6352 71.7547C64.6352 71.2107 64.3312 70.9387 63.7232 70.9387H62.8352V72.5627H63.7232ZM68.5344 70.0267C69.1211 70.0267 69.6357 70.1414 70.0784 70.3707C70.5264 70.6 70.8704 70.928 71.1104 71.3547C71.3557 71.776 71.4784 72.2667 71.4784 72.8267C71.4784 73.3867 71.3557 73.8774 71.1104 74.2987C70.8704 74.7147 70.5264 75.0374 70.0784 75.2667C69.6357 75.496 69.1211 75.6107 68.5344 75.6107H66.5824V70.0267H68.5344ZM68.4944 74.6587C69.0811 74.6587 69.5344 74.4987 69.8544 74.1787C70.1744 73.8587 70.3344 73.408 70.3344 72.8267C70.3344 72.2454 70.1744 71.792 69.8544 71.4667C69.5344 71.136 69.0811 70.9707 68.4944 70.9707H67.7024V74.6587H68.4944ZM75.7648 70.0267V70.9307H73.4368V72.3627H75.2208V73.2507H73.4368V75.6107H72.3168V70.0267H75.7648Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="text-xs font-thin text-gray-600 mt-2">
          {task?.pdfName}
        </div>
      </div>
      <div className="w-full mt-10">
        <button 
            onClick={() => goFigma()}
          className="rounded-sm w-full bg-red-400 px-3.5 py-2.5 text-lg text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          Mark As Done
        </button>
      </div>
    </div>
  );
}

const Status = ({ color = "text-gray-100 bg-red-400", text = "Overdue" }) => {
  return (
    <span
      className={classNames(
        color,
        "inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-thin"
      )}
    >
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
      {text}
    </span>
  );
};
