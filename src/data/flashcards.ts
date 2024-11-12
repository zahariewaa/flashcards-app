export interface Flashcard {
  id: number;
  category: string;
  question: string;
  answer: string;
  explanation: string;
  code?: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    category: "Syntax",
    question: "How do you write a single-line comment in Python?",
    answer: "Using the # symbol",
    explanation: "Comments in Python start with # and continue to the end of the line",
    code: "# This is a comment in Python"
  },
  {
    id: 2,
    category: "Data Types",
    question: "What is the result of type([1, 2, 3])?",
    answer: "<class 'list'>",
    explanation: "Lists are mutable sequences in Python, created using square brackets",
    code: "my_list = [1, 2, 3]\nprint(type(my_list))"
  },
  {
    id: 3,
    category: "Functions",
    question: "How do you define a function in Python?",
    answer: "Using the def keyword",
    explanation: "Functions are defined using 'def', followed by the function name and parameters",
    code: "def greet(name):\n    return f'Hello, {name}!'"
  },
  {
    id: 4,
    category: "Data Types",
    question: "What is the difference between a tuple and a list?",
    answer: "Tuples are immutable, lists are mutable",
    explanation: "Tuples use parentheses () and can't be changed after creation, lists use brackets [] and can be modified",
    code: "tuple_example = (1, 2, 3)\nlist_example = [1, 2, 3]"
  },
  {
    id: 5,
    category: "Syntax",
    question: "How do you write a multi-line string in Python?",
    answer: "Using triple quotes (''' or \"\"\")",
    explanation: "Triple quotes allow strings to span multiple lines while preserving formatting",
    code: "'''This is a\nmulti-line\nstring'''"
  }
];