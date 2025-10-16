#  ----------Higher-Order Functions (functions that take or return functions)

# def apply_twice(func, value):
#     return func(func(value))

# print(apply_twice(lambda x: x + 2, 5))  # 9


# ---------------Lambda Functions (like JS arrow functions)
# add = lambda x, y: x + y
# print(add(2, 3))  # 5



# -----------------Partial Functions (preset values — like function.bind in JS)
# from functools import partial

# def power(base, exp):
#     return base ** exp

# square = partial(power, exp=2)
# print(square(5))  # 25


# ------------------Decorators (like higher-order functions with extra power)
# def greet(func):
#     def wrapper():
#         print("Hello!")
#         func()
#         print("Goodbye!")
#     return wrapper

# @greet
# def say_name():
#     print("I'm Nihal")

# say_name()


# -----------------Currying (step-by-step function calls)
# def add(a):
#     def inner(b):
#         def final(c):
#             return a + b + c
#         return final
#     return inner

# print(add(1)(2)(3))  # 6


# -------------------Closures

# A function inside another function that remembers variables.

# def multiplier(factor):
#     def multiply(number):
#         return number * factor
#     return multiply

# times3 = multiplier(3)
# print(times3(5))  # 15