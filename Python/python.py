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


# -----------List unpacking / extended unpacking

# a, *b, c = [1, 2, 3, 4, 5]
# print(a, b, c)  # 1 [2, 3, 4] 5


# --------------Ternary expressions

# age = 18
# msg = "Adult" if age >= 18 else "Minor"
# print(msg)

# ----------Multiple assignment

# x = y = z = 10
# a, b = 1, 2

# ----------------F-strings

# name, age = "Nihal", 22
# print(f"My name is {name} and I'm {age}")

# ----------Walrus operator (:=) — assign inside expressions

# if (n := len("Python")) > 3:
#     print(n)

# ------------List comprehensions

# squares = [x**2 for x in range(10)]

# ----------Dictionary comprehensions
# squares = {x: x**2 for x in range(5)}

# ----------Set comprehensions

# unique = {ch for ch in "hello"}

# -------------Namedtuple

# from collections import namedtuple

# Point = namedtuple("Point", "x y")
# p = Point(10, 20)

# ------------defaultdict

# from collections import defaultdict

# d = defaultdict(int)
# d["a"] += 1

# -------------Args & kwargs

# def greet(*names, **details):
#     print(names, details)

# greet("A", "B", age=22, country="India")

# ----------Function aliasing

# def hello(): print("hi")
# say = hello
# say()

# ---------Closures (state inside function)

# def counter():
#     count = 0
#     def inc():
#         nonlocal count
#         count += 1
#         return count
#     return inc

# c = counter()
# print(c(), c())  # 1 2

# --------Decorators with arguments

# def repeat(n):
#     def wrapper(func):
#         def inner(*args):
#             for _ in range(n): func(*args)
#         return inner
#     return wrapper

# @repeat(3)
# def say_hi(): print("Hi!")

# say_hi()

# ---------Class & instance

# class Person:
#     def __init__(self, name):
#         self.name = name
#     def greet(self):
#         return f"Hi {self.name}"

# p = Person("Nihal")
# print(p.greet())

# ---------Inheritance

# class A: pass
# class B(A): pass

# -----------Class methods & static methods

# class Math:
#     @staticmethod
#     def add(x, y): return x + y

#     @classmethod
#     def info(cls): return "Math utilities"

# print(Math.add(3, 5))

# -------------Magic methods (dunder methods)

# class Point:
#     def __init__(self, x, y):
#         self.x, self.y = x, y
#     def __add__(self, other):
#         return Point(self.x + other.x, self.y + other.y)

# p1, p2 = Point(1, 2), Point(3, 4)
# print((p1 + p2).__dict__)

# ------------File & OS Operations

# import os, json, csv

# with open("data.txt", "w") as f:
#     f.write("hello")

# os.listdir(".")
# json.dump({"a": 1}, open("data.json", "w"))

# ------Iterators & Generators

# def gen():
#     yield "Hello"
#     yield "World"

# for x in gen(): print(x)

# ------Threading

# import threading

# def work(): print("Task done!")
# t = threading.Thread(target=work)
# t.start()

# ------Async/Await

# import asyncio

# async def say():
#     await asyncio.sleep(1)
#     print("Async done")

# asyncio.run(say())

# ----eval / exec

# code = "print('Executed!')"
# exec(code)

# ------getattr / setattr

# class A: pass
# setattr(A, "x", 10)
# print(getattr(A, "x"))

# -------Functional Programming Tools

# from functools import reduce
# from itertools import combinations, permutations

# nums = [1, 2, 3]
# print(reduce(lambda a, b: a + b, nums))
# print(list(permutations(nums)))

# ------Modules & Imports

# # mymodule.py
# def greet(): print("Hi")

# # main.py
# import mymodule
# mymodule.greet()

# ------Typing & Annotations

# from typing import List, Tuple, Dict

# def add(nums: List[int]) -> int:
#     return sum(nums)


# ------Error Handling

# try:
#     1 / 0
# except ZeroDivisionError as e:
#     print("Can't divide by zero")
# finally:
#     print("Done")