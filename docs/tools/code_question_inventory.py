#!/usr/bin/env python3
"""
コード付き問題の目視・手動検証用リストを出力する補助ツール。
Javaの断片コードはそのままでは単独コンパイルできない場合があるため、
このツールは自動判定ではなく、検証対象の抽出に使う。
"""
import json, re, pathlib
root = pathlib.Path(__file__).resolve().parents[1]
text = (root / "data" / "questions.js").read_text(encoding="utf-8")
data = json.loads(re.search(r"window\.JAVA_STUDY_DATA\s*=\s*(\{.*\});?\s*$", text, re.S).group(1))
rows=[]
for unit, questions in data["questions"].items():
    for q in questions:
        if q.get("codeBlocks"):
            rows.append((unit, q["id"], q.get("title",""), ",".join(q.get("tags",[]))))
print("unit,id,title,tags")
for row in rows:
    print(",".join('"'+str(x).replace('"','""')+'"' for x in row))
print(f"# code questions: {len(rows)}", file=__import__('sys').stderr)
