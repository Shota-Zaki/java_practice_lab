import json, re, sys
from pathlib import Path
root = Path(__file__).resolve().parents[1]
text = (root / 'data' / 'questions.js').read_text(encoding='utf-8')
m = re.search(r'window\.JAVA_STUDY_DATA\s*=\s*(\{.*\});\s*$', text, re.S)
if not m:
    raise SystemExit('questions.js の形式を読み取れません')
data = json.loads(m.group(1))
errors = []
ids = set()
for unit in data.get('units', []):
    qs = data.get('questions', {}).get(unit['id'], [])
    if unit.get('mode') == 'exam':
        if len(qs) != 60: errors.append(f"{unit['id']}: 模試は60問固定だが {len(qs)}問")
        if unit.get('timeLimitMinutes') != 90: errors.append(f"{unit['id']}: 模試時間が90分ではない")
    for q in qs:
        if q['id'] in ids: errors.append(f"ID重複: {q['id']}")
        ids.add(q['id'])
        keys = {o.get('key') for o in q.get('options', [])}
        for ans in q.get('answer', []):
            if ans not in keys: errors.append(f"{q['id']}: 正解キー {ans} が選択肢にない")
        if q.get('type') == 'multi' and q.get('selectCount') != len(q.get('answer', [])):
            errors.append(f"{q['id']}: selectCount と answer 数が不一致")
        if not q.get('tags'): errors.append(f"{q['id']}: tags が空")
        if not q.get('difficulty'): errors.append(f"{q['id']}: difficulty が空")
        exp = q.get('explanation') or {}
        if not exp.get('summary') or not exp.get('points'):
            errors.append(f"{q['id']}: 解説が不足")
        hay = json.dumps(q, ensure_ascii=False)
        if '判定手順' in hay:
            errors.append(f"{q['id']}: 固定禁止文 '判定手順' が含まれる")
if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print(f"OK: {len(ids)}問を検査しました。")
