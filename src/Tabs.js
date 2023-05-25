const tabs = [
    { name: 'Action', href: '#', current: true },
    { name: 'Feed', href: '#', current: false },
    { name: 'Information', href: '#', current: false }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabs() {
    return (
      <div className="w-full">
        <div className="block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-700',
                    'w-full border-t-2 py-4 px-1 text-center text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }