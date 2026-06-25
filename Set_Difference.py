import sys

def main():
    data = sys.stdin.buffer
    MOD = 10 ** 9 + 7
    t = int(data.readline())
    out = []
    for _ in range(t):
        n = int(data.readline())
        a = list(map(int, data.readline().split()))
        a.sort()
        pow2 = [1] * n
        for i in range(1, n):
            pow2[i] = pow2[i - 1] * 2 % MOD
        ans = 0
        for i in range(n):
            coef = (pow2[i] - pow2[n - 1 - i]) % MOD
            ans = (ans + a[i] * coef) % MOD
        out.append(str(ans % MOD))
    sys.stdout.write("\n".join(out) + "\n")

main()
