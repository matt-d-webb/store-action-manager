import { ArrowLeftIcon, BellIcon } from "@heroicons/react/24/outline";
import { useLocation, useHistory} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const history = useHistory();

    const resolveBack = () => {
        if(location?.pathname?.includes("pdf")) {
            const param = location.pathname.split("/")[3];
            if(param) {
                history.push(`/tasks/${param}`);
            } else {
                history.push(`/`);
            }
        } else {
            history.push(`/`);
        } 
    }

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="flex lg:hidden">
            <button onClick={() => resolveBack()}>
              <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <a href="/" className="-m-1.5 p-1.5">
          <svg
            width="46"
            height="12"
            viewBox="0 0 46 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.4828 5.38405L45.72 0.479156H41.3122L39.1489 3.19885L36.9995 0.497212L36.9853 0.479156H32.5775L36.8147 5.38405L32.2979 11.0208H36.6112L39.1489 7.81164L41.6724 11.0026L41.6866 11.0208H46L41.4828 5.38405Z"
              fill="#E4002B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.9307 5.79837C21.9307 6.78733 22.694 8.49405 24.703 8.49405C25.8881 8.49405 26.6114 7.95113 27.033 7.29182C27.3143 6.86514 27.4549 6.39987 27.4952 5.9146C27.5355 5.43012 27.4349 4.94517 27.2141 4.49911C26.8522 3.76215 26.089 3.00598 24.6827 3.00598C22.7742 3.00598 21.9307 4.55739 21.9307 5.77915V5.79837ZM30.8298 11.1318H27.4951V9.9678C26.8924 11.0152 25.5065 11.5 24.2008 11.5C20.665 11.5 18.5958 8.82385 18.5958 5.74008C18.5958 2.21073 21.2274 0 24.2008 0C26.0286 0 27.0533 0.8532 27.4951 1.51251V0.368246H30.8298V11.1318Z"
              fill="#303AB2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.364577H3.02695V1.49744C3.02695 1.49744 3.2222 1.11353 3.69089 0.748489C4.15957 0.364577 4.92129 0 6.05391 0C6.79588 0 7.73325 0.191801 8.53414 1.01747C8.76841 1.24794 8.98308 1.5358 9.17849 1.90053C9.39348 1.57416 9.64702 1.24794 9.95963 0.979114C10.6041 0.402937 11.4827 0 12.6154 0C13.3772 0 14.5879 0.172776 15.4665 1.07517C16.4822 2.131 16.6383 2.84129 16.6383 5.20307V11.0208H13.397V5.35651C13.397 4.9149 13.397 4.33904 13.1818 3.85907C12.9869 3.35961 12.5765 2.99504 11.7368 2.99504C10.8386 2.99504 10.3895 3.39828 10.1743 3.87841C9.9402 4.35806 9.9402 4.89588 9.9402 5.20307V11.0208H6.69841V5.2221C6.69841 4.93424 6.69841 4.3774 6.50285 3.89743C6.28817 3.39828 5.89752 2.99504 5.07752 2.99504C4.15957 2.99504 3.71063 3.41762 3.47621 3.93579C3.24163 4.45412 3.24163 5.0303 3.24163 5.35651V11.0208H0V0.364577Z"
              fill="#303AB2"
            />
          </svg>
        </a>
        <div className="flex flex-1 justify-end">
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}
