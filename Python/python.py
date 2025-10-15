# print("hello")
 
# ------------Data Types-----------------

# a = 10	; 
# b = 10.5	 
# c = "Nihal"	 
# d = True, False 
# e =	[1, 2, 3]	 
# f = (1, 2, 3)	 
# g =	{1, 2, 3}	 
# h = {"name": "Nihal", "age": 22}

# print(a,b,c,d,e,f,g,h)

# -------------if else -----------------------

# age = 14
# if age >= 20:
#     print("Yes")
# else:
#     print("No")

# -------------for in loop ---------------------

# for i in range(5):
#     print(i)

# ----------while loop----------------------

# count = 0;
# while count >= 5:
#     print(count)
#     count+1


#     def abc(a):
#         return a;

# print(abc("Hello"));

# -------------Collections Operations-----------

# numbers = [1, 2, 3, 4]
# numbers.append(5)
# print(numbers)   

# person = {"name": "Nihal", "age": 22}
# print(person["name"])

# ------------------Object-Oriented Programming (OOP) ------------

# class Person:
#     def __init__(self, name):
#         self.name = name

#     def greet(self):
#         print(f"Hello, my name is {self.name}")

# p1 = Person("Nihal")
# p1.greet()

# -------------Modules and Libraries-----------

# import math
# print(math.sqrt(16))  # 4.0

#  ----------------Error Handling --------------------------

# try:
#     x = 10 / 0
# except ZeroDivisionError:
#     print("Cannot divide by zero")

# -------------------- File Handling -----------------------------

# with open("file.txt", "w") as f:
#     f.write("Hello, world!")

# with open("file.txt", "r") as f:
#     print(f.read())


# ----------------- Keywords You Should Know ----------------

# if, else, for, while, def, class, try, except, import, from, return, with, as, break, continue, pass, lambda, in, not, and, or.



#------------------ List Comprehensions----------------

# squares = [x**2 for x in range(10)]
# print(squares)

# --------------Lambda Functions -(Anonymous)---------------

# add = lambda a, b: a + b

# ------------------Map, Filter, Reduce---------------

# nums = [1, 2, 3, 4]
# doubles = list(map(lambda x: x*2, nums))
# evens = list(filter(lambda x: x%2==0, nums))


# ----------------------- Decorators----------------------

# def greet(func):
#     def wrapper():
#         print("Hello!")
#         func()
#     return wrapper

# @greet
# def say_name():
#     print("Nihal")


# --------------Iterators & Generators------------------

# def countdown(n):
#     while n > 0:
#         yield n
#         n -= 1

# ------------List vs Tuple vs Set vs Dict--------------

# List → mutable

# Tuple → immutable

# Set → unique items

# Dict → key-value pairs

# ---------------Typing (Type Hints)------------

# def greet(name: str) -> str:
#     return f"Hello, {name}"


# ------------------Async / Await---------------

# import asyncio

# async def main():
#     print("Start")
#     await asyncio.sleep(1)
#     print("End")

# asyncio.run(main())


# ----------------------- show always last ------------------------


# 🔍 11. Popular Python Uses

# Web Development – Django, Flask

# Data Science – Pandas, NumPy, Matplotlib

# Machine Learning – Scikit-learn, TensorFlow

# Automation/Scripting – Selenium, OS, Sys

# Game Development – Pygame