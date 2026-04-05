export type Todo = {
  id: string;
  date_created: string;
  text: string;
  isDone: boolean;
};

export const fakeTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    date_created: new Date("2024-01-10T09:15:00").toISOString(),
    text: "Buy groceries",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    date_created: new Date("2024-01-11T14:30:00").toISOString(),
    text: "Finish React project",
    isDone: true,
  },
  {
    id: crypto.randomUUID(),
    date_created: new Date("2024-01-12T08:00:00").toISOString(),
    text: "Clean the house",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    date_created: new Date("2024-01-13T19:45:00").toISOString(),
    text: "Read 20 pages of a book",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    date_created: new Date("2024-01-14T11:20:00").toISOString(),
    text: "Go for a 30-minute walk",
    isDone: true,
  },
];
