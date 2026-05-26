window.JAVA_STUDY_SPLIT = window.JAVA_STUDY_SPLIT || {};
window.JAVA_STUDY_SPLIT['unit08'] = [
  {
    "id": "unit08-001",
    "number": 1,
    "title": "未初期化ローカル変数とフィールド",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static int count;\n    public static void main(String[] args) {\n        int count;\n        if (args.length > 1) {\n            count = args.length;\n        }\n        System.out.println(count + Main.count);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。ローカル変数`count`は、if文に入らない経路では初期化されません。フィールド`Main.count`のデフォルト値とは別物です。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：ローカル変数`count`は、if文に入らない経路では初期化されません。フィールド`Main.count`のデフォルト値とは別物です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：フィールドにはデフォルト値がありますが、ローカル変数は使用前に確実に初期化されている必要があります。",
        "試験での注意：同名のローカル変数がフィールドを隠しているとき、デフォルト値の有無を混同しないでください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "compile",
      "variable",
      "static"
    ]
  },
  {
    "id": "unit08-002",
    "number": 2,
    "title": "起動引数と配列アクセス",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムを `java Main A B` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String... args) {\n        System.out.println(args[1] + \":\" + args.length);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A:2"
      },
      {
        "key": "B",
        "text": "B:2"
      },
      {
        "key": "C",
        "text": "B:1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`String... args`は`String[] args`と同じ扱いです。`args[1]`は2番目の起動引数`B`、`args.length`は2です。",
      "points": [
        "正解：B：B:2",
        "正解になる理由：`String... args`は`String[] args`と同じ扱いです。`args[1]`は2番目の起動引数`B`、`args.length`は2です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：起動引数にクラス名は含まれません。",
        "試験での注意：`args[0]`が1個目、`args[1]`が2個目です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "args",
      "array",
      "output"
    ]
  },
  {
    "id": "unit08-003",
    "number": 3,
    "title": "小さい整数型の複合代入",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        byte b = 11;\n        b += 5;\n        b = b + 1;\n        System.out.println(b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "17"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`b += 5`は暗黙のキャストを含むため可能ですが、`b = b + 1`の右辺はintになり、byteへ暗黙代入できません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`b += 5`は暗黙のキャストを含むため可能ですが、`b = b + 1`の右辺はintになり、byteへ暗黙代入できません。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：`+=`と通常代入は同じに見えて型変換の扱いが違います。",
        "試験での注意：byte/short/charの算術演算は基本的にintになります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "type",
      "operator",
      "compile"
    ]
  },
  {
    "id": "unit08-004",
    "number": 4,
    "title": "前置後置インクリメント",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 1;\n        int y = x++ + ++x + x++;\n        System.out.println(x + \":\" + y);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "4:6"
      },
      {
        "key": "B",
        "text": "4:7"
      },
      {
        "key": "C",
        "text": "3:6"
      },
      {
        "key": "D",
        "text": "3:7"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`x++`は値を使ってから増加、`++x`は増加してから値を使います。計算は1 + 3 + 3でyは7、最終的にxは4です。",
      "points": [
        "正解：B：4:7",
        "正解になる理由：`x++`は値を使ってから増加、`++x`は増加してから値を使います。計算は1 + 3 + 3でyは7、最終的にxは4です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：式の評価は左から右へ進みます。",
        "試験での注意：暗算でまとめず、各項の使用値と更新後の値を分けて追ってください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "operator",
      "output"
    ]
  },
  {
    "id": "unit08-005",
    "number": 5,
    "title": "短絡評価と副作用",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static int n = 0;\n    static boolean a() { n += 1; return false; }\n    static boolean b() { n += 10; return true; }\n    public static void main(String[] args) {\n        if (a() && b() || b()) {\n            n += 100;\n        }\n        System.out.println(n);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "101"
      },
      {
        "key": "D",
        "text": "111"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`a()`はfalseを返すため`a() && b()`の右側の`b()`は実行されません。その後`|| b()`の`b()`は実行され、条件全体がtrueになり100が加算されます。",
      "points": [
        "正解：D：111",
        "正解になる理由：`a()`はfalseを返すため`a() && b()`の右側の`b()`は実行されません。その後`|| b()`の`b()`は実行され、条件全体がtrueになり100が加算されます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：`&&`と`||`は短絡評価します。",
        "試験での注意：メソッド呼び出しに副作用がある場合、実行されるかどうかが出力に直結します。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "operator",
      "control",
      "output"
    ]
  },
  {
    "id": "unit08-006",
    "number": 6,
    "title": "switch文のフォールスルー",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        String s = \"\";\n        switch (n) {\n            case 1: s += \"A\";\n            case 2: s += \"B\";\n            case 3: s += \"C\"; break;\n            default: s += \"D\";\n        }\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "BC"
      },
      {
        "key": "D",
        "text": "C"
      },
      {
        "key": "E",
        "text": "BCD"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。nが3なのでcase 3だけを実行してbreakするため`C`です。",
      "points": [
        "正解：D：C",
        "正解になる理由：nが3なのでcase 3だけを実行してbreakするため`C`です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：switch文では`break`がないcaseから次のcaseへ処理が落ちます。",
        "試験での注意：caseに一致した時点から下へ流れる点を確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "switch",
      "control",
      "output"
    ]
  },
  {
    "id": "unit08-007",
    "number": 7,
    "title": "switch式とyield",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        String rank = switch (score / 10) {\n            case 10, 9 -> \"S\";\n            case 8 -> \"A\";\n            case 7 -> { yield \"B\"; }\n            default -> \"C\";\n        };\n        System.out.println(rank);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "S"
      },
      {
        "key": "B",
        "text": "A"
      },
      {
        "key": "C",
        "text": "B"
      },
      {
        "key": "D",
        "text": "C"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`score / 10`は7です。case 7のブロックでは`yield \"B\"`によりswitch式の値が`B`になります。",
      "points": [
        "正解：C：B",
        "正解になる理由：`score / 10`は7です。case 7のブロックでは`yield \"B\"`によりswitch式の値が`B`になります。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：switch式のブロックでは値を返すために`yield`を使います。",
        "試験での注意：switch文とswitch式を混同しないでください。式は値を生成します。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "switch",
      "output"
    ]
  },
  {
    "id": "unit08-008",
    "number": 8,
    "title": "配列のデフォルト値とNullPointerException",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] data = new String[3];\n        data[1] = \"A\";\n        for (String s : data) {\n            System.out.print(s.length());\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "010"
      },
      {
        "key": "C",
        "text": "null1null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`data[0]`と`data[2]`はnullです。最初の要素で`s.length()`を呼ぶ時点でNullPointerExceptionが発生します。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`data[0]`と`data[2]`はnullです。最初の要素で`s.length()`を呼ぶ時点でNullPointerExceptionが発生します。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：参照型配列の各要素のデフォルト値はnullです。",
        "試験での注意：拡張for文はnull要素を飛ばしません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "runtime",
      "String"
    ]
  },
  {
    "id": "unit08-009",
    "number": 9,
    "title": "ジャグ配列の長さ",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] nums = new int[2][];\n        nums[0] = new int[]{1, 2, 3};\n        nums[1] = new int[1];\n        System.out.println(nums.length + \":\" + nums[0].length + \":\" + nums[1][0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:3:0"
      },
      {
        "key": "B",
        "text": "2:1:0"
      },
      {
        "key": "C",
        "text": "3:2:0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`nums.length`は外側の長さ2、`nums[0].length`は3、`nums[1][0]`はintのデフォルト値0です。",
      "points": [
        "正解：A：2:3:0",
        "正解になる理由：`nums.length`は外側の長さ2、`nums[0].length`は3、`nums[1][0]`はintのデフォルト値0です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：二次元配列は配列の配列です。内側の長さは行ごとに異なって構いません。",
        "試験での注意：`new int[2][]`では内側配列は自動生成されませんが、ここでは明示的に代入済みです。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "output"
    ]
  },
  {
    "id": "unit08-010",
    "number": 10,
    "title": "ArrayList.removeのオーバーロード",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        var list = new ArrayList<Integer>();\n        list.add(1); list.add(2); list.add(3);\n        list.remove(1);\n        list.remove(Integer.valueOf(3));\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[1]"
      },
      {
        "key": "B",
        "text": "[2]"
      },
      {
        "key": "C",
        "text": "[1, 3]"
      },
      {
        "key": "D",
        "text": "[2, 3]"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`remove(1)`はインデックス1の要素2を削除します。`remove(Integer.valueOf(3))`は要素3を削除します。残るのは`[1]`です。",
      "points": [
        "正解：A：[1]",
        "正解になる理由：`remove(1)`はインデックス1の要素2を削除します。`remove(Integer.valueOf(3))`は要素3を削除します。残るのは`[1]`です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：`remove(int index)`と`remove(Object o)`があります。",
        "試験での注意：intリテラルを渡すとインデックス削除が選ばれます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "ArrayList",
      "overload",
      "output"
    ]
  },
  {
    "id": "unit08-011",
    "number": 11,
    "title": "List.ofの変更不可リスト",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of(\"A\", \"B\");\n        list.set(0, \"C\");\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, B]"
      },
      {
        "key": "B",
        "text": "[C, B]"
      },
      {
        "key": "C",
        "text": "[B]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`List.of`が返すリストは変更不可です。`set`を呼ぶとUnsupportedOperationExceptionがスローされます。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`List.of`が返すリストは変更不可です。`set`を呼ぶとUnsupportedOperationExceptionがスローされます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：`Arrays.asList`はサイズ変更不可ですが要素の置換は可能です。`List.of`は置換も不可です。",
        "試験での注意：コンパイルは通ります。失敗するのは実行時です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "List",
      "runtime"
    ]
  },
  {
    "id": "unit08-012",
    "number": 12,
    "title": "Stringの不変性",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcde\";\n        s.replace('c', 'X');\n        s.substring(2, 4);\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "abXde"
      },
      {
        "key": "B",
        "text": "cd"
      },
      {
        "key": "C",
        "text": "cde"
      },
      {
        "key": "D",
        "text": "abcde"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`String`は不変です。`replace`や`substring`は新しい文字列を返しますが、戻り値を代入していないため`s`は`abcde`のままです。",
      "points": [
        "正解：D：abcde",
        "正解になる理由：`String`は不変です。`replace`や`substring`は新しい文字列を返しますが、戻り値を代入していないため`s`は`abcde`のままです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：破壊的変更か戻り値で新しい値を返すだけかを区別してください。",
        "試験での注意：メソッドを呼んだだけで元のStringが変わるとは考えないでください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "String",
      "output"
    ]
  },
  {
    "id": "unit08-013",
    "number": 13,
    "title": "Stringプールとintern",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String a = new String(\"java\");\n        String b = \"java\";\n        String c = a.intern();\n        System.out.println((a == b) + \":\" + (b == c) + \":\" + a.equals(c));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true:true:true"
      },
      {
        "key": "B",
        "text": "false:true:true"
      },
      {
        "key": "C",
        "text": "false:false:true"
      },
      {
        "key": "D",
        "text": "false:true:false"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`a`はnewで作られた別インスタンス、`b`は文字列プール上の参照、`c`は`intern()`でプール上の参照です。内容比較の`equals`はtrueです。",
      "points": [
        "正解：B：false:true:true",
        "正解になる理由：`a`はnewで作られた別インスタンス、`b`は文字列プール上の参照、`c`は`intern()`でプール上の参照です。内容比較の`equals`はtrueです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：`==`は参照の同一性、`equals`は内容比較です。",
        "試験での注意：Stringだけはプールの影響があるため、newの有無とinternを分けて見ます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "String",
      "reference",
      "equals"
    ]
  },
  {
    "id": "unit08-014",
    "number": 14,
    "title": "StringBuilderのequals",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder a = new StringBuilder(\"A\");\n        StringBuilder b = new StringBuilder(\"A\");\n        System.out.println((a == b) + \":\" + a.equals(b) + \":\" + a.toString().equals(b.toString()));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "false:false:true"
      },
      {
        "key": "B",
        "text": "false:true:true"
      },
      {
        "key": "C",
        "text": "true:true:true"
      },
      {
        "key": "D",
        "text": "false:false:false"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`StringBuilder`は内容比較の`equals`をオーバーライドしていません。別インスタンス同士なので`==`も`equals`もfalseです。`toString()`同士なら内容比較でtrueです。",
      "points": [
        "正解：A：false:false:true",
        "正解になる理由：`StringBuilder`は内容比較の`equals`をオーバーライドしていません。別インスタンス同士なので`==`も`equals`もfalseです。`toString()`同士なら内容比較でtrueです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：StringとStringBuilderでequalsの意味が違います。",
        "試験での注意：同じ文字列を保持していてもStringBuilder同士のequalsは内容比較ではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "StringBuilder",
      "reference",
      "equals"
    ]
  },
  {
    "id": "unit08-015",
    "number": 15,
    "title": "equals未オーバーライドの参照比較",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Box {\n    int value;\n    Box(int value) { this.value = value; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Box a = new Box(10);\n        Box b = new Box(10);\n        Box c = a;\n        System.out.println(a.equals(b) + \":\" + a.equals(c));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true:true"
      },
      {
        "key": "B",
        "text": "false:true"
      },
      {
        "key": "C",
        "text": "false:false"
      },
      {
        "key": "D",
        "text": "true:false"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`Box`は`equals`をオーバーライドしていないためObjectのequals、つまり参照比較です。`a`と`b`は別インスタンス、`a`と`c`は同じインスタンスです。",
      "points": [
        "正解：B：false:true",
        "正解になる理由：`Box`は`equals`をオーバーライドしていないためObjectのequals、つまり参照比較です。`a`と`b`は別インスタンス、`a`と`c`は同じインスタンスです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：自作クラスではequalsを実装しない限り、値が同じでも同値とは判定されません。",
        "試験での注意：フィールド値が同じかどうかではなく、equalsの実装が何かを確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "reference",
      "equals"
    ]
  },
  {
    "id": "unit08-016",
    "number": 16,
    "title": "recordのequalsとアクセサ",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "record Item(String name, int price) {}\npublic class Main {\n    public static void main(String[] args) {\n        Item a = new Item(\"pen\", 100);\n        Item b = new Item(\"pen\", 100);\n        System.out.println((a == b) + \":\" + a.equals(b) + \":\" + a.name());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "false:true:pen"
      },
      {
        "key": "B",
        "text": "true:true:pen"
      },
      {
        "key": "C",
        "text": "false:false:pen"
      },
      {
        "key": "D",
        "text": "false:true:null"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。recordは構成要素に基づく`equals`を自動生成します。ただし`a`と`b`は別インスタンスなので`==`はfalseです。アクセサは`getName()`ではなく`name()`です。",
      "points": [
        "正解：A：false:true:pen",
        "正解になる理由：recordは構成要素に基づく`equals`を自動生成します。ただし`a`と`b`は別インスタンスなので`==`はfalseです。アクセサは`getName()`ではなく`name()`です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：recordは`equals`、`hashCode`、`toString`、アクセサを自動生成します。",
        "試験での注意：JavaBeans風のgetter名を勝手に想定しないでください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "record",
      "equals",
      "reference"
    ]
  },
  {
    "id": "unit08-017",
    "number": 17,
    "title": "オーバーロードとnull",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static void test(String s) { System.out.println(\"String\"); }\n    static void test(StringBuilder s) { System.out.println(\"Builder\"); }\n    static void test(Object s) { System.out.println(\"Object\"); }\n    public static void main(String[] args) {\n        test(null);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "String"
      },
      {
        "key": "B",
        "text": "Builder"
      },
      {
        "key": "C",
        "text": "Object"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`String`と`StringBuilder`はいずれも`Object`より具体的ですが、互いに親子関係がないため、`test(null)`の最も具体的な候補を一つに決められません。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`String`と`StringBuilder`はいずれも`Object`より具体的ですが、互いに親子関係がないため、`test(null)`の最も具体的な候補を一つに決められません。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：オーバーロード解決では最も具体的なメソッドが選ばれます。",
        "試験での注意：nullはどの参照型にも代入できるため、候補が複数あると曖昧になることがあります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "overload",
      "compile"
    ]
  },
  {
    "id": "unit08-018",
    "number": 18,
    "title": "オーバーロードと型変換の優先順位",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static void test(long x) { System.out.println(\"long\"); }\n    static void test(Integer x) { System.out.println(\"Integer\"); }\n    static void test(int... x) { System.out.println(\"varargs\"); }\n    public static void main(String[] args) {\n        short s = 10;\n        test(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "long"
      },
      {
        "key": "B",
        "text": "Integer"
      },
      {
        "key": "C",
        "text": "varargs"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。`short`から`long`への拡大変換が、ボクシングや可変長引数より優先されます。",
      "points": [
        "正解：A：long",
        "正解になる理由：`short`から`long`への拡大変換が、ボクシングや可変長引数より優先されます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：オーバーロードでは拡大変換、ボクシング、可変長引数の順で候補が検討されます。",
        "試験での注意：`short`がIntegerにボクシングされるわけではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "overload",
      "type"
    ]
  },
  {
    "id": "unit08-019",
    "number": 19,
    "title": "staticメソッドからインスタンスフィールド参照",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    int value = 10;\n    static int count = 20;\n    static void print() {\n        System.out.println(value + count);\n    }\n    public static void main(String[] args) {\n        print();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。staticメソッド`print`からインスタンスフィールド`value`を直接参照しているためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：staticメソッド`print`からインスタンスフィールド`value`を直接参照しているためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：staticコンテキストには暗黙のthisがありません。",
        "試験での注意：同じクラス内でも、staticからインスタンスメンバーを直接使えるわけではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "static",
      "compile"
    ]
  },
  {
    "id": "unit08-020",
    "number": 20,
    "title": "コンストラクタ呼び出し順",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    A() { this(1); System.out.print(\"A\"); }\n    A(int n) { System.out.print(n); }\n}\nclass B extends A {\n    B() { this(2); System.out.print(\"B\"); }\n    B(int n) { System.out.print(n); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "12AB"
      },
      {
        "key": "B",
        "text": "21AB"
      },
      {
        "key": "C",
        "text": "12B"
      },
      {
        "key": "D",
        "text": "1A2B"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。暗黙のsuper呼び出しとthisによる委譲の結果、出力は1A2Bです。",
      "points": [
        "正解：D：1A2B",
        "正解になる理由：`new B()`は`B()`から`this(2)`で`B(int)`へ進み、`B(int)`の先頭で暗黙に`super()`が呼ばれます。`A()`は`this(1)`で`A(int)`を呼ぶため、出力は`1`、`A`、`2`、`B`の順です。",
        "誤答選択肢が誤りである理由：A/B/C/Dの出力順はコンストラクタ委譲と暗黙のsuper呼び出しを誤っています。実際には`A(int)`、`A()`、`B(int)`、`B()`の本体順です。",
        "関連知識：this(...)またはsuper(...)はコンストラクタの先頭にしか書けません。",
        "試験での注意：出力の順番は、呼び出しの深い方から本体が戻ってくる順で追います。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "constructor",
      "inheritance",
      "output"
    ]
  },
  {
    "id": "unit08-021",
    "number": 21,
    "title": "thisによるフィールド代入",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Sample {\n    private String value;\n    void setValue(String value) {\n        value = \"[\" + value + \"]\";\n    }\n    public String toString() { return value; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Sample s = new Sample();\n        s.setValue(\"A\");\n        System.out.println(s);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A]"
      },
      {
        "key": "B",
        "text": "A"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。引数`value`に代入しているだけで、フィールド`this.value`は変更されません。フィールドは参照型なのでデフォルト値nullです。",
      "points": [
        "正解：C：null",
        "正解になる理由：引数`value`に代入しているだけで、フィールド`this.value`は変更されません。フィールドは参照型なのでデフォルト値nullです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：引数名とフィールド名が同じ場合、フィールドは`this.value`で参照します。",
        "試験での注意：代入式の左辺がどの変数を指しているかを必ず確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "class",
      "this",
      "output"
    ]
  },
  {
    "id": "unit08-022",
    "number": 22,
    "title": "フィールド隠蔽とメソッドオーバーライド",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    int data = 10;\n    int get() { return data; }\n}\nclass B extends A {\n    int data = 20;\n    int get() { return data; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A x = new B();\n        System.out.println(x.data + \":\" + x.get());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "10:10"
      },
      {
        "key": "B",
        "text": "10:20"
      },
      {
        "key": "C",
        "text": "20:10"
      },
      {
        "key": "D",
        "text": "20:20"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。フィールドアクセスは参照変数の型`A`で決まり`x.data`は10です。メソッド呼び出しは実体`B`で動的に解決されるため`x.get()`は20です。",
      "points": [
        "正解：B：10:20",
        "正解になる理由：フィールドアクセスは参照変数の型`A`で決まり`x.data`は10です。メソッド呼び出しは実体`B`で動的に解決されるため`x.get()`は20です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：フィールドはオーバーライドされず、隠蔽されます。",
        "試験での注意：フィールドとメソッドを同じ感覚で扱うと誤ります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "inheritance",
      "reference",
      "output"
    ]
  },
  {
    "id": "unit08-023",
    "number": 23,
    "title": "privateメソッドはオーバーライドされない",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    private void print() { System.out.print(\"A\"); }\n    void call() { print(); }\n}\nclass B extends A {\n    private void print() { System.out.print(\"B\"); }\n    void callB() { print(); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        B b = new B();\n        b.call();\n        b.callB();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`A.call()`内の`print()`はAのprivateメソッドです。Bのprivateメソッドはオーバーライドではなく別メソッドなので、`call()`はA、`callB()`はBを出力します。",
      "points": [
        "正解：B：AB",
        "正解になる理由：`A.call()`内の`print()`はAのprivateメソッドです。Bのprivateメソッドはオーバーライドではなく別メソッドなので、`call()`はA、`callB()`はBを出力します。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：privateメソッドは継承されず、オーバーライド対象にもなりません。",
        "試験での注意：同じ名前でもprivateなら動的ディスパッチされません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "inheritance",
      "private",
      "output"
    ]
  },
  {
    "id": "unit08-024",
    "number": 24,
    "title": "キャストと実行時型",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {}\nclass B extends A {}\nclass C extends A {}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        C c = (C) a;\n        System.out.println(c);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "null"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。`A`型の参照を`C`へキャストする記述自体はコンパイル可能ですが、実体は`B`なので実行時にClassCastExceptionです。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：`A`型の参照を`C`へキャストする記述自体はコンパイル可能ですが、実体は`B`なので実行時にClassCastExceptionです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：キャストのコンパイル可否と実行時成功は別です。",
        "試験での注意：参照変数の型ではなく、実際に生成されたオブジェクトの型を確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "cast",
      "runtime",
      "inheritance"
    ]
  },
  {
    "id": "unit08-025",
    "number": 25,
    "title": "インタフェース実装として正しいもの",
    "type": "multiple",
    "selectCount": 2,
    "difficulty": "hard",
    "prompt": "次のインタフェースを正しく実装しているクラスを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface Task {\n    void execute();\n}\n// 以下の選択肢は、それぞれTaskを実装するクラス定義である。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "class A implements Task { public void execute() {} }"
      },
      {
        "key": "B",
        "text": "class B implements Task { void execute() {} }"
      },
      {
        "key": "C",
        "text": "abstract class C implements Task { }"
      },
      {
        "key": "D",
        "text": "class D implements Task { public int execute() { return 1; } }"
      },
      {
        "key": "E",
        "text": "class E implements Task { public void execute(String s) {} }"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": {
      "summary": "正解はA,Cです。インタフェースの抽象メソッドはpublicとして実装する必要があります。抽象クラスなら未実装のままでも可能です。",
      "points": [
        "正解：A：class A implements Task { public void execute() {} }、C：abstract class C implements Task { }",
        "正解になる理由：インタフェースの抽象メソッドはpublicとして実装する必要があります。抽象クラスなら未実装のままでも可能です。",
        "誤答選択肢が誤りである理由：Bはアクセス権を弱くしているため不可です。Dは戻り値型が違います。Eは引数があり、別メソッドのオーバーロードです。",
        "関連知識：インタフェースのメソッドは暗黙にpublic abstractです。",
        "試験での注意：実装メソッドにpublicを書き忘れる問題は頻出です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "interface",
      "compile"
    ]
  },
  {
    "id": "unit08-026",
    "number": 26,
    "title": "defaultメソッド競合",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムについて正しい説明を選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface A { default void hello() { System.out.println(\"A\"); } }\ninterface B { default void hello() { System.out.println(\"B\"); } }\nclass C implements A, B {\n    // ここには何も書かない\n}\npublic class Main {\n    public static void main(String[] args) {\n        new C().hello();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Aが表示される"
      },
      {
        "key": "B",
        "text": "Bが表示される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
      },
      {
        "key": "D",
        "text": "Cクラスでコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。同じシグネチャのdefaultメソッドを複数のインタフェースから継承するため、Cは明示的に`hello`をオーバーライドする必要があります。",
      "points": [
        "正解：D：Cクラスでコンパイルエラー",
        "正解になる理由：同じシグネチャのdefaultメソッドを複数のインタフェースから継承するため、Cは明示的に`hello`をオーバーライドする必要があります。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：クラスは競合するdefaultメソッドを自動では選びません。",
        "試験での注意：`A.super.hello()`のように呼ぶには、まずC側でメソッドを実装する必要があります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "interface",
      "default",
      "compile"
    ]
  },
  {
    "id": "unit08-027",
    "number": 27,
    "title": "sealed classの直接サブクラス",
    "type": "multiple",
    "selectCount": 2,
    "difficulty": "hard",
    "prompt": "次のうちコンパイルできる直接サブクラス宣言を選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public sealed class Base permits Child, Other { }\n// 以下の選択肢は別々にBaseの直接サブクラスとして宣言するものとする。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "public class Child extends Base {}"
      },
      {
        "key": "B",
        "text": "public final class Child extends Base {}"
      },
      {
        "key": "C",
        "text": "public non-sealed class Child extends Base {}"
      },
      {
        "key": "D",
        "text": "public final class Extra extends Base {}"
      },
      {
        "key": "E",
        "text": "public abstract class Other extends Base {}"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": {
      "summary": "正解はB,Cです。sealedクラスの許可された直接サブクラスは、`final`、`sealed`、`non-sealed`のいずれかで宣言する必要があります。`Child`はpermitsに含まれています。",
      "points": [
        "正解：B：public final class Child extends Base {}、C：public non-sealed class Child extends Base {}",
        "正解になる理由：sealedクラスの許可された直接サブクラスは、`final`、`sealed`、`non-sealed`のいずれかで宣言する必要があります。`Child`はpermitsに含まれています。",
        "誤答選択肢が誤りである理由：Aはfinal/sealed/non-sealedの指定がないため不可です。Dはpermitsにない`Extra`です。Eは指定がないabstractクラスなので不可です。",
        "関連知識：sealed階層では、直接サブクラス側にも継承方針の明示が必要です。",
        "試験での注意：permitsに名前があるだけでは足りません。サブクラス側の修飾子も確認します。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "sealed",
      "inheritance",
      "compile"
    ]
  },
  {
    "id": "unit08-028",
    "number": 28,
    "title": "abstractとfinalの組み合わせ",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のクラス宣言として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立したクラス宣言として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "final abstract class A {}"
      },
      {
        "key": "B",
        "text": "abstract class B { abstract void m(); }"
      },
      {
        "key": "C",
        "text": "class C { abstract void m(); }"
      },
      {
        "key": "D",
        "text": "abstract final class D { void m() {} }"
      },
      {
        "key": "E",
        "text": "final class E { abstract void m(); }"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。抽象メソッドを持つクラスはabstractである必要があり、`abstract class B`の宣言は正しいです。",
      "points": [
        "正解：B：abstract class B { abstract void m(); }",
        "正解になる理由：抽象メソッドを持つクラスはabstractである必要があり、`abstract class B`の宣言は正しいです。",
        "誤答選択肢が誤りである理由：AとDはfinalとabstractの同時指定が矛盾します。CとEは抽象メソッドを持つのにクラスがabstractではありません。",
        "関連知識：finalは継承禁止、abstractは継承して実装する前提です。",
        "試験での注意：メソッド本体の有無とクラス修飾子をセットで確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "class",
      "abstract",
      "compile"
    ]
  },
  {
    "id": "unit08-029",
    "number": 29,
    "title": "共変戻り値と実装",
    "type": "multiple",
    "selectCount": 2,
    "difficulty": "hard",
    "prompt": "次のインタフェースを実装するメソッドとして正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class Parent {}\nclass Child extends Parent {}\ninterface Factory {\n    Parent create();\n}\n// 以下の選択肢はFactoryを実装するクラス内のメソッドとする。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "public Parent create() { return new Parent(); }"
      },
      {
        "key": "B",
        "text": "public Child create() { return new Child(); }"
      },
      {
        "key": "C",
        "text": "public Object create() { return new Parent(); }"
      },
      {
        "key": "D",
        "text": "Parent create() { return new Parent(); }"
      },
      {
        "key": "E",
        "text": "public Parent create(String name) { return new Child(); }"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": {
      "summary": "正解はA,Bです。戻り値型は同じ`Parent`か、そのサブタイプ`Child`なら有効です。インタフェース実装なのでpublicが必要です。",
      "points": [
        "正解：A：public Parent create() { return new Parent(); }、B：public Child create() { return new Child(); }",
        "正解になる理由：戻り値型は同じ`Parent`か、そのサブタイプ`Child`なら有効です。インタフェース実装なのでpublicが必要です。",
        "誤答選択肢が誤りである理由：Cは戻り値型が広すぎます。Dはpublicでないためアクセス権が弱いです。Eは引数が違うため実装ではありません。",
        "関連知識：オーバーライドでは共変戻り値が許可されます。",
        "試験での注意：戻り値だけでなく、引数リストとアクセス修飾子も確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "override",
      "interface",
      "compile"
    ]
  },
  {
    "id": "unit08-030",
    "number": 30,
    "title": "ジェネリクスの不変性",
    "type": "multiple",
    "selectCount": 2,
    "difficulty": "hard",
    "prompt": "次のコードでコンパイルできる代入を選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\nclass A {}\nclass B extends A {}\n// 以下はそれぞれ独立した文として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "List<A> x = new ArrayList<B>();"
      },
      {
        "key": "B",
        "text": "List<? extends A> x = new ArrayList<B>();"
      },
      {
        "key": "C",
        "text": "List<? super B> x = new ArrayList<A>();"
      },
      {
        "key": "D",
        "text": "List<B> x = new ArrayList<A>();"
      },
      {
        "key": "E",
        "text": "ArrayList<A> x = new List<A>();"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": {
      "summary": "正解はB,Cです。`List<B>`は`List<A>`のサブタイプではありませんが、`? extends A`や`? super B`を使えば条件に合う代入ができます。",
      "points": [
        "正解：B：List<? extends A> x = new ArrayList<B>();、C：List<? super B> x = new ArrayList<A>();",
        "正解になる理由：`List<B>`は`List<A>`のサブタイプではありませんが、`? extends A`や`? super B`を使えば条件に合う代入ができます。",
        "誤答選択肢が誤りである理由：AとDはジェネリクスの不変性に反します。Eはインタフェース`List`をnewできません。",
        "関連知識：配列は共変ですが、ジェネリクスは基本的に不変です。",
        "試験での注意：`B extends A`でも`List<B>`を`List<A>`へ代入できません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "generics",
      "compile"
    ]
  },
  {
    "id": "unit08-031",
    "number": 31,
    "title": "配列cloneは浅いコピー",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = a.clone();\n        b[0][0] = 9;\n        b[1] = new int[]{7, 8};\n        System.out.println(a[0][0] + \":\" + a[1][0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1:3"
      },
      {
        "key": "B",
        "text": "9:3"
      },
      {
        "key": "C",
        "text": "9:7"
      },
      {
        "key": "D",
        "text": "1:7"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。外側配列はコピーされますが、内側配列の参照は共有されます。`b[0][0]`の変更は`a[0][0]`にも影響します。一方`b[1]`の差し替えは外側配列の要素差し替えなので`a[1]`には影響しません。",
      "points": [
        "正解：B：9:3",
        "正解になる理由：外側配列はコピーされますが、内側配列の参照は共有されます。`b[0][0]`の変更は`a[0][0]`にも影響します。一方`b[1]`の差し替えは外側配列の要素差し替えなので`a[1]`には影響しません。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：多次元配列のcloneは深いコピーではありません。",
        "試験での注意：内側配列を書き換えたのか、外側配列の参照を差し替えたのかを分けてください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "reference",
      "clone"
    ]
  },
  {
    "id": "unit08-032",
    "number": 32,
    "title": "チェック例外とthrows",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class MyException extends Exception {}\npublic class Main {\n    static void test() throws MyException {\n        throw new MyException();\n    }\n    public static void main(String[] args) {\n        test();\n        System.out.println(\"done\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "doneが表示される"
      },
      {
        "key": "B",
        "text": "MyExceptionが表示される"
      },
      {
        "key": "C",
        "text": "何も表示されない"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`MyException`は`Exception`を継承し、RuntimeExceptionではないためチェック例外です。`main`で捕捉するかthrows宣言が必要です。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`MyException`は`Exception`を継承し、RuntimeExceptionではないためチェック例外です。`main`で捕捉するかthrows宣言が必要です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：チェック例外はコンパイラが処理を要求します。",
        "試験での注意：メソッド側にthrowsがあるだけでは、呼び出し側の処理義務は消えません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit08-033",
    "number": 33,
    "title": "catchの順序",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            Integer.parseInt(\"A\");\n        } catch (RuntimeException e) {\n            System.out.println(\"R\");\n        } catch (NumberFormatException e) {\n            System.out.println(\"N\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "R"
      },
      {
        "key": "B",
        "text": "N"
      },
      {
        "key": "C",
        "text": "R N"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`NumberFormatException`は`RuntimeException`のサブクラスです。先に親型でcatchしているため、後続のcatchは到達不能になりコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`NumberFormatException`は`RuntimeException`のサブクラスです。先に親型でcatchしているため、後続のcatchは到達不能になりコンパイルエラーです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：catchは特定の例外型から一般的な例外型へ並べます。",
        "試験での注意：非チェック例外でもcatch順序による到達不能はコンパイルエラーになります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit08-034",
    "number": 34,
    "title": "finallyとreturn",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static int test() {\n        try {\n            return 1;\n        } finally {\n            return 2;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(test());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`try`のreturn後でもfinallyは実行されます。finally側にもreturnがあるため、最終的な戻り値は2になります。",
      "points": [
        "正解：B：2",
        "正解になる理由：`try`のreturn後でもfinallyは実行されます。finally側にもreturnがあるため、最終的な戻り値は2になります。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：finallyは原則としてtry/catchの終了時に実行されます。",
        "試験での注意：finallyでreturnすると、try側のreturnや例外を覆い隠すことがあります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "exception",
      "finally",
      "output"
    ]
  },
  {
    "id": "unit08-035",
    "number": 35,
    "title": "try-with-resourcesのclose順",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class R implements AutoCloseable {\n    private String name;\n    R(String name) { this.name = name; }\n    public void close() { System.out.print(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (R a = new R(\"A\"); R b = new R(\"B\")) {\n            System.out.print(\"T\");\n        } finally {\n            System.out.print(\"F\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "TABF"
      },
      {
        "key": "B",
        "text": "TBAF"
      },
      {
        "key": "C",
        "text": "TFBA"
      },
      {
        "key": "D",
        "text": "ABTF"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。tryブロックで`T`を出力した後、リソースは作成と逆順に`B`、`A`の順でcloseされます。その後finallyで`F`です。",
      "points": [
        "正解：B：TBAF",
        "正解になる理由：tryブロックで`T`を出力した後、リソースは作成と逆順に`B`、`A`の順でcloseされます。その後finallyで`F`です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：try-with-resourcesはリソースのcloseを自動で呼びます。",
        "試験での注意：finallyより先にリソースのcloseが実行される点を押さえてください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "exception",
      "resource",
      "output"
    ]
  },
  {
    "id": "unit08-036",
    "number": 36,
    "title": "実行時例外とfinally",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            String s = null;\n            System.out.print(s.length());\n        } finally {\n            System.out.print(\"F\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "Fのみ表示され正常終了"
      },
      {
        "key": "B",
        "text": "0F"
      },
      {
        "key": "C",
        "text": "Fが表示された後に例外"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "何も表示されず例外"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。`s.length()`でNullPointerExceptionが発生しますが、finallyは実行されるため`F`が出力された後、例外が呼び出し元へ伝播します。",
      "points": [
        "正解：C：Fが表示された後に例外",
        "正解になる理由：`s.length()`でNullPointerExceptionが発生しますが、finallyは実行されるため`F`が出力された後、例外が呼び出し元へ伝播します。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：finallyは例外発生時にも実行されます。",
        "試験での注意：catchがない場合、finally実行後に例外が消えるわけではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "exception",
      "runtime",
      "finally"
    ]
  },
  {
    "id": "unit08-037",
    "number": 37,
    "title": "コマンドライン引数の引用符",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムを `java Main \"A B\" C` で実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(args.length + \":\" + args[0] + \":\" + args[1]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "2:A B:C"
      },
      {
        "key": "B",
        "text": "3:A:B:C"
      },
      {
        "key": "C",
        "text": "2:A:B"
      },
      {
        "key": "D",
        "text": "1:A B C"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。引用符で囲まれた`A B`は1つの引数として渡されます。引数は`A B`と`C`の2個です。",
      "points": [
        "正解：A：2:A B:C",
        "正解になる理由：引用符で囲まれた`A B`は1つの引数として渡されます。引数は`A B`と`C`の2個です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：コマンドライン引数の分割はシェルの解釈に依存しますが、引用符で空白を含む1引数にできます。",
        "試験での注意：空白があるから必ず複数引数になるとは限りません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "args",
      "output"
    ]
  },
  {
    "id": "unit08-038",
    "number": 38,
    "title": "importのワイルドカード",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のファイル構成でMainをコンパイルするとどうなるか選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// file: p1/A.java\npackage p1;\npublic class A {}\n\n// file: p1/p2/B.java\npackage p1.p2;\npublic class B {}\n\n// file: Main.java\nimport p1.*;\npublic class Main {\n    A a = new A();\n    B b = new B();\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正常にコンパイルできる"
      },
      {
        "key": "B",
        "text": "Aだけ使えるがBでコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Bだけ使えるがAでコンパイルエラー"
      },
      {
        "key": "D",
        "text": "import p1.*;が構文エラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`import p1.*;`は`p1`パッケージ直下の型だけをインポートします。サブパッケージ`p1.p2`内の`B`はインポートされません。",
      "points": [
        "正解：B：Aだけ使えるがBでコンパイルエラー",
        "正解になる理由：`import p1.*;`は`p1`パッケージ直下の型だけをインポートします。サブパッケージ`p1.p2`内の`B`はインポートされません。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：パッケージ階層とディレクトリ階層は似ていますが、ワイルドカードimportは再帰的ではありません。",
        "試験での注意：`p1.*`で`p1.p2.*`まで含まれると考えるのは誤りです。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "package",
      "import",
      "compile"
    ]
  },
  {
    "id": "unit08-039",
    "number": 39,
    "title": "varを使える場所",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のうちコンパイルできる宣言を選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立したコード片として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "class A { var x = 10; }"
      },
      {
        "key": "B",
        "text": "void m(var x) { }"
      },
      {
        "key": "C",
        "text": "var x = null;"
      },
      {
        "key": "D",
        "text": "for (var s : new String[]{\"A\"}) { }"
      },
      {
        "key": "E",
        "text": "record R(var x) { }"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`var`はローカル変数宣言で使用できます。拡張for文のローカル変数にも使用可能です。",
      "points": [
        "正解：D：for (var s : new String[]{\"A\"}) { }",
        "正解になる理由：`var`はローカル変数宣言で使用できます。拡張for文のローカル変数にも使用可能です。",
        "誤答選択肢が誤りである理由：フィールド、メソッド引数、recordコンポーネントには使えません。`var x = null;`は型推論できません。",
        "関連知識：varは型推論であり、動的型ではありません。",
        "試験での注意：varを使える場所はローカル変数に限定されます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "var",
      "compile"
    ]
  },
  {
    "id": "unit08-040",
    "number": 40,
    "title": "recordのコンストラクタ",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のrecordでコンパイルできるものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立したrecord宣言として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "record A(String name) { A { if (name == null) name = \"\"; } }"
      },
      {
        "key": "B",
        "text": "record B(String name) { B() { name = \"\"; } }"
      },
      {
        "key": "C",
        "text": "record C(String name) { C() { this.name = \"\"; } }"
      },
      {
        "key": "D",
        "text": "record D(String name) { D(String name) { } }"
      },
      {
        "key": "E",
        "text": "record E(var name) { }"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。compact constructorではコンポーネント名の引数を検証・再代入でき、最終的にフィールドへ代入されます。",
      "points": [
        "正解：A：record A(String name) { A { if (name == null) name = \"\"; } }",
        "正解になる理由：compact constructorではコンポーネント名の引数を検証・再代入でき、最終的にフィールドへ代入されます。",
        "誤答選択肢が誤りである理由：BとCは追加コンストラクタで標準コンストラクタへ委譲していません。Dは正規コンストラクタでフィールド初期化が不足します。Eはrecordコンポーネントにvarを使えません。",
        "関連知識：recordの追加コンストラクタは必ず他のコンストラクタへ委譲する必要があります。",
        "試験での注意：compact constructorと通常の正規コンストラクタを混同しないでください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "record",
      "constructor",
      "compile"
    ]
  },
  {
    "id": "unit08-041",
    "number": 41,
    "title": "配列の共変性と実行時例外",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String[] s = new String[2];\n        Object[] o = s;\n        o[0] = \"A\";\n        o[1] = Integer.valueOf(10);\n        System.out.println(s[0]);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。配列は共変なので`Object[] o = s;`はコンパイル可能です。しかし実体はString配列なので、Integerを格納しようとするとArrayStoreExceptionです。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：配列は共変なので`Object[] o = s;`はコンパイル可能です。しかし実体はString配列なので、Integerを格納しようとするとArrayStoreExceptionです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：配列は実行時にも要素型を保持します。",
        "試験での注意：コンパイルできても配列の実体型に反する格納は実行時例外になります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "runtime",
      "reference"
    ]
  },
  {
    "id": "unit08-042",
    "number": 42,
    "title": "拡張for文中の構造変更",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        var list = new ArrayList<String>(List.of(\"A\", \"B\", \"C\"));\n        for (String s : list) {\n            if (s.equals(\"B\")) {\n                list.remove(s);\n            }\n        }\n        System.out.println(list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "[A, C]"
      },
      {
        "key": "B",
        "text": "[A, B, C]"
      },
      {
        "key": "C",
        "text": "[A]"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。拡張for文はIteratorを使います。ループ中にリストを直接構造変更するとConcurrentModificationExceptionが発生する可能性が高いです。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：拡張for文はIteratorを使います。ループ中にリストを直接構造変更するとConcurrentModificationExceptionが発生する可能性が高いです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：Iteratorのremoveを使うか、別リストに集めて後から削除します。",
        "試験での注意：removeできるかどうかはコンパイルではなく実行時の問題です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "ArrayList",
      "loop",
      "runtime"
    ]
  },
  {
    "id": "unit08-043",
    "number": 43,
    "title": "interface定数",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface Config {\n    int SIZE = 10;\n}\npublic class Main implements Config {\n    public static void main(String[] args) {\n        SIZE++;\n        System.out.println(SIZE);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。インタフェースのフィールドは暗黙に`public static final`です。`SIZE++`で変更しようとしているためコンパイルエラーです。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：インタフェースのフィールドは暗黙に`public static final`です。`SIZE++`で変更しようとしているためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：interfaceの定数は実装クラスから参照できても変更できません。",
        "試験での注意：finalが明記されていなくてもfinalです。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "interface",
      "compile"
    ]
  },
  {
    "id": "unit08-044",
    "number": 44,
    "title": "charの演算と文字列連結",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        char a = 'A';\n        char b = 1;\n        System.out.println(a + b + \"=\" + a + b);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "66=A1"
      },
      {
        "key": "B",
        "text": "66=AB"
      },
      {
        "key": "C",
        "text": "A1=A1"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。最初の`a + b`は数値加算で、`A`の文字コード65と1で66です。文字列`\"=\"`以降は文字列連結になるため`A`と制御文字ではなく`b`のchar値が連結されます。",
      "points": [
        "正解：A：66=A1",
        "正解になる理由：最初の`a + b`は数値加算で、`A`の文字コード65と1で66です。文字列`\"=\"`以降は文字列連結になるため`A`と制御文字ではなく`b`のchar値が連結されます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：charは数値型でもあり、算術演算ではintへ昇格します。",
        "試験での注意：文字列が現れる前と後で`+`の意味が変わります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "char",
      "operator",
      "output"
    ]
  },
  {
    "id": "unit08-045",
    "number": 45,
    "title": "到達不能コード",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        while (true) {\n            break;\n            System.out.println(\"A\");\n        }\n        System.out.println(\"B\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A B"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "何も表示されない"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。`break`の直後にある`System.out.println(\"A\")`は到達不能コードです。Javaでは到達不能文はコンパイルエラーになります。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：`break`の直後にある`System.out.println(\"A\")`は到達不能コードです。Javaでは到達不能文はコンパイルエラーになります。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：無限ループ自体が常にエラーではありませんが、到達不能な文はエラーです。",
        "試験での注意：実行されないだけ、では済まないコードがあります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "control",
      "compile"
    ]
  },
  {
    "id": "unit08-046",
    "number": 46,
    "title": "メソッド戻り値とreturn",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のうちメソッド定義として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立したメソッド定義として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "public void a() { return 1; }"
      },
      {
        "key": "B",
        "text": "public int b() { return; }"
      },
      {
        "key": "C",
        "text": "public String c() { return null; }"
      },
      {
        "key": "D",
        "text": "public char d() { return \"A\"; }"
      },
      {
        "key": "E",
        "text": "public boolean e(int x) { if (x > 0) return true; }"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。参照型の戻り値として`null`を返すことはできます。",
      "points": [
        "正解：C：public String c() { return null; }",
        "正解になる理由：参照型の戻り値として`null`を返すことはできます。",
        "誤答選択肢が誤りである理由：voidは値を返せません。intメソッドは値なしreturnでは不足です。charにStringは返せません。booleanメソッドは戻らない経路があります。",
        "関連知識：戻り値型と全経路でのreturn有無を確認します。",
        "試験での注意：if文がある場合、すべての分岐で戻るかを見ます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "method",
      "compile"
    ]
  },
  {
    "id": "unit08-047",
    "number": 47,
    "title": "ラムダではなく匿名クラスに見えるコード",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "interface Calc {\n    int apply(int x);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calc c = x -> { x + 1; };\n        System.out.println(c.apply(1));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": {
      "summary": "正解はDです。ブロック形式のラムダで値を返す場合は`return x + 1;`が必要です。`x + 1;`だけでは文としても不正です。",
      "points": [
        "正解：D：コンパイルエラー",
        "正解になる理由：ブロック形式のラムダで値を返す場合は`return x + 1;`が必要です。`x + 1;`だけでは文としても不正です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：式ラムダなら`x -> x + 1`、ブロックラムダなら`x -> { return x + 1; }`です。",
        "試験での注意：ブロック内では戻り値が必要な関数型インタフェースに合わせてreturnを書きます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "lambda",
      "compile"
    ]
  },
  {
    "id": "unit08-048",
    "number": 48,
    "title": "Arrays.equalsと配列のequals",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2};\n        int[] b = {1, 2};\n        System.out.println(a.equals(b) + \":\" + Arrays.equals(a, b));\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true:true"
      },
      {
        "key": "B",
        "text": "false:true"
      },
      {
        "key": "C",
        "text": "false:false"
      },
      {
        "key": "D",
        "text": "true:false"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。配列の`equals`はObject由来で参照比較です。`Arrays.equals`は要素を比較するためtrueです。",
      "points": [
        "正解：B：false:true",
        "正解になる理由：配列の`equals`はObject由来で参照比較です。`Arrays.equals`は要素を比較するためtrueです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：配列内容の比較には`Arrays.equals`や多次元なら`Arrays.deepEquals`を使います。",
        "試験での注意：見た目が同じ配列でも`a.equals(b)`は内容比較ではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "equals"
    ]
  },
  {
    "id": "unit08-049",
    "number": 49,
    "title": "nullに対するinstanceof",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        Object obj = null;\n        if (obj instanceof String s) {\n            System.out.println(s.length());\n        } else {\n            System.out.println(\"NG\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "NG"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。`null instanceof String`はfalseです。パターン変数`s`のブロックには入らず、else側で`NG`が表示されます。",
      "points": [
        "正解：B：NG",
        "正解になる理由：`null instanceof String`はfalseです。パターン変数`s`のブロックには入らず、else側で`NG`が表示されます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：instanceofはnullに対してfalseを返します。",
        "試験での注意：nullだから即NullPointerExceptionではありません。メソッド呼び出しをしているかを確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "instanceof",
      "null",
      "output"
    ]
  },
  {
    "id": "unit08-050",
    "number": 50,
    "title": "パターン変数のスコープ",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    static void test(Object obj) {\n        if (!(obj instanceof String s)) {\n            return;\n        }\n        System.out.println(s.toLowerCase());\n    }\n    public static void main(String[] args) {\n        test(\"A\");\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "a"
      },
      {
        "key": "B",
        "text": "A"
      },
      {
        "key": "C",
        "text": "何も表示されない"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。条件がfalseの場合だけreturnせずに後続へ進みます。つまり後続の位置では`obj`がStringであることが保証され、`s`を使えます。",
      "points": [
        "正解：A：a",
        "正解になる理由：条件がfalseの場合だけreturnせずに後続へ進みます。つまり後続の位置では`obj`がStringであることが保証され、`s`を使えます。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：パターン変数はフロー解析により使える範囲が決まります。",
        "試験での注意：否定条件でも、returnやthrowにより後続で使える場合があります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "instanceof",
      "scope",
      "output"
    ]
  },
  {
    "id": "unit08-051",
    "number": 51,
    "title": "superによるメソッド呼び出し",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    String text() { return \"A\"; }\n}\nclass B extends A {\n    String text() { return \"B\" + super.text(); }\n}\nclass C extends B {\n    String text() { return \"C\" + super.text(); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new C();\n        System.out.println(a.text());\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "BA"
      },
      {
        "key": "C",
        "text": "CBA"
      },
      {
        "key": "D",
        "text": "CA"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": {
      "summary": "正解はCです。呼び出しは実体`C`の`text`から始まり、`super.text()`でB、さらにBの`super.text()`でAを呼ぶため`CBA`です。",
      "points": [
        "正解：C：CBA",
        "正解になる理由：呼び出しは実体`C`の`text`から始まり、`super.text()`でB、さらにBの`super.text()`でAを呼ぶため`CBA`です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：メソッドは実行時型でオーバーライド解決されます。",
        "試験での注意：参照型がAでも、実体がCならCのメソッドが起点になります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "inheritance",
      "super",
      "output"
    ]
  },
  {
    "id": "unit08-052",
    "number": 52,
    "title": "アクセス修飾子とオーバーライド",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    protected void run() {}\n}\nclass B extends A {\n    void run() {}\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B().run();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正常にコンパイルできる"
      },
      {
        "key": "B",
        "text": "B.runでコンパイルエラー"
      },
      {
        "key": "C",
        "text": "Mainでコンパイルエラー"
      },
      {
        "key": "D",
        "text": "実行時例外"
      },
      {
        "key": "E",
        "text": "何も表示されない"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。オーバーライドではアクセス権を弱くできません。`protected`からパッケージプライベートへ弱めているためコンパイルエラーです。",
      "points": [
        "正解：B：B.runでコンパイルエラー",
        "正解になる理由：オーバーライドではアクセス権を弱くできません。`protected`からパッケージプライベートへ弱めているためコンパイルエラーです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：戻り値型やthrowsだけでなく、アクセス修飾子もオーバーライド条件です。",
        "試験での注意：private以外の継承されたメソッドを同じシグネチャで定義するとオーバーライド判定になります。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "override",
      "access",
      "compile"
    ]
  },
  {
    "id": "unit08-053",
    "number": 53,
    "title": "throws句とオーバーライド",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイルした結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.io.*;\nclass A {\n    void read() throws IOException {}\n}\nclass B extends A {\n    void read() throws Exception {}\n}\npublic class Main {}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "正常にコンパイルできる"
      },
      {
        "key": "B",
        "text": "B.readでコンパイルエラー"
      },
      {
        "key": "C",
        "text": "A.readでコンパイルエラー"
      },
      {
        "key": "D",
        "text": "Mainでコンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。オーバーライドするメソッドは、親メソッドより広いチェック例外をthrowsに追加できません。`Exception`は`IOException`より広いため不可です。",
      "points": [
        "正解：B：B.readでコンパイルエラー",
        "正解になる理由：オーバーライドするメソッドは、親メソッドより広いチェック例外をthrowsに追加できません。`Exception`は`IOException`より広いため不可です。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：非チェック例外はこの制約を受けません。",
        "試験での注意：throws句は戻り値型の共変とは逆に、広げる方向が禁止されます。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "override",
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit08-054",
    "number": 54,
    "title": "staticメソッドは隠蔽",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "class A {\n    static void test() { System.out.print(\"A\"); }\n    void call() { test(); }\n}\nclass B extends A {\n    static void test() { System.out.print(\"B\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        A a = new B();\n        a.test();\n        a.call();\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "AA"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "BA"
      },
      {
        "key": "D",
        "text": "BB"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。staticメソッドはオーバーライドされず、参照型や定義場所で解決されます。`a.test()`はA、`A.call()`内の`test()`もAのstaticメソッドです。",
      "points": [
        "正解：A：AA",
        "正解になる理由：staticメソッドはオーバーライドされず、参照型や定義場所で解決されます。`a.test()`はA、`A.call()`内の`test()`もAのstaticメソッドです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：staticメソッドは隠蔽であり、動的ディスパッチではありません。",
        "試験での注意：インスタンス経由でstaticメソッドを呼べても、実体型で解決されるわけではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "static",
      "inheritance",
      "output"
    ]
  },
  {
    "id": "unit08-055",
    "number": 55,
    "title": "switchにnull",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        switch (s) {\n            case \"A\": System.out.println(\"A\"); break;\n            default: System.out.println(\"D\");\n        }\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "D"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "E"
    ],
    "explanation": {
      "summary": "正解はEです。switch式/文の対象がnullの場合、case比較の前にNullPointerExceptionが発生します。defaultへ進むわけではありません。",
      "points": [
        "正解：E：実行時例外",
        "正解になる理由：switch式/文の対象がnullの場合、case比較の前にNullPointerExceptionが発生します。defaultへ進むわけではありません。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：Stringをswitchに使うこと自体は可能です。",
        "試験での注意：defaultは「どのcaseにも一致しない値」であり、null安全ではありません。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "switch",
      "null",
      "runtime"
    ]
  },
  {
    "id": "unit08-056",
    "number": 56,
    "title": "テキストブロックの改行",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"\"\"\n                A\n                B\n                \"\"\";\n        System.out.println(s.length() > 0);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "コンパイルエラー"
      },
      {
        "key": "E",
        "text": "実行時例外"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": {
      "summary": "正解はAです。テキストブロックは文字列リテラルです。内容が空ではないため`length() > 0`はtrueです。",
      "points": [
        "正解：A：true",
        "正解になる理由：テキストブロックは文字列リテラルです。内容が空ではないため`length() > 0`はtrueです。",
        "誤答選択肢が誤りである理由：出力候補だけを追う前に、型、アクセス修飾子、初期化、例外条件を確認する必要があります。誤答はそのいずれかを見落としています。",
        "関連知識：テキストブロックには改行やインデント調整が関係します。",
        "試験での注意：出力文字列そのものを問う問題では、先頭/末尾改行も確認が必要です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "String",
      "textblock",
      "output"
    ]
  },
  {
    "id": "unit08-057",
    "number": 57,
    "title": "複数選択：コンパイルエラーになる文",
    "type": "multiple",
    "selectCount": 2,
    "difficulty": "hard",
    "prompt": "次のうちコンパイルエラーになる文を選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立した文として考える。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "int[] a = {1, 2, 3};"
      },
      {
        "key": "B",
        "text": "var b = new int[]{1, 2};"
      },
      {
        "key": "C",
        "text": "var c = {1, 2};"
      },
      {
        "key": "D",
        "text": "int d[] = new int[2];"
      },
      {
        "key": "E",
        "text": "int e[2];"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": {
      "summary": "正解はC,Eです。配列初期化子だけを`var`に代入することはできません。またJavaでは変数宣言側に配列長を書けません。",
      "points": [
        "正解：C：var c = {1, 2};、E：int e[2];",
        "正解になる理由：配列初期化子だけを`var`に代入することはできません。またJavaでは変数宣言側に配列長を書けません。",
        "誤答選択肢が誤りである理由：A、B、Dは有効な配列宣言です。",
        "関連知識：配列長は`new int[2]`のように生成式側に書きます。",
        "試験での注意：C言語風の`int e[2]`はJavaでは不可です。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "array",
      "var",
      "compile"
    ]
  },
  {
    "id": "unit08-058",
    "number": 58,
    "title": "複数選択：実行時例外になるコード",
    "type": "multiple",
    "selectCount": 4,
    "difficulty": "hard",
    "prompt": "次のうちコンパイルはできるが実行時例外になるものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれ独立してmain内で実行するコード片とする。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "String s = null; s.length();"
      },
      {
        "key": "B",
        "text": "int[] a = new int[1]; System.out.println(a[1]);"
      },
      {
        "key": "C",
        "text": "int x = 10 / 0;"
      },
      {
        "key": "D",
        "text": "Object o = \"A\"; Integer i = (Integer) o;"
      },
      {
        "key": "E",
        "text": "short s = 1; s = s + 1;"
      }
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": {
      "summary": "正解はA,B,C,Dです。AはNullPointerException、BはArrayIndexOutOfBoundsException、CはArithmeticException、DはClassCastExceptionです。",
      "points": [
        "正解：A：String s = null; s.length();、B：int[] a = new int[1]; System.out.println(a[1]);、C：int x = 10 / 0;、D：Object o = \"A\"; Integer i = (Integer) o;",
        "正解になる理由：AはNullPointerException、BはArrayIndexOutOfBoundsException、CはArithmeticException、DはClassCastExceptionです。",
        "誤答選択肢が誤りである理由：Eは`short + int`がintになり、shortへ暗黙代入できないためコンパイルエラーです。",
        "関連知識：コンパイルエラーと実行時例外を区別することが重要です。",
        "試験での注意：「例外」と聞いても、そもそもコンパイルできるかを確認してください。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "runtime",
      "exception",
      "compile"
    ]
  },
  {
    "id": "unit08-059",
    "number": 59,
    "title": "複数選択：正しいmainメソッド",
    "type": "multiple",
    "selectCount": 3,
    "difficulty": "hard",
    "prompt": "アプリケーションの起動点として有効なmainメソッドを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "// それぞれpublic class Main内に1つだけ定義されているものとする。"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "public static void main(String[] args) {}"
      },
      {
        "key": "B",
        "text": "public static void main(String... args) {}"
      },
      {
        "key": "C",
        "text": "static public void main(String args[]) {}"
      },
      {
        "key": "D",
        "text": "public void main(String[] args) {}"
      },
      {
        "key": "E",
        "text": "public static int main(String[] args) { return 0; }"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": {
      "summary": "正解はA,B,Cです。mainメソッドは`public static void`で、引数は`String[]`または`String...`が有効です。修飾子の順序や`String args[]`表記は問題ありません。",
      "points": [
        "正解：A：public static void main(String[] args) {}、B：public static void main(String... args) {}、C：static public void main(String args[]) {}",
        "正解になる理由：mainメソッドは`public static void`で、引数は`String[]`または`String...`が有効です。修飾子の順序や`String args[]`表記は問題ありません。",
        "誤答選択肢が誤りである理由：Dはstaticでなく、Eは戻り値がvoidではありません。",
        "関連知識：`String[] args`、`String args[]`、`String... args`はいずれも配列引数として扱えます。",
        "試験での注意：スペル、大文字小文字、戻り値、staticの有無を確認します。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "main",
      "compile"
    ]
  },
  {
    "id": "unit08-060",
    "number": 60,
    "title": "総合：出力かコンパイルエラーか",
    "type": "single",
    "selectCount": 1,
    "difficulty": "hard",
    "prompt": "次のプログラムをコンパイル、実行した結果として正しいものを選びなさい。",
    "codeBlocks": [
      {
        "title": "コード",
        "code": "import java.util.*;\nclass Item {\n    String name;\n    Item(String name) { this.name = name; }\n    public String toString() { return name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        List<Item> list = new ArrayList<>();\n        list.add(new Item(\"A\"));\n        list.add(new Item(\"B\"));\n        Item first = list.get(0);\n        list.set(0, list.get(1));\n        list.get(0).name = \"C\";\n        System.out.println(first + \":\" + list);\n    }\n}"
      }
    ],
    "options": [
      {
        "key": "A",
        "text": "A:[C, B]"
      },
      {
        "key": "B",
        "text": "A:[C, C]"
      },
      {
        "key": "C",
        "text": "C:[C, B]"
      },
      {
        "key": "D",
        "text": "A:[B, C]"
      },
      {
        "key": "E",
        "text": "コンパイルエラー"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": {
      "summary": "正解はBです。firstはAのオブジェクトを参照し続け、リスト内の2つの要素は同じB由来のオブジェクトを参照するため、名前変更後は両方Cになります。",
      "points": [
        "正解：B：A:[C, C]",
        "正解になる理由：`first`は最初のItem(\"A\")を参照しています。`list.set(0, list.get(1))`によりリストの0番目と1番目は同じItem(\"B\")を参照します。その後`list.get(0).name = \"C\"`でその共有オブジェクトのnameがCになり、リスト表示は`[C, C]`です。",
        "誤答選択肢が誤りである理由：Aはリストの2要素が同じオブジェクトを参照している点を見落としています。Cはfirstの参照先まで変わると誤解しています。Dはset後の参照共有を追えていません。Eは型・メソッド呼び出しともにコンパイル可能です。",
        "関連知識：リストはオブジェクトそのものではなく参照を保持します。",
        "試験での注意：参照を差し替えたのか、参照先オブジェクトのフィールドを変更したのかを区別します。"
      ]
    },
    "source": "AI_ORIGINAL_EXAM_LIKE_DENSE",
    "tags": [
      "ArrayList",
      "reference",
      "output"
    ]
  }
];
