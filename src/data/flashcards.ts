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
  },
  {
    id: 6,
    category: "Loops",
    question: "How do you write a 'for' loop in Python?",
    answer: "Using 'for' keyword followed by variable and iterable",
    explanation: "The 'for' loop iterates over each item in an iterable (e.g., list, tuple, string)",
    code: "for item in [1, 2, 3]:\n    print(item)"
  },
  {
    id: 7,
    category: "Conditionals",
    question: "What is the syntax for an 'if' statement in Python?",
    answer: "Using 'if' followed by a condition and a colon",
    explanation: "'If' statements check conditions and execute code only if the condition is true",
    code: "if x > 10:\n    print('x is greater than 10')"
  },
  {
    id: 8,
    category: "Data Types",
    question: "How do you define a dictionary in Python?",
    answer: "Using curly braces with key-value pairs",
    explanation: "Dictionaries use curly braces {} and store key-value pairs",
    code: "my_dict = {'name': 'Alice', 'age': 25}"
  },
  {
    id: 9,
    category: "Operators",
    question: "What does the '==' operator do?",
    answer: "Checks if two values are equal",
    explanation: "The '==' operator compares two values and returns True if they are equal",
    code: "5 == 5  # True\n5 == 3  # False"
  },
  {
    id: 10,
    category: "Functions",
    question: "What is a lambda function in Python?",
    answer: "An anonymous function defined with the lambda keyword",
    explanation: "Lambda functions are small anonymous functions that are often used as inline functions",
    code: "multiply = lambda x, y: x * y\nprint(multiply(2, 3))  # 6"
  },
  {
    id: 11,
    category: "File Handling",
    question: "How do you open a file in Python?",
    answer: "Using the 'open' function",
    explanation: "The 'open' function opens a file in the specified mode (e.g., read, write)",
    code: "with open('file.txt', 'r') as file:\n    content = file.read()"
  },
  {
    id: 12,
    category: "Error Handling",
    question: "How do you handle exceptions in Python?",
    answer: "Using 'try' and 'except' blocks",
    explanation: "'Try' and 'except' blocks allow you to handle errors gracefully",
    code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
  },
  {
    id: 13,
    category: "Modules",
    question: "How do you import a module in Python?",
    answer: "Using the 'import' keyword",
    explanation: "Modules can be imported using 'import' and used for additional functionality",
    code: "import math\nprint(math.sqrt(16))"
  },
  {
    id: 14,
    category: "Data Types",
    question: "What is the difference between 'None' and '0'?",
    answer: "'None' is a null value; '0' is a numeric value",
    explanation: "'None' represents the absence of a value, while '0' is an integer",
    code: "x = None\ny = 0\nprint(x is None)  # True\nprint(y == 0)  # True"
  },
  {
    id: 15,
    category: "Loops",
    question: "How do you write a 'while' loop in Python?",
    answer: "Using 'while' keyword followed by a condition",
    explanation: "'While' loops execute as long as a condition is true",
    code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1"
  },
  {
    id: 16,
    category: "Syntax",
    question: "How do you create a variable in Python?",
    answer: "Assign a value to a variable name with '='",
    explanation: "Variables store data values and are created when you assign a value to them",
    code: "x = 5\nname = 'Alice'"
  },
  {
    id: 17,
    category: "Operators",
    question: "What does the '!=' operator do?",
    answer: "Checks if two values are not equal",
    explanation: "'!=' compares two values and returns True if they are not equal",
    code: "5 != 3  # True\n5 != 5  # False"
  },
  {
    id: 18,
    category: "Data Types",
    question: "What is a set in Python?",
    answer: "An unordered collection of unique elements",
    explanation: "Sets are used to store multiple unique items and use curly braces {}",
    code: "my_set = {1, 2, 3}\nprint(my_set)"
  },
  {
    id: 19,
    category: "Conditionals",
    question: "What is an 'elif' statement in Python?",
    answer: "An additional condition after an 'if' statement",
    explanation: "'Elif' allows multiple conditions to be checked sequentially",
    code: "x = 5\nif x > 10:\n    print('Greater')\nelif x == 5:\n    print('Equal')"
  },
  {
    id: 20,
    category: "Functions",
    question: "How do you add a default parameter to a function?",
    answer: "Assign a default value in the function definition",
    explanation: "Default parameters are used when an argument is not provided",
    code: "def greet(name='Guest'):\n    print(f'Hello, {name}!')\ngreet()  # Hello, Guest!"
  },
  {
    id: 21,
    category: "String Manipulation",
    question: "How do you convert a string to uppercase?",
    answer: "Using the .upper() method",
    explanation: "The .upper() method converts all characters in a string to uppercase",
    code: "name = 'alice'\nprint(name.upper())  # ALICE"
  },
  {
    id: 22,
    category: "String Manipulation",
    question: "How do you find the length of a string?",
    answer: "Using the len() function",
    explanation: "The len() function returns the number of characters in a string",
    code: "name = 'Alice'\nprint(len(name))  # 5"
  },
  {
    id: 23,
    category: "Operators",
    question: "What does the '%' operator do?",
    answer: "Finds the remainder of division",
    explanation: "'%' is called the modulus operator and returns the remainder of a division",
    code: "10 % 3  # 1"
  },
  {
    id: 24,
    category: "Data Types",
    question: "What is the result of type({'a': 1, 'b': 2})?",
    answer: "<class 'dict'>",
    explanation: "Curly braces with key-value pairs define a dictionary in Python",
    code: "my_dict = {'a': 1, 'b': 2}\nprint(type(my_dict))"
  },
  {
    id: 25,
    category: "File Handling",
    question: "How do you write to a file in Python?",
    answer: "Using the 'open' function with mode 'w' or 'a'",
    explanation: "'w' mode writes to a file, 'a' appends to it",
    code: "with open('file.txt', 'w') as file:\n    file.write('Hello, world!')"
  },
  {
    id: 26,
    category: "Data Structures",
    question: "How do you create a list comprehension in Python?",
    answer: "Using brackets with an expression and a loop",
    explanation: "List comprehensions provide a concise way to create lists",
    code: "[x**2 for x in range(5)]  # [0, 1, 4, 9, 16]"
  },
  {
    id: 27,
    category: "Modules",
    question: "What does the random module do?",
    answer: "Provides functions to generate random numbers and choices",
    explanation: "The random module is used to produce random data",
    code: "import random\nprint(random.randint(1, 10))"
  },
  {
    id: 28,
    category: "Error Handling",
    question: "What does the 'finally' block do?",
    answer: "Executes code regardless of an exception occurring or not",
    explanation: "'Finally' ensures code runs whether or not an error is encountered",
    code: "try:\n    x = 1 / 0\nexcept:\n    print('Error')\nfinally:\n    print('End')"
  },
  {
    id: 29,
    category: "File Handling",
    question: "How do you read a file line by line?",
    answer: "Using a 'for' loop with the file object",
    explanation: "Iterating over a file object reads it line by line",
    code: "with open('file.txt', 'r') as file:\n    for line in file:\n        print(line)"
  },
  {
    id: 30,
    category: "Libraries",
    question: "What does 'import numpy as np' do?",
    answer: "Imports the numpy library with the alias 'np'",
    explanation: "Alias names make library functions quicker to type",
    code: "import numpy as np\narr = np.array([1, 2, 3])"
  },
  {
    id: 31,
    category: "Libraries",
    question: "What is Pandas used for in Python?",
    answer: "Data manipulation and analysis",
    explanation: "Pandas provides data structures like DataFrames to handle tabular data",
    code: "import pandas as pd\npd.DataFrame({'A': [1, 2], 'B': [3, 4]})"
  },
  {
    id: 32,
    category: "Loops",
    question: "How do you iterate over dictionary items?",
    answer: "Using .items() in a 'for' loop",
    explanation: "The .items() method returns key-value pairs",
    code: "my_dict = {'a': 1, 'b': 2}\nfor key, value in my_dict.items():\n    print(key, value)"
  },
  {
    id: 33,
    category: "Conditionals",
    question: "How do you write a ternary conditional in Python?",
    answer: "Using 'a if condition else b'",
    explanation: "Ternary conditionals are shorthand for 'if-else' statements",
    code: "x = 10\ny = 'big' if x > 5 else 'small'"
  },
  {
    id: 34,
    category: "String Manipulation",
    question: "How do you replace substrings in a string?",
    answer: "Using .replace() method",
    explanation: "The .replace() method replaces specified substrings",
    code: "text = 'Hello world'\ntext.replace('world', 'Python')  # Hello Python"
  },
  {
    id: 35,
    category: "Data Types",
    question: "What does type(None) return?",
    answer: "<class 'NoneType'>",
    explanation: "None represents the absence of a value in Python",
    code: "x = None\nprint(type(x))"
  },
  {
    id: 36,
    category: "Data Types",
    question: "What is a dictionary comprehension?",
    answer: "A compact way to create dictionaries using an expression inside curly braces",
    explanation: "Dictionary comprehensions create dictionaries with specific key-value pairs.",
    code: "{x: x**2 for x in range(5)}  // {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    id: 37,
    category: "Error Handling",
    question: "What does 'raise' do in Python?",
    answer: "Raises a specific exception",
    explanation: "'raise' is used to trigger a custom error in your code.",
    code: "if x < 0:\n    raise ValueError('x must be non-negative')"
  },
  {
    id: 38,
    category: "Functions",
    question: "What does the 'lambda' keyword do?",
    answer: "Creates an anonymous function",
    explanation: "Lambda functions are short functions without a name, usually for single-use cases.",
    code: "double = lambda x: x * 2\nprint(double(5))  // 10"
  },
  {
    id: 39,
    category: "File Handling",
    question: "How do you check if a file exists?",
    answer: "Using os.path.exists()",
    explanation: "os.path.exists() checks for a file’s existence without opening it.",
    code: "import os\nprint(os.path.exists('file.txt'))"
  },
  {
    id: 40,
    category: "Loops",
    question: "How do you use a 'while' loop?",
    answer: "Repeats code while a condition is True",
    explanation: "'while' loops keep running until the condition becomes False.",
    code: "x = 5\nwhile x > 0:\n    print(x)\n    x -= 1"
  },
  {
    id: 41,
    category: "Libraries",
    question: "What is Matplotlib used for?",
    answer: "Creating static, animated, and interactive visualizations",
    explanation: "Matplotlib is a comprehensive library for creating various types of graphs.",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()"
  },
  {
    id: 42,
    category: "Data Handling",
    question: "How do you load a CSV file with Pandas?",
    answer: "Using pd.read_csv()",
    explanation: "pd.read_csv() loads CSV data into a DataFrame for easy data manipulation.",
    code: "import pandas as pd\ndata = pd.read_csv('data.csv')"
  },
  {
    id: 43,
    category: "Conditionals",
    question: "What does 'is' check in Python?",
    answer: "Checks if two references point to the same object",
    explanation: "'is' checks identity, while '==' checks equality.",
    code: "x = [1, 2, 3]\ny = x\nprint(x is y)  # True"
  },
  {
    id: 44,
    category: "Data Structures",
    question: "What is deque in Python?",
    answer: "A double-ended queue from the collections module",
    explanation: "Deque allows fast appends and pops from both ends.",
    code: "from collections import deque\nd = deque([1, 2, 3])\nd.appendleft(0)\nprint(d)"
  },
  {
    id: 45,
    category: "Data Types",
    question: "How do you make a shallow copy of a list?",
    answer: "Using list slicing or list.copy()",
    explanation: "Shallow copies create new lists with the same elements, but don't duplicate nested objects.",
    code: "original = [1, 2, 3]\nshallow_copy = original[:]"
  },
  {
    id: 46,
    category: "Loops",
    question: "What does 'break' do in a loop?",
    answer: "Exits the loop immediately",
    explanation: "'break' is used to exit a loop based on a condition.",
    code: "for num in range(10):\n    if num == 5:\n        break\n    print(num)"
  },
  {
    id: 47,
    category: "Data Types",
    question: "How do you create a frozenset?",
    answer: "Using frozenset() function",
    explanation: "Frozenset is an immutable version of a set.",
    code: "my_frozenset = frozenset([1, 2, 3])\nprint(my_frozenset)"
  },
  {
    id: 48,
    category: "Libraries",
    question: "What is Seaborn used for?",
    answer: "Statistical data visualization",
    explanation: "Seaborn builds on Matplotlib and provides a high-level interface for drawing attractive plots.",
    code: "import seaborn as sns\nsns.histplot(data=[1, 2, 2, 3, 3, 3, 4])"
  },
  {
    id: 49,
    category: "Functions",
    question: "What is a decorator in Python?",
    answer: "A function that modifies another function",
    explanation: "Decorators add functionality to functions in a reusable way.",
    code: "def my_decorator(func):\n    def wrapper():\n        print('Something')\n        func()\n    return wrapper"
  },
  {
    id: 50,
    category: "Error Handling",
    question: "What does 'except Exception as e' do?",
    answer: "Captures an exception and assigns it to a variable",
    explanation: "The variable 'e' can be used to access the exception message.",
    code: "try:\n    x = 1 / 0\nexcept Exception as e:\n    print(e)"
  },
  {
    id: 51,
    category: "Control Flow",
    question: "What does the 'else' clause do in a 'for' loop?",
    answer: "Executes after the loop finishes without encountering a 'break'",
    explanation: "The 'else' clause in a loop runs only if the loop didn't break.",
    code: "for i in range(5):\n    if i == 3:\n        break\nelse:\n    print('Loop completed without break')"
  },
  {
    id: 52,
    category: "Data Types",
    question: "What is a 'set' in Python?",
    answer: "An unordered collection of unique items",
    explanation: "Sets are useful when you need to store unique items without duplicates.",
    code: "my_set = {1, 2, 2, 3}\nprint(my_set)  // Output: {1, 2, 3}"
  },
  {
    id: 53,
    category: "Functions",
    question: "What does the 'return' statement do?",
    answer: "Exits a function and returns a value",
    explanation: "The 'return' statement ends a function and optionally returns a value to the caller.",
    code: "def add(a, b):\n    return a + b\nprint(add(2, 3))"
  },
  {
    id: 54,
    category: "Error Handling",
    question: "How do you handle multiple exceptions?",
    answer: "Using multiple 'except' clauses",
    explanation: "Each 'except' clause can handle a specific exception.",
    code: "try:\n    # some code\nexcept ValueError:\n    print('Value error')\nexcept TypeError:\n    print('Type error')"
  },
  {
    id: 55,
    category: "Libraries",
    question: "What is SciPy used for?",
    answer: "Scientific and technical computing",
    explanation: "SciPy builds on NumPy and provides functions for optimization, integration, interpolation, and more.",
    code: "from scipy import optimize\nresult = optimize.minimize(lambda x: x**2, 0)"
  },
  {
    id: 56,
    category: "Decorators",
    question: "What is a decorator function?",
    answer: "A function that takes another function and extends its behavior",
    explanation: "Decorators add functionality to functions in a modular way.",
    code: "def my_decorator(func):\n    def wrapper():\n        print('Something')\n        func()\n    return wrapper"
  },
  {
    id: 57,
    category: "Control Flow",
    question: "How do you use a 'pass' statement?",
    answer: "A placeholder that does nothing",
    explanation: "'pass' is used when a statement is required syntactically but you want no action.",
    code: "for i in range(5):\n    if i == 3:\n        pass\n    else:\n        print(i)"
  },
  {
    id: 58,
    category: "Libraries",
    question: "What is NLTK used for?",
    answer: "Natural Language Processing",
    explanation: "NLTK provides tools for working with human language data (text).",
    code: "import nltk\nnltk.download('punkt')\nwords = nltk.word_tokenize('Hello world!')"
  },
  {
    id: 59,
    category: "Error Handling",
    question: "What does the 'finally' clause do?",
    answer: "Executes code regardless of whether an exception occurs",
    explanation: "'finally' is used to ensure some code runs at the end, no matter what.",
    code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Division by zero')\nfinally:\n    print('Cleanup')"
  },
  {
    id: 60,
    category: "Libraries",
    question: "What is TensorFlow used for?",
    answer: "Machine Learning and Deep Learning",
    explanation: "TensorFlow is a platform for building and training machine learning models.",
    code: "import tensorflow as tf\nmodel = tf.keras.models.Sequential([tf.keras.layers.Dense(1)])"
  },
  {
    id: 61,
    category: "Data Types",
    question: "What is a namedtuple?",
    answer: "A tuple with named fields",
    explanation: "Namedtuples provide a way to use tuple-like objects with named fields.",
    code: "from collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(1, 2)\nprint(p.x)"
  },
  {
    id: 62,
    category: "Libraries",
    question: "What is OpenCV used for?",
    answer: "Computer Vision",
    explanation: "OpenCV provides tools for real-time image processing.",
    code: "import cv2\nimg = cv2.imread('image.jpg')\ngray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)"
  },
  {
    id: 63,
    category: "Data Types",
    question: "What is a defaultdict?",
    answer: "A dictionary with a default value for nonexistent keys",
    explanation: "defaultdict avoids KeyErrors by setting a default value for new keys.",
    code: "from collections import defaultdict\nmy_dict = defaultdict(int)\nmy_dict['a'] += 1\nprint(my_dict['a'])"
  },
  {
    id: 64,
    category: "Control Flow",
    question: "What does 'continue' do in a loop?",
    answer: "Skips the current iteration and continues with the next one",
    explanation: "'continue' is used to skip the remaining code in a loop for that iteration.",
    code: "for i in range(5):\n    if i == 3:\n        continue\n    print(i)"
  },
  {
    id: 65,
    category: "Data Types",
    question: "How do you create a bytearray?",
    answer: "Using the bytearray() function",
    explanation: "A bytearray is a mutable sequence of bytes.",
    code: "b = bytearray([1, 2, 3])\nb[0] = 100\nprint(b)"
  },
  {
    id: 66,
    category: "Libraries",
    question: "What is SQLAlchemy used for?",
    answer: "Database ORM for Python",
    explanation: "SQLAlchemy allows you to work with databases using Python classes instead of SQL.",
    code: "from sqlalchemy import create_engine\nengine = create_engine('sqlite:///:memory:')"
  },
  {
    id: 67,
    category: "Functions",
    question: "How do you create a generator in Python?",
    answer: "Using the 'yield' keyword",
    explanation: "Generators yield values lazily, one at a time, on each function call.",
    code: "def count_up():\n    i = 0\n    while True:\n        yield i\n        i += 1"
  },
  {
    id: 68,
    category: "Data Types",
    question: "How do you convert a string to a list of characters?",
    answer: "Using the list() function",
    explanation: "The list() function breaks a string into individual characters.",
    code: "my_str = 'hello'\nchar_list = list(my_str)\nprint(char_list)"
  },
  {
    id: 69,
    category: "Libraries",
    question: "What is Flask used for?",
    answer: "Web development framework for Python",
    explanation: "Flask allows you to create lightweight web applications quickly.",
    code: "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hello():\n    return 'Hello, World!'"
  },
  {
    id: 70,
    category: "Libraries",
    question: "What is Pygame used for?",
    answer: "Game development in Python",
    explanation: "Pygame provides modules for creating games and multimedia applications.",
    code: "import pygame\npygame.init()\nwindow = pygame.display.set_mode((500, 500))"
  },
  {
    id: 71,
    category: "Libraries",
    question: "What is BeautifulSoup used for?",
    answer: "Web scraping in Python",
    explanation: "BeautifulSoup allows you to parse HTML and XML documents easily.",
    code: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<html></html>', 'html.parser')"
  },
  {
    id: 72,
    category: "Libraries",
    question: "What is Requests used for?",
    answer: "Sending HTTP requests in Python",
    explanation: "Requests simplifies HTTP request handling, allowing you to fetch web content.",
    code: "import requests\nresponse = requests.get('https://api.example.com')"
  },
  {
    id: 73,
    category: "File Handling",
    question: "How do you open a file for reading in Python?",
    answer: "Using open() with 'r' mode",
    explanation: "The 'r' mode opens a file for reading, and it’s the default mode if no mode is specified.",
    code: "with open('example.txt', 'r') as file:\n    content = file.read()"
  },
  {
    id: 74,
    category: "Data Types",
    question: "What is a 'frozenset'?",
    answer: "An immutable version of a set",
    explanation: "Like a set, but once created, a frozenset cannot be modified.",
    code: "my_frozenset = frozenset([1, 2, 3])\nprint(my_frozenset)"
  },
  {
    id: 75,
    category: "Libraries",
    question: "What is Matplotlib used for?",
    answer: "Data visualization in Python",
    explanation: "Matplotlib provides tools for creating a variety of static, animated, and interactive plots.",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()"
  },
  {
    id: 76,
    category: "Control Flow",
    question: "What is a list comprehension?",
    answer: "A way to create lists using a compact syntax",
    explanation: "List comprehensions provide a concise way to generate lists from other lists or iterables.",
    code: "[x**2 for x in range(5)]  // Output: [0, 1, 4, 9, 16]"
  },
  {
    id: 77,
    category: "Libraries",
    question: "What is Pandas used for?",
    answer: "Data manipulation and analysis",
    explanation: "Pandas is widely used for data wrangling, including handling missing values, filtering, and data aggregation.",
    code: "import pandas as pd\ndata = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})\nprint(data)"
  },
  {
    id: 78,
    category: "Data Types",
    question: "What is the 'bytes' type used for?",
    answer: "Handling binary data",
    explanation: "The bytes type represents binary data and is often used in file handling or network communication.",
    code: "binary_data = b'hello'\nprint(type(binary_data))  // Output: <class 'bytes'>"
  },
  {
    id: 79,
    category: "Libraries",
    question: "What is Seaborn used for?",
    answer: "Statistical data visualization",
    explanation: "Seaborn builds on Matplotlib and provides high-level functions for statistical graphics.",
    code: "import seaborn as sns\nsns.histplot(data=[1, 2, 2, 3, 4])\nplt.show()"
  },
  {
    id: 80,
    category: "Object-Oriented Programming",
    question: "What is 'inheritance' in Python?",
    answer: "A way to create a new class based on an existing class",
    explanation: "Inheritance allows one class to inherit the attributes and methods of another class.",
    code: "class Animal:\n    def sound(self):\n        pass\n\nclass Dog(Animal):\n    def sound(self):\n        return 'Bark'"
  },
  {
    id: 81,
    category: "Functions",
    question: "What is 'lambda' in Python?",
    answer: "An anonymous function",
    explanation: "Lambda functions are small, anonymous functions defined with the lambda keyword.",
    code: "add = lambda x, y: x + y\nprint(add(2, 3))"
  },
  {
    id: 82,
    category: "Libraries",
    question: "What is PyTorch used for?",
    answer: "Deep learning and AI research",
    explanation: "PyTorch is popular in academia and industry for building deep learning models.",
    code: "import torch\nx = torch.tensor([1, 2, 3])"
  },
  {
    id: 83,
    category: "Libraries",
    question: "What is Plotly used for?",
    answer: "Interactive visualizations",
    explanation: "Plotly allows users to create interactive, web-based data visualizations.",
    code: "import plotly.express as px\nfig = px.scatter(x=[1, 2, 3], y=[4, 5, 6])\nfig.show()"
  },
  {
    id: 84,
    category: "Data Types",
    question: "How do you create a dictionary comprehension?",
    answer: "Using a similar syntax as list comprehensions",
    explanation: "Dictionary comprehensions provide a concise way to create dictionaries.",
    code: "{x: x**2 for x in range(5)}  // Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    id: 85,
    category: "Libraries",
    question: "What is Pytest used for?",
    answer: "Testing Python code",
    explanation: "Pytest is a framework for writing and running test cases in Python.",
    code: "def test_add():\n    assert add(2, 3) == 5"
  },
  {
    id: 86,
    category: "Libraries",
    question: "What is PyPDF2 used for?",
    answer: "Manipulating PDF files",
    explanation: "PyPDF2 allows for reading, merging, and splitting PDF documents.",
    code: "import PyPDF2\nreader = PyPDF2.PdfFileReader('document.pdf')\nprint(reader.numPages)"
  },
  {
    id: 87,
    category: "Error Handling",
    question: "How do you raise a custom exception?",
    answer: "Using the 'raise' statement with an exception class",
    explanation: "You can raise exceptions for custom error conditions in your code.",
    code: "if x < 0:\n    raise ValueError('Negative value not allowed')"
  },
  {
    id: 88,
    category: "Libraries",
    question: "What is Pydantic used for?",
    answer: "Data validation and settings management",
    explanation: "Pydantic provides data validation using Python's type hints.",
    code: "from pydantic import BaseModel\nclass User(BaseModel):\n    name: str\n    age: int"
  },
  {
    id: 89,
    category: "Concurrency",
    question: "What is multithreading?",
    answer: "Running multiple threads within the same process",
    explanation: "Multithreading allows tasks to run concurrently to improve performance.",
    code: "import threading\ndef print_number():\n    print('Number')\nthread = threading.Thread(target=print_number)\nthread.start()"
  },
  {
    id: 90,
    category: "Libraries",
    question: "What is SQLAlchemy ORM used for?",
    answer: "Object-relational mapping in Python",
    explanation: "SQLAlchemy ORM allows you to interact with a database using Python classes and objects instead of SQL.",
    code: "from sqlalchemy import Column, Integer, String\nclass User(Base):\n    __tablename__ = 'users'\n    id = Column(Integer, primary_key=True)\n    name = Column(String)"
  },
  {
    id: 91,
    category: "Libraries",
    question: "What is FastAPI used for?",
    answer: "Building web APIs quickly",
    explanation: "FastAPI is a web framework optimized for performance and ease of use.",
    code: "from fastapi import FastAPI\napp = FastAPI()\n@app.get('/')\nasync def root():\n    return {'message': 'Hello World'}"
  },
  {
    id: 92,
    category: "Data Types",
    question: "What is a 'complex' number in Python?",
    answer: "A number with a real and imaginary part",
    explanation: "Complex numbers are represented with a 'j' for the imaginary part.",
    code: "z = 3 + 4j\nprint(z.real, z.imag)  // Output: 3.0 4.0"
  },
  {
    id: 93,
    category: "Libraries",
    question: "What is Scikit-Image used for?",
    answer: "Image processing",
    explanation: "Scikit-Image provides tools for image processing and manipulation.",
    code: "from skimage import io, color\nimage = io.imread('image.jpg')\ngray_image = color.rgb2gray(image)"
  },
  {
    id: 94,
    category: "Libraries",
    question: "What is Dask used for?",
    answer: "Parallel computing with large datasets",
    explanation: "Dask scales data analytics and machine learning for large datasets.",
    code: "import dask.array as da\narr = da.random.random((10000, 10000), chunks=(1000, 1000))"
  },
  {
    id: 95,
    category: "Data Types",
    question: "What is a 'set' in Python?",
    answer: "An unordered collection of unique elements",
    explanation: "Sets do not allow duplicate elements and are commonly used for membership testing and removing duplicates.",
    code: "my_set = {1, 2, 3, 4}\nprint(my_set)"
  },
  {
    id: 96,
    category: "Libraries",
    question: "What is BeautifulSoup used for?",
    answer: "Web scraping",
    explanation: "BeautifulSoup is used for parsing HTML and XML documents to extract data from websites.",
    code: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<html><body><h1>Title</h1></body></html>', 'html.parser')\nprint(soup.h1)"
  },
  {
    id: 97,
    category: "Data Types",
    question: "What is the difference between 'deepcopy' and 'shallow copy' in Python?",
    answer: "A shallow copy copies references to objects, while a deep copy copies the objects themselves.",
    explanation: "Shallow copying creates references to the original objects, while deep copying creates independent copies.",
    code: "import copy\noriginal = [1, 2, 3]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)"
  },
  {
    id: 98,
    category: "Functions",
    question: "What is the purpose of the 'return' statement in Python?",
    answer: "To exit a function and return a value to the caller",
    explanation: "The 'return' statement is used to send a result back to the caller of the function.",
    code: "def add(x, y):\n    return x + y\nprint(add(3, 4))"
  },
  {
    id: 99,
    category: "Control Flow",
    question: "What does the 'continue' statement do in a loop?",
    answer: "Skips the current iteration and moves to the next iteration of the loop",
    explanation: "The 'continue' statement skips the rest of the code inside the loop for the current iteration and proceeds with the next iteration.",
    code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)"
  },
  {
    id: 100,
    category: "Libraries",
    question: "What is Scikit-learn used for?",
    answer: "Machine learning algorithms and data preprocessing",
    explanation: "Scikit-learn provides simple and efficient tools for predictive data analysis, including classification, regression, clustering, and more.",
    code: "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X, y)"
  }
];