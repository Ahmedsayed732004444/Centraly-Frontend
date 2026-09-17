import pathlib, re

broken = re.compile(r"[À-ÿ]{2,}")

path = pathlib.Path("test.ts")
text = path.read_text(encoding="utf-8")
def fix(m):
    try:
        return m.group(0).encode("latin1").decode("utf-8")
    except UnicodeDecodeError:
        return m.group(0)
new_text = broken.sub(fix, text)
path.write_text(new_text, encoding="utf-8")
print("fixed")
