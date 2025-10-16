# ------------------------🧮 String Methods

# s = " Hello World "
# s.strip()       # Removes spaces
# s.lower()       # "hello world"
# s.upper()       # "HELLO WORLD"
# s.replace("World", "Nihal")  # " Hello Nihal "
# s.split()       # ['Hello', 'World']
# s.find("o")     # Returns first index of 'o'
# s.count("l")    # Counts number of 'l'
# s.startswith("H")
# s.endswith("d")


# -------------------------🔢 List Methods

# nums = [1, 2, 3]
# nums.append(4)        # [1, 2, 3, 4]
# nums.insert(1, 10)    # [1, 10, 2, 3, 4]
# nums.remove(2)        # Removes first 2
# nums.pop()            # Removes last element
# nums.sort()           # Sorts list
# nums.reverse()        # Reverses order
# nums.index(10)        # Returns index of 10
# nums.count(1)         # Counts how many 1s


# -------------------------🧰 Dictionary Methods

# data = {"name": "Nihal", "age": 20}
# data.get("name")          # "Nihal"
# data.keys()               # dict_keys(['name', 'age'])
# data.values()             # dict_values(['Nihal', 20])
# data.items()              # dict_items([('name', 'Nihal'), ('age', 20)])
# data.update({"age": 21})  # Updates key
# data.pop("name")          # Removes key
# data.clear()              # Empties dictionary

# -------------------------🧮 Set Methods

# s1 = {1, 2, 3}
# s2 = {3, 4, 5}
# s1.add(4)
# s1.remove(2)
# s1.union(s2)          # {1,2,3,4,5}
# s1.intersection(s2)   # {3,4}
# s1.difference(s2)     # {1,2}

# -------------------------📁 File Methods

# f = open("data.txt", "w")
# f.write("Hello World")
# f.close()

# f = open("data.txt", "r")
# content = f.read()
# f.close()

# ------------------🧠 Built-in Utility Methods

# These are not part of any object but used everywhere.

# len([1, 2, 3])          # 3
# sum([1, 2, 3])          # 6
# max([1, 2, 3])          # 3
# min([1, 2, 3])          # 1
# sorted([3, 1, 2])       # [1, 2, 3]
# type("Hi")              # <class 'str'>
# isinstance(5, int)      # True
# range(5)                # 0 to 4