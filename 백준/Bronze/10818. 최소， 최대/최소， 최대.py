N = int(input())
arr = list(map(int, input().split()))

min_v = arr[0]
max_v = arr[0]

for i in range(1, N):
    if min_v > arr[i]:
        min_v = arr[i]
    if max_v < arr[i]:
        max_v = arr[i]

print(f'{min_v} {max_v}')