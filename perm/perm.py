def perms(string):
    result = set([string])
    if len(string) == 2:
        result.add(string[1] + string[0])

    elif len(string) > 2:
        for idx, num in enumerate(string):
            for perm in perms(string[:idx] + string[idx+1:]):
                result.add(num + perm)

    return list(result)

print(perms('aabb'))
print(perms('ab'))
print(perms('aab'))