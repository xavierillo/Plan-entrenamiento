import os, html

ROOT = "."
out = []
out.append("""<!doctype html><html lang="es"><meta charset="utf-8">
<title>Índice — Plan de entrenamiento</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
body{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;max-width:1000px;margin:40px auto;padding:0 16px}
h2{border-bottom:1px solid #eee;padding-bottom:6px;margin-top:28px}
ul{columns:2;-webkit-columns:2;-moz-columns:2}
li{break-inside:avoid;margin:4px 0}
a{text-decoration:none}
a:hover{text-decoration:underline}
</style><body><h1>Índice — Plan de entrenamiento</h1>""")

sections = {}
for dirpath, _, files in os.walk(ROOT):
    if dirpath.startswith("./.git"): 
        continue
    htmls = [f for f in files if f.lower().endswith(".html")]
    if not htmls: 
        continue
    rel_dir = os.path.relpath(dirpath, ROOT).replace("\\","/")
    sections.setdefault(rel_dir, [])
    for f in sorted(htmls):
        href = f if rel_dir == "." else f"{rel_dir}/{f}"
        sections[rel_dir].append((href, f))

for rel_dir in sorted(sections.keys()):
    title = "Raíz" if rel_dir == "." else rel_dir
    out.append(f"<h2>{html.escape(title)}</h2><ul>")
    for href, name in sections[rel_dir]:
        out.append(f'<li><a href="{html.escape(href)}">{html.escape(name)}</a></li>')
    out.append("</ul>")

out.append("</body></html>")
with open("index.html","w",encoding="utf-8") as f:
    f.write("\n".join(out))
print("Listo: index.html generado.")
