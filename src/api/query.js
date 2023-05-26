const mock = [
  {
    date: "20230522",
    status: 0,
    tasks: [],
  },
  {
    date: "20230523",
    status: 0,
    tasks: [],
  },
  {
    date: "20230524",
    status: 0,
    tasks: [
      { id: 1, name: "New Sahla Update", status: -1, complete: false, },
      { id: 2, name: "Top Selling Item", status: 0, complete: false, },
      {
        id: 3,
        name: "Change Display",
        status: 2,
        complete: false,
        details:
          "Change the planogram of the ladies section into the new collection banner Hawaai",
        pdfName: "LADIES SEQUINCE SS23 HIT 4",
        pdfLink: "",
      },
      {
        id: 4,
        name: "Update Print Labels",
        status: 0,
        complete: true,
        details:
          "Update the necessary lebels with the new promotion prices.",
        pdfName: "List of Printable Labels",
        pdfLink: "",
      },
    ],
  },
  {
    date: "20230525",
    status: 0,
    tasks: [
      { id: 4, name: "New Sahla Update", status: -1, complete: false, },
      { id: 5, name: "Top Selling Item", status: 0, complete: false, },
    ],
  },
  {
    date: "20230526",
    status: 0,
    tasks: [
      { id: 6, name: "New Sahla Update", status: -1, complete: false, },
      { id: 7, name: "Top Selling Item", status: 0, complete: false,},
    ],
  },
  {
    date: "20230527",
    status: 0,
    tasks: [],
  },
];

export const fetchAll = async () => {
  return new Promise((resolve) => {
    return resolve(mock);
  });
};

export const fetchTasksByDate = (date) => {
  return new Promise((resolve) => {
    return resolve(mock.filter((t) => t.date === date));
  });
};

export const fetchByTaskId = (id) => {
  return new Promise((resolve) => {
    const task = mock.find((i) => i.tasks.find((y) => y.id === Number(id)));
    if (task && task.tasks.length > 0) {
      return resolve(task.tasks.find((t) => t.id === Number(id)));
    }
    return resolve(undefined);
  });
};
